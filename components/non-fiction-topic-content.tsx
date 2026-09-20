import { NonFictionBooks } from "@/components/non-fiction-books";

type TopicSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

type TopicContent = {
  title: string;
  intro: string[];
  sections?: TopicSection[];
  faqs?: { question: string; answer: string }[];
};

const topicContent: Record<string, TopicContent> = {
  "self-help-growth": {
    title: "Self-Help Ghostwriting Services: Turning Expertise into Transformation",
    intro: [
      "Today’s readers want actionable advice, proven strategies, and inspiration they can use to improve their lives. Our self-help and personal development writers turn coaching frameworks, lived experience, and expert knowledge into clear, motivating books with lasting value.",
      "We shape your ideas into an authentic, structured manuscript that keeps your voice at the center while guiding readers toward meaningful change.",
    ],
    sections: [
      { heading: "The Storybound House Advantage: Authority and Structure", paragraphs: ["A strong self-help book needs more than encouragement. We organize your methodology into a practical system, support it with credible evidence, and give every chapter a clear purpose."], points: ["Methodology mapping that defines your system and reader journey", "An authoritative, empathetic voice that makes complex ideas accessible", "Actionable exercises, checklists, stories, and takeaways"] },
      { heading: "The Process: Motivational Book Ghostwriting Agency Methodology", paragraphs: ["We begin with interviews and source review, build a detailed blueprint, draft in collaborative stages, and refine every chapter for clarity, accuracy, and momentum. The final manuscript receives professional editing and an actionability review."], points: ["Knowledge extraction and system blueprint", "Narrative and authority integration", "Drafting, testing, refinement, and final polish"] },
      { heading: "Partnering with the Best: Cost to Develop a Self-Help Book", paragraphs: ["Scope, research, manuscript length, and the level of developmental support determine the investment. We provide a transparent proposal tailored to the project and you retain full ownership of the finished manuscript."] },
      { heading: "Built for Coaches, Experts, and Purpose-Driven Brands", paragraphs: ["A well-crafted book can become the foundation for speaking engagements, coaching programs, workshops, courses, and long-term thought leadership. We develop the manuscript with your wider platform in mind so its ideas can work beyond the page."], points: ["Coaches and consultants building authority", "Founders and leaders documenting a proven framework", "Wellness and personal-development experts growing an audience"] },
      { heading: "From Expertise to Measurable Reader Results", paragraphs: ["Readers stay engaged when insight leads to action. We design a clear transformation path with reflection prompts, exercises, progress markers, and practical next steps that help readers apply your method and recognize meaningful results."] },
    ],
    faqs: [
      { question: "What does a self-help writing specialist do?", answer: "We turn your expertise, framework, stories, and lessons into a structured manuscript that educates and motivates readers while preserving your natural voice." },
      { question: "How much does it cost to develop a self-help book?", answer: "Pricing depends on word count, research, interviews, developmental work, and the number of review rounds. After a discovery call, we provide a fixed proposal based on the agreed scope." },
      { question: "How long does a self-help book usually take?", answer: "Most full-length projects take roughly three to six months. A focused ebook or shorter guide may take less time, while research-heavy books can require a longer schedule." },
      { question: "Can you turn my coaching program or course into a book?", answer: "Yes. We can organize existing lessons, videos, worksheets, presentations, and client insights into a coherent book with a clear reader journey." },
      { question: "Will the finished manuscript still sound like me?", answer: "Yes. Interviews, source material, and review rounds help us capture your vocabulary, tone, values, and teaching style throughout the manuscript." },
      { question: "Do I retain the rights to my self-help book?", answer: "Yes. Once the project is completed according to the agreement, you retain ownership of the final manuscript and control how it is published and used." },
      { question: "Can Storybound House help after the writing is complete?", answer: "Yes. Depending on your project, we can support editing, book-cover development, publishing preparation, and related launch materials." },
    ],
  },
  "health-fitness-wellness": {
    title: "The Definitive Guide: Wellness Ghostwriting Services for Experts",
    intro: ["Health and wellness writing must inspire trust, communicate science clearly, and provide advice readers can apply safely. We develop authoritative books for clinicians, coaches, trainers, nutrition specialists, and wellness leaders."],
    sections: [
      { heading: "Establishing Authority: The Medical Fitness Wellness Writing Service Advantage", paragraphs: ["Our writers translate clinical, biological, and psychological concepts into accessible prose without weakening their meaning. Every claim is researched, organized, and aligned with the reader’s needs."], points: ["Evidence-led research and scientific integrity", "A specialist voice for nutrition, fitness, rehabilitation, and holistic wellness", "Personalized programs, assessments, milestones, and practical guidance"] },
      { heading: "Specialized Narratives: Mental Wellness and Memoir", paragraphs: ["Sensitive mental wellness topics require accuracy and empathy. We also help experts and individuals shape personal fitness or recovery journeys into purposeful narratives that support rather than overpromise."] },
      { heading: "The Production Pipeline: From Expert Talk to Published Text", paragraphs: ["The process covers knowledge capture, curriculum or program design, drafting, scientific review, developmental editing, and final market preparation. Collaborative checkpoints keep the manuscript aligned with your expertise."] },
      { heading: "Strategic Partnership: Wellness Book Ghostwriting Company Solutions", paragraphs: ["Projects can include wellness ebooks, course companion books, nutrition guides, fitness plans, and thought-leadership manuscripts. Pricing reflects length, complexity, research, interviews, and specialist review requirements."] },
      { heading: "Turn Your Wellness Method into a Signature Framework", paragraphs: ["A named, repeatable framework makes your expertise easier to understand, remember, and share. We help organize your assessment process, core principles, exercises, and client progression into a book readers can follow with confidence."], points: ["Clarify the promise and intended reader outcome", "Organize your method into memorable stages", "Build practical tools readers can apply safely"] },
      { heading: "A Book That Supports Your Entire Expert Platform", paragraphs: ["Your manuscript can strengthen speaking, coaching, clinical education, workshops, courses, and brand partnerships. We plan the content so the book stands on its own while supporting the services and audience relationships you already want to grow."] },
    ],
    faqs: [
      { question: "What types of health and wellness books can you develop?", answer: "We support nutrition, fitness, rehabilitation, mental wellness, lifestyle medicine, healthy-aging, sleep, stress-management, coaching, and expert-led educational books." },
      { question: "How do you verify health and scientific claims?", answer: "We review the author’s source material, identify claims that need support, use credible references, and can incorporate specialist or sensitivity review when the subject requires it." },
      { question: "Can you turn my wellness program or clinical method into a book?", answer: "Yes. We can structure assessments, protocols, exercises, case examples, and educational material into a clear reader journey while preserving the limits and context of your professional guidance." },
      { question: "How long does a health, fitness, or wellness book take?", answer: "A full-length project commonly takes five to seven months. The schedule varies with manuscript length, research depth, interviews, scientific review, and feedback turnaround." },
      { question: "Can the writing match my professional voice and credentials?", answer: "Yes. Interviews, existing articles, presentations, recorded material, and review rounds help us reflect your vocabulary, tone, philosophy, and level of technical detail." },
      { question: "Who owns the finished manuscript?", answer: "You retain ownership of the completed manuscript according to the project agreement, including control over publication, adaptation, and future use." },
      { question: "Can Storybound House help prepare the book for publication?", answer: "Yes. Optional support can include editing, cover development, formatting, publishing preparation, and related promotional content." },
    ],
  },
  "business-finance": {
    title: "Transform Your Expertise into a Market-Defining Book",
    intro: ["Your experience, framework, and leadership lessons can become a powerful business asset. We turn specialized insight into a confident, useful manuscript designed to build authority and serve a clearly defined audience."],
    sections: [
      { heading: "Why Work With a Business and Finance Book Specialist?", paragraphs: ["Business and finance writing demands fluency in markets, strategy, leadership, risk, and regulation. Our specialists communicate complex ideas with clarity while preserving the author’s professional credibility."] },
      { heading: "Dedicated Financial and Corporate Writing Solutions", paragraphs: ["We support corporate finance, business strategy, leadership, entrepreneurship, and financial literacy books. Each project receives an outline suited to its readers, from founders and executives to investors and general audiences."], points: ["Corporate finance and quantitative frameworks", "Business strategy and thought leadership", "Entrepreneurship and financial literacy"] },
      { heading: "Understanding the Investment: Cost and Value", paragraphs: ["The final investment depends on length, research intensity, interviews, specialist input, and editorial needs. A fixed project proposal defines the scope, schedule, review rounds, and deliverables before writing begins."] },
      { heading: "Our Professional Ghostwriting Process: Structured for Success", paragraphs: ["We move through strategy, interviews, iterative drafting, fact-checking, editing, and final delivery. You approve the direction and retain full manuscript ownership."] },
      { heading: "Turn Your Book into a Business Growth Asset", paragraphs: ["A strong business book can support keynote speaking, consulting, executive education, lead generation, and strategic partnerships. We connect the manuscript’s core argument to the wider platform you want to build without turning the book into a sales brochure."], points: ["Strengthen executive and founder authority", "Create a foundation for speaking and consulting", "Give prospects a clear way to understand your methodology"] },
      { heading: "Built for Decision-Makers Who Value Precision", paragraphs: ["Executives, investors, and professional readers expect useful insight without unnecessary complexity. We balance strategic depth, evidence, examples, and readable explanations so the final manuscript earns attention from the audience that matters to your goals."] },
    ],
    faqs: [
      { question: "What kinds of business and finance books do you develop?", answer: "We support leadership, entrepreneurship, corporate strategy, finance, investing, financial literacy, management, innovation, professional memoir, and expert thought-leadership books." },
      { question: "Can you turn my proprietary framework into a book?", answer: "Yes. We help define the framework, organize its stages, incorporate evidence and examples, and build a reader journey that makes the methodology practical and memorable." },
      { question: "How do you handle confidential company or financial information?", answer: "Projects can operate under a confidentiality agreement with controlled access to source material. Sensitive examples can be anonymized or adapted with your approval." },
      { question: "How long does a full-length business book take?", answer: "Most projects require several months. The schedule depends on interviews, manuscript length, research, fact-checking, review availability, and the complexity of the subject." },
      { question: "Can you write for both specialist and general audiences?", answer: "Yes. We define the reader before outlining and calibrate terminology, context, examples, and explanations to the audience’s level of knowledge." },
      { question: "Will I retain ownership of the completed manuscript?", answer: "Yes. Ownership and final approval remain with you according to the project agreement, including control over publishing and future adaptation." },
      { question: "Can Storybound House support publication and launch materials?", answer: "Yes. Optional services can include editing, cover development, formatting, publishing preparation, and supporting content for your launch or professional platform." },
    ],
  },
  politics: {
    title: "The Strategic Necessity of Professional Political Writing Services",
    intro: ["Political books shape public understanding, preserve a legacy, and present a position with authority. We help leaders, analysts, campaign professionals, and policy experts develop disciplined, credible manuscripts."],
    sections: [
      { heading: "Why Political Writing Requires Specialized Expertise", paragraphs: ["Political writing requires command of policy, institutions, public affairs, and the standards of factual verification. Our writers protect your voice while building a persuasive and coherent narrative."], points: ["Authentic voice and ideological clarity", "Rigorous research and source documentation", "Structure designed for public impact"] },
      { heading: "Targeted Political Writing Services for Every Objective", paragraphs: ["Services include political autobiography, policy books, political commentary, public-policy analysis, government-affairs writing, and speech or nonfiction development."] },
      { heading: "Investment Value: Cost to Ghostwrite a Political Nonfiction Book", paragraphs: ["Research depth, confidentiality requirements, interviews, fact-checking, and manuscript length shape the project scope. Every engagement begins with a defined schedule and fixed proposal."] },
      { heading: "The Confidential and Rigorous Ghostwriting Process", paragraphs: ["We complete strategy and outline development, discreet drafting, journalistic fact-checking, editorial polish, and final delivery under a confidentiality agreement."] },
      { heading: "Shape a Narrative That Can Withstand Public Scrutiny", paragraphs: ["Political readers, journalists, researchers, and opponents may examine every claim. We strengthen the manuscript with documented sources, disciplined framing, consistent terminology, and a clear separation between evidence, interpretation, and personal perspective."], points: ["Source-aware arguments and verifiable claims", "Clear context for policy and historical events", "A consistent voice across complex or sensitive issues"] },
      { heading: "Extend Your Ideas Beyond the Book", paragraphs: ["A carefully structured political book can support speeches, media appearances, policy briefings, campaign education, advocacy, and long-term public leadership. We develop the manuscript so its central ideas can be communicated clearly across these wider formats."] },
    ],
    faqs: [
      { question: "What types of political books can Storybound House develop?", answer: "We support political memoirs, policy books, campaign narratives, public-affairs analysis, government and leadership books, ideological commentary, and issue-focused nonfiction." },
      { question: "How do you fact-check political claims and historical references?", answer: "We identify claims that require verification, organize source material, distinguish evidence from opinion, and can maintain a reference log for quotations, dates, statistics, and policy documents." },
      { question: "Can you protect sensitive or confidential information?", answer: "Yes. Projects can operate under a confidentiality agreement with controlled access to interviews and documents. Sensitive details can be anonymized, withheld, or handled according to an agreed review process." },
      { question: "Can you capture my political voice without changing my position?", answer: "Yes. Interviews and review rounds help preserve your vocabulary, beliefs, tone, and intended argument. Our role is to clarify and structure your ideas while keeping final approval with you." },
      { question: "How long does a political nonfiction project take?", answer: "Timelines vary with manuscript length, interviews, research depth, source verification, legal or sensitivity review, and your availability for feedback. Most full-length projects require several months." },
      { question: "Who owns the completed political manuscript?", answer: "You retain ownership and final approval according to the project agreement, including control over publication and future use of the manuscript." },
      { question: "Can the book support speeches, policy briefs, or media content?", answer: "Yes. The manuscript can be planned around a clear message architecture that also supports speeches, public commentary, policy summaries, and other platform content." },
    ],
  },
  history: {
    title: "Why Meticulous Research Demands Professional History Writers",
    intro: ["Historical nonfiction must unite accurate research with a narrative readers can follow. Our history writers transform archives, interviews, and source material into engaging, responsibly documented books."],
    sections: [
      { heading: "The Uncompromising Standard of Historical Accuracy", paragraphs: ["Claims, dates, quotations, and context are checked against credible sources. We use disciplined research methods to reduce errors and separate evidence from interpretation."] },
      { heading: "Synthesizing Complexity into Compelling Narrative", paragraphs: ["We organize large bodies of material, establish a clear chronology, and develop a period-appropriate voice without sacrificing accessibility."] },
      { heading: "The Diverse Scope of Our History Book Ghostwriting Services", paragraphs: ["Projects include academic and scholarly histories, popular narrative history, biographies and historical memoirs, institutional chronicles, family archives, and localized history."] },
      { heading: "A Methodical Approach: Our History Book Ghostwriting Process", paragraphs: ["The work proceeds through consultation, archival research, source construction, drafting, fact-checking, and professional editing. A source log supports transparency and future reference."] },
      { heading: "Ensuring Legacy: Confidentiality and Partnership", paragraphs: ["Private archives and oral histories are handled confidentially. You guide the interpretation, review the developing manuscript, and retain full ownership after final delivery."] },
      { heading: "From Archives and Evidence to a Story Readers Remember", paragraphs: ["Research becomes meaningful when readers can understand its human stakes. We connect primary sources, chronology, setting, and individual experience through a narrative structure that remains engaging without compromising historical responsibility."], points: ["Organize complex timelines and competing accounts", "Build context around people, institutions, and events", "Balance documented fact with readable narrative momentum"] },
      { heading: "Create a Lasting Record for Future Generations", paragraphs: ["History books often serve museums, institutions, families, communities, and subject experts for years. We plan the manuscript for long-term usefulness, with consistent terminology, source organization, and a structure suited to both publication and archival reference."] },
    ],
    faqs: [
      { question: "What types of history books can Storybound House develop?", answer: "We support narrative history, biographies, institutional histories, military and political history, local and community histories, family archives, cultural histories, and research-led popular nonfiction." },
      { question: "Can you work from archives, interviews, and unfinished research?", answer: "Yes. We can organize notes, documents, photographs, oral histories, transcripts, and existing research into a source plan and coherent manuscript structure." },
      { question: "How do you maintain historical accuracy?", answer: "We track claims, dates, quotations, names, and source material throughout drafting. The project can include a source log, formal citations, fact-checking, and specialist review when required." },
      { question: "Can you write for academic and general readers?", answer: "Yes. We define the intended audience before outlining and adjust the voice, terminology, citations, context, and narrative pace to suit scholarly, professional, or general readership." },
      { question: "How long does a history book project take?", answer: "The schedule depends heavily on source availability, archival research, interviews, manuscript length, and fact-checking. A full-length project typically requires several months and may take longer when research is extensive." },
      { question: "How are confidential or private archives handled?", answer: "Access can be limited to the assigned team under a confidentiality agreement. You control which materials may be quoted, summarized, anonymized, or excluded from the final manuscript." },
      { question: "Who owns the completed history manuscript?", answer: "You retain ownership and final approval according to the project agreement, including control over publication, distribution, and future editions." },
    ],
  },
  spirituality: {
    title: "Your Divine Message Deserves Professional Ghostwriting",
    intro: ["Spiritual writing asks for reverence, clarity, and emotional honesty. We help transform personal revelation, faith-based teaching, and inspirational experience into thoughtful books that respect the intended tradition and audience."],
    sections: [
      { heading: "Why Spiritual Writing Requires a Specialist", paragraphs: ["A specialist listens carefully, protects the author’s voice, and handles doctrine, sacred references, and personal experience with sensitivity. The result is accessible without losing spiritual depth."] },
      { heading: "Dedicated Spiritual and Religious Nonfiction Writers", paragraphs: ["We support spiritual memoirs, self-help and spirituality books, inspirational stories, devotionals, and faith-centered thought leadership."] },
      { heading: "Our Commitment to Excellence and Ethics", paragraphs: ["Every collaboration is confidential and respectful. Research, attribution, and theological context receive careful review, while the author retains ownership and approval."] },
      { heading: "The Investment in Spiritual Book Development", paragraphs: ["Pricing reflects the manuscript’s length, interviews, research, doctrinal review, and editorial requirements. We define the scope and schedule before work begins."] },
      { heading: "The Collaborative Process: Writing with Intention", paragraphs: ["We begin with a heart-to-heart consultation, capture your voice and narrative, conduct sensitivity review where needed, edit the full manuscript, and prepare the final files."] },
      { heading: "Build Trust Without Losing the Heart of Your Message", paragraphs: ["Spiritual readers respond to sincerity, clarity, and care. We help you present personal experiences and teachings with enough context to welcome the reader while protecting the mystery, conviction, and emotional truth that make the message meaningful."], points: ["A voice that feels personal rather than manufactured", "Respectful context for beliefs, practices, and traditions", "Clear guidance without overexplaining the sacred"] },
      { heading: "Create a Book That Supports Your Wider Spiritual Work", paragraphs: ["A spiritual book can become a foundation for retreats, teaching, speaking, counseling, community programs, devotionals, or courses. We organize the manuscript so its central ideas can continue serving your audience beyond the final page."] },
    ],
    faqs: [
      { question: "What kinds of spiritual books can Storybound House develop?", answer: "We support spiritual memoirs, inspirational nonfiction, devotionals, faith-based self-help, books about spiritual practice, interfaith projects, personal transformation, and teaching-led manuscripts." },
      { question: "Can you write within a specific faith or spiritual tradition?", answer: "Yes. We match the project with a writer suited to its tradition, audience, and tone, and we follow your guidance on doctrine, terminology, sacred references, and cultural context." },
      { question: "How do you preserve my personal spiritual voice?", answer: "Interviews, journals, talks, sermons, recordings, and review rounds help us understand your language, beliefs, rhythm, and emotional intent so the finished manuscript remains recognizably yours." },
      { question: "Can you handle sensitive revelations or deeply personal experiences?", answer: "Yes. The collaboration is confidential, and you decide what may be included, anonymized, reframed, or withheld. Sensitive passages are reviewed with particular care." },
      { question: "How long does a spiritual book project take?", answer: "A full-length project usually requires several months. The timeline depends on manuscript length, interviews, research, theological or sensitivity review, and your availability for feedback." },
      { question: "Can you help organize teachings, talks, or journals into a book?", answer: "Yes. We can review existing material, identify the central message, remove repetition, develop a coherent structure, and connect separate teachings into a unified reader journey." },
      { question: "Who owns the completed spiritual manuscript?", answer: "You retain ownership and final approval according to the project agreement, including control over publication, adaptation, and future use." },
    ],
  },
  "family-relationships": {
    title: "The Irreplaceable Value of Ghostwriting for Family Stories",
    intro: ["Family stories preserve identity, memory, resilience, and connection across generations. We help individuals and families create warm, accurate narratives from interviews, documents, photographs, and lived experience."],
    sections: [
      { heading: "Why You Need a Professional Family History Writer", paragraphs: ["Family history requires sensitivity as well as research. Our writers conduct thoughtful interviews, organize fragmented memories, and connect personal experience with the relevant historical context."] },
      { heading: "Comprehensive Family Writing Services Non-Fiction Disciplines", paragraphs: ["Services include family legacy books, family sagas, family life stories, parenting nonfiction, and books about relationships or shared experience."] },
      { heading: "Understanding the Investment: Cost to Ghostwrite a Family Book", paragraphs: ["The scope depends on interview volume, archival research, manuscript length, fact-checking, and the desired production schedule. A transparent proposal keeps the engagement predictable."] },
      { heading: "Our Professional and Sensitive Ghostwriting Process", paragraphs: ["We establish confidentiality, capture oral histories, organize the family timeline, draft in reviewable stages, verify sensitive facts, and polish the manuscript for publication or private circulation."] },
      { heading: "Partner with the Best Ghostwriting Company for Family Books", paragraphs: ["Your family remains closely involved throughout the project. You approve the narrative direction, decide how private matters are handled, and retain full rights to the finished work."] },
      { heading: "Bring Multiple Generations into One Meaningful Narrative", paragraphs: ["Family books often include different memories, voices, and points of view. We create a clear participation plan, interview relatives thoughtfully, and organize their contributions into a unified story without erasing the distinctions that make each voice valuable."], points: ["Flexible interviews for relatives in different locations", "A respectful process for differing memories", "Review stages that keep key family members involved"] },
      { heading: "Create a Keepsake Designed to Be Shared", paragraphs: ["The finished book can be prepared for private family circulation, milestone celebrations, wider publication, or future archival use. We shape the manuscript so it feels personal today and remains understandable to descendants who encounter the story years from now."] },
    ],
    faqs: [
      { question: "What kinds of family books can Storybound House create?", answer: "We support family histories, legacy books, family memoirs, anniversary and milestone books, multigenerational sagas, parenting stories, and private keepsakes." },
      { question: "Can several relatives participate in the project?", answer: "Yes. We can plan interviews with multiple family members, collect written memories, and establish a review process that keeps designated relatives involved without slowing the manuscript." },
      { question: "How do you handle conflicting memories or sensitive events?", answer: "We document differing perspectives carefully, avoid presenting uncertain details as fact, and follow your guidance on what should be included, anonymized, softened, or omitted." },
      { question: "Can you work with photographs, letters, and family records?", answer: "Yes. We can use photographs, correspondence, journals, certificates, clippings, genealogical notes, and other records to develop context, timelines, captions, and story prompts." },
      { question: "How long does a family history book take?", answer: "The timeline depends on the number of interviews, available records, research depth, manuscript length, and review process. Most full-length projects require several months." },
      { question: "Will our family materials remain confidential?", answer: "Yes. The project can operate under a confidentiality agreement, with access limited to the assigned team. You retain control over sensitive source material and final approval." },
      { question: "Can the final book be prepared for private printing?", answer: "Yes. In addition to manuscript development, optional services can prepare the book for private circulation or publication, including editing, cover development, formatting, and production guidance." },
    ],
  },
  essay: {
    title: "Essay",
    intro: ["An essay presents an argument, interpretation, or analysis with relevant description, evidence, and opinion. It may be argumentative, descriptive, exploratory, synoptic, or analytical, but it always needs a clear purpose and organized structure.", "Effective essay writing begins with focused research and a strong thesis. The introduction, body, and conclusion must work together, with every line accurate, relevant, and connected to the central idea."],
    sections: [
      { heading: "Develop an Argument Readers Can Follow and Remember", paragraphs: ["A persuasive essay needs more than strong opinions. We clarify the central claim, arrange evidence in a logical sequence, anticipate reader questions, and build transitions that carry the argument naturally from one idea to the next."], points: ["A focused thesis and clear purpose", "Evidence organized around the strongest line of reasoning", "Introductions and conclusions that reinforce the central insight"] },
      { heading: "Professional Refinement for Publication-Ready Essays", paragraphs: ["We strengthen voice, rhythm, clarity, and cohesion while preserving the author’s perspective. The editorial process also addresses repetition, unsupported claims, inconsistent tone, and structural gaps so the final essay feels deliberate and complete."] },
    ],
    faqs: [
      { question: "What kinds of essays can Storybound House help develop?", answer: "We support personal, narrative, analytical, argumentative, reflective, thought-leadership, literary, professional, and collection-based essay projects." },
      { question: "Can you work from notes, interviews, or an unfinished draft?", answer: "Yes. We can organize rough notes, recorded ideas, research, or an incomplete draft into a clear thesis, outline, and polished essay." },
      { question: "How do you preserve my individual voice?", answer: "We study your existing writing and discuss the intended tone, audience, and purpose. Review rounds let you refine language and emphasis until the essay feels recognizably yours." },
      { question: "Can you help plan a complete essay collection?", answer: "Yes. We can help select themes, sequence essays, identify gaps or repetition, and develop connective material that gives the collection a coherent arc." },
      { question: "Do you provide research and source support?", answer: "Yes. Research depth is defined in the project scope, and we can help identify credible sources, organize references, and distinguish sourced claims from personal interpretation." },
      { question: "How long does an essay-writing project take?", answer: "A single essay may take days or weeks depending on length and research. A full collection generally requires a longer schedule with staged drafting and review." },
      { question: "Who owns the finished essay?", answer: "You retain ownership and final approval according to the project agreement, including the right to publish, submit, adapt, or collect the finished work." },
    ],
  },
  journalism: {
    title: "Journalism",
    intro: ["Journalism gathers, verifies, and presents events that matter to the public. Whether the medium is print, broadcast, or digital, credible reporting depends on accurate research, impartial analysis, and a clear understanding of the audience.", "Feature stories, editorials, blogs, and news analysis each require a distinct approach. Our writers organize complex source material into factual, readable narratives while separating evidence from personal bias."],
    sections: [
      { heading: "Source-Led Reporting Readers Can Trust", paragraphs: ["Credible journalism begins with disciplined source work. We help organize interviews, documents, timelines, public records, and background research into a transparent reporting structure that distinguishes verified fact, attribution, analysis, and unresolved questions."], points: ["Interview and source-material organization", "Clear attribution for claims and quotations", "Fact-checking checkpoints before final delivery"] },
      { heading: "Turn Complex Issues into Clear Public Narratives", paragraphs: ["Policy, business, culture, science, and social issues often arrive as fragmented information. We identify the central public-interest question, establish context, and build a narrative that helps readers understand both what happened and why it matters."] },
    ],
    faqs: [
      { question: "What kinds of journalism projects can Storybound House support?", answer: "We support reported features, investigative and explanatory projects, profiles, long-form journalism, editorial series, news analysis, issue-focused books, and research-led digital content." },
      { question: "Can you work from interviews, recordings, and public records?", answer: "Yes. We can organize transcripts, notes, documents, datasets, public records, and existing research into a reporting plan and structured draft." },
      { question: "How do you handle fact-checking and attribution?", answer: "Claims and quotations are tracked against available sources, attribution is made clear, and factual uncertainties are flagged for resolution before final delivery." },
      { question: "Can you match a publication or organization’s editorial voice?", answer: "Yes. We review the intended outlet, audience, style guidance, and existing content so the work aligns with the appropriate voice, length, and level of context." },
      { question: "How do you protect confidential sources?", answer: "Projects can operate under a confidentiality agreement with controlled access to interviews and documents. Source identities and sensitive details are handled according to the agreed editorial protocol." },
      { question: "How long does a journalism-writing project take?", answer: "The timeline depends on reporting depth, source availability, verification requirements, length, and review cycles. A focused article may take days or weeks, while a long-form investigation can take considerably longer." },
      { question: "Who owns the completed journalism content?", answer: "Ownership and usage rights follow the project agreement. You retain final approval and receive the completed work for its agreed publication or distribution purpose." },
    ],
  },
  travel: {
    title: "Travel",
    intro: ["Travel nonfiction brings places to life through lived experience, cultural context, practical detail, and a strong sense of discovery. It should inform readers while preserving the personality and movement of the journey.", "We shape travel memories into engaging narratives filled with people, challenges, textures, sounds, and meaningful observations. The destination remains central while the author’s perspective gives the book its distinctive voice."],
    sections: [
      { heading: "Make the Destination Feel Present on Every Page", paragraphs: ["Memorable travel writing combines sensory detail with narrative purpose. We organize routes, encounters, setbacks, discoveries, and reflection into a journey that lets readers picture the landscape and understand how the experience changed the traveler."], points: ["Vivid settings grounded in specific observation", "A clear journey rather than a collection of disconnected memories", "Personal reflection balanced with useful cultural context"] },
      { heading: "Write About People and Places with Respect", paragraphs: ["Travel stories become stronger when local communities are presented with care and complexity. We help identify assumptions, add necessary context, verify place-based details, and avoid language that reduces cultures or destinations to stereotypes."] },
    ],
    faqs: [
      { question: "What kinds of travel books can Storybound House develop?", answer: "We support travel memoirs, expedition narratives, destination books, cultural journeys, adventure nonfiction, road-trip stories, travel essays, and practical guides with a strong narrative voice." },
      { question: "Can you work from journals, photographs, and trip notes?", answer: "Yes. We can organize journals, itineraries, photographs, recordings, maps, correspondence, and rough notes into a timeline, chapter plan, and complete manuscript." },
      { question: "How do you preserve the author’s personal travel voice?", answer: "Interviews and source material help us capture your humor, observations, emotional responses, and natural storytelling rhythm. Review rounds keep the manuscript aligned with your perspective." },
      { question: "Can you research destinations and verify travel details?", answer: "Yes. Research can cover geography, history, customs, terminology, routes, and other contextual details. The level of verification is defined in the project scope." },
      { question: "Can you help handle cultural sensitivity?", answer: "Yes. We flag passages that may need more context, careful attribution, or sensitivity review and work with you to portray people and communities responsibly." },
      { question: "How long does a travel book take?", answer: "A full-length travel manuscript generally takes several months. Timing depends on source organization, interviews, research, word count, and the number of review rounds." },
      { question: "Who owns the completed travel manuscript?", answer: "You retain ownership and final approval according to the project agreement, including control over publication, adaptation, and future use." },
    ],
  },
  education: {
    title: "Education",
    intro: [
      "Educational writing is factual, objective, and designed for a defined learner or subject area. It makes reliable knowledge understandable without weakening its accuracy or methodological foundation.",
      "Our education writers research carefully, organize lessons and concepts in a logical sequence, and match the voice to the intended level—from general readers to professional and academic audiences.",
    ],
    sections: [
      {
        heading: "Turn Expertise into a Learning Journey",
        paragraphs: ["A strong education book does more than present information. We shape your expertise around clear learning outcomes, build concepts in a logical sequence, and use examples, activities, summaries, and practical applications to help readers understand and retain each lesson."],
        points: [
          "Clear learning outcomes for every chapter",
          "Concepts sequenced from foundational to advanced",
          "Examples, reflection prompts, and practical applications",
        ],
      },
      {
        heading: "Adapt One Core Idea for Different Learners",
        paragraphs: ["The same subject may need a different approach for students, professionals, educators, or general readers. We calibrate terminology, pacing, explanations, and examples to the audience’s age and prior knowledge while protecting the accuracy and authority of your original ideas."],
      },
    ],
    faqs: [
      { question: "What kinds of education books can Storybound House develop?", answer: "We can develop textbooks, professional guides, teaching manuals, educational nonfiction, curriculum companion books, training resources, and learner-facing guides for academic, workplace, or general audiences." },
      { question: "Can you turn a course, workshop, or curriculum into a book?", answer: "Yes. We can organize lesson plans, slides, recordings, worksheets, and supporting research into a coherent book with clear chapters, transitions, activities, and learning outcomes." },
      { question: "How do you match the content to the learner's level?", answer: "We define the audience, prerequisite knowledge, terminology, examples, pacing, and expected outcomes before drafting. This keeps the material accessible without oversimplifying the subject." },
      { question: "Can you work with academic or technical source material?", answer: "Yes. We can organize research and citations, explain complex material clearly, and preserve the meaning of technical concepts while making them easier to follow." },
      { question: "Can the book include exercises and learning tools?", answer: "Yes. Depending on the project, we can include reflection prompts, case studies, practical activities, chapter summaries, checklists, discussion questions, and assessment questions." },
      { question: "How long does an education book take to complete?", answer: "Most education books take several months. The schedule depends on the manuscript length, research needs, instructional features, source material, and the time required for expert review and revisions." },
      { question: "Who owns the completed education manuscript?", answer: "You retain ownership and final approval according to the project agreement, including control over publication, adaptation, and future use." },
    ],
  },
  law: {
    title: "Law",
    intro: [
      "Legal nonfiction requires exact language, disciplined analysis, and respect for the rules, procedures, rights, and obligations involved. The writing must remain clear while handling technical information responsibly.",
      "We help turn legal knowledge, cases, policy questions, and professional experience into accessible manuscripts. Research and factual review protect accuracy while narrative structure keeps the material readable.",
    ],
    sections: [
      {
        heading: "Transform Legal Complexity into Reader Confidence",
        paragraphs: ["A strong legal book guides readers through difficult concepts without burying them in terminology. We develop a clear structure, define essential terms in context, connect principles to practical examples, and maintain a consistent argument from the opening chapter to the conclusion."],
        points: [
          "Logical chapter architecture for complex subjects",
          "Plain-language explanations that preserve essential nuance",
          "Examples, case discussions, and practical context",
        ],
      },
      {
        heading: "Source-Based Writing with a Professional Review Path",
        paragraphs: ["Credibility depends on careful source handling. We organize the authorities, references, case material, and expert commentary supplied for the project, flag claims that need confirmation, and prepare the manuscript for review by the author or a qualified legal professional before publication."],
      },
    ],
    faqs: [
      { question: "What kinds of legal books can Storybound House help develop?", answer: "We can support legal education books, practitioner guides, policy analysis, professional thought leadership, case-based nonfiction, legal history, public-facing explainers, and law-related memoir or commentary." },
      { question: "Do you provide legal advice or legal opinions?", answer: "No. Our role is writing, research organization, and editorial development. Legal conclusions and advice must come from the author or an appropriately qualified legal professional." },
      { question: "Can you work with cases, statutes, citations, and technical source material?", answer: "Yes. We can organize supplied authorities and research, maintain citation consistency, and explain technical material clearly. The author or designated legal reviewer remains responsible for confirming legal accuracy and current authority." },
      { question: "How do you make legal writing accessible to non-lawyers?", answer: "We define the intended reader first, then adjust terminology, sentence structure, examples, pacing, and background explanation while preserving the distinctions that matter to the subject." },
      { question: "Can a lawyer or subject-matter expert review the manuscript during development?", answer: "Yes. Review checkpoints can be built into the schedule so the author or a nominated expert can verify interpretations, terminology, citations, and jurisdiction-specific details before later drafts." },
      { question: "How long does a legal nonfiction project take?", answer: "Most full-length projects take several months. Timing depends on length, research depth, source availability, citation requirements, expert review, and the number of revision rounds." },
      { question: "How are confidentiality and ownership handled?", answer: "Project materials are handled according to the agreed confidentiality terms. You retain final approval and ownership of the completed manuscript according to the project agreement." },
    ],
  },
  cookbooks: {
    title: "Cookbooks",
    intro: [
      "Cookbooks can cover cuisines, recipes, techniques, nutrition, quick fixes, and practical guidance for a niche or general audience. Strong cookbook writing combines culinary authority with instructions readers can follow confidently.",
      "We organize recipes, review the logic of each method, establish consistent measurements and formatting, and develop the surrounding stories or educational material. The final manuscript balances usefulness, personality, and visual planning.",
    ],
    sections: [
      {
        heading: "Build a Recipe System Readers Can Trust",
        paragraphs: ["Readers return to cookbooks that produce consistent results. We standardize recipe structure, ingredient order, measurements, yields, timings, equipment notes, and method language so every entry feels clear and dependable from the first page to the last."],
        points: [
          "Consistent measurements, yields, timings, and terminology",
          "Step-by-step methods arranged in a practical cooking order",
          "Helpful notes for preparation, substitutions, storage, and serving",
        ],
      },
      {
        heading: "Turn Your Culinary Point of View into a Lasting Brand",
        paragraphs: ["A memorable cookbook carries more than recipes. We help shape the personal stories, cultural context, signature techniques, chapter themes, and visual direction that make the book recognizably yours—and useful for restaurants, classes, media, products, and a wider culinary platform."],
      },
    ],
    faqs: [
      { question: "What kinds of cookbooks can Storybound House help create?", answer: "We can support chef and restaurant cookbooks, family recipe collections, cuisine-focused books, baking books, wellness and lifestyle cookbooks, technique guides, beginner books, and expert-led culinary projects." },
      { question: "Can you organize recipes that are currently in different formats?", answer: "Yes. We can bring notes, documents, spreadsheets, recordings, and existing recipe cards into one consistent template with standardized headings, ingredient lists, methods, yields, timings, and notes." },
      { question: "Do you test the recipes?", answer: "We review each recipe for clarity, sequence, consistency, and missing information. Physical recipe testing can be planned as a separate part of the project or completed by the author, chef, or a designated recipe tester before final approval." },
      { question: "Can you preserve my voice and the stories behind the food?", answer: "Yes. Interviews and source material help us capture your language, memories, influences, and culinary philosophy so the headnotes and chapter introductions feel personal and authentic." },
      { question: "Can you help with dietary information or nutrition claims?", answer: "We can organize supplied dietary and nutritional information and flag statements that need verification. Medical or regulated nutrition claims should be confirmed by an appropriately qualified professional before publication." },
      { question: "Can the manuscript be planned for photography and book design?", answer: "Yes. We can build a photography list, identify recipes that need process images, plan captions and callouts, and structure the manuscript so it moves smoothly into editing, design, and typesetting." },
      { question: "How long does a cookbook project take, and who owns it?", answer: "A cookbook commonly takes several months depending on recipe count, testing, interviews, photography, and revisions. You retain final approval and ownership of the completed manuscript according to the project agreement." },
    ],
  },
  relationships: {
    title: "Relationships",
    intro: [
      "Relationship nonfiction requires emotional accuracy, relevance, and a realistic understanding of how people grow, connect, and experience conflict. It must offer insight without flattening complex experiences into easy answers.",
      "Our writers help create a balanced narrative that engages readers while keeping the author’s values and intended message clear. Personal stories, research, and practical guidance are woven into a coherent, responsible book.",
    ],
    sections: [
      {
        heading: "Turn Human Insight into a Practical Reader Framework",
        paragraphs: ["Readers need more than broad advice. We help organize your expertise into a clear path that explains relationship patterns, identifies meaningful choices, and gives readers practical ways to improve communication, trust, boundaries, collaboration, and conflict resolution."],
        points: [
          "A defined reader journey from challenge to constructive change",
          "Relatable scenarios for personal and professional relationships",
          "Reflection prompts, conversation tools, and practical exercises",
        ],
      },
      {
        heading: "Handle Sensitive Stories with Care and Purpose",
        paragraphs: ["Relationship books often draw on real experiences involving families, partners, colleagues, clients, or teams. We shape those stories around the lesson they serve, protect the author’s intended voice, and flag privacy, consent, or sensitivity concerns for appropriate review before publication."],
      },
    ],
    faqs: [
      { question: "What kinds of relationship books can Storybound House develop?", answer: "We can support books about couples, communication, dating, marriage, parenting relationships, friendship, workplace relationships, leadership dynamics, boundaries, conflict resolution, and expert-led personal development." },
      { question: "Can you turn my professional method or coaching framework into a book?", answer: "Yes. We can organize your models, exercises, client insights, workshops, and source material into a structured reader journey while preserving your terminology and teaching style." },
      { question: "How do you balance personal stories with practical advice?", answer: "We use stories where they clarify a pattern, build trust, or demonstrate change, then connect each example to the book’s broader framework and specific actions the reader can take." },
      { question: "Can you include research and expert sources?", answer: "Yes. We can integrate supplied studies and credible references, identify claims that need support, and structure the material so research strengthens rather than interrupts the reading experience." },
      { question: "How are sensitive experiences and other people's privacy handled?", answer: "We discuss confidentiality and sensitivity early, can anonymize or combine identifying details where appropriate, and flag material that may need consent, legal review, or specialist review before publication." },
      { question: "How long does a relationship nonfiction book take?", answer: "Most full-length projects take several months. The schedule depends on length, interviews, research, sensitivity review, existing source material, and the number of revision rounds." },
      { question: "Will the manuscript sound like me, and who owns it?", answer: "Interviews and review rounds help preserve your voice, values, and professional perspective. You retain final approval and ownership of the completed manuscript according to the project agreement." },
    ],
  },
  sports: {
    title: "Sports",
    intro: ["Sports writing can preserve an athlete’s journey, explain a coaching philosophy, document a team or era, or explore performance and culture. Readers expect truth, energy, and insight grounded in real experience.", "We work with athletes, coaches, experts, and fans to organize interviews and research into compelling books, training guides, memoirs, and thought-leadership projects."],
    sections: [
      { heading: "Sports Writing Services", paragraphs: ["Projects can include biographies, coaching books, sports history, training manuals, performance guides, and motivational narratives."], points: ["Literary and creative nonfiction", "Sports history and biography", "Coaching, training, and performance guides", "Textbooks, manuals, and presentations"] },
      { heading: "Capture the Moments Behind the Results", paragraphs: ["Statistics record what happened; a strong sports book reveals what it demanded. Through structured interviews and source review, we uncover the decisions, setbacks, rivalries, routines, relationships, and turning points that give an athlete’s or team’s journey emotional weight."], points: ["A clear narrative arc beyond scores and seasons", "Distinct voices for athletes, coaches, teammates, and mentors", "Research-supported context for competitions, eras, and milestones"] },
      { heading: "Turn Your Performance Method into a Lasting Platform", paragraphs: ["For coaches, trainers, analysts, and performance experts, a book can become the foundation for speaking, consulting, courses, clinics, and team development. We organize your philosophy into a credible framework with practical tools readers can understand and apply."] },
    ],
    faqs: [
      { question: "What kinds of sports books can Storybound House develop?", answer: "We can support athlete and coach memoirs, team histories, biographies, performance guides, coaching philosophies, training manuals, sports-business books, motivational titles, and narrative sports nonfiction." },
      { question: "Can you turn interviews and career records into a complete manuscript?", answer: "Yes. We can combine interviews, timelines, statistics, press coverage, journals, photographs, and other source material into a structured narrative with a consistent voice." },
      { question: "How do you make a sports story engaging beyond the results?", answer: "We focus on meaningful decisions, preparation, pressure, setbacks, relationships, identity, and change. Scores and statistics support the story while the human journey gives readers a reason to care." },
      { question: "Can you help a coach or trainer create a performance book?", answer: "Yes. We can organize your principles, drills, assessments, case examples, progression model, and coaching language into a practical framework for athletes, coaches, teams, or general readers." },
      { question: "How do you check dates, statistics, quotations, and historical details?", answer: "We build a source record from the materials supplied for the project, identify facts that need confirmation, and can plan expert or author review checkpoints before final approval." },
      { question: "How long does a sports nonfiction book take?", answer: "Most full-length projects take several months. The schedule depends on interviews, archival research, manuscript length, technical content, fact review, and revision rounds." },
      { question: "Will the book sound authentic, and who owns the finished manuscript?", answer: "Interviews and collaborative reviews help preserve the subject’s natural voice and sporting perspective. You retain final approval and ownership according to the project agreement." },
    ],
  },
  science: {
    title: "Science",
    intro: [
      "Science writing demands careful research, precise terminology, and a strong grasp of evidence. The goal is to explain complex ideas without distorting the facts or losing the reader.",
      "From scientific history and emerging discoveries to professional guides and accessible popular science, we build clear structures, verify claims, and translate technical concepts into engaging prose.",
    ],
    sections: [
      {
        heading: "Translate Complex Research Without Losing Its Meaning",
        paragraphs: ["Strong science writing gives readers a clear path through unfamiliar ideas. We define essential concepts, establish context, connect evidence to conclusions, and use examples or analogies carefully so the manuscript becomes accessible without overstating what the research can prove."],
        points: [
          "A logical progression from foundational ideas to advanced findings",
          "Clear explanations calibrated to the intended audience",
          "Transparent distinctions between evidence, interpretation, and uncertainty",
        ],
      },
      {
        heading: "Build Scientific Authority Beyond the Manuscript",
        paragraphs: ["A well-developed science book can support public education, speaking, institutional outreach, courses, policy conversations, and long-term thought leadership. We shape the content around a coherent central argument while preserving the research trail needed for expert review and reader trust."],
      },
    ],
    faqs: [
      { question: "What kinds of science books can Storybound House develop?", answer: "We can support popular science, research-based nonfiction, scientific history, professional guides, emerging-technology books, environmental titles, health-science education, and expert thought-leadership projects." },
      { question: "Can you write for both specialist and general audiences?", answer: "Yes. We define the reader’s prior knowledge, expected terminology, and purpose before drafting, then adjust the depth, examples, pacing, and technical detail to suit that audience." },
      { question: "How do you handle scientific claims and references?", answer: "We organize the supplied research, maintain a source record, identify claims that need support, and distinguish established evidence from interpretation or emerging findings. Final scientific accuracy remains subject to author or expert approval." },
      { question: "Can you turn papers, lectures, or laboratory work into a book?", answer: "Yes. We can synthesize papers, presentations, interviews, notes, datasets, and existing educational material into a cohesive narrative designed for a wider readership." },
      { question: "Can the manuscript include diagrams, tables, or other scientific visuals?", answer: "Yes. We can identify where visuals improve understanding, draft captions and content briefs, and coordinate the manuscript structure with later illustration, data-visualization, and design work." },
      { question: "How long does a science nonfiction book take?", answer: "Most full-length projects take several months. Timing depends on research depth, technical complexity, interviews, visual planning, expert review, manuscript length, and revision rounds." },
      { question: "Who reviews and owns the completed science manuscript?", answer: "The author or a designated specialist provides final subject-matter approval. You retain final editorial approval and ownership of the completed manuscript according to the project agreement." },
    ],
  },
  "hobbies-crafts": {
    title: "Bring Your Passion to Life with Hobbies & Crafts Ghostwriting Services",
    intro: ["Every hobby has a story, a body of knowledge, and a community eager to learn. We help enthusiasts and professionals turn hands-on expertise into polished books, guides, and memoir-style projects."],
    sections: [
      { heading: "Why Choose a Specialist Hobby Writer?", paragraphs: ["You may know your craft deeply without knowing how to structure a book. A specialist captures your techniques, language, and personality while making the material easy for readers to follow."] },
      { heading: "What Makes Our Hobbies Ghostwriting Services Different?", paragraphs: ["Personal interviews and focused research allow us to understand both the practical process and the personal story behind it. Experienced craft writers then shape that material into clear, useful chapters."] },
      { heading: "Types of Hobbies and Crafts We Cover", paragraphs: ["Projects span knitting, crochet, woodworking, gardening, painting, pottery, ceramics, cooking, baking, home décor, jewelry, beading, calligraphy, paper crafts, and many other creative pursuits."] },
      { heading: "How Our Process Works", paragraphs: ["The engagement moves through consultation, custom outline development, writing, review, editing, and publication-ready delivery. Collaborative checkpoints keep technical instructions accurate."] },
      { heading: "Ready to Share Your Passion with the World?", paragraphs: ["Whether you are an experienced maker or an enthusiast with a distinctive story, we can help transform your knowledge into a book that teaches, inspires, and reflects your voice."] },
      { heading: "Make Every Project Easy to Follow", paragraphs: ["A practical craft book must anticipate what readers see, need, and do at every stage. We organize materials, tools, safety notes, skill levels, measurements, step sequences, troubleshooting guidance, and image callouts so readers can move confidently from preparation to a finished result."], points: ["Consistent project templates and difficulty levels", "Clear steps, measurements, material lists, and safety notes", "Planned diagrams, process photographs, captions, and callouts"] },
      { heading: "Build a Book Around Your Maker Brand", paragraphs: ["Your book can extend the value of a studio, workshop, course, product line, online community, or creative business. We connect your signature techniques and personal story to a useful content plan that supports both the reader and the wider brand you want to grow."] },
    ],
    faqs: [
      { question: "What kinds of hobbies and crafts books can Storybound House develop?", answer: "We can support project books, technique guides, beginner manuals, pattern collections, creative memoirs, workshop companion books, and expert-led titles covering textile, paper, wood, leather, garden, decorative, and many other crafts." },
      { question: "Can you turn my workshops, videos, or notes into a book?", answer: "Yes. We can organize recordings, class plans, demonstrations, notes, patterns, and existing instructions into a coherent manuscript with a consistent learning path." },
      { question: "How do you make project instructions clear for beginners?", answer: "We define prerequisite skills, list tools and materials, separate each process into logical steps, explain specialized terms, and add troubleshooting notes or visual cues where readers are likely to need them." },
      { question: "Can the manuscript include patterns, diagrams, and photographs?", answer: "Yes. We can plan where patterns, diagrams, process photographs, captions, and finished-project images belong, then prepare clear content directions for the designer, illustrator, or photographer." },
      { question: "How do you verify technical craft instructions?", answer: "We review the logic and consistency of supplied instructions and build expert checkpoints into the process. Physical project testing can be completed by the author or a designated tester before final approval." },
      { question: "How long does a hobbies or crafts book take?", answer: "Most projects take several months. Timing depends on the number of projects, technical complexity, testing, photography or illustration needs, interviews, and revision rounds." },
      { question: "Will the book reflect my creative style, and who owns it?", answer: "Interviews and collaborative reviews help preserve your teaching voice, visual sensibility, and signature methods. You retain final approval and ownership of the completed manuscript according to the project agreement." },
    ],
  },
};

export function NonFictionTopicContent({ topic }: { topic: string }) {
  const content = topicContent[topic];
  if (!content) return null;

  return (
    <>
      <section className="nonFictionTopicContent" aria-labelledby={`${topic}-content-title`}>
        <div className="nonFictionTopicInner">
          <h2 id={`${topic}-content-title`}>{content.title}</h2>
          {content.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {content.sections?.map(section => (
            <section className="nonFictionTopicSection" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {section.points ? <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul> : null}
            </section>
          ))}
          {content.faqs ? (
            <section className="nonFictionFaqSection" aria-labelledby={`${topic}-faq-title`}>
              <div className="nonFictionFaqHeading">
                <p className="eyebrow">Questions before you begin</p>
                <h2 id={`${topic}-faq-title`}>Frequently Asked Questions</h2>
              </div>
              <div className="nonFictionFaqList">
                {content.faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
      <NonFictionBooks />
    </>
  );
}
