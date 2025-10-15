// 수능 지구과학Ⅰ 강의 랜딩 페이지 - Main JavaScript

// DOM 요소가 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
  
  // 스크롤 애니메이션 초기화
  initScrollAnimations();
  
  // 부드러운 스크롤 초기화
  initSmoothScroll();
  
  // CTA 버튼 애니메이션
  initCTAAnimation();
  
});

/**
 * 스크롤 시 섹션 페이드인 애니메이션
 */
function initScrollAnimations() {
  const sections = document.querySelectorAll('section:not(.hero)');
  
  // Intersection Observer 옵션
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  // Observer 콜백 함수
  const observerCallback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section--visible');
        // 한 번 보이면 관찰 중지 (성능 최적화)
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Observer 생성 및 관찰 시작
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

/**
 * 부드러운 스크롤 네비게이션
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // # 링크만 있는 경우 무시
      if (href === '#') return;
      
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // 부드러운 스크롤
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // URL 업데이트 (히스토리에 추가하지 않음)
        history.replaceState(null, null, href);
      }
    });
  });
}

/**
 * CTA 버튼 애니메이션 효과
 */
function initCTAAnimation() {
  const ctaButton = document.querySelector('.hero__cta');
  
  if (ctaButton) {
    // 마우스 이동에 따른 미묘한 애니메이션
    ctaButton.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    ctaButton.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  }
}

/**
 * 카드 호버 효과 강화 (선택적)
 */
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.curriculum__card, .features__card, .testimonials__card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 10px 30px rgba(191, 189, 186, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });
}

// 카드 호버 효과 활성화 (선택적 - 원하면 DOMContentLoaded에 추가)
// initCardHoverEffects();

/**
 * 페이지 로딩 시 해시가 있는 경우 해당 섹션으로 스크롤
 */
window.addEventListener('load', function() {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }
});

/**
 * 스크롤 진행률 표시 (선택적)
 */
function initScrollProgress() {
  // 진행률 바 요소 생성
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--color-accent);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  // 스크롤 이벤트
  window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// 스크롤 진행률 표시 활성화 (선택적)
// window.addEventListener('load', initScrollProgress);
