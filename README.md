# 🌍 유시훈T 수능 지구과학Ⅰ 강의 랜딩 페이지

서울대 지구과학교육과 출신 유시훈T의 수능 지구과학Ⅰ 강의를 소개하는 원페이지 랜딩 페이지입니다.

## 📋 프로젝트 개요

- **목적**: 수능 지구과학Ⅰ 강의 홍보를 위한 원페이지 랜딩 페이지
- **배포**: Github Pages 또는 정적 호스팅
- **구조**: 단순한 정적 웹사이트

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업, 접근성 준수
- **CSS3**: 순수 CSS, 반응형 디자인
- **Vanilla JavaScript**: 부드러운 인터렉션
- **Google Fonts**: Noto Sans KR

## 🎨 디자인 특징

### 색상 팔레트
```css
--color-primary: #262624      /* 다크 베이스 */
--color-secondary: #595856    /* 미디엄 그레이 */
--color-tertiary: #8C8A87     /* 라이트 그레이 */
--color-accent: #BFBDBA       /* 베이지 그레이 */
--color-background: #0D0D0D   /* 딥 블랙 */
```

### 반응형 브레이크포인트
- 모바일: ~768px
- 태블릿: 769px ~ 1024px
- 데스크톱: 1025px+

## 📁 파일 구조

```
project/
├── index.html              # 메인 HTML 파일
├── css/
│   ├── reset.css          # CSS 리셋
│   ├── variables.css      # CSS 변수 정의
│   └── styles.css         # 메인 스타일
├── js/
│   └── main.js            # JavaScript 인터렉션
├── images/                 # 이미지 파일
├── fonts/                  # 폰트 파일
└── README.md              # 프로젝트 문서
```

## 🎯 페이지 섹션

1. **Hero Section**: 메인 비주얼 및 CTA
2. **About Section**: 강사 소개
3. **Curriculum Section**: 커리큘럼 안내
4. **Features Section**: 강의 강점
5. **Testimonials Section**: 수강생 후기
6. **Contact Section**: 문의하기
7. **Footer**: 저작권 및 소셜 미디어

## 🚀 로컬 실행 방법

### 1. 파일 다운로드
```bash
git clone https://github.com/dot456/earth-science-ysh.git
cd earth-science-ysh
```

### 2. 브라우저에서 열기
- `index.html` 파일을 더블클릭하거나
- Live Server 등의 로컬 서버 사용

### 3. 또는 Python 간이 서버 사용
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

브라우저에서 `http://localhost:8000` 접속

## ✨ 주요 기능

### 스크롤 애니메이션
- Intersection Observer API를 사용한 페이드인 효과
- 섹션별 순차적 등장

### 부드러운 네비게이션
- 앵커 링크 클릭 시 부드러운 스크롤
- URL 히스토리 업데이트

### 인터렉티브 요소
- CTA 버튼 마우스 추적 애니메이션
- 카드 호버 효과
- 반응형 레이아웃

## 📱 반응형 디자인

모든 디바이스에서 최적화된 경험을 제공합니다:

- **모바일**: 세로 스크롤 최적화, 터치 친화적 UI
- **태블릿**: 그리드 레이아웃 자동 조정
- **데스크톱**: 풀 스크린 경험, 고급 애니메이션

## ♿ 접근성

- WCAG 2.1 AA 레벨 준수
- 시맨틱 HTML 태그 사용
- ARIA 라벨 적용
- 키보드 네비게이션 지원
- 색상 대비율 4.5:1 이상

## 🔧 브라우저 지원

- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)

## 📄 라이선스

© 2025 Y.S.H Science Education. All Rights Reserved.

## 📞 문의

- **Linktree**: [linktr.ee/science.ysh](https://linktr.ee/science.ysh)
- **YouTube**: [youtube.com/@science.ysh](https://youtube.com/@science.ysh)
- **Instagram**: [@science.ysh](https://instagram.com/science.ysh)

## 🎓 개발자 노트

이 웹사이트는 다음 원칙을 따라 개발되었습니다:

- ✅ 순수 HTML/CSS/JS (프레임워크 없음)
- ✅ 모바일 퍼스트 접근
- ✅ 성능 최적화 (빠른 로딩)
- ✅ SEO 친화적 구조
- ✅ 접근성 우선

---

**Made with ❤️ for Y.S.H Science Education**
