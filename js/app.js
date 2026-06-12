/* ========================================
   ZYPHORATECH — AI MARKETPLACE
   Main Application JavaScript
   ======================================== */
// ── Product Data ──
const products = [
  {
    id: 1,
    name: "Senior Fullstack Developer (React/Node.js)",
    category: "Software",
    description: "Profesional IT berpengalaman dalam membangun aplikasi web skala besar dengan React, Node.js, dan arsitektur database modern.",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 2847,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
    features: ["Pengalaman 5+ Tahun", "React, Node.js, SQL/NoSQL", "Proses cepat <48 jam", "Dukungan penuh deployment", "Garansi kualitas kode"]
  },
  {
    id: 2,
    name: "Cloud Architect & DevOps Engineer",
    category: "Cloud",
    description: "Spesialis AWS, GCP, Docker, dan Kubernetes untuk migrasi sistem, otomatisasi, dan arsitektur cloud berkinerja tinggi.",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 1923,
    badge: "new",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&h=400&fit=crop",
    features: ["Sertifikasi AWS/GCP Professional", "Setup CI/CD pipeline", "Optimasi biaya cloud", "Uptime monitoring 99.9%", "Dukungan darurat 24/7"]
  },
  {
    id: 3,
    name: "Cybersecurity & Pentester Specialist",
    category: "Cybersecurity",
    description: "Audit keamanan siber lengkap, pengujian penetrasi (pentest), serta implementasi firewall dan pertahanan data UKM.",
    price: 299.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 1089,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
    features: ["Vulnerability assessment", "Audit kepatuhan data", "Setup pertahanan firewall & VPN", "Pelatihan keamanan staf", "Respons insiden darurat"]
  },
  {
    id: 4,
    name: "IT Strategy & Infrastructure Consultant",
    category: "Konsultasi IT",
    description: "Perancangan arsitektur teknologi bisnis, penyusunan roadmap IT, audit sistem, dan perencanaan kapasitas infrastruktur.",
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.7,
    reviews: 1567,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    features: ["Roadmap IT jangka panjang", "Audit kelayakan infrastruktur", "Vendor management", "Disaster recovery plan", "Efisiensi biaya teknologi"]
  },
  {
    id: 5,
    name: "Data Scientist & AI Engineer",
    category: "Data & AI",
    description: "Membangun model AI/ML khusus, dasbor visualisasi data bisnis, serta integrasi LLM (Large Language Models) kustom.",
    price: 279.99,
    originalPrice: 349.99,
    rating: 4.9,
    reviews: 892,
    badge: "new",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    features: ["Integrasi API LLM (GPT-4/Gemini)", "Dasbor Business Intelligence", "Optimasi query SQL", "Prediksi analitik bisnis", "Data pipeline otomatis"]
  },
  {
    id: 6,
    name: "UI/UX & Product Design Specialist",
    category: "UI/UX Design",
    description: "Desain antarmuka pengguna (UI) dan pengalaman pengguna (UX) web/mobile premium, lengkap dengan prototype interaktif.",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 4231,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    features: ["Desain modern & responsive", "Figma prototype interaktif", "User research & testing", "Custom design system", "Revisi tak terbatas"]
  },
  {
    id: 7,
    name: "Mobile App Developer (Flutter/React Native)",
    category: "Software",
    description: "Pengembangan aplikasi seluler (iOS & Android) berkinerja tinggi, responsif, dan siap rilis di App Store/Play Store.",
    price: 229.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 2156,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    features: ["Lintas platform (iOS/Android)", "Flutter & React Native", "Setup push notification", "Integrasi API pihak ketiga", "App store submission"]
  },
  {
    id: 8,
    name: "Database Administrator & Specialist",
    category: "Cloud",
    description: "Manajemen database relasional & NoSQL, backup terjadwal, pemulihan bencana, dan optimasi kinerja query lambat.",
    price: 179.99,
    originalPrice: 219.99,
    rating: 4.7,
    reviews: 1254,
    badge: null,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
    features: ["Manajemen PostgreSQL, MySQL, Mongo", "Setup otomatisasi backup", "Pemulihan data (recovery)", "Tuning performa query", "Enkripsi data & privasi"]
  }
];

