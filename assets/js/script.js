// Static Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {

  // Hero Slider
  let currentHeroSlide = 0;
  let heroAutoSlide;
  
  function showHeroSlide(index) {
      const slides = document.querySelectorAll('.hero-slide');
      
      // Hide all slides
      slides.forEach(slide => slide.classList.remove('active'));
      
      // Show current slide with fade effect
      if (slides[index]) {
          // Small delay to ensure smooth transition
          setTimeout(() => {
              slides[index].classList.add('active');
          }, 50);
      }
  }
  
  function nextHeroSlide() {
      const slides = document.querySelectorAll('.hero-slide');
      currentHeroSlide = (currentHeroSlide + 1) % slides.length;
      showHeroSlide(currentHeroSlide);
  }
  
  function prevHeroSlide() {
      const slides = document.querySelectorAll('.hero-slide');
      currentHeroSlide = (currentHeroSlide - 1 + slides.length) % slides.length;
      showHeroSlide(currentHeroSlide);
  }
  
  function startHeroAutoSlide() {
      heroAutoSlide = setInterval(nextHeroSlide, 5000); // 6秒間隔
  }
  
  function stopHeroAutoSlide() {
      clearInterval(heroAutoSlide);
  }
  
  // Add swipe functionality for hero slider
  const heroSlider = document.querySelector('.hero-slider');
  let heroStartX = 0;
  let heroEndX = 0;
  
  if (heroSlider) {
    heroSlider.addEventListener('touchstart', (e) => {
        heroStartX = e.touches[0].clientX;
        stopHeroAutoSlide();
    }, { passive: true });
    heroSlider.addEventListener('touchend', (e) => {
        heroEndX = e.changedTouches[0].clientX;
        handleHeroSwipe();
        startHeroAutoSlide();
    }, { passive: true });
    // Mouse support
    heroSlider.addEventListener('mousedown', (e) => {
        heroStartX = e.clientX;
        stopHeroAutoSlide();
    });
    heroSlider.addEventListener('mouseup', (e) => {
        heroEndX = e.clientX;
        handleHeroSwipe();
        startHeroAutoSlide();
    });
    // Pause auto slide on hover
    heroSlider.addEventListener('mouseenter', stopHeroAutoSlide);
    heroSlider.addEventListener('mouseleave', startHeroAutoSlide);
    // Keyboard navigation
    heroSlider.setAttribute('tabindex', '0');
    heroSlider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevHeroSlide();
        else if (e.key === 'ArrowRight') nextHeroSlide();
    });
  }
  

  function handleHeroSwipe() {
      const swipeThreshold = 50;
      const swipeDistance = heroEndX - heroStartX;
      
      if (Math.abs(swipeDistance) > swipeThreshold) {
          if (swipeDistance > 0) {
              prevHeroSlide();
          } else {
              nextHeroSlide();
          }
      }
  }
  
  // Initialize hero slider
  showHeroSlide(0);
  startHeroAutoSlide();

  // Use Case Slider
  // let currentUseCaseSlide = 0;
  let currentUseCaseSlide = 0;
  const useCaseSlides = document.querySelectorAll('.usecase-slide');
  
  function showUseCaseSlide(index) {
      // const slides = document.querySelectorAll('.usecase-slide');
      const slides = useCaseSlides;
      const indicators = document.querySelectorAll('.usecase-indicator');
      const prevBtn = document.querySelector('.usecase-prev');
      const nextBtn = document.querySelector('.usecase-next');
      
      // Hide all slides
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('active'));
      
      // Show current slide
      if (slides[index]) {
          slides[index].classList.add('active');
      }
      if (indicators[index]) {
          indicators[index].classList.add('active');
      }
      
      // Update button states
      if (prevBtn) {
          if (index === 0) {
              prevBtn.classList.add('disabled');
          } else {
              prevBtn.classList.remove('disabled');
          }
      }
      
      // if (nextBtn) {
      //     if (index === useCases.length - 1) {
      if (nextBtn) {
          if (index === useCaseSlides.length - 1) {
              nextBtn.classList.add('disabled');
          } else {
              nextBtn.classList.remove('disabled');
          }
      }
  }
  
  function nextUseCaseSlide() {
      // if (currentUseCaseSlide < useCases.length - 1) {
        if (currentUseCaseSlide < useCaseSlides.length - 1) {
          currentUseCaseSlide++;
          showUseCaseSlide(currentUseCaseSlide);
      }
  }
  
  function prevUseCaseSlide() {
      if (currentUseCaseSlide > 0) {
          currentUseCaseSlide--;
          showUseCaseSlide(currentUseCaseSlide);
      }
  }
  
  // Initialize use case slider
  const useCasePrevBtn = document.querySelector('.usecase-prev');
  const useCaseNextBtn = document.querySelector('.usecase-next');
  const useCaseIndicators = document.querySelectorAll('.usecase-indicator');
  
  if (useCasePrevBtn) {
      useCasePrevBtn.addEventListener('click', prevUseCaseSlide);
  }
  
  if (useCaseNextBtn) {
      useCaseNextBtn.addEventListener('click', nextUseCaseSlide);
  }
  
  useCaseIndicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          currentUseCaseSlide = index;
          showUseCaseSlide(currentUseCaseSlide);
      });
  });
  
  
  // Add swipe functionality for use case slider
  const useCaseSlider = document.querySelector('.usecase-slider');
  let useCaseStartX = 0;
  let useCaseEndX = 0;
  
  if (useCaseSlider) {
    useCaseSlider.addEventListener('touchstart', (e) => {
          useCaseStartX = e.touches[0].clientX;
      }, { passive: true });
      useCaseSlider.addEventListener('touchend', (e) => {
          useCaseEndX = e.changedTouches[0].clientX;
          handleUseCaseSwipe();
      }, { passive: true });
      

      // Add mouse drag support for desktop
      useCaseSlider.addEventListener('mousedown', (e) => {
          useCaseStartX = e.clientX;
          useCaseSlider.addEventListener('mousemove', handleUseCaseMouseMove);
      });
      
      useCaseSlider.addEventListener('mouseup', (e) => {
          useCaseEndX = e.clientX;
          handleUseCaseSwipe();
          useCaseSlider.removeEventListener('mousemove', handleUseCaseMouseMove);
      });
      // Keyboard navigation
      useCaseSlider.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') prevUseCaseSlide();
          else if (e.key === 'ArrowRight') nextUseCaseSlide();
      });
      useCaseSlider.setAttribute('tabindex', '0');
  }
  
  function handleUseCaseMouseMove(e) {
      e.preventDefault();
  }
  
  function handleUseCaseSwipe() {
      const swipeThreshold = 50; // minimum distance for swipe
      const swipeDistance = useCaseEndX - useCaseStartX;
      
      if (Math.abs(swipeDistance) > swipeThreshold) {
          if (swipeDistance > 0) {
              // Swipe right - previous slide
              prevUseCaseSlide();
          } else {
              // Swipe left - next slide
              nextUseCaseSlide();
          }
      }
  }
  
  // Initialize first slide
  showUseCaseSlide(0);

  // Users Voice Slider - Ultra-lightweight Implementation
  (() => {
      let currentIndex = 0, isDragging = false, track, dots, liveRegion;
      
      const update = () => {
          // Mobile breakpoint: 3-card layout with center full + edge halves
          const isMobile = window.innerWidth <= 768;
          let translateX;
          
          if (isMobile) {
              // Mobile: 3-card layout - center full card with half cards on edges
              // 複製カード分（2枚）を考慮: -66.666% + 基本オフセット(-33.333%) = -100%
              translateX = -100 - currentIndex * 33.333; // 33.333% per card
          } else {
              // Desktop: 5-card layout (original)
              translateX = -112.5 - currentIndex * 25; // 25% per card
          }
          
          track.style.transform = `translateX(${translateX}%)`;
          track.style.transition = isDragging ? 'none' : 'transform 0.3s ease-in-out';
          dots.forEach((dot, i) => {
              dot.classList.toggle('active', i === currentIndex);
              dot.setAttribute('aria-pressed', i === currentIndex);
          });
          if (liveRegion) liveRegion.textContent = `スライド ${currentIndex + 1} / 7`;
      };
      
      const next = () => { currentIndex = (currentIndex + 1) % 7; update(); };
      const prev = () => { currentIndex = currentIndex ? currentIndex - 1 : 6; update(); };
      const goTo = (i) => { if (i !== currentIndex && i >= 0 && i <= 6) { currentIndex = i; update(); } };
      
      const init = () => {
          const slider = document.querySelector('.voice-slider');
          track = document.querySelector('.voice-track');
          if (!slider || !track) return;
          
          // Clone cards for infinite loop
          const cards = [...track.children];
          [...cards.slice(-4), ...cards.slice(0, 4)].forEach((card, i) => {
              track[i < 4 ? 'insertBefore' : 'appendChild'](card.cloneNode(true), i < 4 ? track.firstChild : null);
          });
          
          dots = document.querySelectorAll('.voice-pagination-dot');
          liveRegion = slider.querySelector('.sr-only[aria-live]');
          update();
          
          // Event delegation for buttons and dots
          document.addEventListener('click', e => {
              if (e.target.classList.contains('voice-prev')) prev();
              else if (e.target.classList.contains('voice-next')) next();
              else if (e.target.classList.contains('voice-pagination-dot'))
                  goTo([...dots].indexOf(e.target));
          });
          
          // Touch/mouse handling
          let startX, startTransform;
          const getX = e => e.touches?.[0]?.clientX ?? e.clientX;
          
          ['pointerdown', 'touchstart'].forEach(type => 
              slider.addEventListener(type, e => {
                  isDragging = true;
                  startX = getX(e);
                  const isMobile = window.innerWidth <= 768;
                  startTransform = parseFloat(track.style.transform.match(/-?[\d.]+/)?.[0] || (isMobile ? -100 : -112.5));
                  document.body.style.userSelect = 'none';
                  e.preventDefault();
              }, { passive: false })
          );
          
          ['pointermove', 'touchmove'].forEach(type => 
              slider.addEventListener(type, e => {
                  if (!isDragging) return;
                  const deltaX = getX(e) - startX;
                  track.style.transform = `translateX(${startTransform + deltaX / innerWidth * 100}%)`;
                  track.style.transition = 'none';
                  e.preventDefault();
              }, { passive: false })
          );
          
          ['pointerup', 'touchend', 'mouseleave'].forEach(type => 
              document.addEventListener(type, e => {
                  if (!isDragging) return;
                  isDragging = false;
                  document.body.style.userSelect = '';
                  const deltaX = getX(e) - startX;
                  Math.abs(deltaX) > 24 ? (deltaX > 0 ? prev() : next()) : update();
              })
          );
          
          // Keyboard navigation
          slider.addEventListener('keydown', e => {
              if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
              else if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
          });
          
          // Accessibility
          Object.assign(slider, {
              tabIndex: 0,
              role: 'region',
              'aria-label': 'ユーザーボイススライダー'
          });
          
          // Resize handler - update layout on orientation change
          addEventListener('resize', () => {
              // Debounce resize to avoid excessive updates
              clearTimeout(window.voiceResizeTimeout);
              window.voiceResizeTimeout = setTimeout(update, 100);
          });
      };
      
      document.readyState === 'loading' ? addEventListener('DOMContentLoaded', init) : init();
  })();

  // FAQ Accordion
  let currentFaqOpen = 0;
  
  function toggleFaq(index) {
      const faqItems = document.querySelectorAll('.faq-item');
      const faqAnswers = document.querySelectorAll('.faq-answer');
      
      // Close all FAQ items
      faqItems.forEach((item, i) => {
          if (i === index && !item.classList.contains('active')) {
              // Open clicked item if not already open
              item.classList.add('active');
              faqAnswers[i].style.maxHeight = faqAnswers[i].scrollHeight + 'px';
              currentFaqOpen = i;
          } else {
              // Close all other items
              item.classList.remove('active');
              faqAnswers[i].style.maxHeight = '0';
          }
      });
  }
  
  // Initialize FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((question, index) => {
      question.addEventListener('click', () => toggleFaq(index));
  });
  
  // Open first FAQ item by default
  if (faqQuestions.length > 0) {
      toggleFaq(0);
  }

  // Scroll Animation (Simple fade-in effect)
  function handleScrollAnimations() {
      const elements = document.querySelectorAll('.feature-card, .voice-card, .faq-item');
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          
          if (elementTop < windowHeight - 50) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  }
  
  // Initialize scroll animations
  const animatedElements = document.querySelectorAll('.feature-card, .voice-card, .faq-item');
  animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  window.addEventListener('scroll', handleScrollAnimations);
  handleScrollAnimations();
  
});
