import Image from "next/image";

type SpecialtySection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
  image?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
};
type SpecialtyContent = {
  title: string;
  intro: string[];
  sections: SpecialtySection[];
  faqs: { question: string; answer: string }[];
  relatedBooks?: { src: string; title: string; author: string }[];
};

const sharedFaq = {
  ownership: { question: "Who owns the completed content?", answer: "You retain final approval and ownership of the completed deliverables according to the project agreement." },
  confidentiality: { question: "Is the project confidential?", answer: "Yes. Project materials and communications are handled confidentially, with access limited to the people needed to complete the agreed work." },
};

const specialtyContent: Record<string, SpecialtyContent> = {
  "medical-writing": {
    title: "Medical Writing Built for Accuracy, Clarity, and Review",
    intro: ["Medical communication must translate evidence without weakening its meaning. We help clinicians, researchers, healthcare organizations, and health innovators develop clear content for professional, regulatory, and patient audiences."],
    sections: [
      { heading: "Scientific Rigor and Audience-Appropriate Language", paragraphs: ["Every project begins with its audience, evidence base, intended use, and review requirements. We organize technical material logically, distinguish evidence from interpretation, and calibrate terminology for specialists, decision-makers, or patients."], points: ["Evidence-led source organization", "Clear claims and consistent terminology", "Author or designated specialist review checkpoints"] },
      { heading: "Medical Content Across the Product and Care Journey", paragraphs: ["Support can include manuscripts, white papers, clinical or regulatory documents, training materials, medical education, patient information, and publication content. Each format receives a structure suited to its readers and purpose."] },
      { heading: "A Controlled, Collaborative Writing Process", paragraphs: ["We move through scope definition, evidence review, outline approval, staged drafting, editorial quality control, and final delivery. Versioned feedback and subject-matter review keep complex projects accurate and manageable."] },
    ],
    faqs: [
      { question: "What medical writing projects can you support?", answer: "Projects may include medical manuscripts, clinical and regulatory documents, professional education, patient materials, white papers, articles, and healthcare thought leadership." },
      { question: "Can you address peer-review or stakeholder comments?", answer: "Yes. We can organize comments, revise the document, and prepare a response-ready version for author or specialist approval." },
      { question: "How do you protect scientific accuracy?", answer: "We maintain a source trail, flag unsupported claims, use consistent terminology, and build qualified subject-matter review into the schedule." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "business-proposals": {
    title: "Business Proposals Designed to Win Serious Consideration",
    intro: ["A strong proposal turns strategy, evidence, and commercial value into a focused case for action. We help businesses respond to opportunities with persuasive, compliant documents built around the evaluator’s priorities."],
    sections: [
      { heading: "Strategy Before Writing", paragraphs: ["We analyze the request, decision criteria, audience, competitive position, and required evidence before drafting. This prevents generic language and keeps every section aligned with the opportunity."], points: ["Requirement and compliance mapping", "Clear value proposition and differentiators", "Evidence, outcomes, and risk mitigation"] },
      { heading: "Proposal Support for Every Stage", paragraphs: ["Services can cover RFP responses, business plans, partnership proposals, grant narratives, investment materials, and unsolicited strategic proposals, including executive summaries and supporting content briefs."] },
      { heading: "From Kickoff to Final Compliance Review", paragraphs: ["The process moves through discovery, source collection, outline, drafting, stakeholder review, visual-content planning, and a final check against the original requirements."] },
    ],
    faqs: [
      { question: "Can you work from an RFP or tender document?", answer: "Yes. We can build a compliance matrix, identify response requirements, and structure the proposal around the evaluator’s stated criteria." },
      { question: "Can you include financial models or technical material?", answer: "We can integrate client-approved figures and specialist material into the narrative; the client remains responsible for validating financial, legal, and technical accuracy." },
      { question: "How quickly can a proposal be completed?", answer: "Timing depends on length, source readiness, stakeholder availability, and submission complexity. The agreed schedule is set after reviewing the complete requirements." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "business-book-writing": {
    title: "Business Book Writing That Turns Experience into Authority",
    intro: ["A business book gives your ideas a durable form. We help founders, executives, consultants, and subject-matter experts transform experience, frameworks, and leadership lessons into an original manuscript with a clear market purpose."],
    sections: [
      { heading: "A Business Book Built Around Your Name and Ideas", paragraphs: ["Your book should do more than summarize a career. It should establish a recognizable point of view, give readers useful ideas, and connect your experience to the questions your audience is already trying to answer.", "Through structured interviews and source review, we identify the principles, stories, methods, and results that only you can credibly own. Those elements become the foundation for a book that supports your reputation without sounding promotional."], points: ["Leadership and founder stories", "Business frameworks and practical guides", "Consulting, management, and industry books"], image: "/images/ghostwriting/business-books/bookstore-wide.png", imageAlt: "A bookstore display filled with professionally published books", imageSide: "right" },
      { heading: "Highly Conceptualized Ideas with a Clear Reader Promise", paragraphs: ["Expertise often begins as notes, presentations, client conversations, or a collection of ideas that have not yet become a book. We find the central promise, define the reader’s transformation, and organize the material into a coherent chapter architecture.", "Every concept is tested against the book’s audience and objective. Examples, case studies, exercises, and supporting research are placed where they strengthen understanding and momentum."], points: ["A focused premise and market position", "A chapter-by-chapter content blueprint", "Research, examples, and case-study planning"] },
      { heading: "Experienced Ghostwriters for Serious Business Books", paragraphs: ["The right business ghostwriter can translate complex thinking into direct, engaging prose while retaining the author’s professional voice. We match the project with a writer suited to its subject, tone, and audience, then build regular author reviews into the schedule.", "Writer’s block, limited time, or an unfinished draft do not have to stall the book. We can begin from an early idea, reorganize existing material, or develop a partial manuscript into a complete and polished work."], image: "/images/ghostwriting/business-books/business-writer.png", imageAlt: "Professional writer developing a business book manuscript", imageSide: "left" },
      { heading: "From Expertise to a Publication-Ready Manuscript", paragraphs: ["The engagement moves through positioning, voice discovery, interviews, research, outline approval, staged drafting, and editorial refinement. Clear milestones give you meaningful control without requiring you to manage every sentence.", "After the full draft is approved, developmental and line editing strengthen structure, clarity, consistency, and readability. Optional book design and publishing preparation can carry the completed manuscript into its next stage."], points: ["Scheduled interviews and author reviews", "Visible milestones and dependable updates", "Developmental editing and final polish", "Optional design and publishing support"] },
      { heading: "A Scope and Investment Designed Around the Book", paragraphs: ["Business books vary widely in length, research, interview volume, technical complexity, and existing source material. We define these requirements before quoting, so the proposal reflects the actual work and the deliverables are clear.", "A smaller strategic book, lead-generation title, or executive guide may need a different process from a research-heavy leadership book. The scope can be shaped around your goals while maintaining professional writing and editorial standards."], image: "/images/ghostwriting/business-books/business-bookshelf.png", imageAlt: "Business books displayed on a warmly lit bookstore shelf", imageSide: "right" },
      { heading: "Create a Book Readers Can Use and Remember", paragraphs: ["Strong business books combine authority with usefulness. We turn abstract ideas into clear explanations, relatable stories, concrete examples, and practical next steps so readers can apply what they learn.", "The finished book can support speaking, consulting, internal leadership, client education, or a broader thought-leadership platform. You retain final approval and ownership according to your project agreement."], points: ["Clear, accessible business language", "Stories that make expertise memorable", "Actionable tools and reader takeaways", "A consistent author voice from start to finish"] },
    ],
    faqs: [
      { question: "How is a business book different from a business proposal?", answer: "A business book develops ideas, experience, and authority for readers over a full manuscript. A proposal is a targeted commercial document designed to win approval, funding, or a specific opportunity." },
      { question: "Can you work from presentations, podcasts, or existing articles?", answer: "Yes. We can audit and organize existing material, identify gaps, and develop it into an original, cohesive book rather than a collection of repurposed pieces." },
      { question: "Do I need a complete book concept before starting?", answer: "No. Discovery interviews can help define the audience, premise, positioning, reader promise, and chapter structure before drafting begins." },
      { question: "Can the book include research and case studies?", answer: "Yes. Research depth, interviews, source requirements, permissions, and case-study development are defined in the project scope." },
      { question: "Can you help after the manuscript is written?", answer: "Yes. Depending on the engagement, support can continue through editing, book design, publishing preparation, and author-platform content." },
      sharedFaq.confidentiality,
      sharedFaq.ownership,
    ],
  },
  "technical-writing": {
    title: "Technical Writing That Makes Complex Systems Usable",
    intro: ["Technical documentation succeeds when readers can find, understand, and act on accurate information. We transform specialist knowledge into structured content for users, developers, engineers, operators, and decision-makers."],
    sections: [
      { heading: "Precision, Structure, and Usability", paragraphs: ["We define user roles, tasks, terminology, prerequisites, and document architecture before drafting. Consistent patterns help readers move from concept to action without ambiguity."], points: ["Audience and task analysis", "Reusable content structure and terminology", "Examples, warnings, prerequisites, and troubleshooting"] },
      { heading: "Documentation Across the Product Lifecycle", paragraphs: ["Projects can include API documentation, software and product guides, standard operating procedures, installation manuals, maintenance documentation, knowledge bases, and technical thought leadership."] },
      { heading: "Reviewable Documentation Workflow", paragraphs: ["Discovery and source analysis lead to an approved outline, incremental drafts, subject-matter review, editorial quality assurance, and delivery in the agreed publishing format."] },
    ],
    faqs: [
      { question: "Can you document a specialized product or system?", answer: "Yes. We pair structured discovery with access to subject-matter experts, existing documentation, demonstrations, and test environments where available." },
      { question: "Can you support API and software documentation?", answer: "Yes. Support can include concept guides, endpoint references, tutorials, examples, release documentation, and information architecture." },
      { question: "How is technical accuracy verified?", answer: "Drafts pass through client-designated specialist review, source checks, terminology checks, and documented revision cycles." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "thought-leadership-writing": {
    title: "Thought Leadership That Turns Expertise into Influence",
    intro: ["Leaders often have valuable insight but limited time to shape it for the market. We capture your point of view and develop credible content that supports reputation, trust, and sustained industry visibility."],
    sections: [
      { heading: "A Distinct Point of View, Grounded in Evidence", paragraphs: ["Interviews, source material, and market context help us identify the ideas only you can credibly own. The resulting argument remains recognizably yours while meeting professional editorial standards."], points: ["Executive voice capture", "Research-supported arguments", "Clear relevance to current industry questions"] },
      { heading: "Content Across Executive Channels", paragraphs: ["Engagements can include bylined articles, LinkedIn content, keynote narratives, industry reports, case studies, podcasts or video scripts, and executive communications shaped as one coherent platform."] },
      { heading: "A Sustainable Leadership Content System", paragraphs: ["We can plan themes, build an editorial calendar, conduct efficient interviews, draft and revise content, then adapt approved ideas for the channels where your audience already pays attention."] },
    ],
    faqs: [
      { question: "How do you make the content sound like the executive?", answer: "We study interviews, existing communications, preferred language, recurring ideas, and review feedback to build a practical voice profile." },
      { question: "Can you support technical or regulated industries?", answer: "Yes. Projects can include specialist research and designated legal, compliance, or subject-matter review." },
      { question: "Can one idea be adapted across multiple channels?", answer: "Yes. An approved core argument can be developed into articles, posts, talks, reports, and interview material without making every format feel duplicated." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "seo-blog-writing": {
    title: "SEO Blog Writing That Earns Attention and Trust",
    intro: ["Search visibility depends on useful content that satisfies real reader intent. We combine subject research, editorial quality, and on-page structure to create articles that support organic discovery and brand authority."],
    sections: [
      { heading: "Search Intent Before Keywords", paragraphs: ["We map each topic to the reader’s question, funnel stage, and next useful action. Keywords guide coverage, while clarity, expertise, and completeness guide the writing."], points: ["Intent and topic-cluster planning", "Original research and specialist input", "Headings, links, metadata guidance, and readable structure"] },
      { heading: "Content for Pillars, Clusters, and Campaigns", paragraphs: ["Support can include long-form pillar pages, supporting articles, comparisons, explainers, case-led posts, expert commentary, and refreshes of existing content that has lost relevance or rankings."] },
      { heading: "A Repeatable Editorial Workflow", paragraphs: ["Projects move through strategy, brief approval, research, specialist drafting, fact review, SEO editing, brand review, and delivery in the required publishing format."] },
    ],
    faqs: [
      { question: "Do you guarantee first-page rankings?", answer: "No ethical provider can guarantee a specific ranking. We create high-quality, search-aligned content; results also depend on site authority, technical SEO, competition, links, and distribution." },
      { question: "Can you match our brand voice?", answer: "Yes. We use your style guide, existing content, audience profile, and review feedback to maintain a consistent voice." },
      { question: "Can you work with subject-matter experts?", answer: "Yes. Interviews and specialist review can be included for technical, regulated, or highly specialized topics." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "speech-writing": {
    title: "Speechwriting That Gives Your Ideas a Memorable Voice",
    intro: ["A speech must sound natural aloud, connect with a specific audience, and achieve a clear purpose in a limited time. We shape your message for rhythm, clarity, credibility, and live delivery."],
    sections: [
      { heading: "Built for the Speaker and the Room", paragraphs: ["We define the occasion, audience, objective, timing, and speaker’s natural language before drafting. The script balances argument, story, emphasis, and memorable phrasing without sounding written for the page."], points: ["Executive keynotes and presentations", "Policy, public affairs, and ceremonial remarks", "Motivational, wedding, and personal speeches"] },
      { heading: "Voice, Message, and High-Stakes Moments", paragraphs: ["Sensitive announcements and public positions require disciplined language. We help align the speech with organizational goals and can incorporate legal, policy, or stakeholder review where needed."] },
      { heading: "From Interview to Delivery Script", paragraphs: ["The process includes voice discovery, message strategy, outline approval, staged drafting, revisions, and a final delivery format with optional emphasis, pause, and timing notes."] },
    ],
    faqs: [
      { question: "What kinds of speeches can you write?", answer: "We support executive keynotes, conference talks, internal communications, policy remarks, presentations, ceremonies, weddings, and personal occasions." },
      { question: "Can you work with an existing presentation or rough draft?", answer: "Yes. We can restructure existing material, clarify the central message, improve flow, and align the spoken script with slides." },
      { question: "Will it sound natural when I deliver it?", answer: "Yes. Voice interviews, read-aloud editing, timing, and revision help the speech fit your vocabulary, cadence, and speaking style." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  songwriting: {
    title: "Songwriting Services Built Around Your Sound, Story, and Audience",
    intro: ["A memorable song brings meaning, rhythm, and emotional precision together. We help artists, performers, producers, brands, and private clients develop original lyrics and song concepts shaped around a clear voice, genre, and purpose."],
    sections: [
      { heading: "A Songwriting Partner Who Starts with Your Vision", paragraphs: ["The work begins with the feeling, story, message, or moment you want the song to carry. We discuss influences, intended audience, performance context, vocal identity, tone, and any existing melody or musical direction before developing the lyric concept.", "You can arrive with a title, rough verse, voice note, instrumental, personal story, or only an idea. The songwriter builds from the material you have while preserving the intention that made you want to create the song in the first place."], points: ["Original song concepts and lyrical themes", "Lyrics written to an existing melody or instrumental", "Development of unfinished verses, hooks, and choruses"] },
      { heading: "Lyrics with Structure, Rhythm, and Emotional Impact", paragraphs: ["Effective lyrics must read well and sing naturally. We shape syllable count, stress, rhyme, imagery, repetition, point of view, and narrative progression so each section supports the music and leads listeners toward the hook.", "The draft is reviewed for performability as well as meaning. Where a melody or demo is supplied, revisions account for phrasing, breath, tempo, and the artist’s vocal range or delivery style."], image: "/images/ghostwriting/celebrity-life-writing/research-writer.png", imageAlt: "Songwriter drafting and refining original lyrics", imageSide: "right" },
      { heading: "Songwriting Across Genres and Creative Formats", paragraphs: ["Every genre has its own relationship with language, rhythm, repetition, and storytelling. The writer is selected according to the project’s creative direction rather than applying one generic lyrical style to every song."], points: ["Pop, rock, indie, and alternative", "R&B, soul, hip-hop, and spoken-word influences", "Country, folk, and acoustic storytelling", "Commercial jingles and brand songs", "Personal tribute, wedding, and commemorative songs"] },
      { heading: "A Complete, Collaborative Songwriting Process", paragraphs: ["After the creative brief, we develop thematic directions and a working structure, then draft the verses, chorus, bridge, and hook as required. Feedback rounds refine the language, musical fit, and emotional tone before final delivery.", "Depending on the agreed scope, deliverables may include a polished lyric sheet, alternate lines or hooks, structure notes, melody guidance, or coordination with a client-provided producer or composer. Recording and music production are included only when specifically stated in the proposal."], points: ["Creative brief and reference review", "Concept, hook, and song-structure development", "Drafting and collaborative revisions", "Final lyric sheet and agreed supporting materials"] },
      { heading: "Clear Scope, Credits, and Rights from the Start", paragraphs: ["Songwriting arrangements can involve ghostwriting, work-for-hire terms, shared writing credits, or other negotiated rights. Before work begins, the proposal defines the deliverables, revision rounds, intended use, confidentiality, credit, and ownership terms for the engagement.", "Storybound House does not assume that every project needs the same rights structure. If composition, publishing splits, mechanical rights, master ownership, or performing-rights registration are involved, those responsibilities should be documented with the relevant music professionals and agreements."], points: ["Confidential project handling", "Defined authorship and credit terms", "Clear ownership and usage rights", "Transparent deliverables and revision limits"] },
      { heading: "Songwriting Support at a Scope That Fits the Project", paragraphs: ["Pricing depends on the number of songs, how much source material already exists, whether lyrics must fit a melody, the number of creative directions requested, revision depth, deadlines, and any additional production coordination.", "A single personal song requires a different process from an EP, album, brand campaign, or ongoing artist collaboration. We review the complete brief before recommending a practical scope and schedule."], points: ["Single-song and multi-song engagements", "Support for early concepts or partial drafts", "Defined review milestones", "Optional ongoing creative collaboration"] },
    ],
    faqs: [
      { question: "Can you write lyrics to my existing melody or instrumental?", answer: "Yes. Provide the track, tempo information if available, reference material, and any required structure. The writer will develop lyrics around the phrasing and musical constraints." },
      { question: "Can you improve lyrics I have already written?", answer: "Yes. Support can range from focused line editing and hook development to a full structural rewrite, depending on what the song needs and what you want to preserve." },
      { question: "Which musical genres can you support?", answer: "Projects can cover pop, rock, indie, R&B, soul, hip-hop, country, folk, acoustic, spoken-word-influenced work, jingles, and personal songs. Writer matching depends on the specific brief." },
      { question: "Does songwriting include melody and music production?", answer: "Only when those services are explicitly included in the proposal. Lyric writing, composition, demo creation, recording, mixing, and mastering are separate deliverables." },
      { question: "How are credits and ownership handled?", answer: "The agreement defines whether the work is ghostwritten, work for hire, credited, or subject to another negotiated arrangement. Music publishing and royalty matters should also be documented with appropriate industry advice." },
      { question: "How many revisions are included?", answer: "The number of revision rounds is set in the proposal. Feedback is most effective when it is consolidated and tied to the approved creative brief." },
      sharedFaq.confidentiality,
    ],
  },
  "screenplay-ghostwriting": {
    title: "Screenplay Writing That Turns Concepts into Production-Ready Scripts",
    intro: ["Film and television demand visual storytelling, disciplined structure, economical dialogue, and exact formatting. We help develop original concepts and adaptations into polished scripts built for the intended format."],
    sections: [
      { heading: "Story Architecture for the Screen", paragraphs: ["We develop premise, character goals, conflict, pacing, scenes, and visual action before the script is written. Every sequence must advance the story and create a playable experience rather than explaining what prose could simply describe."], points: ["Feature-film and television structure", "Character arcs, scene objectives, and dialogue", "Industry-standard screenplay formatting"] },
      { heading: "Features, Pilots, Series Bibles, and Adaptations", paragraphs: ["Support can include feature screenplays, pilots, episodic outlines, series bibles, script doctoring, and adaptation of books or true stories for screen, subject to the client’s underlying rights."] },
      { heading: "A Development Process Ready for the Next Conversation", paragraphs: ["Concept discovery leads to a treatment or outline, draft screenplay, structured review cycles, and final polish. Pitch-facing supporting material can be scoped separately where required."] },
    ],
    faqs: [
      { question: "Can you start from only a concept?", answer: "Yes. We can develop a premise into characters, structure, treatment, and a screenplay through approved stages." },
      { question: "Can you adapt my book or life story?", answer: "Yes, provided you control the necessary rights. Adaptation reshapes material for visual pacing, scenes, performance, and screen structure." },
      { question: "Do you guarantee production or representation?", answer: "No. We deliver professional creative materials, while agents, producers, financiers, studios, and platforms make independent decisions." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "social-media-ghostwriting": {
    title: "Social Media Writing That Builds Consistent Authority",
    intro: ["A credible social presence requires a recognizable voice, useful ideas, and a publishing rhythm your team can sustain. We turn expertise into platform-aware content without reducing it to generic posts."],
    sections: [
      { heading: "One Voice, Adapted for Each Platform", paragraphs: ["A strong voice remains consistent while format and pacing change. We adapt ideas for LinkedIn, Instagram, Facebook, and other agreed channels using the conventions readers expect on each platform."], points: ["Executive and founder thought leadership", "Community and brand storytelling", "Campaign, launch, and educational content"] },
      { heading: "From Content Pillars to Ready-to-Schedule Posts", paragraphs: ["We establish themes, mine interviews and existing material for ideas, draft platform-specific posts, and deliver approved copy with hooks, calls to action, and optional creative briefs."] },
      { heading: "A Partnership Built for Consistency", paragraphs: ["A practical workflow covers strategy, voice capture, calendar planning, drafting, compliance or brand review, and performance-informed refinement without chasing every short-lived trend."] },
    ],
    faqs: [
      { question: "Which platforms can you support?", answer: "Projects commonly cover LinkedIn, Instagram, and Facebook, with other platforms scoped according to audience and format needs." },
      { question: "How do you capture an executive’s voice?", answer: "We use interviews, existing communications, approved examples, vocabulary preferences, and feedback to create a repeatable voice guide." },
      { question: "Do you post directly to our accounts?", answer: "The standard service can deliver ready-to-schedule content. Direct publishing or tool integration is included only when explicitly defined in the project scope." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "whitepaper-writing": {
    title: "White Papers That Turn Complex Evidence into Decision-Making Value",
    intro: ["An effective white paper explains a meaningful problem, establishes authority, and guides readers toward an informed next step. We combine research, expert insight, and structured argument for demanding professional audiences."],
    sections: [
      { heading: "Research-Led Authority", paragraphs: ["We define the audience, central problem, evidence requirements, and intended action before drafting. Claims are connected to credible sources and the argument remains useful even when supporting a commercial objective."], points: ["B2B problem-and-solution papers", "Research, policy, and technical reports", "Executive and market education assets"] },
      { heading: "Content and Visual Structure Working Together", paragraphs: ["The manuscript can include tables, charts, diagrams, callouts, case evidence, and design briefs so complex ideas remain accessible and the document moves smoothly into production."] },
      { heading: "From Source Interviews to Deployment-Ready Copy", paragraphs: ["The process covers discovery, source review, expert interviews, outline approval, drafting, fact review, editing, and final handoff for design and distribution."] },
    ],
    faqs: [
      { question: "How long should a white paper be?", answer: "Length depends on the audience, subject, evidence, and use. Most projects are scoped after the research and conversion goal are clear." },
      { question: "Can you conduct interviews and secondary research?", answer: "Yes. The agreed scope can include internal expert interviews, source research, and synthesis of client-provided data." },
      { question: "Can you help plan charts and design elements?", answer: "Yes. We can recommend visual opportunities and provide briefs, labels, captions, or source notes for the design team." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "ebook-writing": {
    title: "Ebook Writing That Turns Expertise into a Useful Digital Asset",
    intro: ["An ebook can educate prospects, generate leads, support a course, or build authority. We shape your expertise into focused digital content designed for the reader, objective, and distribution format."],
    sections: [
      { heading: "A Clear Job for Every Ebook", paragraphs: ["We begin with the audience and desired outcome, then define the promise, scope, structure, and call to action. This prevents an ebook from becoming a loose collection of ideas without momentum."], points: ["Business and lead-generation ebooks", "Expert, educational, and self-help guides", "Narrative, memoir, and fiction projects"] },
      { heading: "Designed for Digital Reading", paragraphs: ["Short sections, informative headings, examples, summaries, checklists, and visual-content briefs help readers navigate the book across common screen sizes and formats."] },
      { heading: "From Knowledge Capture to Final Manuscript", paragraphs: ["Interviews and source review lead to an approved outline, staged drafting, revisions, editorial polish, and a manuscript prepared for the agreed design or publishing workflow."] },
    ],
    faqs: [
      { question: "How long should an ebook be?", answer: "The right length depends on its purpose and audience. A focused lead magnet may be short, while a commercial or educational ebook may require a full-length manuscript." },
      { question: "Can you turn existing material into an ebook?", answer: "Yes. Courses, articles, presentations, interviews, and notes can be reorganized and rewritten into a cohesive digital book." },
      { question: "Can you help after the manuscript is complete?", answer: "Editing, cover design, formatting, and publishing assistance can be scoped as additional services." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  biography: {
    title: "Biography Writing That Preserves a Life with Depth and Integrity",
    intro: ["A biography turns research, memory, context, and character into the story of another person’s life. We help families, leaders, organizations, and public figures create engaging, carefully documented narratives."],
    sections: [
      { heading: "The Life Behind the Public Record", paragraphs: ["Interviews, archives, timelines, and historical context help us move beyond a list of achievements. We look for the choices, relationships, conflicts, and turning points that reveal the person behind the milestones."], points: ["Personal, family, and legacy biographies", "Corporate and executive biographies", "Research-led public or historical lives"] },
      { heading: "Research, Structure, and Narrative Balance", paragraphs: ["A clear chronology anchors the facts while themes give the story meaning. We reconcile sources, flag uncertainty, and shape a readable narrative without inventing unsupported events."] },
      { heading: "A Collaborative Five-Stage Process", paragraphs: ["Discovery and scope lead to interviews and research, structural blueprint, staged drafting, fact review, editing, and final manuscript delivery."] },
      { heading: "A Biography Partner Who Learns the Whole Person", paragraphs: ["The strongest biographies grow from more than dates and achievements. Our writers study the subject’s ambitions, relationships, private concerns, public responsibilities, and historical setting to understand what truly shaped the life.", "We stay close to the client throughout discovery, interviews, drafting, and review. Each milestone creates a clear opportunity to correct the record, add missing context, and make sure the finished narrative reflects the subject with accuracy and humanity."], image: "/images/ghostwriting/life-writing/biographer-at-work.png", imageAlt: "Professional biographer writing notes during research", imageSide: "right" },
      { heading: "What Sets Our Biography Writing Apart", paragraphs: ["A polished biography needs rigorous research and confident storytelling in equal measure. We organize complex source material, maintain a clear chronology, and turn documented experience into scenes and chapters that readers want to follow."], points: ["Thorough interviews and source research", "Clear milestones and timely project updates", "Collaborative fact and manuscript reviews", "Original, professionally edited writing", "A scope shaped around your audience and goals"] },
      { heading: "Captivate Readers and Strengthen a Lasting Legacy", paragraphs: ["Whether the book is intended for family, the public, an organization, or a professional audience, we build the narrative around the readers it needs to reach. Strong openings, purposeful chapter arcs, and carefully chosen details make a documented life feel immediate.", "The result is a thoughtful account that preserves achievements, reveals character, and gives future readers a reliable way to understand the person behind the name."] },
    ],
    faqs: [
      { question: "What source material is useful for a biography?", answer: "Interviews, letters, journals, photographs, records, press coverage, speeches, and family or colleague testimony can all contribute." },
      { question: "Can you write about someone who is no longer living?", answer: "Yes. The project can rely on archives, records, existing publications, and interviews with people who knew the subject." },
      { question: "How do you handle conflicting accounts?", answer: "We compare sources, document uncertainty, and work with the client to choose a responsible, transparent treatment." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "informative-writing": {
    title: "Informative Writing That Gives Complex Knowledge Clarity",
    intro: ["Informative content should help readers understand a subject without confusion, unsupported claims, or unnecessary jargon. We structure expert knowledge into accurate, audience-focused material with a clear purpose."],
    sections: [
      { heading: "Clarity Without Oversimplification", paragraphs: ["We define what the reader knows, what they need to learn, and how they will use the information. Research and examples then support a logical progression from context to understanding."], points: ["Books, guides, manuals, and reports", "Articles, white papers, and educational resources", "Professional and thought-leadership content"] },
      { heading: "Custom Content for the Intended Reader", paragraphs: ["Tone, terminology, evidence, examples, and structure are calibrated for students, professionals, decision-makers, customers, or general readers rather than reused across audiences."] },
      { heading: "A Research and Editorial Process You Can Review", paragraphs: ["Scope definition leads to source analysis, outline approval, staged drafting, author or specialist review, developmental editing, line editing, and final polish."] },
      { heading: "Informative Ghostwriters Who Understand the Subject and the Reader", paragraphs: ["Useful informative writing needs a voice suited to its purpose and evidence strong enough to support its claims. We match the project with a writer who can work confidently with the subject, then define the audience, format, depth, and desired reader outcome before drafting begins.", "Research is translated into a logical narrative with clear explanations, relevant examples, and facts placed in context. The goal is to help readers understand and retain the material without flattening specialist knowledge or filling the page with unnecessary terminology."], image: "/images/ghostwriting/informative-writing/research-writer.png", imageAlt: "Informative content writer researching beside a laptop", imageSide: "right" },
      { heading: "What Sets Our Informative Writing Process Apart", paragraphs: ["Source quality matters as much as writing quality. We prioritize current, relevant, and attributable materials, keep a working record of key references, and flag claims that require client or subject-matter confirmation.", "A staged review process gives you the opportunity to correct assumptions, refine terminology, and confirm whether the content answers the reader’s real questions. Final editing checks structure, consistency, readability, and the responsible presentation of facts and figures."], points: ["Audience and information-needs analysis", "Credible, relevant source selection", "Clear distinction between evidence and interpretation", "Client or specialist review checkpoints", "Editorial checks for clarity and consistency"] },
    ],
    faqs: [
      { question: "What projects require informative writing?", answer: "Projects can include books, technical manuals, educational content, reports, articles, white papers, guides, and expert explainers." },
      { question: "Can you work with specialist or academic material?", answer: "Yes. We organize supplied research and can incorporate additional source work and expert review as defined in the scope." },
      { question: "How do you keep content current and accurate?", answer: "We date source research where relevant, flag claims requiring confirmation, and build client or specialist review into the workflow." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  autobiography: {
    title: "Autobiography Writing for the Complete Story of Your Life",
    intro: ["An autobiography records the broader arc of your life in your own voice. We help organize decades of memories, achievements, relationships, and historical context into a coherent legacy manuscript."],
    sections: [
      { heading: "A Life Story with Chronology and Meaning", paragraphs: ["A complete timeline provides factual structure, while themes reveal how experiences connect. Interviews and source materials help recover detail and keep the narrative vivid rather than merely documentary."], points: ["Chronological life mapping", "Voice-led interviews and memory prompts", "Fact review, archives, and historical context"] },
      { heading: "Autobiography and Memoir Serve Different Goals", paragraphs: ["An autobiography usually covers the span of a life and its achievements; a memoir focuses closely on a defining period or theme. We help choose the form that best serves your story and intended readers."] },
      { heading: "A Private, Collaborative Journey", paragraphs: ["Discovery and timeline development lead to recorded interviews, outline approval, incremental chapters, review, fact checking, editing, and final delivery."] },
      { heading: "Your Story, Developed Through Close Collaboration", paragraphs: ["An autobiography must sound like the person who lived it. Guided interviews help us understand your goals, concerns, voice, and the meaning you attach to each stage of your life. We listen for the memories and perspectives that cannot be found in a résumé or public record.", "You remain involved as the manuscript develops. Chapter reviews, scheduled updates, and direct feedback keep the work aligned with your intentions while giving the writer enough structure to maintain momentum."], image: "/images/ghostwriting/life-writing/collaborative-writing.png", imageAlt: "Two people collaborating on a life story manuscript", imageSide: "left" },
      { heading: "Research and Review That Keep the Record Reliable", paragraphs: ["Personal memory is the heart of an autobiography, while documents and outside context help support it. Photographs, letters, calendars, speeches, press coverage, and optional family interviews can clarify chronology and restore important detail."], points: ["A complete life timeline and story blueprint", "Research organized around your existing records", "Regular opportunities to verify names, dates, and events", "Developmental and line editing before delivery"] },
      { heading: "A Life Story Written to Reach Future Readers", paragraphs: ["We shape the manuscript for the people you want to reach, from family and colleagues to a wider public readership. The writing balances personal reflection with vivid scenes and historical context so readers understand both what happened and why it mattered.", "Your final manuscript is designed to preserve your voice, achievements, lessons, and turning points in a form that can continue into book design and publishing preparation when required."] },
    ],
    faqs: [
      { question: "Do I need complete records before we begin?", answer: "No. Interviews can begin with what you remember, while photographs, documents, calendars, and family input help rebuild the timeline." },
      { question: "How long does an autobiography take?", answer: "A comprehensive project commonly takes many months because it requires extensive interviews, chronology, research, drafting, and review." },
      { question: "Can family members contribute?", answer: "Yes. With your approval, additional interviews can add context, corroboration, and perspectives." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
  "celebrity-biographies-autobiographies": {
    title: "Celebrity Life Stories Written with Depth, Accuracy, and Discretion",
    intro: ["A public life is experienced in private before it is understood by an audience. We help performers, athletes, creators, executives, public figures, estates, and authorized representatives develop biographies and autobiographies that reveal the person behind the public record."],
    sections: [
      { heading: "An Extraordinary Journey, Shaped into a Complete Narrative", paragraphs: ["Recognition may bring public milestones, but a compelling life story also needs the decisions, setbacks, relationships, and private turning points that gave those moments meaning. We build a narrative arc that connects achievement with the human experience behind it.", "The project can take the form of a first-person autobiography or an authorized third-person biography. Early discovery establishes the viewpoint, audience, boundaries, and degree of access before the manuscript structure is approved."], points: ["Celebrity and public-figure autobiographies", "Authorized biographies and estate-led projects", "Career, legacy, and behind-the-scenes narratives"] },
      { heading: "Covering the Moments That Matter", paragraphs: ["A high-profile life can generate an overwhelming amount of material. We identify the experiences that define the story, then organize them around a clear emotional and chronological journey rather than a catalogue of appearances and accomplishments.", "Interviews explore formative influences, pivotal work, public pressure, relationships, reinvention, and the lessons the subject wants readers to carry forward."], image: "/images/ghostwriting/celebrity-life-writing/readers-and-books.png", imageAlt: "Readers surrounded by books and published editions", imageSide: "right" },
      { heading: "Thorough Research and Responsible Fact Handling", paragraphs: ["Books about recognizable people demand a careful source process. We review supplied archives, published interviews, press coverage, photographs, recordings, timelines, and approved third-party testimony to distinguish established facts from recollection and interpretation.", "Conflicting accounts, sensitive claims, permissions, and gaps in the record are flagged for discussion. Where appropriate, the client can involve legal counsel or specialist reviewers before publication."], points: ["Source and chronology mapping", "Recorded interviews and archive review", "Fact queries and documented client approvals", "Coordination with authorized advisers"] },
      { heading: "A Voice That Sounds Personal, Never Manufactured", paragraphs: ["For an autobiography, the writer studies cadence, humor, vocabulary, values, and the way the subject makes sense of experience. Drafts are developed through repeated conversations and review so the finished prose feels natural to the person whose name will appear on the cover.", "For a biography, the voice remains authoritative and readable while preserving complexity. We avoid turning a full life into publicity copy or forcing the subject into a single, simplified image."], image: "/images/ghostwriting/celebrity-life-writing/research-writer.png", imageAlt: "Ghostwriter researching and drafting a celebrity life story", imageSide: "left" },
      { heading: "Discreet Collaboration for High-Profile Projects", paragraphs: ["Public visibility makes privacy, access, and coordination especially important. The engagement can include limited-access materials, designated points of contact, scheduled interviews, controlled draft circulation, and defined approval stages.", "Every project is scoped around the subject’s availability and the number of stakeholders involved. Communications and working files are handled confidentially, with final approval and ownership governed by the project agreement."], points: ["Confidential communications and controlled access", "A clear approval path for subjects and representatives", "Review stages designed around demanding schedules", "Defined rights, credits, and deliverables"] },
      { heading: "From First Interview to Publication Preparation", paragraphs: ["The process moves through positioning, interviews, research, life mapping, outline approval, staged drafting, fact review, developmental editing, and line editing. This creates space for both creative discovery and responsible verification.", "When included in the engagement, support can continue into book design and publishing preparation. Distribution, publicity, and marketing outcomes depend on the chosen publishing path and are planned as separate, transparent services."], points: ["Narrative strategy and chapter blueprint", "Collaborative drafts and revisions", "Editorial and factual quality control", "Optional design and publishing support"] },
    ],
    relatedBooks: [
      { src: "/images/ghostwriting/celebrity-life-writing/lyndon-johnson.png", title: "The Years of Lyndon Johnson", author: "Robert A. Caro" },
      { src: "/images/ghostwriting/celebrity-life-writing/virginia-woolf.png", title: "Virginia Woolf", author: "Hermione Lee" },
      { src: "/images/ghostwriting/celebrity-life-writing/life-in-the-garden.png", title: "Life in the Garden", author: "Penelope Lively" },
    ],
    faqs: [
      { question: "What is the difference between a celebrity biography and autobiography?", answer: "An autobiography is told in the subject’s first-person voice. A biography is written about the subject in third person and may be authorized by the subject, family, estate, or representative." },
      { question: "Can you work through a manager, agent, family office, or estate?", answer: "Yes. We can establish a designated contact, approval process, interview schedule, and controlled access to materials at the start of the engagement." },
      { question: "How do you handle sensitive or disputed events?", answer: "We document sources, distinguish recollection from confirmed fact, flag conflicting accounts, and recommend specialist or legal review where appropriate." },
      { question: "Can the writer capture an established public voice?", answer: "Yes. Interviews, recordings, speeches, and existing material help the writer understand cadence, humor, vocabulary, and point of view while developing original prose." },
      { question: "Can you accommodate a limited public figure schedule?", answer: "Yes. Interview blocks, source collection, stakeholder reviews, and approvals can be planned around availability, provided the agreed milestones remain realistic." },
      sharedFaq.confidentiality,
      sharedFaq.ownership,
    ],
  },
  memoir: {
    title: "Memoir Writing That Gives a Defining Experience Lasting Meaning",
    intro: ["A memoir focuses on the period, relationship, challenge, or transformation that changed you. We help discover its emotional center and shape lived experience into a compelling, honest narrative."],
    sections: [
      { heading: "The Story Beneath the Sequence of Events", paragraphs: ["A meaningful memoir is guided by a central question or transformation. We select scenes, memories, and reflections that serve that arc rather than attempting to include every event."], points: ["A focused theme and reader promise", "Scene-based storytelling and reflection", "A voice that remains recognizably yours"] },
      { heading: "Emotional Truth with Editorial Discipline", paragraphs: ["Sensitive personal material needs both care and craft. We preserve nuance, flag privacy or verification concerns, and help decide what belongs on the page, what needs context, and what may require specialist review."] },
      { heading: "From Memory Interviews to a Finished Manuscript", paragraphs: ["Discovery leads to a memoir map, recorded interviews, staged drafting, collaborative review, developmental editing, line editing, and final manuscript delivery."] },
      { heading: "We Tap into Deep Emotion Without Losing Your Voice", paragraphs: ["The memoirs readers remember feel intimate without becoming shapeless. Through guided conversations, memory prompts, and careful listening, we find the details that give each scene its emotional weight: what was said, what went unsaid, and why the moment still matters.", "Your writer turns those memories into vivid scenes while preserving your natural rhythm, perspective, and restraint. You review the work in stages, so the manuscript grows around a voice and emotional truth that still feel unmistakably yours."], image: "/images/ghostwriting/memoir/emotional-writing.png", imageAlt: "Writer developing a memoir manuscript on a laptop", imageSide: "right" },
      { heading: "A Complete Memoir Partnership at an Accessible Scope", paragraphs: ["Every life story needs a different level of support. We shape the proposal around your material, manuscript length, research needs, and publishing goals, then divide the work into clear stages with defined review rounds.", "Support can continue from discovery and ghostwriting through editing, book design, and publishing preparation. You always know what is included, what comes next, and how each stage moves the book toward a finished manuscript."], points: ["A scope and schedule built around your story", "Clear milestones and collaborative reviews", "Optional editing, design, and publishing support"], image: "/images/ghostwriting/memoir/books-and-craft.png", imageAlt: "A curated collection of books beside a wooden artist's hand", imageSide: "left" },
      { heading: "Why Memoir Authors Trust Storybound House", paragraphs: ["Memoir asks you to place private memories and important relationships in someone else’s hands. We earn that trust through confidentiality, careful communication, and editorial decisions grounded in the story you want to tell.", "You retain final approval and ownership according to your project agreement. Our role is to bring structure, craft, and dependable momentum to the process while protecting the personal voice at the heart of the book."], points: ["Confidential, voice-led collaboration", "Dependable milestones and communication", "Complete ownership under your agreement", "Careful editorial and fact review"], image: "/images/ghostwriting/memoir/trusted-writer.png", imageAlt: "Experienced memoir writer working at a desk", imageSide: "right" },
    ],
    faqs: [
      { question: "What is the difference between memoir and autobiography?", answer: "A memoir explores a focused period or theme, while an autobiography usually follows the broader chronology of a life." },
      { question: "Can you work from only memories and a few notes?", answer: "Yes. Guided interviews and memory prompts can uncover scenes, chronology, characters, and sensory detail." },
      { question: "How do you handle sensitive people and events?", answer: "We discuss privacy, consent, corroboration, and narrative purpose, and flag material that may need legal or sensitivity review." },
      sharedFaq.confidentiality, sharedFaq.ownership,
    ],
  },
};

export function GhostwritingSpecialtyContent({ specialty }: { specialty: string }) {
  const content = specialtyContent[specialty];
  if (!content) return null;
  return (
    <section className="nonFictionTopicContent ghostwritingSpecialtyContent" aria-labelledby={`${specialty}-content-title`}>
      <div className="nonFictionTopicInner">
        <h2 id={`${specialty}-content-title`}>{content.title}</h2>
        {content.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        {content.sections.map(section => <section className={`nonFictionTopicSection${section.image ? " ghostwritingEditorialSection" : ""}${section.imageSide === "left" ? " ghostwritingEditorialSectionReverse" : ""}`} key={section.heading}>
          <div className="ghostwritingEditorialCopy">
            <h2>{section.heading}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {section.points ? <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul> : null}
          </div>
          {section.image ? <div className="ghostwritingEditorialMedia"><Image src={section.image} alt={section.imageAlt ?? ""} width={850} height={574} sizes="(max-width: 760px) 100vw, 42vw" /></div> : null}
        </section>)}
        {content.relatedBooks ? <section className="ghostwritingRelatedBooks" aria-labelledby={`${specialty}-related-books-title`}>
          <div className="ghostwritingRelatedBooksHeading"><p className="eyebrow">Selected reading</p><h2 id={`${specialty}-related-books-title`}>Notable Life Writing</h2><p>Examples of distinguished biography and autobiographical writing that demonstrate the range of the form.</p></div>
          <div className="ghostwritingRelatedBooksGrid">{content.relatedBooks.map(book => <article key={book.title}><Image src={book.src} alt={`Cover of ${book.title}`} width={280} height={420} sizes="(max-width: 760px) 45vw, 180px" /><h3>{book.title}</h3><p>By {book.author}</p></article>)}</div>
        </section> : null}
        <section className="nonFictionFaqSection" aria-labelledby={`${specialty}-faq-title`}>
          <div className="nonFictionFaqHeading"><p className="eyebrow">Questions before you begin</p><h2 id={`${specialty}-faq-title`}>Frequently Asked Questions</h2></div>
          <div className="nonFictionFaqList">{content.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        </section>
      </div>
    </section>
  );
}