const aiRecommendations = [
  {
    id: 101,
    name: "Setup CI/CD & Cloud Migration",
    category: "Cloud",
    price: 129.99,
    reason: "Berdasarkan minat UKM Anda pada cloud, layanan ini mengotomatiskan deployment software secara aman.",
    matchScore: 97,
    icon: "fas fa-cloud",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop"
  },
  {
    id: 102,
    name: "Audit Keamanan Sistem & VPN",
    category: "Cybersecurity",
    price: 149.99,
    reason: "Sangat disukai UKM yang mempekerjakan Developer — mengamankan akses kode dan server dari jarak jauh.",
    matchScore: 94,
    icon: "fas fa-shield-alt",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=200&h=200&fit=crop"
  },
  {
    id: 103,
    name: "Figma UI/UX Design System",
    category: "UI/UX Design",
    price: 99.99,
    reason: "Sedang tren! Template desain modern untuk mempercepat proses coding frontend tim Anda.",
    matchScore: 91,
    icon: "fas fa-palette",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=200&h=200&fit=crop"
  },
  {
    id: 104,
    name: "Setup Data Pipeline & BI Dashboard",
    category: "Data & AI",
    price: 179.99,
    reason: "Sempurna untuk analisis performa penjualan UKM Anda secara real-time di dasbor interaktif.",
    matchScore: 89,
    icon: "fas fa-chart-line",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop"
  }
];

const testimonials = [
  {
    name: "Hendra Wijaya",
    role: "Pemilik UKM Kerajinan Tangan",
    text: "ZyphoraTech menyelamatkan peluncuran e-commerce kami. Kami kesulitan mencari programmer selama 2 bulan, namun di sini kami mendapatkan Fullstack Developer terverifikasi dalam waktu kurang dari 48 jam!",
    rating: 5,
    avatar: "HW"
  },
  {
    name: "Siti Rahma",
    role: "Pendiri Start-up Retail Hijab",
    text: "Masalah kami sebelumnya adalah proyek teknologi yang selalu terlambat akibat kekurangan SDM. Berkat layanan Cloud & DevOps berlangan di ZyphoraTech, infrastruktur kami selesai tepat waktu dan stabil.",
    rating: 5,
    avatar: "SR"
  },
  {
    name: "Bambang Susanto",
    role: "Direktur Logistik Urban",
    text: "Sebagai UKM, kami tidak punya budget untuk merekrut tim IT internal secara penuh. Model berlangganan ahli IT di ZyphoraTech memberikan kami konsultasi siber kelas enterprise dengan harga terjangkau.",
    rating: 5,
    avatar: "BS"
  },
  {
    name: "Dewi Lestari",
    role: "Product Owner di Kuliner Kita",
    text: "Proses verifikasi dari ZyphoraTech benar-benar nyata. Desainer UI/UX yang kami sewa memberikan hasil figma yang sangat rapi dan siap diproses ke developer. Sangat membantu bisnis lokal!",
    rating: 5,
    avatar: "DL"
  }
];

const trendingProducts = [
  { name: "Senior Fullstack Developer", category: "Software Development", sales: "1.2K", growth: "+32%", direction: "up", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=100&h=100&fit=crop" },
  { name: "Cloud Architect & DevOps", category: "Cloud & Infrastructure", sales: "920", growth: "+25%", direction: "up", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=100&h=100&fit=crop" },
  { name: "UI/UX Product Designer", category: "UI/UX & Product Design", sales: "850", growth: "+21%", direction: "up", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=100&h=100&fit=crop" },
  { name: "Cybersecurity Specialist", category: "Cybersecurity & Security", sales: "740", growth: "+18%", direction: "up", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=100&h=100&fit=crop" }
];

const searchSuggestions = [
  { text: "Fullstack Developer React", tag: "Populer", icon: "fas fa-code" },
  { text: "AWS DevOps Engineer", tag: "Tren", icon: "fas fa-cloud" },
  { text: "Audit Keamanan Siber UKM", tag: "Hot", icon: "fas fa-user-shield" },
  { text: "Figma UI/UX Designer", tag: "Baru", icon: "fas fa-palette" },
  { text: "Konsultasi Infrastruktur IT", tag: "Unggulan", icon: "fas fa-handshake" },
  { text: "Integrasi AI & Chatbot", tag: "Populer", icon: "fas fa-brain" }
];hart-bar" }
];


// ── State ──
let cart = JSON.parse(localStorage.getItem('zyphoraCart') || '[]');
let activeFilter = 'All';
let currentTestimonial = 0;

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavbar();
  initSearch();
  initProducts();
  initAIRecommendations();
  initTrending();
  initTestimonials();
  initStats();
  initCart();
  initNewsletter();
  initScrollAnimations();
  initMobileMenu();
  updateCartUI();
});


// ========================================
// PARTICLE BACKGROUND
// ========================================
function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = ['#ff7b00', '#ffa200', '#ff4500'][Math.floor(Math.random() * 3)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#ff7b00';
          ctx.globalAlpha = (1 - dist / 150) * 0.08;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    animationId = requestAnimationFrame(animate);
  }

  animate();
}


