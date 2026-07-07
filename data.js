// ═══════════════════════════════════════════════════════════════
// CODE EXECUTION — Content Data
// Updated: 2026-06-21 (this week: Jun 15-21)
// ═══════════════════════════════════════════════════════════════

const SITE_DATA = {
  lastUpdated: "2026-07-07",
  models: [
    {
      tag: "Anthropic",
      tagClass: "",
      date: "Anthropic · Jun 9, 2026",
      title: "Claude Fable 5 & Mythos 5",
      description: "Dual model release. Fable 5 and Mythos 5 are Anthropic's latest tier models. Subsequently subject to US government export control directive suspending access.",
      sourceUrl: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      sourceLabel: "anthropic.com",
      svgLabel1: "DUAL_MODEL_RELEASE",
      svgTitle: "FABLE 5",
      svgTitle2: "MYTHOS 5",
      svgDate: "JUN 2026 · RESTRICTED ACCESS",
      svgSub: "EXPORT CONTROL SUBJECT"
    },
    {
      tag: "Google",
      tagClass: "",
      date: "Google DeepMind · Jun 2026",
      title: "Gemini Omni & Gemini 3.5",
      description: "Google DeepMind's latest models with native multimodal capabilities across text, image, audio, and video. Gemini Omni brings unified perception, while 3.5 pushes reasoning boundaries.",
      sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/",
      sourceLabel: "blog.google",
      svgLabel1: "GOOGLE_DEEPMIND",
      svgTitle: "GEMINI OMNI",
      svgTitle2: "+ GEMINI 3.5",
      svgDate: "MULTIMODAL · 2026",
      svgSub: "TEXT · IMAGE · AUDIO · VIDEO"
    },
    {
      tag: "DeepSeek",
      tagClass: "amber",
      date: "DeepSeek · Jun 2026",
      title: "DeepSeek V4 (Preview)",
      description: "Preview release of DeepSeek V4 with world-top-tier reasoning performance and significantly upgraded agent capabilities. Available on web, app, and API. Continues the open-source tradition.",
      sourceUrl: "https://www.deepseek.com",
      sourceLabel: "deepseek.com",
      svgLabel1: "DEEPSEEK_PREVIEW",
      svgTitle: "V4 PREVIEW",
      svgDate: "WORLD-CLASS REASONING",
      svgSub: "OPEN-SOURCE · MIT LICENSE"
    },
    {
      tag: "Startup",
      tagClass: "amber",
      date: "Subquadratic · Jun 19, 2026",
      title: "Subquadratic — LLM Breakthrough",
      description: "A startup claims it broke through the attention bottleneck holding back LLMs. New model architecture could address quadratic scaling limits. Some remain skeptical — details now shared.",
      sourceUrl: "https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/",
      sourceLabel: "techreview.com",
      svgLabel1: "SUBQUADRATIC_AI",
      svgTitle: "SUBQUADRATIC",
      svgDate: "JUN 19 2026 · BREAKTHROUGH",
      svgSub: "SCALING BOTTLENECK SOLUTION?"
    },
    {
      tag: "Anthropic",
      tagClass: "",
      date: "Anthropic · May 28, 2026",
      title: "Claude Opus 4.8",
      description: "Anthropic's most capable model — upgraded with stronger coding, agentic task performance, and professional work. Designed for long-running autonomous tasks with improved consistency.",
      sourceUrl: "https://www.anthropic.com/news/claude-opus-4-8",
      sourceLabel: "anthropic.com",
      svgLabel1: "CLAUDE_OPUS_4.8",
      svgTitle: "OPUS 4.8",
      svgDate: "MAY 2026",
      svgSub: "CODING · AGENTIC · REASONING"
    }
  ],
  applications: [
    {
      tag: "Google",
      tagClass: "",
      date: "Google · Jun 2026",
      title: "Gemini for Science",
      description: "A new collection of science tools and experiments built on Gemini to expand the scale and precision of scientific exploration. AI-powered experiments for researchers.",
      sourceUrl: "https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/",
      sourceLabel: "blog.google",
      svgLabel1: "GOOGLE_RESEARCH",
      svgTitle: "GEMINI FOR",
      svgTitle2: "SCIENCE",
      svgDate: "IO 2026 · NEW ERA OF DISCOVERY"
    },
    {
      tag: "Google",
      tagClass: "",
      date: "Google Research · Jun 2026",
      title: "AMIE — Medical AI",
      description: "New research published in Nature shows how AMIE, Google's medical AI, could help manage health conditions. A diagnostic and management conversation agent for clinical use.",
      sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/google-research/amie-for-disease-management-in-nature/",
      sourceLabel: "blog.google",
      svgLabel1: "GOOGLE_RESEARCH · NATURE",
      svgTitle: "AMIE",
      svgDate: "DISEASE MANAGEMENT",
      svgSub: "PUBLISHED IN NATURE"
    },
    {
      tag: "DeepMind",
      tagClass: "",
      date: "Google DeepMind · Jun 2026",
      title: "Project Genie + Street View",
      description: "DeepMind's Project Genie expands to simulate real-world places using Street View data. Creates interactive, navigable environments from geographic data — a step toward world-model AI.",
      sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie-expands/",
      sourceLabel: "blog.google",
      svgLabel1: "GOOGLE_DEEPMIND",
      svgTitle: "PROJECT GENIE",
      svgDate: "SIMULATE REAL-WORLD PLACES",
      svgSub: "INTERACTIVE ENVIRONMENTS"
    },
    {
      tag: "DeepMind",
      tagClass: "",
      date: "Google DeepMind · Jun 2026",
      title: "Running Guide Agent",
      description: "A step towards running unbounded — DeepMind's research into agents that can operate autonomously over extended periods without human intervention. Tackles the \"unbounded execution\" problem.",
      sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/running-guide-agent/",
      sourceLabel: "blog.google",
      svgLabel1: "DEEPMIND_RESEARCH",
      svgTitle: "RUNNING GUIDE",
      svgDate: "RUNNING UNBOUNDED",
      svgSub: "EXTENDED-HORIZON TASKS"
    },
    {
      tag: "Anthropic",
      tagClass: "",
      date: "Anthropic · Jun 17, 2026",
      title: "Seoul Office + Korean AI Ecosystem",
      description: "Anthropic opens a Seoul office and announces new partnerships across the Korean AI ecosystem. Expanding presence in Asia with local collaborations and integrations.",
      sourceUrl: "https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem",
      sourceLabel: "anthropic.com",
      svgLabel1: "ANTHROPIC · ASIA",
      svgTitle: "SEOUL OFFICE",
      svgDate: "JUN 17 2026 · EXPANSION",
      svgSub: "KOREAN AI ECOSYSTEM"
    },
    {
      tag: "Google",
      tagClass: "",
      date: "Google · Jun 2026",
      title: "AI Content Provenance",
      description: "Google makes it easier to understand how content was created and edited — new tools for identifying AI-generated media online through provenance signals and metadata labels.",
      sourceUrl: "https://blog.google/innovation-and-ai/products/identifying-ai-generated-media-online/",
      sourceLabel: "blog.google",
      svgLabel1: "AI_TRANSPARENCY",
      svgTitle: "CONTENT PROVENANCE",
      svgDate: "IDENTIFY AI-GENERATED MEDIA",
      svgSub: "SIGNALS · LABELS · METADATA"
    }
  ],
  articles: [
    {
      source: "MIT Technology Review",
      date: "Jun 19, 2026",
      title: "A startup claims it broke through a bottleneck that's holding back LLMs",
      description: "Subquadratic has shared details about its new model architecture. Some remain skeptical, but the approach could address scaling limitations.",
      url: "https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/",
      sourceLabel: "techreview.com"
    },
    {
      source: "MIT Technology Review",
      date: "Jun 16, 2026",
      title: "Want to get a data center online quickly? Give it some flex.",
      description: "As the data-center boom puts pressure on the grid, companies say the answer isn't just more power plants but software that dials down centers' energy-guzzling ways when demand spikes.",
      url: "https://www.technologyreview.com/2026/06/16/1138591/data-center-online-quickly-electric-grid-flex/",
      sourceLabel: "techreview.com"
    },
    {
      source: "MIT Technology Review",
      date: "Jun 15, 2026",
      title: "Why do South Koreans love AI so much?",
      description: "From eldercare robots to humanoid monks, South Koreans just can't get enough of AI. An in-depth look at one of the most AI-enthusiastic cultures on Earth.",
      url: "https://www.technologyreview.com/2026/06/15/1138983/why-do-south-koreans-love-ai-so-much/",
      sourceLabel: "techreview.com"
    },
    {
      source: "Anthropic",
      date: "Jun 17, 2026",
      title: "Anthropic opens Seoul office and announces new partnerships across the Korean AI ecosystem",
      description: "Anthropic expands into Korea with a new Seoul office and partnerships across the Korean AI ecosystem. Signals major Asia push.",
      url: "https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem",
      sourceLabel: "anthropic.com"
    },
    {
      source: "MIT Technology Review",
      date: "Jun 11, 2026",
      title: "Google DeepMind is worried about what happens when millions of agents start to interact",
      description: "The firm is calling for more scientists to study the risks of multi-agent systems and emergent behaviors at scale.",
      url: "https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/",
      sourceLabel: "techreview.com"
    },
    {
      source: "MIT Technology Review",
      date: "Jun 5, 2026",
      title: "The Meta hack shows there's more to AI security than Mythos",
      description: "Some AI cybersecurity threats are incredibly simple. They're still dangerous — and not all risks require frontier-level capabilities.",
      url: "https://www.technologyreview.com/2026/06/05/1138437/the-meta-hack-shows-theres-more-to-ai-security-than-mythos/",
      sourceLabel: "techreview.com"
    },
    {
      source: "Anthropic",
      date: "Jun 12, 2026",
      title: "Results from the first Anthropic Public Record",
      description: "Anthropic publishes results from its first Public Record — a transparency initiative sharing safety and capability data.",
      url: "https://www.anthropic.com/news/anthropic-public-record",
      sourceLabel: "anthropic.com"
    },
    {
      source: "Anthropic",
      date: "Jun 3, 2026",
      title: "What we learned mapping a year's worth of AI-enabled cyber threats",
      description: "Anthropic's analysis of AI-enabled cyber threats mapped to the MITRE ATT&CK framework — a year of observations and lessons learned.",
      url: "https://www.anthropic.com/news/AI-enabled-cyber-threats-mitre-attack",
      sourceLabel: "anthropic.com"
    },
    {
      source: "arXiv",
      date: "Continuous",
      title: "arXiv cs.AI — Latest AI Research Papers",
      description: "The latest academic submissions in Artificial Intelligence, updated daily. Over 1,100 recent papers covering agents, reasoning, MoE, TTS, and more.",
      url: "https://arxiv.org/list/cs.AI/recent",
      sourceLabel: "arxiv.org"
    }
  ],
  sources: [
    { label: "anthropic.com/news", url: "https://www.anthropic.com/news", desc: "Official Anthropic announcements" },
    { label: "blog.google — Google DeepMind", url: "https://blog.google/technology/google-deepmind/", desc: "Google AI research blog" },
    { label: "MIT Technology Review — AI", url: "https://www.technologyreview.com/topic/artificial-intelligence/", desc: "Independent tech journalism" },
    { label: "arxiv.org — cs.AI", url: "https://arxiv.org/list/cs.AI/recent", desc: "Peer-reviewed preprints" },
    { label: "deepseek.com", url: "https://www.deepseek.com", desc: "DeepSeek official" },
    { label: "openai.com/news", url: "https://openai.com/news/", desc: "OpenAI announcements" }
  ]
};