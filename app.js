// CloudLinux/cPanel Passenger loads this file as the Node.js application entry point.
// Build the Next.js app first with `npm run build`, then run in Production mode.
const { createServer } = require("node:http");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false, dir: __dirname, hostname: "0.0.0.0", port });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    createServer((request, response) => handle(request, response)).listen(port, "0.0.0.0");
  })
  .catch((error) => {
    console.error("Unable to start Storybound House.", error);
    process.exitCode = 1;
  });
