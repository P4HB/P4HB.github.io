/**
 * projects.js
 * ------------------------------------------------------------------
 * Structured project data rendered by main.js and project-detail.js.
 * ------------------------------------------------------------------
 */

const PROJECTS = [
  {
    id: "hp-plus",
    name: {
      ko: "HP+ (Healing Place)",
      en: "HP+ (Healing Place)",
    },
    status: {
      ko: "Hackathon · 진행 중",
      en: "Hackathon · In progress",
    },
    tagline: {
      ko: "전국 대학생의 상황과 위치를 바탕으로 공부·휴식 공간을 추천하는 Flutter 앱",
      en: "A Flutter app recommending study and rest spots for university students from survey and location context.",
    },
    focus: {
      ko: [
        { label: "문제", text: "사용자 상황에 맞는 장소를 빠르게 고르는 흐름" },
        { label: "구현", text: "후보지 1차 스코어링 및 LLM 재정렬 파이프라인" },
      ],
      en: [
        { label: "Problem", text: "Help users choose a fitting place without searching manually" },
        { label: "Build", text: "First-pass candidate scoring plus LLM reranking pipeline" },
      ],
    },
    stack: [
      "Flutter",
      "Dart",
      "Supabase",
      "LLM API",
      "flutter_map",
      "OpenStreetMap",
      "geolocator",
    ],
    tags: ["app", "ai"],
    readme: "projects/hp-plus.md",
    links: {
      github: "https://github.com/P4HB",
    },
    highlights: {
      ko: [
        "Flutter + Supabase 기반 종단 간 추천 앱",
        "Edge Function 후보지 1차 스코어링 및 LLM 재정렬",
        "LLM 실패·쿼터 초과 대비 스코어 기반 fallback",
        "지도, 방문 기록, 즐겨찾기, 소셜 피드 구현",
      ],
      en: [
        "Built an end-to-end Flutter + Supabase recommendation app",
        "Implemented Edge Function scoring and LLM reranking",
        "Designed score-based fallback for LLM failures and quota limits",
        "Shipped map UX, history, favorites, and social feed",
      ],
    },
  },
  {
    id: "reelsking",
    name: {
      ko: "REELSKING",
      en: "REELSKING",
    },
    status: {
      ko: "Web · AI",
      en: "Web · AI",
    },
    tagline: {
      ko: "Python 모션 인식과 휴리스틱 채점 layer를 붙인 댄스 챌린지 분석 웹 서비스",
      en: "A dance challenge analysis web service with Python motion recognition and a heuristic scoring layer.",
    },
    focus: {
      ko: [
        { label: "문제", text: "댄스 챌린지를 단순 업로드가 아니라 분석 가능한 콘텐츠로 전환" },
        { label: "구현", text: "Python 모션 인식 라이브러리와 휴리스틱 기반 점수 채점 AI layer" },
      ],
      en: [
        { label: "Problem", text: "Turn dance challenge videos into analyzable feedback loops" },
        { label: "Build", text: "Python motion-recognition library plus heuristic AI scoring layer" },
      ],
    },
    stack: ["Python", "Motion Recognition", "Computer Vision", "Heuristic Scoring", "Video Analysis"],
    tags: ["web", "ai"],
    readme: "projects/reelsking.md",
    links: {
      notion: "https://www.notion.so/REELSKING-24793351a63b8034be30ede53597a17f?source=copy_link",
    },
    highlights: {
      ko: [
        "Python 모션 인식 라이브러리 기반 동작 특징 추출",
        "휴리스틱 기반 점수 채점 AI layer 구현",
        "검색 가능한 소셜 피드와 영상 공유 인터랙션",
        "챌린지별 점수 이력·통계 기반 성장 추적",
      ],
      en: [
        "Extracted motion features with a Python motion-recognition library",
        "Built a heuristic AI scoring layer for dance accuracy",
        "Designed searchable social feed and video sharing interactions",
        "Implemented score history and progress tracking by challenge",
      ],
    },
  },
  {
    id: "escapeoffice",
    name: {
      ko: "Escape Office",
      en: "Escape Office",
    },
    status: {
      ko: "Game · AI",
      en: "Game · AI",
    },
    tagline: {
      ko: "퇴근을 방해하는 몬스터를 처치하는 2D 로그라이크 서바이벌 게임",
      en: "A 2D roguelike survival game about fighting office-themed monsters to escape work.",
    },
    focus: {
      ko: [
        { label: "문제", text: "짧은 플레이 안에서 성장 루프와 AI 상호작용을 동시에 제공" },
        { label: "구현", text: "Phaser 전투 루프와 Groq/Flask 기반 NPC·보스 연동" },
      ],
      en: [
        { label: "Problem", text: "Create a short-session game loop with AI-powered interactions" },
        { label: "Build", text: "Phaser combat loop plus Groq/Flask NPC and boss integration" },
      ],
    },
    stack: ["Phaser 3", "JavaScript", "Vite", "Flask", "Groq", "LLM API", "MySQL"],
    tags: ["game", "ai", "web"],
    readme: "projects/escapeoffice.md",
    links: {
      github: "https://github.com/P4HB/escapeoffice",
      notion: "https://www.notion.so/24793351a63b809a83c0d96cc8bf8786?source=copy_link",
    },
    highlights: {
      ko: [
        "Phaser 3 기반 2D 로그라이크 서바이벌 게임",
        "무기 강화·진화, XP, 보스 등장 조건 등 성장 루프",
        "Groq/Flask 기반 NPC 대화 및 보스 스탯 연동",
        "로그인, 플레이 기록, 대화 로그 저장용 Flask/MySQL 백엔드",
      ],
      en: [
        "Built a Phaser 3-based 2D roguelike survival game",
        "Designed progression loops for weapons, XP, evolution, and boss spawns",
        "Implemented Groq/Flask NPC dialogue tied to boss stat changes",
        "Built Flask/MySQL backend for auth, play records, and dialogue logs",
      ],
    },
  },
  {
    id: "godlifenote",
    name: {
      ko: "갓생노트",
      en: "God Life Note",
    },
    status: {
      ko: "App · MVP",
      en: "App · MVP",
    },
    tagline: {
      ko: "소규모 그룹이 매일의 목표를 기록하고 서로 확인하는 소셜 책임감 앱",
      en: "A social accountability app for small groups to record and review daily routines.",
    },
    focus: {
      ko: [
        { label: "문제", text: "개인 다짐을 그룹 책임감과 피드백으로 이어가기" },
        { label: "구현", text: "인증, 그룹, 기록, 평가, 댓글, 벌금 확인 흐름" },
      ],
      en: [
        { label: "Problem", text: "Turn private goals into shared accountability" },
        { label: "Build", text: "Auth, groups, records, grading, comments, and penalty views" },
      ],
    },
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Zustand", "Expo Router"],
    tags: ["app"],
    readme: "projects/godlifenote.md",
    links: {
      github: "https://github.com/P4HB/godlifenote",
    },
    highlights: {
      ko: [
        "Expo Router 기반 인증·탭 플로우 구현",
        "초대 코드 기반 그룹 생성·가입 시스템",
        "일일 기록, 자가 평가, 댓글, 벌금 확인 흐름",
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
    id: "aot-combat-sim",
    name: {
      ko: "진격의 거인 전투 시뮬레이션",
      en: "Attack on Titan: Combat Simulation",
    },
    status: {
      ko: "Game · Unity",
      en: "Game · Unity",
    },
    tagline: {
      ko: "3D 기동 장치로 거인과 전투하는 팀 제작 Unity 3D 게임",
      en: "A team-built Unity 3D game where you fight titans using 3D-maneuver-gear-style movement.",
    },
    focus: {
      ko: [
        { label: "문제", text: "빠른 이동과 전투가 동시에 느껴지는 3D 조작감 구현" },
        { label: "구현", text: "그랩플 이동, Raycast 물리, NavMesh 추격 AI" },
      ],
      en: [
        { label: "Problem", text: "Make fast 3D movement and combat feel responsive" },
        { label: "Build", text: "Grapple movement, Raycast physics, and NavMesh chase AI" },
      ],
    },
    stack: ["Unity", "C#", "Blender", "NavMesh", "Rigidbody", "Raycast", "TextMeshPro"],
    tags: ["game"],
    readme: "projects/aot-combat-sim.md",
    links: {
      github: "https://github.com/P4HB",
      notion: "https://www.notion.so/24793351a63b80f9887df251a5d869dc?source=copy_link",
    },
    highlights: {
      ko: [
        "WASD 이동·그래플·공격 기반 3D 기동 컨트롤",
        "NavMesh 추격 AI와 Raycast 그래플 물리 시스템",
        "Blender 기반 캐릭터·거인 모델링 및 텍스처 제작",
        "인트로, 전투, 보스전, 엔딩 흐름 설계",
      ],
      en: [
        "Implemented movement, grapple, and attack-based 3D controls",
        "Built NavMesh chase AI and Raycast grapple physics",
        "Produced character and titan models/textures in Blender",
        "Designed intro, combat, boss, and ending scene flow",
      ],
    },
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = PROJECTS;
}
