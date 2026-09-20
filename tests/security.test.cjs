const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
require.extensions['.ts']=(mod,file)=>mod._compile(ts.transpileModule(fs.readFileSync(file,'utf8').replace(/(["'])@\//g, '$1' + require('node:path').resolve(__dirname, '..').replaceAll('\\', '/') + '/'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true,target:ts.ScriptTarget.ES2020}}).outputText,file);
const {readJson,rateLimit,clientAddress}=require('../lib/request-security.ts');
const request=(body='{}',headers={})=>new Request('http://localhost/api/test',{method:'POST',headers:{Origin:'http://localhost','Content-Type':'application/json',...headers},body});
test('same-origin JSON works; foreign, absent origins and non-JSON fail',async()=>{
 assert.deepEqual(await readJson(request()),{});
 assert.deepEqual(await readJson(new Request('http://0.0.0.0:3000/api/test',{method:'POST',headers:{Origin:'http://localhost:3000','Content-Type':'application/json'},body:'{}'})),{});
 for(const headers of [{Origin:'https://evil.invalid'},{Origin:''},{'Sec-Fetch-Site':'cross-site'}]) await assert.rejects(readJson(request('{}',headers)),{status:403});
 await assert.rejects(readJson(request('{}',{'Content-Type':'text/plain'})),{status:415});
});
test('malformed, array and oversized bodies are rejected without Content-Length',async()=>{
 for(const body of ['null','[]','{broken']) await assert.rejects(readJson(request(body)),{status:400});
 await assert.rejects(readJson(request(JSON.stringify({x:'x'.repeat(1000)})),100),{status:413});
});
test('untrusted forwarded IP cannot bypass throttling',()=>{
 delete process.env.TRUSTED_PROXY_IP_HEADER; delete process.env.VERCEL;
 const r=request('{}',{'x-forwarded-for':'1.2.3.4'});
 assert.equal(clientAddress(r),'shared');
 rateLimit(r,'test',2,10000); rateLimit(r,'test',2,10000);
 assert.throws(()=>rateLimit(request('{}',{'x-forwarded-for':'5.6.7.8'}),'test',2,10000),{status:429});
});
test('only explicitly configured proxy header is accepted',()=>{
 process.env.TRUSTED_PROXY_IP_HEADER='x-real-ip';
 assert.equal(clientAddress(request('{}',{'x-real-ip':'1.2.3.4'})),'1.2.3.4');
 assert.equal(clientAddress(request('{}',{'x-real-ip':'invalid'})),'shared');
 delete process.env.TRUSTED_PROXY_IP_HEADER;
});
test('sessions reject malformed tokens and are invalidated by credential changes',()=>{
 const Module=require('node:module'),original=Module._load;
 Module._load=function(name,...args){if(name==='next/headers')return {cookies:async()=>({get:()=>undefined})};return original.call(this,name,...args)};
 const auth=require('../lib/admin-auth.ts'); Module._load=original;
 process.env.ADMIN_USERNAME='test-admin'; process.env.ADMIN_PASSWORD='a-test-password-only'; process.env.ADMIN_SESSION_SECRET='test-only-secret-not-used-by-the-site';
 const token=auth.createAdminSession().value;
 assert.equal(auth.verifyAdminSession(token),true);
 for(const bad of [token+'.extra',token.replace(/^\d+/, 'NaN'),token.slice(0,-1),undefined]) assert.equal(auth.verifyAdminSession(bad),false);
 assert.equal(auth.verifyCredentials('test-admin','wrong'),false);
 process.env.ADMIN_PASSWORD='changed-test-password';assert.equal(auth.verifyAdminSession(token),false);
 delete process.env.ADMIN_PASSWORD;assert.equal(auth.verifyCredentials('adminarea','Admin_@rea1'),false);
 delete process.env.ADMIN_SESSION_SECRET;assert.equal(auth.verifyAdminSession(token),false);
});

const {verifyFormProtection}=require('../lib/form-protection.ts');
test('honeypots rejected; missing production keys fail closed',async()=>{
 await assert.rejects(verifyFormProtection({website_hp:'bot'},'enquiry'),{status:400});
 process.env.NODE_ENV='production';delete process.env.RECAPTCHA_SECRET_KEY;delete process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
 await assert.rejects(verifyFormProtection({},'enquiry'),{status:503});
 process.env.NODE_ENV='test';
});
test('captcha validates score, action, hostname, expiry, replay and network failures',async()=>{
 process.env.RECAPTCHA_SECRET_KEY='test-secret';process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY='test-site';process.env.NEXT_PUBLIC_SITE_URL='https://storyboundhouse.com';
 const original=global.fetch;
 const good={success:true,score:0.5,action:'enquiry',hostname:'storyboundhouse.com',challenge_ts:new Date().toISOString()};
 try {
  global.fetch=async()=>Response.json(good);
  await verifyFormProtection({recaptchaToken:'test-token'},'enquiry');
  for(const override of [{score:.49},{action:'admin_login'},{hostname:'evil.invalid'},{success:false},{challenge_ts:'bad'},{challenge_ts:new Date(Date.now()-180000).toISOString()}]){
   global.fetch=async()=>Response.json({...good,...override});
   await assert.rejects(verifyFormProtection({recaptchaToken:'test-token'},'enquiry'),{status:403});
  }
  global.fetch=async()=>{throw new Error('network')};
  await assert.rejects(verifyFormProtection({recaptchaToken:'test-token'},'enquiry'),{status:503});
 }finally{global.fetch=original;delete process.env.RECAPTCHA_SECRET_KEY;delete process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;delete process.env.NEXT_PUBLIC_SITE_URL;}
});
test('fourth submission is rejected; another trusted IP has its own limit',()=>{
 process.env.TRUSTED_PROXY_IP_HEADER='x-real-ip';
 const r=request('{}',{'x-real-ip':'192.0.2.1'});
 for(let i=0;i<3;i++)rateLimit(r,'three-requests',3,600000);
 assert.throws(()=>rateLimit(r,'three-requests',3,600000),{status:429});
 rateLimit(request('{}',{'x-real-ip':'192.0.2.2'}),'three-requests',3,600000);
 delete process.env.TRUSTED_PROXY_IP_HEADER;
});
