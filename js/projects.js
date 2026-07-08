/**
 * projects.js
 * ------------------------------------------------------------------
 * Project data, rendered into cards by main.js. This is intentionally
 * data-driven: to add a new project, just append another object to
 * PROJECTS below — no HTML or CSS changes required. main.js's renderer
 * is written to handle any number of entries and to gracefully skip
 * fields that are missing (e.g. a project with no live links, or a
 * shorter stack list).
 *
 * Schema:
 * {
 *   id: string              — unique slug, used for DOM keys
 *   name: { ko, en }        — project name (kept identical across
 *                              languages when it's a proper noun)
 *   tagline: { ko, en }     — one-line description
 *   stack: string[]         — technologies used (language-neutral,
 *                              shown as chips; keep short if unknown —
 *                              never fabricate specifics)
 *   tags: string[]          — canonical lowercase filter tags; the
 *                              filter UI is generated dynamically from
 *                              whatever tags appear across this array
 *   readme: string          — markdown file rendered by project.html
 *   links: {                — any of these may be omitted; the
 *     github?: string,         renderer only shows buttons for links
 *     notion?: string,         that are actually present, and never
 *     other?: { url, label }?  invents a URL
 *   }
 *   highlights: { ko: string[], en: string[] } — 3-5 bullet points
 * }
 * ------------------------------------------------------------------
 */

