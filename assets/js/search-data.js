// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Research publications and works in progress",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching and mentorship experience",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research and development projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-unlp-2026",
          title: 'UNLP 2026',
          description: "Ukrainian document question answering with retrieval and reranking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_unlp2026/";
            },},{id: "projects-workwell-measure-studio",
          title: 'WorkWell Measure Studio',
          description: "Production compliance and measure operations platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_workwell/";
            },},{id: "projects-master-39-s-thesis-peft-and-jailbreak-robustness",
          title: 'Master&amp;#39;s Thesis: PEFT and Jailbreak Robustness',
          description: "Jailbreak robustness of PEFT versus full fine-tuning on consumer-accessible LLMs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_peft_robustness/";
            },},{id: "projects-rass",
          title: 'RASS',
          description: "Retrieval-Augmented Semantic Search platform for enterprise documents",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_rass/";
            },},{id: "projects-semeval-2026-task-6-clarity",
          title: 'SemEval 2026 Task 6 (CLARITY)',
          description: "Multi-seed DeBERTa ensembles for political response clarity and evasion classification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_semeval2026_task6/";
            },},{id: "projects-patient-consent-smart-contracts",
          title: 'Patient Consent Smart Contracts',
          description: "Blockchain-based patient consent management system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_blockchain_consent/";
            },},{id: "projects-semeval-2026-task-8-mtrageval",
          title: 'SemEval 2026 Task 8 (MTRAGEval)',
          description: "Lightweight tri-fusion retrieval and faithful generation for multi-turn RAG",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_semeval2026_task8/";
            },},{id: "projects-semeval-2025-task-10",
          title: 'SemEval-2025 Task 10',
          description: "Multilingual Narratives in Online News",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_semeval2025/";
            },},{id: "projects-jobops-copilot",
          title: 'JobOps Copilot',
          description: "Human-in-the-loop AI agent platform for job-search operations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_jobops_copilot/";
            },},{id: "projects-turboquant",
          title: 'TurboQuant',
          description: "KV-cache compression for long-context language models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_turboquant/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Taleef_Academic_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%61%6C%65%65%66%74%61%6D%73%61%6C@%68%6F%74%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Taleef7", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ttamsal", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