// ========================================
// NAVBAR
// ========================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
}


// ========================================
// SEARCH
// ========================================
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const suggestionsContainer = document.getElementById('searchSuggestions');

  if (!searchInput || !suggestionsContainer) return;

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.length === 0) {
      renderSuggestions(searchSuggestions);
    }
    suggestionsContainer.classList.add('active');
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length === 0) {
      renderSuggestions(searchSuggestions);
    } else {
      const filtered = searchSuggestions.filter(s =>
        s.text.toLowerCase().includes(query)
      );
      const productMatches = products.filter(p =>
        p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
      ).map(p => ({ text: p.name, tag: p.category, icon: 'fas fa-box' }));
      renderSuggestions([...filtered, ...productMatches].slice(0, 6));
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-search')) {
      suggestionsContainer.classList.remove('active');
    }
  });

  function renderSuggestions(items) {
    suggestionsContainer.innerHTML = items.map(item => `
      <div class="search-suggestion-item" onclick="handleSuggestionClick('${item.text}')">
        <i class="${item.icon}"></i>
        <span>${item.text}</span>
        <span class="suggestion-tag">${item.tag}</span>
      </div>
    `).join('');
  }
}

function handleSuggestionClick(text) {
  const searchInput = document.getElementById('searchInput');
  searchInput.value = text;
  document.getElementById('searchSuggestions').classList.remove('active');

  // Filter products
  const query = text.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  if (filtered.length > 0) {
    renderProducts(filtered);
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


// ========================================
// PRODUCTS
// ========================================
function initProducts() {
  renderProducts(products);

  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      const filtered = activeFilter === 'All'
        ? products
        : products.filter(p => p.category === activeFilter);
      renderProducts(filtered);
    });
  });

  // Sort
  const sortSelect = document.getElementById('productSort');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      let sorted = [...products];
      if (activeFilter !== 'All') {
        sorted = sorted.filter(p => p.category === activeFilter);
      }
      switch (sortSelect.value) {
        case 'price-low': sorted.sort((a, b) => a.price - b.price); break;
        case 'price-high': sorted.sort((a, b) => b.price - a.price); break;
        case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
        case 'popular': sorted.sort((a, b) => b.reviews - a.reviews); break;
        default: break;
      }
      renderProducts(sorted);
    });
  }
}

