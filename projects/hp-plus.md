# HP+ (Healing Place)

유성구 주변의 공부·휴식 공간을 설문 기반으로 추천하는 Flutter 앱입니다. 사용자의 상황과 선호를 바탕으로 후보지를 정리하고, LLM을 활용해 추천 이유를 제공합니다.

## 핵심 구현

- Flutter + Supabase 기반 종단 간 추천 앱 아키텍처
- Edge Function 후보지 1차 스코어링
- LLM 기반 후보지 재정렬 및 추천 이유 생성
- LLM 실패·쿼터 초과 대응 스코어 기반 폴백
- OpenStreetMap 기반 지도 UX
- 방문 기록, 즐겨찾기, 소셜 피드
- Flutter gen-l10n 기반 한/영 지역화

## 추천 파이프라인

1. 사용자가 설문으로 목적과 선호를 입력합니다.
2. Supabase Edge Function에서 거리, 도보 시간, 적합도 기준으로 후보지를 1차 스코어링합니다.
3. LLM API가 후보지를 재정렬하고 추천 이유를 생성합니다.
4. LLM 호출 실패 시 스코어 기반 추천으로 자동 전환합니다.

## 기술 스택

- Flutter
- Dart
- Supabase Auth / Postgres / RLS / Edge Functions
- LLM API
- flutter_map
- OpenStreetMap
- geolocator
- flutter_localizations

## 설계 포인트

- API 키는 클라이언트에 노출하지 않고 서버 사이드에서만 관리
- LLM 의존도를 낮추기 위한 폴백 경로 설계
- 지도 중심 탐색 흐름과 저장/방문 기록 UX 연결
