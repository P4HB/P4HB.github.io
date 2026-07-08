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
    tags: ["game", "unity", "3d"],
    links: {
      notion: "https://www.notion.so/24793351a63b80f9887df251a5d869dc?source=copy_link",
    },
    highlights: {
      ko: [
        "WASD 이동, 마우스 클릭 그래플 훅, R 공격으로 구현한 3D 기동 장치 컨트롤",
        "NavMesh 기반 거인 추격 AI와 Raycast 기반 그래플 훅 물리 시스템 직접 구현",
        "캐릭터·거인 모델링과 텍스처링을 Blender로 직접 제작",
        "인트로 → 전투 → 보스(갑옷거인) → 엔딩까지 이어지는 멀티 씬 게임 플로우와 승리/패배 처리",
      ],
      en: [
        "3D-maneuver-gear controls: WASD movement, click-to-grapple hooks, and an R attack",
        "Custom titan-chase AI built on NavMesh, plus a Raycast-based grapple-hook physics system",
        "Modeled and textured characters and titans from scratch in Blender",
        "Multi-scene game flow — intro, combat, the Armored Titan boss fight, and win/lose endings",
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
      "Gemini API",
      "flutter_map",
      "OpenStreetMap",
      "geolocator",
      "flutter_localizations",
    ],
    tags: ["ai", "mobile", "fullstack"],
    links: {
      // No dedicated repo URL was provided for this project — linking
      // to the GitHub profile rather than guessing a repo slug.
      github: "https://github.com/P4HB",
    },
    highlights: {
      ko: [
        "Flutter 클라이언트 + Supabase(Auth/Postgres/RLS/Edge Functions) 기반 종단 간 아키텍처",
        "Edge Function에서 거리·도보 시간·적합도로 후보지를 1차 스코어링하고, Gemini가 재정렬 및 추천 이유를 생성하는 retrieve→rerank 파이프라인",
        "Gemini 호출 실패나 일일 쿼터 초과 시 스코어 기반 추천으로 자동 폴백, API 키는 서버 사이드에만 보관",
        "flutter_map/OpenStreetMap 기반 지도 UX, 방문 기록·즐겨찾기, MVP 소셜 피드까지 지원",
        "Flutter gen-l10n으로 처음부터 한/영 완전 지역화",
      ],
      en: [
        "End-to-end architecture: a Flutter client backed by Supabase (Auth, Postgres, RLS, Edge Functions)",
        "A retrieve → rerank recommendation pipeline — candidates scored server-side by distance/walk time/fit, then reranked by Gemini with generated reasoning",
        "Graceful score-based fallback when the Gemini call fails or the daily quota is hit; the API key never leaves the server",
        "Map-centered UX with flutter_map/OpenStreetMap, visit history, favorites, and an MVP social feed",
        "Fully localized in Korean and English from day one via Flutter gen-l10n",
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
    tags: ["ai", "web", "cv"],
    links: {},
    highlights: {
      ko: [
        "유튜브 영상, 업로드 영상, 실시간 웹캠 중 선택해 챌린지를 따라 하면 모션 인식으로 정확도를 채점",
        "해시태그·유저 검색이 가능한 소셜 피드에서 댄스/챌린지 영상 공유, 좋아요, 댓글, 공유",
        "챌린지별 점수 이력과 통계로 시간에 따른 실력 향상을 추적",
        "더 빠르게 챌린지를 익히도록 돕는 게이미피케이션 학습 모드",
      ],
      en: [
        "Follow a challenge from YouTube, an uploaded video, or a live webcam, and get a motion-recognition accuracy score",
        "Social feed with hashtag and user search for sharing dance/challenge videos, likes, comments, and shares",
        "Per-challenge score history and stats tracking skill progression over time",
        "A gamified mode designed to help users learn a challenge faster",
      ],
    },
  },
];

// Support both browser globals and (optional) module usage.
if (typeof module !== "undefined" && module.exports) {
  module.exports = PROJECTS;
}