const PROJECTS = [
  {
    id: "aot-combat-sim",
    name: {
      ko: "진격의 거인 전투 시뮬레이션",
      en: "Attack on Titan: Combat Simulation",
    },
    tagline: {
      ko: "3D 기동으로 거인과 싸우는 팀 제작 유니티 3D 게임",
      en: "A team-built Unity 3D game where you fight titans using 3D-maneuver-gear-style movement.",
    },
    stack: [
      "Unity",
      "C#",
      "Blender",
      "NavMesh",
      "Rigidbody",
      "Raycast",
      "TextMeshPro",
      "Git/GitHub",
    ],
    tags: ["game"],
    readme: "projects/aot-combat-sim.md",
    links: {
      github: "https://github.com/P4HB",
      notion: "https://www.notion.so/24793351a63b80f9887df251a5d869dc?source=copy_link",
    },
    highlights: {
      ko: [
        "WASD 이동·그래플 훅·공격 기반 3D 기동 컨트롤 구현",
        "NavMesh 추격 AI 및 Raycast 그래플 물리 시스템 구축",
        "Blender 기반 캐릭터·거인 모델링 및 텍스처 제작",
        "인트로·전투·보스전·엔딩 멀티 씬 플로우 설계",
      ],
      en: [
        "Implemented movement, grapple, and attack-based 3D controls",
        "Built NavMesh chase AI and Raycast grapple physics",
        "Produced character and titan models/textures in Blender",
        "Designed intro, combat, boss, and ending scene flow",
      ],
    },
  },
  {
    id: "hp-plus",
    name: {
      ko: "HP+ (Healing Place)",
      en: "HP+ (Healing Place)",
    },
    tagline: {
      ko: "유성구 주변 공부·휴식 공간을 설문 기반으로 추천하는 Flutter 앱",
      en: "A Flutter app that recommends nearby study and rest spots in Yuseong-gu from a short survey.",
    },
    stack: [
      "Flutter",
      "Dart",
      "Supabase",
      "LLM API",
      "flutter_map",
      "OpenStreetMap",
      "geolocator",
      "flutter_localizations",
    ],
    tags: ["app", "ai"],
    readme: "projects/hp-plus.md",
    links: {
      // No dedicated repo URL was provided for this project — linking
      // to the GitHub profile rather than guessing a repo slug.
      github: "https://github.com/P4HB",
    },
    highlights: {
      ko: [
        "Flutter + Supabase 기반 종단 간 추천 앱 아키텍처 구축",
        "Edge Function 후보지 1차 스코어링 및 LLM 재정렬 파이프라인 구현",
        "Gemini 실패·쿼터 초과 대응 스코어 기반 폴백 설계",
        "OpenStreetMap 지도 UX, 방문 기록, 즐겨찾기, 소셜 피드 구현",
        "Flutter gen-l10n 기반 한/영 지역화 적용",
      ],
      en: [
        "Built an end-to-end Flutter + Supabase recommendation app",
        "Implemented Edge Function scoring and LLM reranking pipeline",
        "Designed score-based fallback for Gemini failures and quota limits",
        "Shipped OpenStreetMap UX, history, favorites, and social feed",
        "Added Korean/English localization with Flutter gen-l10n",
      ],
    },
  },
  {
    id: "reelsking",
    name: {
      ko: "REELSKING",
      en: "REELSKING",
    },
    tagline: {
      ko: "모션 인식 기반 댄스 챌린지 분석 소셜 앱",
      en: "A social app for dance challenges with motion-recognition-based analysis.",
    },
    // No confirmed tech stack was provided for this project — keeping
    // this list short and generic, limited to what's directly implied
    // by the feature set, rather than inventing specifics.
    stack: ["Motion Recognition", "Computer Vision", "Video Analysis"],
    tags: ["app", "ai"],
    readme: "projects/reelsking.md",
    links: {
      notion: "https://www.notion.so/REELSKING-24793351a63b8034be30ede53597a17f?source=copy_link",
    },
    highlights: {
      ko: [
        "유튜브·업로드·웹캠 기반 모션 인식 채점 플로우 구현",
        "검색 가능한 소셜 피드 및 영상 공유 인터랙션 설계",
        "챌린지별 점수 이력·통계 기반 성장 추적 구현",
        "챌린지 학습용 게이미피케이션 모드 설계",
      ],
      en: [
        "Built motion scoring for YouTube, upload, and webcam inputs",
        "Designed searchable social feed and video sharing interactions",
        "Implemented score history and progress tracking by challenge",
        "Designed a gamified mode for faster challenge learning",
      ],
    },
  },
  {
    id: "godlifenote",
    name: {
      ko: "갓생노트",
      en: "God Life Note",
    },
    tagline: {
      ko: "소규모 그룹이 매일의 목표를 기록하고 서로 확인하는 소셜 책임감 앱",
      en: "A social accountability app for small groups to record and review daily routines.",
    },
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Supabase",
      "Zustand",
      "Expo Router",
      "react-native-calendars",
    ],
    tags: ["app"],
    readme: "projects/godlifenote.md",
    links: {
      github: "https://github.com/P4HB/godlifenote",
    },
    highlights: {
      ko: [
        "Expo Router 기반 인증·탭 플로우 구현",
        "초대 코드 기반 그룹 생성·가입 시스템 구축",
        "일일 기록, 자가 평가, 댓글, 벌금 확인 흐름 구현",
        "Supabase Auth/Postgres와 Zustand 상태 관리 연동",
      ],
      en: [
        "Built auth and tab flows with Expo Router",
        "Implemented invite-code group creation and joining",
        "Shipped daily records, grading, comments, and penalty views",
        "Integrated Supabase Auth/Postgres with Zustand state stores",
      ],
    },
  },
  {
    id: "escapeoffice",
    name: {
      ko: "탈출 오피스",
      en: "Escape Office",
    },
    tagline: {
      ko: "퇴근을 방해하는 몬스터를 처치하는 2D 로그라이크 서바이벌 게임",
      en: "A 2D roguelike survival game about fighting office-themed monsters to escape work.",
    },
    stack: [
      "Phaser 3",
      "JavaScript",
      "Vite",
      "Flask",
      "Groq",
      "LLM API",
      "MySQL",
      "SQLAlchemy",
    ],
    tags: ["game", "ai", "web"],
    readme: "projects/escapeoffice.md",
    links: {
      github: "https://github.com/P4HB/escapeoffice",
      notion: "https://www.notion.so/24793351a63b809a83c0d96cc8bf8786?source=copy_link",
    },
    highlights: {
      ko: [
        "Phaser 3 기반 2D 로그라이크 서바이벌 게임 구현",
        "무기 강화·진화, XP, 보스 등장 조건 등 성장 루프 설계",
        "Groq/Flask 기반 NPC 대화 및 보스 스탯 연동 시스템 구현",
        "로그인, 플레이 기록, 대화 로그 저장용 Flask/MySQL 백엔드 구축",
      ],
      en: [
        "Built a Phaser 3-based 2D roguelike survival game",
        "Designed progression loops for weapons, XP, evolution, and boss spawns",
        "Implemented Groq/Flask NPC dialogue tied to boss stat changes",
        "Built Flask/MySQL backend for auth, play records, and dialogue logs",
      ],
    },
  },
];

// Support both browser globals and (optional) module usage.
if (typeof module !== "undefined" && module.exports) {
  module.exports = PROJECTS;
}
