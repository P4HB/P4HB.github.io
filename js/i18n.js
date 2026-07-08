/**
 * i18n.js
 * ------------------------------------------------------------------
 * Single source of truth for ALL Korean/English copy on the site.
 * main.js reads this object and renders the DOM from it — index.html
 * never needs to be touched to change wording. Project-specific copy
 * (names, taglines, highlight bullets) lives in projects.js instead,
 * since it travels together with each project's structured data.
 *
 * Structure: I18N[langCode].<section>.<field>
 * ------------------------------------------------------------------
 */

const I18N = {
  ko: {
    meta: {
      title: "P4HB — KAIST 전산학부 · AI · 풀스택 · 임베디드",
      description:
        "KAIST 전산학부 학생이자 실제 차량 데이터로 AI를 만드는 풀스택·임베디드 엔지니어 P4HB의 포트폴리오입니다.",
    },

    skipLink: "본문으로 건너뛰기",

    nav: {
      brand: "P4HB",
      links: [
        { id: "home", label: "홈" },
        { id: "highlights", label: "하이라이트" },
        { id: "experience", label: "경력" },
        { id: "projects", label: "프로젝트" },
        { id: "skills", label: "기술" },
        { id: "contact", label: "연락처" },
      ],
      langToggleLabel: "EN",
      langToggleAria: "언어를 영어로 전환",
      menuOpenAria: "메뉴 열기",
      menuCloseAria: "메뉴 닫기",
    },

    hero: {
      eyebrow: "Portfolio / 2026",
      name: "P4HB",
      nameNote: "KAIST CS · Vehicle Data AI · Full-stack / Embedded",
      tagline:
        "실제 차량 센서 데이터와 제품 구현 사이를 잇습니다. KAIST 전산학부에서 컴퓨터과학을 배우고, 현장 데이터로 AI 파이프라인과 풀스택 제품을 만듭니다.",
      badges: ["KAIST 전산학부", "AI", "Full-stack", "Embedded"],
      contact: {
        githubLabel: "GitHub",
        githubAria: "GitHub 프로필로 이동 (새 탭)",
        emailLabel: "Email",
        emailAria: "이메일 보내기: naldadev@gmail.com",
      },
      scrollHint: "아래로 스크롤",
    },

    highlights: {
      title: "하이라이트",
      subtitle: "학습, 현장 경험, 직접 만든 결과물을 한 화면에 압축했습니다.",
      items: [
        {
          icon: "education",
          label: "학력",
          title: "KAIST 전산학부 재학",
          body: "2021년 입학, 컴퓨터과학을 전공하며 이론과 구현을 함께 다지고 있습니다.",
        },
        {
          icon: "briefcase",
          label: "실무 경력",
          title: "군 복무 중 웹 개발·서버 운영, 이후 소프트웨어 인턴",
          body: "공군에서 실서비스의 웹 개발과 서버 운영을 담당했고, 전역 후 쓰리세컨즈에서 소프트웨어 인턴으로 실무를 이어갔습니다.",
        },
        {
          icon: "cpu",
          label: "AI·국가과제 경험",
          title: "국가 R&D 과제에 AI 엔지니어로 투입",
          body: "인턴 기간 중 차량 센서 기반 노면 상태 판별 국가 R&D 과제에 실제로 투입되어 AI 파이프라인을 구축했습니다.",
        },
        {
          icon: "layers",
          label: "다수의 개인 프로젝트",
          title: "게임부터 모바일, 웹까지 완주해온 프로젝트들",
          body: "게임, 모바일, 웹 등 서로 다른 도메인에서 아이디어를 끝까지 구현해낸 프로젝트들이 계속 쌓이고 있습니다.",
        },
      ],
    },

    experience: {
      title: "경력",
      subtitle: "최근 순으로 정리했습니다.",
      items: [
        {
          org: "쓰리세컨즈",
          role: "Software Intern",
          period: "2025.12 — 2026 봄",
          badge: "국가과제",
          bullets: [
            {
              label: "차량 데이터 분석",
              text: "차량 GNSS·CAN 시계열 데이터 수집, 병합, 분석",
            },
            {
              label: "임베디드 시스템 개발",
              text: "Jetson을 차량에 연결해 주행 데이터를 BLF/MF4 포맷으로 로깅하는 시스템 구축",
            },
            {
              label: "AI 개발",
              text: "국내 완성차 기업 테스트 드라이버 주행 데이터 분석용 AI 분석 엔진 개발",
            },
            {
              label: "국가 R&D 과제 참여",
              text: "실제 차량에 센서를 연결해 블랙아이스·노면 상태를 판별하는 과제 수행. 센서 데이터 interpolation 및 SVM/CNN 모델 입력을 위한 데이터 전처리 파이프라인 구축",
            },
          ],
        },
        {
          org: "공군",
          role: "웹 개발 및 서버 운영",
          period: "2023 — 2024",
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
          period: "2021 — 재학중",
          badge: null,
          bullets: [
            {
              label: null,
              text: "컴퓨터과학 전공으로 알고리즘, 시스템, AI 전반의 기초를 다지고 있습니다.",
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
        unity: "Unity",
        "3d": "3D",
        ai: "AI",
        mobile: "모바일",
        fullstack: "풀스택",
        web: "웹",
        cv: "컴퓨터 비전",
      },
      links: {
        github: "GitHub",
        githubProfile: "GitHub 프로필",
        notion: "Notion 문서",
        other: "링크",
      },
      more: {
        title: "더 많은 프로젝트는 GitHub에서",
        body: "여기에 아직 정리하지 못한 프로젝트들이 더 있습니다.",
        linkText: "GitHub 방문하기",
      },
    },

    skills: {
      title: "기술 스택",
      subtitle: "실제로 써서 무언가를 완성해 본 것들입니다.",
      groups: [
        {
          label: "언어",
          items: ["Python", "C#", "Dart", "JavaScript", "Java", "SQL"],
        },
        {
          label: "프레임워크·플랫폼",
          items: ["Spring", "jQuery", "Flutter", "Unity", "Supabase"],
        },
        {
          label: "AI·데이터",
          items: ["Gemini API", "SVM", "CNN", "시계열 데이터 처리·보간"],
        },
        {
          label: "임베디드·차량",
          items: ["CAN", "GNSS", "Jetson", "BLF/MF4 로깅"],
        },
        {
          label: "데이터베이스",
          items: ["Oracle", "PostgreSQL"],
        },
        {
          label: "도구",
          items: ["Git/GitHub", "Blender", "Netlify"],
        },
      ],
    },

    footer: {
      title: "연락처",
      body: "새로운 프로젝트, 협업, 혹은 그냥 이야기 — 편하게 연락 주세요.",
      githubLabel: "GitHub",
      emailLabel: "Email",
      copyright: "© 2026 P4HB. All rights reserved.",
    },
  },

  en: {
    meta: {
      title: "P4HB — KAIST CS · AI · Full-stack · Embedded",
      description:
        "Portfolio of P4HB, a KAIST Computer Science student and full-stack / AI / embedded engineer who has shipped real work on production vehicle data.",
    },

    skipLink: "Skip to content",

    nav: {
      brand: "P4HB",
      links: [
        { id: "home", label: "Home" },
        { id: "highlights", label: "Highlights" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
      ],
      langToggleLabel: "한글",
      langToggleAria: "Switch language to Korean",
      menuOpenAria: "Open menu",
      menuCloseAria: "Close menu",
    },

    hero: {
      eyebrow: "Portfolio / 2026",
      name: "P4HB",
      nameNote: "KAIST CS · Vehicle Data AI · Full-stack / Embedded",
      tagline:
        "I connect real vehicle sensor data with shipped software. At KAIST CS, I build across AI pipelines, embedded logging, and full-stack products.",
      badges: ["KAIST School of Computing", "AI", "Full-stack", "Embedded"],
      contact: {
        githubLabel: "GitHub",
        githubAria: "Open GitHub profile (new tab)",
        emailLabel: "Email",
        emailAria: "Send an email to naldadev@gmail.com",
      },
      scrollHint: "Scroll down",
    },

    highlights: {
      title: "Highlights",
      subtitle: "Education, field experience, and shipped work in one focused snapshot.",
      items: [
        {
          icon: "education",
          label: "Education",
          title: "KAIST, School of Computing",
          body: "Enrolled since 2021, majoring in Computer Science — building both theory and hands-on implementation.",
        },
        {
          icon: "briefcase",
          label: "Industry Experience",
          title: "Web dev & server ops during service, then a software internship",
          body: "Handled web development and server operations for a live system during military service, then continued in industry as a software intern at Threeseconds.",
        },
        {
          icon: "cpu",
          label: "AI & National R&D",
          title: "Deployed as an AI engineer on a national R&D project",
          body: "During the internship, contributed to a government R&D project detecting road surface conditions from vehicle sensors — building the AI pipeline end to end.",
        },
        {
          icon: "layers",
          label: "A Growing Body of Side Projects",
          title: "Shipped projects across game, mobile, and web",
          body: "A continually growing set of projects across different domains, each one carried through to a finished, working product.",
        },
      ],
    },

    experience: {
      title: "Experience",
      subtitle: "Listed most recent first.",
      items: [
        {
          org: "Threeseconds",
          role: "Software Intern",
          period: "Dec 2025 — Spring 2026",
          badge: "National R&D",
          bullets: [
            {
              label: "Vehicle Data Analysis",
              text: "Collected, merged, and analyzed vehicle GNSS and CAN time-series data",
            },
            {
              label: "Embedded Systems",
              text: "Built a logging system connecting a Jetson to the vehicle, recording driving data in BLF/MF4 format",
            },
            {
              label: "AI Development",
              text: "Built an AI analysis engine for test-driver driving data at a domestic automotive company",
            },
            {
              label: "National R&D Project",
              text: "Contributed to a project detecting black ice and road surface conditions via in-vehicle sensors — built the data preprocessing pipeline, including interpolation and SVM/CNN model input prep",
            },
          ],
        },
        {
          org: "Republic of Korea Air Force",
          role: "Web Development & Server Operations",
          period: "2023 — 2024",
          badge: null,
          bullets: [
            { label: null, text: "Maintained and extended the Air Force e-learning portal" },
            { label: null, text: "Developed with Spring + jQuery" },
            { label: null, text: "Managed the Oracle database" },
          ],
        },
        {
          org: "KAIST, School of Computing",
          role: "B.S. in Computer Science",
          period: "2021 — Present",
          badge: null,
          bullets: [
            {
              label: null,
              text: "Majoring in Computer Science — building a foundation across algorithms, systems, and AI.",
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
        unity: "Unity",
        "3d": "3D",
        ai: "AI",
        mobile: "Mobile",
        fullstack: "Full-stack",
        web: "Web",
        cv: "Computer Vision",
      },
      links: {
        github: "GitHub",
        githubProfile: "GitHub Profile",
        notion: "Notion Writeup",
        other: "Link",
      },
      more: {
        title: "More projects on GitHub",
        body: "There's more that hasn't made it onto this page yet.",
        linkText: "Visit GitHub",
      },
    },

    skills: {
      title: "Skills",
      subtitle: "Things actually used to ship something.",
      groups: [
        {
          label: "Languages",
          items: ["Python", "C#", "Dart", "JavaScript", "Java", "SQL"],
        },
        {
          label: "Frameworks & Platforms",
          items: ["Spring", "jQuery", "Flutter", "Unity", "Supabase"],
        },
        {
          label: "AI & Data",
          items: ["Gemini API", "SVM", "CNN", "Time-series Processing & Interpolation"],
        },
        {
          label: "Embedded & Vehicle",
          items: ["CAN", "GNSS", "Jetson", "BLF/MF4 Logging"],
        },
        {
          label: "Database",
          items: ["Oracle", "PostgreSQL"],
        },
        {
          label: "Tools",
          items: ["Git/GitHub", "Blender", "Netlify"],
        },
      ],
    },

    footer: {
      title: "Contact",
      body: "New projects, collaborations, or just a conversation — feel free to reach out.",
      githubLabel: "GitHub",
      emailLabel: "Email",
      copyright: "© 2026 P4HB. All rights reserved.",
    },
  },
};

// Support both browser globals and (optional) module usage.
if (typeof module !== "undefined" && module.exports) {
  module.exports = I18N;
}
