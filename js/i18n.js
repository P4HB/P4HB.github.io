/**
 * i18n.js
 * ------------------------------------------------------------------
 * Single source of truth for Korean/English copy on the portfolio.
 * Project-specific copy lives in projects.js.
 * ------------------------------------------------------------------
 */

const I18N = {
  ko: {
    meta: {
      title: "P4HB | KAIST CS · AI Product Builder",
      description:
        "KAIST 전산학부에서 컴퓨터과학을 배우며 AI 기능, 웹/앱 서비스, 게임 시스템을 구현하는 P4HB의 포트폴리오입니다.",
    },

    skipLink: "본문으로 건너뛰기",

    nav: {
      brand: "P4HB",
      links: [
        { id: "home", label: "홈" },
        { id: "highlights", label: "역량" },
        { id: "experience", label: "경험" },
        { id: "projects", label: "프로젝트" },
        { id: "skills", label: "기술" },
        { id: "contact", label: "연락" },
      ],
      langToggleLabel: "EN",
      langToggleAria: "언어를 영어로 전환",
      menuOpenAria: "메뉴 열기",
      menuCloseAria: "메뉴 닫기",
    },

    hero: {
      eyebrow: "AI Product Builder / KAIST CS",
      name: "P4HB",
      nameNote: "KAIST 전산학부 · AI / Web / App / Game",
      tagline:
        "아이디어를 빠르게 작동하는 제품으로 만듭니다. LLM 기반 추천, 데이터 파이프라인, 웹/앱 서비스, 게임 시스템까지 직접 설계하고 구현합니다.",
      badges: ["AI Product", "Full-stack", "Rapid Prototyping", "Game Systems"],
      proofs: [
        { label: "AI", body: "추천·RAG·LLM 재정렬 파이프라인" },
        { label: "Product", body: "Flutter·React Native·Web 서비스 구현" },
        { label: "Systems", body: "데이터 처리·서버·게임 로직 설계" },
      ],
      contact: {
        githubLabel: "GitHub",
        githubAria: "GitHub 프로필로 이동",
        emailLabel: "Email",
        emailAria: "naldadev@gmail.com으로 이메일 보내기",
      },
      scrollHint: "Projects below",
    },

    highlights: {
      title: "핵심 역량",
      subtitle: "AI, 풀스택 개발, 데이터 분석을 중심으로 프로젝트를 구현합니다.",
      items: [
        {
          icon: "cpu",
          label: "AI",
          title: "LLM 기반 기능 구현",
          body: "추천, RAG, 후보 스코어링, LLM 재정렬, fallback 로직",
        },
        {
          icon: "layers",
          label: "Full-stack",
          title: "프론트엔드·백엔드 개발",
          body: "웹/앱 화면, 상태 관리, API, DB, 배포까지 제품 단위 구현",
        },
        {
          icon: "briefcase",
          label: "Data",
          title: "데이터 분석 및 전처리",
          body: "GNSS/CAN 시계열 데이터, 로그 처리, 모델 입력 파이프라인",
        },
        {
          icon: "education",
          label: "CS",
          title: "KAIST 전산학부",
          body: "알고리즘, 시스템, AI 기초를 바탕으로 한 구현 역량",
        },
      ],
    },

    experience: {
      title: "경험",
      subtitle: "최근 경험과 실제로 맡았던 역할 중심으로 정리했습니다.",
      items: [
        {
          org: "쓰리세컨즈",
          role: "Software Intern",
          period: "2025.12 - 2026 봄",
          badge: "National R&D",
          bullets: [
            {
              label: "차량 데이터 분석",
              text: "GNSS·CAN 시계열 데이터 수집, 병합, 분석",
            },
            {
              label: "임베디드 로깅",
              text: "Jetson 기반 주행 데이터 BLF/MF4 로깅 시스템 구현",
            },
            {
              label: "AI 파이프라인",
              text: "센서 데이터 보간 및 SVM/CNN 입력 전처리 파이프라인 구축",
            },
          ],
        },
        {
          org: "공군",
          role: "웹 개발 및 서버 운영",
          period: "2023 - 2024",
          badge: null,
          bullets: [
            { label: null, text: "공군 학습포털 유지보수 및 기능 개발" },
            { label: null, text: "Spring + jQuery 기반 개발" },
            { label: null, text: "Oracle DB 관리" },
          ],
        },
        {
          org: "KAIST 전산학부",
          role: "학사 과정",
          period: "2021 - 현재",
          badge: null,
          bullets: [
            {
              label: null,
              text: "컴퓨터과학 전공으로 알고리즘, 시스템, AI 기반을 학습하고 있습니다.",
            },
          ],
        },
      ],
    },

    projects: {
      title: "프로젝트",
      subtitle: "아이디어에서 구현, 분석, 배포까지 직접 밀어붙인 작업들입니다.",
      filterAll: "전체",
      tagLabels: {
        game: "게임",
        ai: "AI",
        app: "앱",
        web: "웹",
      },
      links: {
        github: "GitHub",
        githubProfile: "GitHub",
        notion: "문서",
        other: "링크",
        detail: "상세 보기",
      },
      more: {
        title: "더 많은 작업은 GitHub에",
        body: "아직 정리하지 않은 실험과 작은 프로젝트들도 계속 쌓고 있습니다.",
        linkText: "GitHub 보기",
      },
    },

    skills: {
      title: "기술 스택",
      subtitle: "기술 이름을 길게 늘어놓기보다, 실제 구현 축에 맞춰 묶었습니다.",
      groups: [
        {
          label: "AI Product",
          items: ["LLM API", "RAG", "Agentic Workflow", "Prompt Engineering", "Vector Search"],
        },
        {
          label: "App / Web",
          items: ["Flutter", "React Native", "Expo", "JavaScript", "Supabase"],
        },
        {
          label: "Backend / Data",
          items: ["Python", "Java", "Spring", "PostgreSQL", "Oracle", "SQL"],
        },
        {
          label: "Game / Interactive",
          items: ["Unity", "C#", "Phaser 3", "Blender", "NavMesh"],
        },
        {
          label: "Sensor / ML",
          items: ["CAN", "GNSS", "Jetson", "BLF/MF4", "SVM/CNN", "Time-series Processing"],
        },
        {
          label: "Workflow",
          items: ["Git/GitHub", "Vite", "Netlify", "Localization"],
        },
      ],
    },

    footer: {
      title: "Contact",
      body: "프로젝트, 협업, 또는 그냥 이야기하고 싶은 주제가 있다면 편하게 연락 주세요.",
      githubLabel: "GitHub",
      emailLabel: "Email",
      copyright: "© 2026 P4HB. All rights reserved.",
    },
  },

  en: {
    meta: {
      title: "P4HB | KAIST CS · AI Product Builder",
      description:
        "Portfolio of P4HB, a KAIST Computer Science student building AI features, web/app services, and game systems.",
    },

    skipLink: "Skip to content",

    nav: {
      brand: "P4HB",
      links: [
        { id: "home", label: "Home" },
        { id: "highlights", label: "Strengths" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
      ],
      langToggleLabel: "KO",
      langToggleAria: "Switch language to Korean",
      menuOpenAria: "Open menu",
      menuCloseAria: "Close menu",
    },

    hero: {
      eyebrow: "AI Product Builder / KAIST CS",
      name: "P4HB",
      nameNote: "KAIST CS · AI / Web / App / Game",
      tagline:
        "I turn ideas into working products quickly. I design and build LLM-powered recommendations, data pipelines, web/app services, and game systems.",
      badges: ["AI Product", "Full-stack", "Rapid Prototyping", "Game Systems"],
      proofs: [
        { label: "AI", body: "Recommendation, RAG, and LLM reranking pipelines" },
        { label: "Product", body: "Flutter, React Native, and web services" },
        { label: "Systems", body: "Data processing, backend, and game logic" },
      ],
      contact: {
        githubLabel: "GitHub",
        githubAria: "Open GitHub profile",
        emailLabel: "Email",
        emailAria: "Send an email to naldadev@gmail.com",
      },
      scrollHint: "Projects below",
    },

    highlights: {
      title: "Core Strengths",
      subtitle: "AI, full-stack development, and data analysis across working projects.",
      items: [
        {
          icon: "cpu",
          label: "AI",
          title: "LLM-powered feature development",
          body: "Recommendation, RAG, candidate scoring, LLM reranking, and fallback logic",
        },
        {
          icon: "layers",
          label: "Full-stack",
          title: "Frontend and backend development",
          body: "Web/app screens, state, APIs, databases, and deployment",
        },
        {
          icon: "briefcase",
          label: "Data",
          title: "Data analysis and preprocessing",
          body: "GNSS/CAN time-series data, logs, and model-input pipelines",
        },
        {
          icon: "education",
          label: "CS",
          title: "KAIST School of Computing",
          body: "Implementation grounded in algorithms, systems, and AI fundamentals",
        },
      ],
    },

    experience: {
      title: "Experience",
      subtitle: "Recent roles and what I actually handled.",
      items: [
        {
          org: "Threeseconds",
          role: "Software Intern",
          period: "Dec 2025 - Spring 2026",
          badge: "National R&D",
          bullets: [
            {
              label: "Vehicle Data Analysis",
              text: "Collected, merged, and analyzed GNSS/CAN time-series data",
            },
            {
              label: "Embedded Logging",
              text: "Built a Jetson-based BLF/MF4 driving-data logging system",
            },
            {
              label: "AI Pipeline",
              text: "Built interpolation and SVM/CNN input preprocessing for sensor data",
            },
          ],
        },
        {
          org: "Republic of Korea Air Force",
          role: "Web Development & Server Operations",
          period: "2023 - 2024",
          badge: null,
          bullets: [
            { label: null, text: "Maintained and extended an Air Force learning portal" },
            { label: null, text: "Developed with Spring + jQuery" },
            { label: null, text: "Managed an Oracle database" },
          ],
        },
        {
          org: "KAIST, School of Computing",
          role: "B.S. in Computer Science",
          period: "2021 - Present",
          badge: null,
          bullets: [
            {
              label: null,
              text: "Studying Computer Science with foundations across algorithms, systems, and AI.",
            },
          ],
        },
      ],
    },

    projects: {
      title: "Projects",
      subtitle: "Self-directed work pushed from idea to implementation, analysis, and release.",
      filterAll: "All",
      tagLabels: {
        game: "Game",
        ai: "AI",
        app: "App",
        web: "Web",
      },
      links: {
        github: "GitHub",
        githubProfile: "GitHub",
        notion: "Writeup",
        other: "Link",
        detail: "Details",
      },
      more: {
        title: "More work on GitHub",
        body: "Smaller experiments and unfinished notes are still accumulating there.",
        linkText: "Visit GitHub",
      },
    },

    skills: {
      title: "Skills",
      subtitle: "Grouped by implementation role rather than a raw keyword dump.",
      groups: [
        {
          label: "AI Product",
          items: ["LLM API", "RAG", "Agentic Workflow", "Prompt Engineering", "Vector Search"],
        },
        {
          label: "App / Web",
          items: ["Flutter", "React Native", "Expo", "JavaScript", "Supabase"],
        },
        {
          label: "Backend / Data",
          items: ["Python", "Java", "Spring", "PostgreSQL", "Oracle", "SQL"],
        },
        {
          label: "Game / Interactive",
          items: ["Unity", "C#", "Phaser 3", "Blender", "NavMesh"],
        },
        {
          label: "Sensor / ML",
          items: ["CAN", "GNSS", "Jetson", "BLF/MF4", "SVM/CNN", "Time-series Processing"],
        },
        {
          label: "Workflow",
          items: ["Git/GitHub", "Vite", "Netlify", "Localization"],
        },
      ],
    },

    footer: {
      title: "Contact",
      body: "For projects, collaboration, or just a good technical conversation, feel free to reach out.",
      githubLabel: "GitHub",
      emailLabel: "Email",
      copyright: "© 2026 P4HB. All rights reserved.",
    },
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = I18N;
}
