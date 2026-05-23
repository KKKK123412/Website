/* ============================================
   SKART - MAIN JAVASCRIPT
   ============================================ */

// ========== PRELOADER ==========
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
    startAnimations();
  }, 2200);
});

// ========== CUSTOM CURSOR ==========
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX - 5 + 'px';
  cursor.style.top = mouseY - 5 + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX - 18) * 0.12;
  followerY += (mouseY - followerY - 18) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .cat-card, .product-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    follower.style.width = '60px';
    follower.style.height = '60px';
    follower.style.background = 'rgba(40,116,240,0.1)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    follower.style.width = '36px';
    follower.style.height = '36px';
    follower.style.background = 'transparent';
  });
});

// ========== NAVBAR SCROLL ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 400) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
});

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ========== HERO SLIDER ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let autoSlide;

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); resetAutoSlide(); }
function prevSlide() { goToSlide(currentSlide - 1); resetAutoSlide(); }

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
}
resetAutoSlide();

// ========== COUNTDOWN TIMER ==========
function updateTimer() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(23, 59, 59);
  let diff = midnight - now;

  const h = Math.floor(diff / 3600000);
  diff %= 3600000;
  const m = Math.floor(diff / 60000);
  diff %= 60000;
  const s = Math.floor(diff / 1000);

  document.getElementById('hours').textContent = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}
setInterval(updateTimer, 1000);
updateTimer();

// ========== PRODUCT DATA ==========
const products = [
  { id: 1, name: 'Apple iPhone 16 Pro Max 256GB', brand: 'Apple', price: 134900, original: 159900, discount: 16, rating: 4.8, reviews: 12847, emoji: '📱', category: 'electronics', sold: 78 },
  { id: 2, name: 'Samsung Galaxy S25 Ultra 12GB/512GB', brand: 'Samsung', price: 109999, original: 129999, discount: 15, rating: 4.7, reviews: 8932, emoji: '📱', category: 'electronics', sold: 65 },
  { id: 3, name: 'Sony WH-1000XM6 Wireless Headphones', brand: 'Sony', price: 24999, original: 34990, discount: 29, rating: 4.9, reviews: 45231, emoji: '🎧', category: 'electronics', sold: 89 },
  { id: 4, name: 'Nike Air Max 270 Running Shoes', brand: 'Nike', price: 8499, original: 14995, discount: 43, rating: 4.6, reviews: 6742, emoji: '👟', category: 'fashion', sold: 54 },
  { id: 5, name: 'MacBook Pro M4 16-inch 512GB', brand: 'Apple', price: 199900, original: 239900, discount: 17, rating: 4.9, reviews: 3421, emoji: '💻', category: 'electronics', sold: 45 },
  { id: 6, name: 'Dyson V15 Detect Vacuum Cleaner', brand: 'Dyson', price: 49900, original: 64900, discount: 23, rating: 4.7, reviews: 2891, emoji: '🌀', category: 'home', sold: 38 },
  { id: 7, name: 'Levi\'s 501 Original Jeans Straight Fit', brand: 'Levi\'s', price: 3499, original: 5999, discount: 42, rating: 4.5, reviews: 18923, emoji: '👖', category: 'fashion', sold: 72 },
  { id: 8, name: 'LG OLED C4 65-inch 4K Smart TV', brand: 'LG', price: 149990, original: 199990, discount: 25, rating: 4.8, reviews: 4567, emoji: '📺', category: 'electronics', sold: 61 },
  { id: 9, name: 'Boat Rockerz 550 Pro Headphones', brand: 'Boat', price: 1799, original: 4990, discount: 64, rating: 4.3, reviews: 92847, emoji: '🎵', category: 'electronics', sold: 92 },
  { id: 10, name: 'Prestige Iris 750W Mixer Grinder', brand: 'Prestige', price: 2499, original: 4299, discount: 42, rating: 4.4, reviews: 31456, emoji: '🥣', category: 'home', sold: 68 },
  { id: 11, name: 'Adidas Ultraboost 22 Running Shoes', brand: 'Adidas', price: 9999, original: 16999, discount: 41, rating: 4.6, reviews: 8234, emoji: '👟', category: 'fashion', sold: 57 },
  { id: 12, name: 'OnePlus 13 5G 12GB/256GB', brand: 'OnePlus', price: 54999, original: 69999, discount: 21, rating: 4.6, reviews: 15678, emoji: '📱', category: 'electronics', sold: 49 },
];

// Cart
let cart = JSON.parse(localStorage.getItem('skartCart') || '[]');
let cartCount = cart.reduce((a, b) => a + (b.qty || 1), 0);
updateCartBadge();

function updateCartBadge() {
  document.getElementById('cartBadge').textContent = cartCount;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  cartCount++;
  updateCartBadge();
  localStorage.setItem('skartCart', JSON.stringify(cart));
  showCartNotification();
  const badge = document.getElementById('cartBadge');
  badge.style.animation = 'none';
  badge.offsetHeight;
  badge.style.animation = 'cartBounce 0.4s ease';
}

function showCartNotification() {
  const notif = document.getElementById('cartNotification');
  notif.classList.add('show');
  setTimeout(() => notif.classList.remove('show'), 3000);
}

