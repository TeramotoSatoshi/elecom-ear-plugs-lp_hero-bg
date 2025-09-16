# Shopify Theme Verification Checklist

## Image Loading Verification

### Desktop Testing (1920px viewport)
- [ ] **Hero Section**
  - [ ] Hero slide 1 background loads correctly (`hero-bg_1.png`)
  - [ ] Hero slide 2 background loads correctly (`hero-bg_2.png`)
  - [ ] Hero slide 3 background loads correctly (`hero-bg_3.png`)
  - [ ] Hero slides auto-rotate every 5 seconds
  - [ ] CTA buttons are visible and clickable
  - [ ] No layout shift during image loading

- [ ] **Header Section**
  - [ ] Logo loads with proper dimensions
  - [ ] Logo is crisp on high-DPI displays
  - [ ] Login button displays correctly

- [ ] **Features Section**
  - [ ] Product image loads with responsive srcset
  - [ ] Product detail text renders correctly
  - [ ] Feature cards display in 4-column grid
  - [ ] Feature icons render properly

- [ ] **Use Case Section**
  - [ ] Use case slide 1 background loads (`usecase-bg_1.png`)
  - [ ] Use case slide 2 background loads (`usecase-bg_2.png`)
  - [ ] Use case slide 3 background loads (`usecase-bg_3.png`)
  - [ ] Use case slide 4 background loads (`usecase-bg_4.png`)
  - [ ] Navigation controls work properly
  - [ ] Slider indicators update correctly

- [ ] **Footer Section**
  - [ ] Footer background image loads (`footer-bg.png`)
  - [ ] CTA button is visible and properly positioned
  - [ ] Footer links display correctly

### Mobile Testing (375px viewport)
- [ ] **Hero Section**
  - [ ] Hero mobile backgrounds load (`hero-bg_*_sp.png`)
  - [ ] Aspect ratio maintained (375:590)
  - [ ] CTA buttons remain accessible
  - [ ] Touch swipe gestures work

- [ ] **Header Section**
  - [ ] Logo scales appropriately
  - [ ] Login button remains visible
  - [ ] Mobile menu button appears if configured

- [ ] **Features Section**
  - [ ] Product image scales correctly
  - [ ] Feature cards stack vertically
  - [ ] Text remains readable

- [ ] **Use Case Section**
  - [ ] Background images scale properly
  - [ ] Navigation controls remain usable
  - [ ] Touch gestures work on slider

- [ ] **User Voice Section**
  - [ ] Swiper cards display correctly
  - [ ] Pagination dots function properly
  - [ ] Cards are swipeable

- [ ] **FAQ Section**
  - [ ] Questions remain readable
  - [ ] Accordion functionality works
  - [ ] First item opens by default

### Theme Editor Testing
- [ ] **Section Management**
  - [ ] All sections appear in theme editor
  - [ ] Sections can be reordered
  - [ ] Sections can be disabled/enabled

- [ ] **Hero Section Settings**
  - [ ] Can upload custom desktop images
  - [ ] Can upload custom mobile images
  - [ ] Auto-rotation toggle works
  - [ ] Rotation speed setting works
  - [ ] CTA text and URL are editable

- [ ] **Features Section Settings**
  - [ ] Can upload custom product image
  - [ ] Product title is editable
  - [ ] Product description supports line breaks
  - [ ] Feature cards can be added/removed
  - [ ] Feature icons can be customized

- [ ] **Use Case Section Settings**
  - [ ] Can upload custom background images
  - [ ] Section title/subtitle are editable
  - [ ] Slides can be added/removed

- [ ] **User Voice Section Settings**
  - [ ] Testimonial cards can be added/removed
  - [ ] Tag text is editable
  - [ ] Testimonial text supports paragraphs

- [ ] **FAQ Section Settings**
  - [ ] FAQ items can be added/removed
  - [ ] Questions and answers are editable
  - [ ] Order can be changed

- [ ] **Footer Section Settings**
  - [ ] Can upload custom background image
  - [ ] CTA text and URL are editable
  - [ ] Footer links can be added/removed
  - [ ] Copyright text is editable