function renderProducts(productList) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = productList.map((product, index) => `
    <div class="product-card reveal reveal-delay-${(index % 4) + 1}" onclick="openProductModal(${product.id})">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'">
        ${product.badge ? `<span class="product-card-badge ${product.badge}">${product.badge}</span>` : ''}
        <button class="product-card-wishlist" onclick="event.stopPropagation(); toggleWishlist(this)" aria-label="Add to wishlist">
          <i class="far fa-heart"></i>
        </button>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${product.category}</div>
        <h3 class="product-card-title">${product.name}</h3>
        <p class="product-card-desc">${product.description}</p>
        <div class="product-card-rating">
          <div class="stars">${generateStars(product.rating)}</div>
          <span class="rating-value">${product.rating}</span>
          <span class="rating-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-card-footer">
          <div class="product-price">
            <span class="current">$${product.price}</span>
            ${product.originalPrice ? `<span class="original">$${product.originalPrice}</span>` : ''}
          </div>
          <button class="product-card-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" aria-label="Add to cart">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-init scroll animations for new elements
  initScrollAnimations();
}

function generateStars(rating) {
  let stars = '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) stars += '<i class="fas fa-star"></i>';
  if (half) stars += '<i class="fas fa-star-half-alt"></i>';
  for (let i = full + (half ? 1 : 0); i < 5; i++) stars += '<i class="far fa-star"></i>';
  return stars;
}

function toggleWishlist(btn) {
  btn.classList.toggle('active');
  const icon = btn.querySelector('i');
  if (btn.classList.contains('active')) {
    icon.className = 'fas fa-heart';
    showToast('Ditambahkan ke daftar keinginan!');
  } else {
    icon.className = 'far fa-heart';
  }
}


// ========================================
// PRODUCT MODAL
// ========================================
function openProductModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const content = modal.querySelector('.modal-body');
  const imageContainer = modal.querySelector('.modal-image');

  imageContainer.innerHTML = `
    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
    <button class="modal-close" onclick="closeProductModal()" aria-label="Tutup modal">
      <i class="fas fa-times"></i>
    </button>
  `;

  content.innerHTML = `
    <div class="modal-category">${product.category}</div>
    <h2 class="modal-title">${product.name}</h2>
    <div class="modal-rating">
      <div class="stars">${generateStars(product.rating)}</div>
      <span class="rating-text">${product.rating} dari 5 (${product.reviews.toLocaleString()} ulasan)</span>
    </div>
    <p class="modal-description">${product.description}</p>
    <div class="modal-features">
      <h4>Fitur Utama</h4>
      <ul>
        ${product.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
      </ul>
    </div>
    <div class="modal-footer">
      <div class="modal-price">
        <span class="current">$${product.price}</span>
        ${product.originalPrice ? `<span class="original">$${product.originalPrice}</span>` : ''}
      </div>
      <button class="modal-add-btn" onclick="addToCart(${product.id}); closeProductModal();">
        <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}


// ========================================
// AI RECOMMENDATIONS
// ========================================
function initAIRecommendations() {
  const container = document.getElementById('aiPicksScroll');
  if (!container) return;

  container.innerHTML = aiRecommendations.map(item => `
    <div class="ai-pick-card">
      <div class="ai-pick-header">
        <div class="ai-pick-avatar">
          <img src="${item.image}" alt="${item.name}" onerror="this.parentElement.innerHTML='<i class=\\'${item.icon}\\'></i>'">
        </div>
        <div class="ai-pick-info">
          <h4>${item.name}</h4>
          <span>${item.category}</span>
        </div>
      </div>
      <div class="ai-pick-reason">
        <i class="fas fa-sparkles"></i> ${item.reason}
      </div>
      <div class="ai-pick-footer">
        <span class="ai-pick-price">$${item.price}</span>
        <span class="ai-match-score">
          <i class="fas fa-bullseye"></i> ${item.matchScore}% cocok
        </span>
      </div>
    </div>
  `).join('');
}


// ========================================
// TRENDING
// ========================================
function initTrending() {
  const container = document.getElementById('trendingList');
  if (!container) return;

  container.innerHTML = trendingProducts.map((item, i) => `
    <div class="trending-item reveal reveal-delay-${i + 1}">
      <span class="trending-rank">#${i + 1}</span>
      <div class="trending-avatar">
        <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">
      </div>
      <div class="trending-info">
        <div class="trending-name">${item.name}</div>
        <div class="trending-category">${item.category}</div>
      </div>
      <div class="trending-stats">
        <div class="trending-stat-item">
          <div class="value">${item.sales}</div>
          <div class="label">Penjualan</div>
        </div>
      </div>
      <div class="trending-change ${item.direction}">
        <i class="fas fa-arrow-${item.direction}"></i>
        ${item.growth}
      </div>
    </div>
  `).join('');
}


// ========================================
// TESTIMONIALS
// ========================================
function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('testimonialDots');
  if (!track || !dotsContainer) return;

  track.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-quote-icon">
        <i class="fas fa-quote-left"></i>
      </div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.avatar}</div>
        <div class="testimonial-author-info">
          <h5>${t.name}</h5>
          <span>${t.role}</span>
        </div>
      </div>
      <div class="testimonial-stars">${generateStars(t.rating)}</div>
    </div>
  `).join('');

  // Calculate pages based on visible cards
  const totalPages = getTestimonialPages();
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('button');
    dot.className = `testimonial-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Go to testimonial page ${i + 1}`);
    dot.addEventListener('click', () => goToTestimonial(i));
    dotsContainer.appendChild(dot);
  }

  // Auto-slide
  setInterval(() => {
    const totalPages = getTestimonialPages();
    currentTestimonial = (currentTestimonial + 1) % totalPages;
    goToTestimonial(currentTestimonial);
  }, 5000);
}

function getTestimonialPages() {
  const width = window.innerWidth;
  if (width <= 768) return testimonials.length;
  if (width <= 1024) return Math.ceil(testimonials.length / 2);
  return Math.ceil(testimonials.length / 3);
}

function goToTestimonial(index) {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!track) return;

  currentTestimonial = index;

  const width = window.innerWidth;
  let cardWidth;
  if (width <= 768) {
    cardWidth = 100;
  } else if (width <= 1024) {
    cardWidth = 50;
  } else {
    cardWidth = 33.333;
  }

  track.style.transform = `translateX(-${index * cardWidth}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}


