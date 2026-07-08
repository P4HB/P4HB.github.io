# 갓생노트 (God Life Note)

소규모 그룹이 매일의 목표를 기록하고 서로 확인하면서 루틴을 이어가도록 돕는 Expo 기반 소셜 책임감 앱입니다. 개인 기록 앱에 그룹 제출, 댓글, 벌금, 캘린더 흐름을 더해 "혼자 쓰는 다짐"보다 "같이 지키는 습관"에 초점을 맞췄습니다.

## 핵심 기능

- 이메일 기반 회원가입/로그인 및 프로필 생성
- 초대 코드 기반 그룹 생성·가입
- 하루 3~5개 항목으로 구성된 일일 기록 작성
- S/A/B/C/D/F 자가 평가 그레이드
- 그룹 캘린더에서 멤버별 제출 현황 확인
- 기록 상세 화면과 댓글 기능
- 그룹별 벌금 금액 설정 및 누적 벌금 표시
- 개인 프로필, 그룹 관리, 플레이스홀더 없는 탭 기반 앱 구조

## 서비스 흐름

1. 사용자가 회원가입 후 프로필을 설정합니다.
2. 그룹을 만들거나 초대 코드로 기존 그룹에 참여합니다.
3. 매일 해야 할 일을 3~5개 항목으로 기록합니다.
4. 제출 후 스스로 수행 정도를 S~F로 평가합니다.
5. 그룹 화면에서 멤버들의 제출 여부와 기록을 확인합니다.
6. 댓글과 벌금 시스템으로 느슨한 책임감을 유지합니다.

## 기술 스택

| 영역 | 기술 |
| --- | --- |
| App | Expo, React Native, TypeScript |
| Routing | Expo Router |
| State | Zustand |
| Form | react-hook-form |
| Backend | Supabase Auth, PostgreSQL |
| Calendar | react-native-calendars |
| Date | date-fns |
| UX | Expo Haptics, Expo Image Picker |

## 주요 화면

| 화면 | 설명 |
| --- | --- |
| Login / Signup | Supabase Auth 기반 인증 |
| Profile Setup | 최초 가입 후 사용자 정보 설정 |
| Today | 오늘의 기록 작성 및 제출 |
| Grade | 제출 기록에 대한 자가 평가 |
| Group | 그룹 생성, 가입, 멤버 현황 |
| Group Calendar | 날짜별 그룹 제출 현황 |
| Record Detail | 제출 기록 상세 및 댓글 |
| Penalties | 누적 벌금 확인 |
| Profile | 사용자 정보와 앱 설정 |

## 폴더 구조

```text
app/
  (auth)/                 # 로그인, 회원가입, 프로필 설정
  (tabs)/                 # Today, Group, Profile 탭
    group/                # 그룹 생성/가입/상세/벌금
    index/                # 오늘 기록, 평가, 타임라인
  _layout.tsx             # 루트 레이아웃

lib/
  store/                  # Zustand 상태 관리
  supabase/               # Supabase 클라이언트

types/
  database.ts             # Supabase DB 타입
  index.ts                # 앱 공통 타입

sql codes/                # Supabase 스키마/정책 SQL
md files/                 # 설정 및 기능 문서
```

## 구현 포인트

- Expo Router의 파일 기반 라우팅으로 인증 플로우와 탭 플로우 분리
- Zustand store를 도메인별로 나누어 인증, 그룹, 기록, 평가, 벌금 상태 관리
- Supabase Auth 사용자와 앱 프로필을 연결하는 구조 설계
- 초대 코드 기반 그룹 참여 흐름 구현
- 일일 기록과 그룹 캘린더를 연결해 제출 여부를 빠르게 확인하도록 구성
- 기록 상세 화면에 댓글을 연결해 그룹 내 피드백 흐름 제공

## 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 만들고 Supabase 정보를 넣습니다.

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. 개발 서버 실행

```bash
npm start
```

플랫폼별 실행:

```bash
npm run ios
npm run android
npm run web
```

## 현재 상태

현재 버전은 인증, 그룹, 일일 기록, 평가, 댓글, 벌금 확인까지 이어지는 MVP입니다. 서버 자동화가 필요한 벌금 확정 로직, 알림, 실시간 업데이트는 이후 확장 지점으로 남겨두었습니다.

## 프로젝트 한 줄 요약

갓생노트는 작은 그룹이 매일의 기록을 공유하고 서로의 루틴을 지켜보게 만드는 Expo + Supabase 기반 소셜 책임감 앱입니다.
