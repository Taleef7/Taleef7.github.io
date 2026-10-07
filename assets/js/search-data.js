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
  },{id: "nav-news",
          title: "news",
          description: "Papers, talks, and career updates",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "First-author papers with Dr. Jonathan Rusert, and my master’s thesis",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching, mentoring, and academic service",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects and software I’ve built",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Academic CV and professional experience, updated October 2026.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-my-m-s-in-computer-science-at-purdue-university-fort-wayne",
          title: 'Started my M.S. in Computer Science at Purdue University Fort Wayne.',
          description: "",
          section: "News",},{id: "news-joined-medical-informatics-engineering-as-a-development-intern-and-built-rass-a-retrieval-augmented-search-service-over-3-000-redmine-issues",
          title: 'Joined Medical Informatics Engineering as a development intern and built RASS, a retrieval-augmented...',
          description: "",
          section: "News",},{id: "news-defended-my-m-s-thesis-do-efficient-adaptations-reduce-safety-jailbreak-robustness-of-peft-vs-full-fine-tuning-on-consumer-accessible-llms-and-graduated-from-purdue-fort-wayne-the-thesis-is-in-the-purdue-repository",
          title: 'Defended my M.S. thesis, Do Efficient Adaptations Reduce Safety? Jailbreak Robustness of PEFT...',
          description: "",
          section: "News",},{id: "news-started-as-a-software-developer-at-medical-informatics-engineering-i-m-the-sole-developer-of-workwell-measure-studio-which-computes-cms-clinical-quality-measures-from-fhir-data",
          title: 'Started as a Software Developer at Medical Informatics Engineering. I’m the sole developer...',
          description: "",
          section: "News",},{id: "news-our-two-semeval-2026-system-papers-are-out-in-the-acl-anthology-task-6-on-political-response-clarity-and-task-8-on-multi-turn-rag-i-presented-both-virtually-at-acl-2026",
          title: 'Our two SemEval 2026 system papers are out in the ACL Anthology: Task...',
          description: "",
          section: "News",},{id: "news-adaptation-not-algorithm-was-accepted-to-findings-of-aacl-ijcnlp-2026-across-five-open-weight-llms-we-find-that-lora-and-full-fine-tuning-cause-about-the-same-black-box-jailbreak-degradation",
          title: 'Adaptation, Not Algorithm was accepted to Findings of AACL-IJCNLP 2026. Across five open-weight...',
          description: "",
          section: "News",},{id: "news-released-the-code-result-tables-and-evaluator-labels-for-adaptation-not-algorithm-most-of-the-paper-s-statistics-can-be-recomputed-from-the-released-tables-in-about-a-minute-without-a-gpu",
          title: 'Released the code, result tables, and evaluator labels for Adaptation, Not Algorithm. Most...',
          description: "",
          section: "News",},{id: "news-your-judge-is-a-confound-was-accepted-as-an-oral-presentation-at-the-first-workshop-on-reliable-evaluation-for-language-models-judge-at-neurips-2026-it-was-also-accepted-at-advml-frontiers-cotma-at-colm-2026",
          title: 'Your Judge Is a Confound was accepted as an oral presentation at the...',
          description: "",
          section: "News",},{id: "projects-unlp-2026",
          title: 'UNLP 2026',
          description: "Ukrainian document question answering with retrieval and reranking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_unlp2026/";
            },},{id: "projects-workwell-measure-studio",
          title: 'WorkWell Measure Studio',
          description: "Clinical quality measure platform built on FHIR and CQL",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_workwell/";
            },},{id: "projects-m-s-thesis-peft-and-jailbreak-robustness",
          title: 'M.S. Thesis: PEFT and Jailbreak Robustness',
          description: "Does parameter-efficient fine-tuning make LLMs easier to jailbreak?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_peft_robustness/";
            },},{id: "projects-rass",
          title: 'RASS',
          description: "Retrieval-augmented semantic search over engineering issues",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_rass/";
            },},{id: "projects-semeval-2026-task-6-clarity",
          title: 'SemEval 2026 Task 6 (CLARITY)',
          description: "Multi-seed DeBERTa ensembles for political response clarity and evasion classification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_semeval2026_task6/";
            },},{id: "projects-patient-consent-smart-contracts",
          title: 'Patient Consent Smart Contracts',
          description: "Blockchain-based patient consent management",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_blockchain_consent/";
            },},{id: "projects-semeval-2026-task-8-mtrageval",
          title: 'SemEval 2026 Task 8 (MTRAGEval)',
          description: "Lightweight tri-fusion retrieval and faithful generation for multi-turn RAG",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_semeval2026_task8/";
            },},{id: "projects-semeval-2025-task-10",
          title: 'SemEval-2025 Task 10',
          description: "Narrative framing in multilingual online news",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_semeval2025/";
            },},{id: "projects-jobops-copilot",
          title: 'JobOps Copilot',
          description: "Multi-tenant AI agent platform for job-search operations",
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
          window.open("/assets/pdf/Taleef_Tamsal_CV.pdf", "_blank");
        },
      },{
        id: 'social-resume_pdf',
        title: 'Resume_pdf',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
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
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=movyQFQAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-7025-4842", "_blank");
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
