# Lighthouse Performance Fixes TODO

**Current Progress:** 0/9

1. [x] Edit src/index.css - Add font-display: swap
2. [x] Edit src/components/Vision/Vision.jsx - Fix above-fold images CLS
3. [x] Edit src/components/Navbar/Navbar.jsx - Add dims/lazy to icons
4. [x] Edit src/components/Brands/BrandBox.jsx - Add image dimensions
5. [x] Edit src/components/Services/Card/Card.jsx - CLS fix + lazy
6. [x] Edit src/components/Blogs/Blog/Blog.jsx - Add lazy to blog images
7. [x] Edit src/components/Care/Card.jsx - Icon dimensions
8. [x] Edit src/components/Brands/Brands.jsx - Reduce swiper speed
9. [x] Run npm run build && Lighthouse audit (manual - run Lighthouse on dist/index.html mobile)

**Expected Impact:**
- Fonts: +5-10 perf
- Images/CLS: +15-25 perf
- Lazy: +5-10 perf
- Total: 31 -> 60-70+

