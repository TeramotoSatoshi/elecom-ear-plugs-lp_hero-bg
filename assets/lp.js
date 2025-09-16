/**
 * Landing Page JavaScript - Shopify Theme Implementation
 * Handles hero slider, use case slider, user reviews, FAQ, and animations
 * Compatible with Shopify Section Rendering API
 */

(function() {
  'use strict';

  // Shopify theme editor compatibility
  const isThemeEditor = window.Shopify && window.Shopify.designMode;

  // Hero Slider functionality
  class LPHeroSlider {
    constructor(sliderElement) {
      this.slider = sliderElement;
      this.currentSlide = 0;
      this.autoSlideInterval = null;
      this.startX = 0;
      this.endX = 0;

      // Get settings from data attributes
      this.autoRotate = this.slider.dataset.autoRotate === 'true';
      this.rotateSpeed = parseInt(this.slider.dataset.rotateSpeed || '5') * 1000;

      this.init();
    }

    init() {
      this.slides = this.slider.querySelectorAll('.lp-hero__slide');
      if (this.slides.length === 0) return;

      this.setupEventListeners();
      this.showSlide(0);

      if (this.autoRotate && !isThemeEditor) {
        this.startAutoSlide();
      }
    }

    setupEventListeners() {
      // Touch events
      this.slider.addEventListener('touchstart', (e) => {
        this.startX = e.touches[0].clientX;
        this.stopAutoSlide();
      }, { passive: true });

      this.slider.addEventListener('touchend', (e) => {
        this.endX = e.changedTouches[0].clientX;
        this.handleSwipe();
        if (this.autoRotate && !isThemeEditor) {
          this.startAutoSlide();
        }
      }, { passive: true });

      // Mouse events
      this.slider.addEventListener('mousedown', (e) => {
        this.startX = e.clientX;
        this.stopAutoSlide();
      });

      this.slider.addEventListener('mouseup', (e) => {
        this.endX = e.clientX;
        this.handleSwipe();
        if (this.autoRotate && !isThemeEditor) {
          this.startAutoSlide();
        }
      });

      // Pause on hover
      if (!isThemeEditor) {
        this.slider.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.slider.addEventListener('mouseleave', () => this.startAutoSlide());
      }

      // Keyboard navigation
      this.slider.setAttribute('tabindex', '0');
      this.slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.previousSlide();
        else if (e.key === 'ArrowRight') this.nextSlide();
      });
    }

    showSlide(index) {
      this.slides.forEach(slide => slide.classList.remove('active'));
      if (this.slides[index]) {
        setTimeout(() => {
          this.slides[index].classList.add('active');
        }, 50);
      }
    }

    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.showSlide(this.currentSlide);
    }

    previousSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.showSlide(this.currentSlide);
    }

    handleSwipe() {
      const swipeThreshold = 50;
      const swipeDistance = this.endX - this.startX;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          this.previousSlide();
        } else {
          this.nextSlide();
        }
      }
    }

    startAutoSlide() {
      this.stopAutoSlide();
      if (this.autoRotate && !isThemeEditor) {
        this.autoSlideInterval = setInterval(() => this.nextSlide(), this.rotateSpeed);
      }
    }

    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    }

    destroy() {
      this.stopAutoSlide();
      // Remove event listeners would go here if needed
    }
  }

  // Use Case Slider functionality
  class LPUseCaseSlider {
    constructor(sliderElement) {
      this.slider = sliderElement;
      this.currentSlide = 0;
      this.slides = this.slider.querySelectorAll('.usecase-slide');
      this.indicators = document.querySelectorAll('.usecase-indicator');
      this.prevBtn = document.querySelector('.usecase-prev');
      this.nextBtn = document.querySelector('.usecase-next');

      this.init();
    }

    init() {
      this.setupEventListeners();
      this.showSlide(0);
    }

    setupEventListeners() {
      // Navigation buttons
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
      }
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.nextSlide());
      }

      // Indicators
      this.indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => this.goToSlide(index));
      });

      // Touch/mouse events
      this.slider.addEventListener('touchstart', (e) => {
        this.startX = e.touches[0].clientX;
      }, { passive: true });

      this.slider.addEventListener('touchend', (e) => {
        this.endX = e.changedTouches[0].clientX;
        this.handleSwipe();
      }, { passive: true });

      this.slider.addEventListener('mousedown', (e) => {
        this.startX = e.clientX;
      });

      this.slider.addEventListener('mouseup', (e) => {
        this.endX = e.clientX;
        this.handleSwipe();
      });

      // Keyboard navigation
      this.slider.setAttribute('tabindex', '0');
      this.slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.previousSlide();
        else if (e.key === 'ArrowRight') this.nextSlide();
      });
    }

    showSlide(index) {
      // Update slides
      this.slides.forEach(slide => slide.classList.remove('active'));
      if (this.slides[index]) {
        this.slides[index].classList.add('active');
      }

      // Update indicators
      this.indicators.forEach(indicator => indicator.classList.remove('active'));
      if (this.indicators[index]) {
        this.indicators[index].classList.add('active');
      }

      // Update navigation buttons
      if (this.prevBtn) {
        this.prevBtn.classList.toggle('disabled', index === 0);
      }
      if (this.nextBtn) {
        this.nextBtn.classList.toggle('disabled', index === this.slides.length - 1);
      }
    }

    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
        this.showSlide(this.currentSlide);
      }
    }

    previousSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.showSlide(this.currentSlide);
      }
    }

    goToSlide(index) {
      this.currentSlide = index;
      this.showSlide(this.currentSlide);
    }

    handleSwipe() {
      const swipeThreshold = 50;
      const swipeDistance = this.endX - this.startX;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          this.previousSlide();
        } else {
          this.nextSlide();
        }
      }
    }
  }

  // FAQ functionality
  class LPFAQ {
    constructor(container) {
      this.container = container;
      this.items = this.container.querySelectorAll('.lp-faq__item');
      this.questions = this.container.querySelectorAll('.lp-faq__question');
      this.answers = this.container.querySelectorAll('.lp-faq__answer');
      this.currentOpen = 0;

      this.init();
    }

    init() {
      this.setupEventListeners();
      // Open first FAQ by default
      if (this.items.length > 0) {
        this.toggleFaq(0);
      }
    }

    setupEventListeners() {
      this.questions.forEach((question, index) => {
        question.addEventListener('click', () => this.toggleFaq(index));
      });
    }

    toggleFaq(index) {
      this.items.forEach((item, i) => {
        if (i === index && !item.classList.contains('active')) {
          item.classList.add('active');
          this.answers[i].style.maxHeight = this.answers[i].scrollHeight + 'px';
          this.questions[i].setAttribute('aria-expanded', 'true');
          this.currentOpen = i;
        } else {
          item.classList.remove('active');
          this.answers[i].style.maxHeight = '0';
          this.questions[i].setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // User Voice Swiper Integration (handled by standalone function)
  class LPUserVoice {
    constructor(container) {
      this.container = container;
    }

    destroy() {
      // Cleanup handled by standalone Swiper initialization
    }
  }

  // Scroll animations
  class LPScrollAnimations {
    constructor() {
      this.elements = document.querySelectorAll('.lp-features__card, .user-voice__card, .lp-faq__item');
      this.init();
    }

    init() {
      // Set initial styles
      this.elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      });

      this.handleScroll();
      window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
      const windowHeight = window.innerHeight;

      this.elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 50) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }
  }

  // Section instances storage
  const sectionInstances = new Map();

  // Initialize section
  function initializeSection(sectionElement) {
    const sectionType = sectionElement.dataset.sectionType;
    const sectionId = sectionElement.dataset.sectionId || sectionElement.id;

    // Clean up existing instance
    if (sectionInstances.has(sectionId)) {
      const instance = sectionInstances.get(sectionId);
      if (instance && typeof instance.destroy === 'function') {
        instance.destroy();
      }
      sectionInstances.delete(sectionId);
    }

    let instance = null;

    switch (sectionType) {
      case 'lp-hero':
        const heroSlider = sectionElement.querySelector('.lp-hero__slider');
        if (heroSlider) {
          instance = new LPHeroSlider(heroSlider);
        }
        break;

      case 'lp-usecase':
        const usecaseSlider = sectionElement.querySelector('.usecase-slider');
        if (usecaseSlider) {
          instance = new LPUseCaseSlider(usecaseSlider);
        }
        break;

      case 'lp-user-voice':
        instance = new LPUserVoice(sectionElement);
        break;

      case 'lp-faq':
        instance = new LPFAQ(sectionElement);
        break;
    }

    if (instance) {
      sectionInstances.set(sectionId, instance);
    }
  }

  // Initialize User Voice Swiper - standalone for compatibility
  const initUserVoiceSwiper = () => {
    const swiperElement = document.querySelector(".user-voice__slider");
    if (!swiperElement || typeof Swiper === 'undefined') return;

    // Destroy existing instance if exists
    if (swiperElement.swiper) {
      swiperElement.swiper.destroy(true, true);
    }

    new Swiper(".user-voice__slider", {
      loop: true,
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: 20,
      initialSlide: 2,
      pagination: {
        el: '.user-voice__pagination',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }
    });
  };

  // Initialize all sections on page load
  function initializeAllSections() {
    const sections = document.querySelectorAll('[data-section-type^="lp-"]');
    sections.forEach(section => initializeSection(section));

    // Initialize scroll animations
    new LPScrollAnimations();

    // Initialize User Voice Swiper (standalone)
    setTimeout(initUserVoiceSwiper, 100);
  }

  // Shopify Section Rendering API event handlers
  document.addEventListener('shopify:section:load', function(event) {
    initializeSection(event.target);
    // Re-initialize Swiper if user-voice section is loaded
    if (event.target.dataset.sectionType === 'lp-user-voice') {
      setTimeout(initUserVoiceSwiper, 100);
    }
  });

  document.addEventListener('shopify:section:unload', function(event) {
    const sectionId = event.target.dataset.sectionId || event.target.id;
    if (sectionInstances.has(sectionId)) {
      const instance = sectionInstances.get(sectionId);
      if (instance && typeof instance.destroy === 'function') {
        instance.destroy();
      }
      sectionInstances.delete(sectionId);
    }
  });

  document.addEventListener('shopify:section:select', function(event) {
    // Handle section selection in theme editor if needed
  });

  document.addEventListener('shopify:section:deselect', function(event) {
    // Handle section deselection in theme editor if needed
  });

  document.addEventListener('shopify:block:select', function(event) {
    // Handle block selection in theme editor if needed
  });

  document.addEventListener('shopify:block:deselect', function(event) {
    // Handle block deselection in theme editor if needed
  });

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAllSections);
  } else {
    initializeAllSections();
  }

})();