// ========================================
// STATS COUNTER
// ========================================
function initStats() {
  const statElements = document.querySelectorAll('.stat-value[data-target]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => observer.observe(el));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const suffix = element.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(timestamp) {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
    const current = Math.floor(target * eased);

    element.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}


// ========================================
// CART
// ========================================
function initCart() {
  const cartBtn = document.getElementById('cartBtn');
  const closeBtn = document.getElementById('cartCloseBtn');
  const overlay = document.getElementById('cartOverlay');

  if (cartBtn) cartBtn.addEventListener('click', toggleCart);
  if (closeBtn) closeBtn.addEventListener('click', toggleCart);
  if (overlay) overlay.addEventListener('click', toggleCart);
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    showToast(`${product.name} sudah ada di keranjang Anda!`);
    return;
  }

  cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    category: product.category
  });

  localStorage.setItem('zyphoraCart', JSON.stringify(cart));
  updateCartUI();
  showToast(`${product.name} ditambahkan ke keranjang!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('zyphoraCart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  // Update badge
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => {
    b.textContent = cart.length;
    b.style.display = cart.length > 0 ? 'flex' : 'none';
  });

  // Update sidebar count
  const countEl = document.querySelector('.cart-count');
  if (countEl) countEl.textContent = cart.length;

  // Update items
  const itemsContainer = document.getElementById('cartItems');
  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Keranjang Anda kosong</p>
      </div>
    `;
  } else {
    itemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Hapus ${item.name} dari keranjang">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `).join('');
  }

  // Update total
  const totalEl = document.querySelector('.cart-total-value');
  if (totalEl) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalEl.textContent = `$${total.toFixed(2)}`;
  }
}


// ========================================
// NEWSLETTER
// ========================================
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    const email = input.value.trim();

    if (email && isValidEmail(email)) {
      form.style.display = 'none';
      document.querySelector('.newsletter-success').classList.add('show');
      showToast('Selamat datang di ZyphoraTech! 🎉');
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}


// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
    });
  });
}


// ========================================
// TOAST NOTIFICATIONS
// ========================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon success">
      <i class="fas fa-check"></i>
    </div>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}


// ========================================
// TYPING ANIMATION (Hero AI Chat)
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  const chatBubbles = document.querySelectorAll('.ai-chat-bubble');
  chatBubbles.forEach((bubble, i) => {
    bubble.style.animationDelay = `${0.5 + i * 0.8}s`;
  });
});


// ========================================
// KEYBOARD SHORTCUTS
// ========================================
document.addEventListener('keydown', (e) => {
  // Ctrl+K or / to focus search
  if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.focus();
  }

  // Escape to close modals
  if (e.key === 'Escape') {
    closeProductModal();
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar && cartSidebar.classList.contains('active')) {
      toggleCart();
    }
  }
});