// ========== RENDER PRODUCTS ==========
function createProductCard(p, isFlash = false) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-category', p.category);
  card.onclick = (e) => {
    if (!e.target.closest('button')) {
      window.location.href = `product.html?id=${p.id}`;
    }
  };

  const progressHtml = isFlash ? `
    <div class="product-progress">
      <div class="progress-label">🔥 ${p.sold}% sold</div>
      <div class="progress-bar"><div class="progress-fill" style="width:${p.sold}%"></div></div>
    </div>` : '';

  card.innerHTML = `
    <div class="product-img">
      <span style="font-size:5rem">${p.emoji}</span>
      <div class="product-discount-badge">-${p.discount}%</div>
      <button class="product-wishlist" onclick="event.stopPropagation(); this.textContent='❤️'">🤍</button>
    </div>
    <div class="product-info">
      <div class="product-brand">${p.brand}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
        <span>${p.rating}</span>
        <span class="rating-count">(${p.reviews.toLocaleString()})</span>
      </div>
      <div class="product-price">
        <span class="price-current">₹${p.price.toLocaleString()}</span>
        <span class="price-original">₹${p.original.toLocaleString()}</span>
        <span class="price-off">-${p.discount}%</span>
      </div>
    </div>
    ${progressHtml}
    <div class="product-actions">
      <button class="btn-cart" onclick="event.stopPropagation(); addToCart(${p.id})">🛒 Add to Cart</button>
      <button class="btn-buy" onclick="event.stopPropagation(); window.location.href='checkout.html'">Buy Now</button>
    </div>
  `;
  return card;
}

function renderDeals() {
  const grid = document.getElementById('dealsGrid');
  grid.innerHTML = '';
  products.slice(0, 6).forEach((p, i) => {
    const card = createProductCard(p, true);
    card.style.animationDelay = `${i * 0.1}s`;
    grid.appendChild(card);
  });
}

let currentFilter = 'all';
let visibleCount = 8;

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
  const toShow = filtered.slice(0, visibleCount);
  toShow.forEach((p, i) => {
    const card = createProductCard(p, false);
    card.style.animationDelay = `${i * 0.08}s`;
    grid.appendChild(card);
  });
}

function filterProducts(cat, btn) {
  currentFilter = cat;
  visibleCount = 8;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

function loadMore() {
  visibleCount += 4;
  renderProducts();
  window.scrollBy({ top: 300, behavior: 'smooth' });
}

// ========== SEARCH ==========
const searchData = [
  '📱 iPhone 16 Pro', '💻 MacBook Pro', '🎧 Sony Headphones',
  '📺 Samsung TV 4K', '👟 Nike Running Shoes', '👗 Dress for Women',
  '🏠 Sofa Set', '💄 Lipstick Combo', '⌚ Smart Watch', '📷 Camera DSLR'
];

document.getElementById('searchInput').addEventListener('input', function() {
  const val = this.value.toLowerCase();
  const sug = document.getElementById('searchSuggestions');
  if (!val) { sug.style.display = 'none'; return; }
  const matches = searchData.filter(s => s.toLowerCase().includes(val));
  if (matches.length) {
    sug.style.display = 'block';
    sug.innerHTML = matches.map(m => `
      <div class="suggestion-item" onclick="selectSuggestion('${m}')">
        <span>🔍</span> ${m}
      </div>
    `).join('');
  } else {
    sug.style.display = 'none';
  }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav-search')) {
    document.getElementById('searchSuggestions').style.display = 'none';
  }
});

function selectSuggestion(val) {
  document.getElementById('searchInput').value = val.replace(/^\S+\s/, '');
  document.getElementById('searchSuggestions').style.display = 'none';
  performSearch();
}

function performSearch() {
  const q = document.getElementById('searchInput').value;
  if (q) window.location.href = `products.html?q=${encodeURIComponent(q)}`;
}

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') performSearch();
});

// ========== TESTIMONIALS ==========
let currentTest = 0;
const testCards = document.querySelectorAll('.testimonial-card');

function showTestimonial(n) {
  testCards[currentTest].classList.remove('active');
  currentTest = (n + testCards.length) % testCards.length;
  testCards[currentTest].classList.add('active');
}

function nextTestimonial() { showTestimonial(currentTest + 1); }
function prevTestimonial() { showTestimonial(currentTest - 1); }

setInterval(() => nextTestimonial(), 5000);

// ========== NEWSLETTER ==========
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value;
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }
  const btn = document.querySelector('.newsletter-form button');
  btn.textContent = '✅ Subscribed!';
  btn.style.background = '#22c55e';
  document.getElementById('newsletterEmail').value = '';
  setTimeout(() => {
    btn.textContent = 'Subscribe Now';
    btn.style.background = '';
  }, 3000);
}

// ========== SCROLL TO TOP ==========
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== COUNTER ANIMATION ==========
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 25);
  });
}

// ========== INTERSECTION OBSERVER ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function startAnimations() {
  document.querySelectorAll('.cat-card, .why-card, .product-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${i * 0.08}s`;
    observer.observe(el);
  });
  animateCounters();
}

// ========== INIT ==========
renderDeals();
renderProducts();

// Ripple effect on buttons
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn-primary, .btn-cart, .btn-buy, .load-more-btn');
  if (!btn) return;
  const ripple = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  ripple.style.cssText = `
    position:absolute; border-radius:50%;
    background:rgba(255,255,255,0.3);
    width:0; height:0;
    left:${e.clientX-rect.left}px; top:${e.clientY-rect.top}px;
    transform:translate(-50%,-50%);
    animation:ripple 0.6s ease-out;
    pointer-events:none;
  `;
  if (!btn.style.position || btn.style.position === 'static') btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// Ripple keyframe
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
  to { width: 300px; height: 300px; opacity: 0; }
}
`;
document.head.appendChild(style);

console.log('%cSKart Developer Console', 'font-size:20px; font-weight:bold; color:#2874f0;');
console.log('%cBuilt with ❤️ in India', 'color:#22c55e;');
