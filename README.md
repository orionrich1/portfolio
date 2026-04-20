# 이윤식 포트폴리오 (단일 페이지)

**리브랜딩 v2 (기획 반영)**: **UX-Driven Frontend Developer with Design Edge** — 디자인·퍼블 실무와 백엔드 이해 위에 AI 워크플로를 녹인 포지셔닝입니다. 소개·프로젝트(카드 내 AI Collaboration)·3단 Skills·압축 Journey를 한 페이지에서 봅니다. (`<head>` 메타·OG는 `docs/PRODUCT_SPEC.md` v2 톤과 동기화)

## 요구 사항

- **Node.js**: LTS 권장 (예: 20.x 이상)

## 클론 후 실행

```bash
git clone <저장소 URL>
cd portfolio-main
npm install
npm run dev
```

개발 서버는 기본적으로 **http://localhost:5000** 에서 열립니다. (Parcel + nodemon 설정 기준)

## 빌드

```bash
npm run build
```

산출물은 `dist/` 에 생성됩니다. 정적 호스팅(GitHub Pages, Netlify 등)에 `dist` 내용을 올리면 됩니다.

## 스택

- **번들러**: Parcel 2
- **스타일**: Tailwind CSS (`src/index.css` + PostCSS, `tailwind.config.js` — Parcel이 `npm run dev`/`build` 시 번들)
- **인터랙션**: GSAP + ScrollTrigger (CDN)
- **엔트리 HTML**: `src/index.html`

## 스크립트 진입점(단일 원본)

- **실제로 페이지에 로드되는 동작**은 `src/index.html` 하단의 **인라인 `<script>`** 에 정의되어 있습니다. (GSAP·스크롤 애니메이션·맨 위로 버튼)
- 저장소 루트의 `index.js` 는 **Parcel 엔트리에 포함되지 않으며**, **주석만** 두어 단일 원본을 안내합니다. 동작 변경은 **`src/index.html` 인라인 스크립트**만 수정하세요.

## 배포 후 권장

`src/index.html` 의 Open Graph 메타(`og:url`, `og:image`)는 **실제 배포 URL·대표 이미지(절대 경로)** 로 바꾸는 것이 좋습니다. 로컬 개발용으로는 placeholder URL이 들어 있을 수 있습니다.

## CI

`main`/`master` 브랜치에 푸시하거나 PR을 열면 GitHub Actions에서 **`npm ci` 후 `npm run build`** 를 실행합니다 (`.github/workflows/build.yml`).