### Performance Testing
- [ ] **Loading Speed**
  - [ ] Hero images preload correctly (LCP)
  - [ ] Other images load lazily
  - [ ] No layout shift during loading
  - [ ] Smooth transitions and animations

- [ ] **Responsive Images**
  - [ ] Correct image sizes served per viewport
  - [ ] srcset attributes working properly
  - [ ] WebP format served when supported
  - [ ] Bandwidth usage optimized

### Browser Compatibility
- [ ] **Chrome/Chromium**
  - [ ] All images load correctly
  - [ ] CSS custom properties work
  - [ ] JavaScript functionality intact

- [ ] **Firefox**
  - [ ] All images load correctly
  - [ ] CSS custom properties work
  - [ ] JavaScript functionality intact

- [ ] **Safari**
  - [ ] All images load correctly
  - [ ] CSS custom properties work
  - [ ] JavaScript functionality intact

- [ ] **Edge**
  - [ ] All images load correctly
  - [ ] CSS custom properties work
  - [ ] JavaScript functionality intact

### Developer Tools Verification
- [ ] **Network Tab**
  - [ ] No 404 errors for images
  - [ ] Appropriate image sizes loaded
  - [ ] WebP format served when possible
  - [ ] Lazy loading working correctly

- [ ] **Console Tab**
  - [ ] No JavaScript errors
  - [ ] No CSS warnings
  - [ ] Swiper library loads correctly

- [ ] **Elements Tab**
  - [ ] CSS custom properties set correctly
  - [ ] srcset attributes present
  - [ ] alt attributes on all images
  - [ ] width/height attributes present

### Accessibility Testing
- [ ] **Screen Reader**
  - [ ] All images have descriptive alt text
  - [ ] Buttons have proper aria-labels
  - [ ] FAQ items have aria-expanded attributes

- [ ] **Keyboard Navigation**
  - [ ] Tab order is logical
  - [ ] Hero slider responds to arrow keys
  - [ ] FAQ items can be activated with Enter/Space

- [ ] **Focus Management**
  - [ ] Focus indicators visible
  - [ ] Focus trapped appropriately
  - [ ] Skip links functional

### SEO Verification
- [ ] **Image SEO**
  - [ ] All images have alt attributes
  - [ ] File names are descriptive
  - [ ] Image dimensions specified
  - [ ] Structured data preserved

- [ ] **Page Speed**
  - [ ] Core Web Vitals optimized
  - [ ] LCP under 2.5s
  - [ ] CLS under 0.1
  - [ ] FID under 100ms

## Pre-Launch Checklist

### Content Review
- [ ] All Japanese text displays correctly
- [ ] Product information is accurate
- [ ] External links work properly
- [ ] Contact information is current

### Technical Review
- [ ] All sections function independently
- [ ] Section Rendering API works correctly
- [ ] Theme editor changes reflect immediately
- [ ] No memory leaks in JavaScript

### Asset Review
- [ ] All images under reasonable file sizes
- [ ] Unused images removed or marked
- [ ] Image compression optimized
- [ ] Asset URLs use proper Shopify filters

### Final Testing
- [ ] Complete user journey test (desktop)
- [ ] Complete user journey test (mobile)
- [ ] Theme editor functionality test
- [ ] Performance audit completed

## Troubleshooting Common Issues

### Images Not Loading
1. Check asset file exists in `/assets/` directory
2. Verify correct asset_url or image_url filter usage
3. Confirm image uploads in theme editor
4. Check browser console for 404 errors

### Responsive Images Not Working
1. Verify srcset syntax is correct
2. Check image filter parameters
3. Confirm sizes attribute matches CSS
4. Test with browser developer tools

### Theme Editor Issues
1. Verify schema syntax is valid JSON
2. Check that all settings have proper types
3. Confirm block structure is correct
4. Test section reload functionality

### Performance Problems
1. Optimize large image files
2. Implement proper lazy loading
3. Use appropriate image formats
4. Monitor Core Web Vitals

## Success Criteria
✅ All original images load correctly
✅ Responsive behavior maintained
✅ Theme editor fully functional
✅ No JavaScript errors
✅ Performance optimized
✅ Accessibility standards met
✅ Cross-browser compatibility confirmed