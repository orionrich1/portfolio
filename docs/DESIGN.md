# Design System — 이윤식 포트폴리오 (단일 페이지)

## 0. 단일 기준 (Single Source of Truth)

이 사이트는 **한 개의 스크롤 페이지**(`src/index.html`)로 구성된다. 색·폰트·애니메이션 톤은 **구현된 HTML/CSS**를 우선한다. `tailwind.config.js`의 `cBlack` / `cMain`과 **문서 내 `<style>` 블록**이 다를 수 있으므로, **화면에 보이는 값(인라인·CDN 설정)**을 디자인 기준으로 삼는다.

---

## 1. 테마

- **캔버스**: 어두운 배경 (`#121212` 계열 — `bg-cBlack` 등)
- **악센트**: 라임 그린 (`#A3E635` — `bg-cMain` / `text-cMain`, 히어로·내비·CTA 강조)
- **본문 텍스트**: 밝은 그레이 (`text-gray-300` 등)
- **대비**: 주요 제목은 흰색 + 악센트 색 조합으로 위계를 만든다.

---

## 2. 타이포그래피

- **영문 디스플레이**: Montserrat (`font-montserrat`) — 히어로 제목·섹션 제목
- **한글 본문**: Noto Sans KR (`font-noto`)
- **로드**: Google Fonts (`Montserrat` 400/700/900, `Noto Sans KR` 400/700/900)

웹폰트 로드는 `index.html`의 `<link rel="stylesheet" href="https://fonts.googleapis.com/...">`를 따른다.

---

## 3. 레이아웃

- **헤더**: 상단 고정(`fixed`), 반투명 다크 + 블러(`backdrop-blur`), 로고 + 앵커 내비(About / Projects / Skills / Journey)
- **컨테이너**: `container mx-auto` + 섹션별 `py-24` 전후 여백
- **히어로**: 전체 높이감(`min-h-screen`), 배경 장식 이미지(`sh01`, `sh02`)는 저opacity로 깊이만 준다.
- **프로젝트 카드**: 다크 카드(`bg-cBlack`, `bg-gray-900` 섹션) + 썸네일 + 텍스트 + GitHub / Live Demo 버튼

---

## 4. 인터랙션 · 모션

- **GSAP**: CDN(`gsap.min.js`, `ScrollTrigger.min.js`) + 인라인 스크립트로 섹션 등장·스킬 게이지 등
- **스크롤**: `scroll-smooth` on `<html>`, 맨 위로 버튼은 고정 우하단
- **모달**: `data-modal-target` / `data-modal-close` + `hidden` 토글(구현된 마크업 기준)

애니메이션은 **과하지 않게**, 콘텐츠 가독성을 해치지 않는 범위로 유지한다.

---

## 5. Tailwind 사용 방식

- **구현**: Parcel이 `src/index.html`이 참조하는 `src/index.css`를 PostCSS(Tailwind)로 번들한다.
- **토큰**: `tailwind.config.js`의 `cBlack`(`#121212`)·`cMain`(`#A3E635`)이 화면의 다크 캔버스·라임 악센트와 맞춰져 있다.

---

## 6. 반응형

- 브레이크포인트는 Tailwind 기본(`sm` / `md` / `lg`)을 사용한다.
- 히어로·프로젝트는 `flex-col` ↔ `lg:flex-row` 등으로 모바일 우선 정렬한다.

---

## 7. 에셋

- 로고·썸네일·스킬 아이콘은 `img/` 및 HTML이 참조하는 경로를 따른다.
- `favicon.ico`는 저장소 루트 기준 링크(`../favicon.ico` 등)로 연결된다.

---

## 8. Agent / 구현 시 체크

- [ ] 앵커 ID(`#about`, `#projects`, `#skills`, `#journey`)와 헤더 링크가 일치하는가  
- [ ] 고정 헤더에 가리지 않도록 필요 시 `scroll-margin-top` 등을 고려했는가  
- [ ] 외부 링크(GitHub, Live Demo)에 `target="_blank"` + 보안 속성(`rel` 등)이 적절한가  
- [ ] 라이트/다크 혼선 없이 **다크 톤**이 페이지 전반에서 유지되는가  

---

*이 문서는 CodeMoa용 `site-ds`/Bootstrap 설명이 아니라, **본 포트폴리오 저장소**의 현행 UI를 반영한다.*
