/*
  =========================================
  AURA - LUXURY FASHION STORE APPLICATION
  =========================================
  State management, dynamic rendering, cart
  operations, form validations, SPA router.
*/

// ==========================================
// 1. PRODUCT CATALOG DATABASE (30 Items)
// ==========================================
const products = [
    // Men Collection (IDs 1-10)
    {
        id: 1,
        name: "Sovereign Gold-Stitched Blazer",
        brand: "AURA Couture",
        category: "men",
        price: 349,
        discountPrice: 279,
        rating: 4.8,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#111111", "#d4af37"],
        stock: 5,
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: true
    },
    {
        id: 2,
        name: "Luxury Cashmere Trench Coat",
        brand: "Gold Label",
        category: "men",
        price: 499,
        discountPrice: null,
        rating: 4.9,
        sizes: ["M", "L", "XL"],
        colors: ["#c2a688", "#111111"],
        stock: 8,
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: false
    },
    {
        id: 3,
        name: "Biker Leather Jacket",
        brand: "Luxe Threads",
        category: "men",
        price: 280,
        discountPrice: 224,
        rating: 4.7,
        sizes: ["S", "M", "L"],
        colors: ["#111111"],
        stock: 3,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: true
    },
    {
        id: 4,
        name: "Meridian Golden dial Chronograph",
        brand: "Vogue Instruments",
        category: "men",
        price: 899,
        discountPrice: null,
        rating: 5.0,
        sizes: ["S", "M", "L"],
        colors: ["#d4af37"],
        stock: 2,
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: false
    },
    {
        id: 5,
        name: "Luxe Charcoal Turtleneck",
        brand: "AURA Couture",
        category: "men",
        price: 120,
        discountPrice: 96,
        rating: 4.6,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#222222", "#444444"],
        stock: 12,
        image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: true
    },
    {
        id: 6,
        name: "Prestige Tailored Vest Shirt",
        brand: "Gold Label",
        category: "men",
        price: 180,
        discountPrice: null,
        rating: 4.5,
        sizes: ["S", "M", "L"],
        colors: ["#ffffff", "#111111"],
        stock: 15,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: false
    },
    {
        id: 7,
        name: "Bespoke Navy Tuxedo Blazer",
        brand: "AURA Couture",
        category: "men",
        price: 380,
        discountPrice: null,
        rating: 4.9,
        sizes: ["M", "L", "XL"],
        colors: ["#0f1d3a", "#111111"],
        stock: 4,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: false
    },
    {
        id: 8,
        name: "Premium Ribbed Sweater",
        brand: "Luxe Threads",
        category: "men",
        price: 140,
        discountPrice: 112,
        rating: 4.4,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#eaeaea", "#111111", "#d4af37"],
        stock: 10,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: true
    },
    {
        id: 9,
        name: "Classique Oxford Dress Shirt",
        brand: "Gold Label",
        category: "men",
        price: 95,
        discountPrice: null,
        rating: 4.5,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#ffffff", "#cbd5e1"],
        stock: 20,
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: false
    },
    {
        id: 10,
        name: "Aura Gold Aviators",
        brand: "Vogue Instruments",
        category: "men",
        price: 180,
        discountPrice: 135,
        rating: 4.8,
        sizes: ["S", "M", "L"],
        colors: ["#d4af37", "#111111"],
        stock: 6,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: true
    },

    // Women Collection (IDs 11-20)
    {
        id: 11,
        name: "Aurelia Gold Silk Evening Gown",
        brand: "AURA Couture",
        category: "women",
        price: 650,
        discountPrice: 520,
        rating: 5.0,
        sizes: ["S", "M", "L"],
        colors: ["#d4af37", "#111111"],
        stock: 3,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: true
    },
    {
        id: 12,
        name: "Dahlia Velvet Wrap Dress",
        brand: "AURA Couture",
        category: "women",
        price: 240,
        discountPrice: null,
        rating: 4.7,
        sizes: ["S", "M", "L"],
        colors: ["#4a0e17", "#111111"],
        stock: 5,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: false
    },
    {
        id: 13,
        name: "Primavera Silk Patterned Dress",
        brand: "Vogue Essentials",
        category: "women",
        price: 195,
        discountPrice: 156,
        rating: 4.6,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#ffffff", "#d4af37"],
        stock: 7,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: true
    },
    {
        id: 14,
        name: "Starlight Gold Pointed Stilettos",
        brand: "Luxe Threads",
        category: "women",
        price: 290,
        discountPrice: null,
        rating: 4.8,
        sizes: ["S", "M", "L"],
        colors: ["#d4af37"],
        stock: 4,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: false
    },
    {
        id: 15,
        name: "Lustrous Silk Blouse Scarf Set",
        brand: "Vogue Essentials",
        category: "women",
        price: 130,
        discountPrice: null,
        rating: 4.4,
        sizes: ["S", "M", "L"],
        colors: ["#d4af37", "#fbfbf9"],
        stock: 14,
        image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: false
    },
    {
        id: 16,
        name: "Sovereign Leather Flap Satchel",
        brand: "Gold Label",
        category: "women",
        price: 450,
        discountPrice: 360,
        rating: 4.9,
        sizes: ["S", "M", "L"],
        colors: ["#111111", "#a21c26"],
        stock: 2,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: true
    },
    {
        id: 17,
        name: "Imperial Diamond Halo Gold Ring",
        brand: "AURA Couture",
        category: "women",
        price: 1200,
        discountPrice: null,
        rating: 5.0,
        sizes: ["S", "M", "L"],
        colors: ["#d4af37"],
        stock: 1,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: false
    },
    {
        id: 18,
        name: "Heritage Double-Breasted Trench",
        brand: "Gold Label",
        category: "women",
        price: 360,
        discountPrice: 288,
        rating: 4.8,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#bf9b30", "#111111"],
        stock: 6,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: true
    },
    {
        id: 19,
        name: "Gilded Link Statement Necklace",
        brand: "Vogue Essentials",
        category: "women",
        price: 110,
        discountPrice: null,
        rating: 4.6,
        sizes: ["S", "M", "L"],
        colors: ["#d4af37"],
        stock: 18,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: false
    },
    {
        id: 20,
        name: "Elite Tailored Pantsuit Jacket",
        brand: "AURA Couture",
        category: "women",
        price: 290,
        discountPrice: 232,
        rating: 4.7,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#111111", "#ffffff"],
        stock: 5,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: true
    },

    // Kids Collection (IDs 21-30)
    {
        id: 21,
        name: "Junior Velvet Blazer Coat",
        brand: "Mini Aura",
        category: "kids",
        price: 120,
        discountPrice: 96,
        rating: 4.7,
        sizes: ["S", "M", "L"],
        colors: ["#111111", "#a21c26"],
        stock: 8,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: true
    },
    {
        id: 22,
        name: "Urban Kids Moto Bomber",
        brand: "Mini Aura",
        category: "kids",
        price: 90,
        discountPrice: null,
        rating: 4.6,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#2d3748", "#111111"],
        stock: 12,
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: false
    },
    {
        id: 23,
        name: "Prestige Lace Tiered Gown",
        brand: "Mini Aura",
        category: "kids",
        price: 130,
        discountPrice: 104,
        rating: 4.9,
        sizes: ["S", "M", "L"],
        colors: ["#ffffff", "#f3e5ab"],
        stock: 4,
        image: "https://images.unsplash.com/photo-1518831959646-742c2a140d78?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: true
    },
    {
        id: 24,
        name: "Kids Duffle Wool Coat",
        brand: "Mini Aura",
        category: "kids",
        price: 110,
        discountPrice: null,
        rating: 4.5,
        sizes: ["S", "M", "L"],
        colors: ["#c2a688", "#111111"],
        stock: 9,
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: false
    },
    {
        id: 25,
        name: "Stitch Denim Signature Jacket",
        brand: "Mini Aura",
        category: "kids",
        price: 75,
        discountPrice: 60,
        rating: 4.4,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#4a5568"],
        stock: 15,
        image: "https://images.unsplash.com/photo-1471286174240-e51a89bbf49f?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: true
    },
    {
        id: 26,
        name: "Cozy Ribbed Knit Sweater",
        brand: "Mini Aura",
        category: "kids",
        price: 60,
        discountPrice: null,
        rating: 4.6,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#f3e5ab", "#eaeaea"],
        stock: 20,
        image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: false
    },
    {
        id: 27,
        name: "Bespoke Kids Tuxedo Vest Set",
        brand: "Mini Aura",
        category: "kids",
        price: 140,
        discountPrice: 112,
        rating: 4.9,
        sizes: ["S", "M", "L"],
        colors: ["#111111", "#ffffff"],
        stock: 3,
        image: "https://images.unsplash.com/photo-1505373633572-c54d4b11b96a?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: true
    },
    {
        id: 28,
        name: "Princess Tulle Lace Dress",
        brand: "Mini Aura",
        category: "kids",
        price: 95,
        discountPrice: null,
        rating: 4.8,
        sizes: ["S", "M", "L"],
        colors: ["#f3e5ab", "#ffffff"],
        stock: 5,
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: false
    },
    {
        id: 29,
        name: "Mini Couture Gold Shades",
        brand: "Mini Aura",
        category: "kids",
        price: 45,
        discountPrice: 36,
        rating: 4.7,
        sizes: ["S", "M", "L"],
        colors: ["#d4af37", "#111111"],
        stock: 10,
        image: "https://images.unsplash.com/photo-1537655780520-1e392edd816a?w=600&auto=format&fit=crop&q=80",
        isNew: false,
        isSale: true
    },
    {
        id: 30,
        name: "Prestige Toddler Leather Boots",
        brand: "Mini Aura",
        category: "kids",
        price: 85,
        discountPrice: null,
        rating: 4.5,
        sizes: ["S", "M", "L"],
        colors: ["#8b5a2b", "#111111"],
        stock: 7,
        image: "https://images.unsplash.com/photo-1551645121-d1034da75057?w=600&auto=format&fit=crop&q=80",
        isNew: true,
        isSale: false
    }
];

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
let cart = JSON.parse(localStorage.getItem("aura_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("aura_wishlist")) || [];
let currentFilter = {
    search: "",
    category: "all",
    priceMax: 1200,
    colors: [],
    sizes: [],
    sort: "popular"
};
let appliedCoupon = localStorage.getItem("aura_coupon") || null;
let discountPercent = appliedCoupon === "GOLD20" ? 0.20 : 0.0;
let userSession = JSON.parse(localStorage.getItem("aura_user")) || null;

// Save utilities
function saveCart() {
    localStorage.setItem("aura_cart", JSON.stringify(cart));
    updateHeaderBadges();
}

function saveWishlist() {
    localStorage.setItem("aura_wishlist", JSON.stringify(wishlist));
    updateHeaderBadges();
}

// ==========================================
// 3. ROUTER / SPA NAVIGATION
// ==========================================
const routes = {
    "home": "home-view",
    "shop": "shop-view",
    "men": "shop-view",
    "women": "shop-view",
    "kids": "shop-view",
    "new-arrivals": "shop-view",
    "sale": "shop-view",
    "about": "about-view",
    "contact": "contact-view",
    "wishlist": "wishlist-view",
    "checkout": "checkout-view"
};

function handleRouting() {
    let hash = window.location.hash.substring(1) || "home";
    let viewKey = hash;

    // Map specific category hooks
    if (["men", "women", "kids", "new-arrivals", "sale"].includes(hash)) {
        viewKey = "shop";
        currentFilter.category = hash;
        syncFilterSidebarUI();
    } else if (hash === "shop") {
        currentFilter.category = "all";
        syncFilterSidebarUI();
    }

    const viewId = routes[viewKey] || "home-view";

    // Deactivate all sections, activate matching
    document.querySelectorAll(".view-section").forEach(section => {
        section.classList.remove("active");
    });

    const targetSection = document.getElementById(viewId);
    if (targetSection) {
        targetSection.classList.add("active");
    }

    // Update main nav active indicators
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${hash}`) {
            link.classList.add("active");
        }
    });

    // Close drawers on route change
    closeMobileDrawer();
    closeCartDrawer();

    // Contextual renders
    if (viewId === "shop-view") {
        renderShopProducts();
    } else if (viewId === "home-view") {
        renderHomeProducts();
    } else if (viewId === "wishlist-view") {
        renderWishlist();
    } else if (viewId === "checkout-view") {
        setupCheckoutFlow();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Sync Sidebar checkbox state with categories
function syncFilterSidebarUI() {
    const categorySelector = document.getElementById("filter-cat-select");
    if (categorySelector) {
        categorySelector.value = currentFilter.category;
    }
}

// ==========================================
// 4. THEME TOGGLER (DARK / LIGHT)
// ==========================================
function initTheme() {
    const isDark = localStorage.getItem("aura_dark") === "true";
    if (isDark) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    updateThemeIcon(isDark);
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("aura_dark", isDark);
    updateThemeIcon(isDark);
    showToast(isDark ? "Dark luxury theme activated" : "Elegant light theme activated");
}

function updateThemeIcon(isDark) {
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// ==========================================
// 5. TOAST NOTIFICATION CREATOR
// ==========================================
function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <i class="fas fa-check-circle gold-text"></i>
        <span class="toast-message">${message}</span>
        <i class="fas fa-times toast-close" onclick="this.parentElement.remove()"></i>
    `;

    container.appendChild(toast);

    // Fade in
    setTimeout(() => {
        toast.classList.add("show");
    }, 50);

    // Auto remove
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// 6. GENERAL RENDERING UTILITIES
// ==========================================
function getStarsHTML(rating) {
    let stars = "";
    const floor = Math.floor(rating);
    const half = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= floor) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === floor + 1 && half) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function getProductPriceHTML(product) {
    if (product.discountPrice) {
        return `
            <span class="discount-price">$${product.discountPrice}</span>
            <span class="original-price">$${product.price}</span>
        `;
    }
    return `<span class="normal-price">$${product.price}</span>`;
}

function createProductCardHTML(p) {
    const isWishlisted = wishlist.includes(p.id) ? "wishlisted" : "";
    const heartIcon = wishlist.includes(p.id) ? "fas fa-heart" : "far fa-heart";
    const badgeHTML = p.isNew ? `<span class="badge badge-new">New</span>` : 
                      (p.discountPrice ? `<span class="badge badge-sale">Sale</span>` : "");
                      
    const priceHTML = getProductPriceHTML(p);
    const starsHTML = getStarsHTML(p.rating);

    return `
        <div class="product-card" data-id="${p.id}">
            <div class="product-image-container">
                ${badgeHTML}
                <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
                <div class="product-actions-overlay">
                    <button class="overlay-btn ${isWishlisted}" onclick="toggleWishlist(${p.id}, event)" aria-label="Add to Wishlist">
                        <i class="${heartIcon}"></i>
                    </button>
                    <button class="overlay-btn" onclick="openQuickView(${p.id})" aria-label="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="overlay-btn" onclick="addToCartDefault(${p.id})" aria-label="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-brand">${p.brand}</span>
                <h4 class="product-name" title="${p.name}">${p.name}</h4>
                <div class="product-rating">${starsHTML}</div>
                <div class="product-price-row">
                    ${priceHTML}
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// 7. HOME VIEW RENDERING
// ==========================================
function renderHomeProducts() {
    // Featured / Trending Grid
    const trendingGrid = document.getElementById("trending-products-grid");
    if (trendingGrid) {
        // Just slice first 4 new/sale items
        const trendingList = products.filter(p => p.isNew || p.discountPrice).slice(0, 4);
        trendingGrid.innerHTML = trendingList.map(p => createProductCardHTML(p)).join("");
    }

    // Best Sellers Grid
    const bestSellersGrid = document.getElementById("best-sellers-grid");
    if (bestSellersGrid) {
        // Slice 4 high rated items
        const bestSellersList = products.filter(p => p.rating >= 4.8).slice(0, 4);
        bestSellersGrid.innerHTML = bestSellersList.map(p => createProductCardHTML(p)).join("");
    }
}

// ==========================================
// 8. SHOP FILTERING AND RENDERING
// ==========================================
function renderShopProducts() {
    const grid = document.getElementById("shop-products-grid");
    const countSpan = document.getElementById("shop-results-count");
    if (!grid) return;

    // Filter Logic
    let filtered = products.filter(p => {
        // Search query
        if (currentFilter.search) {
            const term = currentFilter.search.toLowerCase();
            const matchesName = p.name.toLowerCase().includes(term);
            const matchesBrand = p.brand.toLowerCase().includes(term);
            if (!matchesName && !matchesBrand) return false;
        }

        // Category filter
        if (currentFilter.category !== "all") {
            if (currentFilter.category === "new-arrivals") {
                if (!p.isNew) return false;
            } else if (currentFilter.category === "sale") {
                if (!p.discountPrice) return false;
            } else {
                if (p.category !== currentFilter.category) return false;
            }
        }

        // Price filter (evaluates actual active price)
        const activePrice = p.discountPrice || p.price;
        if (activePrice > currentFilter.priceMax) return false;

        // Size filter
        if (currentFilter.sizes.length > 0) {
            const hasSize = p.sizes.some(size => currentFilter.sizes.includes(size));
            if (!hasSize) return false;
        }

        // Color filter
        if (currentFilter.colors.length > 0) {
            const hasColor = p.colors.some(color => currentFilter.colors.includes(color));
            if (!hasColor) return false;
        }

        return true;
    });

    // Sorting Logic
    if (currentFilter.sort === "price-low") {
        filtered.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    } else if (currentFilter.sort === "price-high") {
        filtered.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    } else if (currentFilter.sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    // Results count
    if (countSpan) {
        countSpan.textContent = `Showing ${filtered.length} products`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="no-products-msg">No products matches the selected criteria. Try resetting the filters.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => createProductCardHTML(p)).join("");
}

// Wire filters UI elements
function setupShopFilters() {
    // Search
    const searchInp = document.getElementById("shop-search-input");
    if (searchInp) {
        searchInp.addEventListener("input", (e) => {
            currentFilter.search = e.target.value;
            renderShopProducts();
        });
    }

    // Categories
    const catSelect = document.getElementById("filter-cat-select");
    if (catSelect) {
        catSelect.addEventListener("change", (e) => {
            currentFilter.category = e.target.value;
            renderShopProducts();
        });
    }

    // Price range slider
    const priceSlider = document.getElementById("price-range-slider");
    const priceVal = document.getElementById("price-range-value");
    if (priceSlider) {
        priceSlider.addEventListener("input", (e) => {
            const val = parseInt(e.target.value);
            currentFilter.priceMax = val;
            if (priceVal) priceVal.textContent = `$${val}`;
            renderShopProducts();
        });
    }

    // Color Swatches Selection
    const colorSwatches = document.querySelectorAll(".color-filter-dot");
    colorSwatches.forEach(dot => {
        dot.addEventListener("click", () => {
            dot.classList.toggle("active");
            const color = dot.getAttribute("data-color");
            if (dot.classList.contains("active")) {
                currentFilter.colors.push(color);
            } else {
                currentFilter.colors = currentFilter.colors.filter(c => c !== color);
            }
            renderShopProducts();
        });
    });

    // Size Selection Button
    const sizeBtns = document.querySelectorAll(".size-filter-btn");
    sizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            const size = btn.getAttribute("data-size");
            if (btn.classList.contains("active")) {
                currentFilter.sizes.push(size);
            } else {
                currentFilter.sizes = currentFilter.sizes.filter(s => s !== size);
            }
            renderShopProducts();
        });
    });

    // Sorting Dropdown
    const sortSelect = document.getElementById("shop-sort");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentFilter.sort = e.target.value;
            renderShopProducts();
        });
    }

    // Reset Filters Button
    const resetBtn = document.getElementById("reset-filters");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            currentFilter = {
                search: "",
                category: "all",
                priceMax: 1200,
                colors: [],
                sizes: [],
                sort: "popular"
            };

            // Reset inputs UI
            if (searchInp) searchInp.value = "";
            if (catSelect) catSelect.value = "all";
            if (priceSlider) {
                priceSlider.value = 1200;
                if (priceVal) priceVal.textContent = `$1200`;
            }
            colorSwatches.forEach(dot => dot.classList.remove("active"));
            sizeBtns.forEach(btn => btn.classList.remove("active"));
            if (sortSelect) sortSelect.value = "popular";

            renderShopProducts();
            showToast("Filters successfully reset");
        });
    }
}

// ==========================================
// 9. QUICK VIEW MODAL BINDINGS
// ==========================================
let activeQuickViewProduct = null;
let qvSelectedSize = null;
let qvSelectedColor = null;

function openQuickView(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    activeQuickViewProduct = p;
    qvSelectedSize = p.sizes[0] || null;
    qvSelectedColor = p.colors[0] || null;

    // Fill elements
    document.getElementById("qv-brand").textContent = p.brand;
    document.getElementById("qv-name").textContent = p.name;
    document.getElementById("qv-desc").textContent = `${p.brand} introduces ${p.name}, engineered for premium aesthetics, luxury touchpoints, and unparalleled structural drapery. Featuring standard luxury fitting rules.`;
    document.getElementById("qv-img").src = p.image;
    document.getElementById("qv-rating-stars").innerHTML = getStarsHTML(p.rating);
    document.getElementById("qv-rating-count").textContent = `(${Math.floor(p.rating * 10)} customer reviews)`;
    document.getElementById("qv-price-container").innerHTML = getProductPriceHTML(p);

    // Stock Status
    const stockStatus = document.getElementById("qv-stock-status");
    if (p.stock > 3) {
        stockStatus.className = "qv-stock-status qv-stock-in";
        stockStatus.textContent = "In Stock";
    } else if (p.stock > 0) {
        stockStatus.className = "qv-stock-status qv-stock-low";
        stockStatus.textContent = `Only ${p.stock} left in stock!`;
    } else {
        stockStatus.className = "qv-stock-status qv-stock-out";
        stockStatus.textContent = "Out of Stock";
    }

    // Size triggers
    const sizeContainer = document.getElementById("qv-sizes-container");
    sizeContainer.innerHTML = p.sizes.map(size => `
        <button class="qv-size-btn ${size === qvSelectedSize ? 'active' : ''}" onclick="selectQVSize('${size}', this)">${size}</button>
    `).join("");

    // Color Swatches
    const colorContainer = document.getElementById("qv-colors-container");
    colorContainer.innerHTML = p.colors.map(color => `
        <div class="qv-color-swatch ${color === qvSelectedColor ? 'active' : ''}" style="background-color: ${color};" onclick="selectQVColor('${color}', this)"></div>
    `).join("");

    // Quantity Reset
    document.getElementById("qv-qty-val").value = 1;

    // Show modal
    document.getElementById("quickview-modal").classList.add("active");
}

function closeQuickView() {
    document.getElementById("quickview-modal").classList.remove("active");
    activeQuickViewProduct = null;
}

function selectQVSize(size, element) {
    qvSelectedSize = size;
    document.querySelectorAll(".qv-size-btn").forEach(btn => btn.classList.remove("active"));
    element.classList.add("active");
}

function selectQVColor(color, element) {
    qvSelectedColor = color;
    document.querySelectorAll(".qv-color-swatch").forEach(sw => sw.classList.remove("active"));
    element.classList.add("active");
}

function changeQVQuantity(dir) {
    const input = document.getElementById("qv-qty-val");
    let val = parseInt(input.value);
    val += dir;
    if (val < 1) val = 1;
    if (activeQuickViewProduct && val > activeQuickViewProduct.stock) {
        val = activeQuickViewProduct.stock;
        showToast(`Cannot exceed available stock (${activeQuickViewProduct.stock})`);
    }
    input.value = val;
}

function addQVToCart() {
    if (!activeQuickViewProduct) return;
    const qty = parseInt(document.getElementById("qv-qty-val").value);

    addToCart(activeQuickViewProduct.id, qvSelectedSize, qvSelectedColor, qty);
    closeQuickView();
}

// ==========================================
// 10. WISHLIST OPERATIONS
// ==========================================
function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();

    const idx = wishlist.indexOf(productId);
    const p = products.find(prod => prod.id === productId);

    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`Removed from Wishlist: ${p.name}`);
    } else {
        wishlist.push(productId);
        showToast(`Added to Wishlist: ${p.name}`);
    }

    saveWishlist();

    // Re-render components
    renderShopProducts();
    renderHomeProducts();
    if (window.location.hash === "#wishlist") {
        renderWishlist();
    }
}

function renderWishlist() {
    const grid = document.getElementById("wishlist-grid");
    if (!grid) return;

    if (wishlist.length === 0) {
        grid.innerHTML = `<div class="wishlist-empty-msg">Your Wishlist is currently empty. Explore the <a href="#shop" class="gold-text">Shop</a> to add items.</div>`;
        return;
    }

    const wishlistedProducts = products.filter(p => wishlist.includes(p.id));
    grid.innerHTML = wishlistedProducts.map(p => createProductCardHTML(p)).join("");
}

// ==========================================
// 11. SHOPPING CART OPERATIONS
// ==========================================
function updateHeaderBadges() {
    const cartCount = document.querySelectorAll(".cart-count-badge");
    const wishCount = document.querySelectorAll(".wishlist-count-badge");
    
    const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    cartCount.forEach(el => {
        el.textContent = cartTotalItems;
        el.style.display = cartTotalItems > 0 ? "flex" : "none";
    });

    wishCount.forEach(el => {
        el.textContent = wishlist.length;
        el.style.display = wishlist.length > 0 ? "flex" : "none";
    });
}

function toggleCartDrawer() {
    document.getElementById("cart-drawer").classList.toggle("open");
    document.getElementById("drawer-overlay").classList.toggle("active");
    if (document.getElementById("cart-drawer").classList.contains("open")) {
        renderCartDrawer();
    }
}

function closeCartDrawer() {
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("drawer-overlay").classList.remove("active");
}

function addToCartDefault(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;
    // Use first size and first color as default quick-add options
    const size = p.sizes[0] || "M";
    const color = p.colors[0] || "#111111";
    addToCart(productId, size, color, 1);
}

function addToCart(productId, size, color, quantity = 1) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    // Check if matching item is in cart
    const existing = cart.find(item => item.id === productId && item.size === size && item.color === color);

    if (existing) {
        if (existing.quantity + quantity > p.stock) {
            existing.quantity = p.stock;
            showToast(`Adjusted quantity to max available stock (${p.stock})`);
        } else {
            existing.quantity += quantity;
            showToast(`Updated quantity in Cart: ${p.name}`);
        }
    } else {
        if (quantity > p.stock) quantity = p.stock;
        cart.push({
            id: productId,
            size: size,
            color: color,
            quantity: quantity
        });
        showToast(`Added to Cart: ${p.name}`);
    }

    saveCart();
    renderCartDrawer();
}

function updateCartQuantity(idx, dir) {
    const item = cart[idx];
    if (!item) return;

    const p = products.find(prod => prod.id === item.id);
    if (!p) return;

    item.quantity += dir;
    if (item.quantity < 1) {
        cart.splice(idx, 1);
        showToast(`Removed from Cart: ${p.name}`);
    } else if (item.quantity > p.stock) {
        item.quantity = p.stock;
        showToast(`Cannot exceed available stock (${p.stock})`);
    }

    saveCart();
    renderCartDrawer();
}

function removeCartItem(idx) {
    const item = cart[idx];
    if (!item) return;
    const p = products.find(prod => prod.id === item.id);
    
    cart.splice(idx, 1);
    showToast(`Removed from Cart: ${p.name}`);
    
    saveCart();
    renderCartDrawer();
}

function calculateCartTotals() {
    let subtotal = 0;
    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.id);
        if (p) {
            const price = p.discountPrice || p.price;
            subtotal += price * item.quantity;
        }
    });

    const discount = subtotal * discountPercent;
    const tax = (subtotal - discount) * 0.08; // 8% sales tax
    // Free shipping above $150
    const shipping = (subtotal - discount > 150 || subtotal === 0) ? 0 : 15;
    const total = subtotal - discount + tax + shipping;

    return {
        subtotal: subtotal.toFixed(2),
        discount: discount.toFixed(2),
        tax: tax.toFixed(2),
        shipping: shipping.toFixed(2),
        total: total.toFixed(2)
    };
}

function applyCouponCode(event) {
    if (event) event.preventDefault();
    const input = document.getElementById("coupon-input");
    const msg = document.getElementById("coupon-message");
    if (!input || !msg) return;

    const code = input.value.trim().toUpperCase();
    if (code === "GOLD20") {
        appliedCoupon = "GOLD20";
        discountPercent = 0.20;
        localStorage.setItem("aura_coupon", "GOLD20");
        msg.className = "coupon-msg success";
        msg.textContent = "Coupon GOLD20 (20% off) applied successfully!";
        showToast("20% gold coupon applied!");
    } else {
        msg.className = "coupon-msg error";
        msg.textContent = "Invalid coupon code.";
    }

    renderCartDrawer();
}

function renderCartDrawer() {
    const container = document.getElementById("cart-items-wrapper");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div class="cart-empty-msg">Your Cart is empty.</div>`;
        updateCartFooterDetails(true);
        return;
    }

    let html = "";
    cart.forEach((item, idx) => {
        const p = products.find(prod => prod.id === item.id);
        if (p) {
            const price = p.discountPrice || p.price;
            html += `
                <div class="cart-item">
                    <img src="${p.image}" alt="${p.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <span class="cart-item-brand">${p.brand}</span>
                        <h5 class="cart-item-name">${p.name}</h5>
                        <div class="cart-item-meta">
                            <span>Size: ${item.size}</span>
                            <span>Color: <i class="fas fa-circle" style="color: ${item.color}; font-size: 8px; vertical-align: middle;"></i></span>
                        </div>
                        <div class="cart-item-qty-row">
                            <div class="cart-item-qty">
                                <button class="cart-item-qty-btn" onclick="updateCartQuantity(${idx}, -1)">-</button>
                                <span class="cart-item-qty-val">${item.quantity}</span>
                                <button class="cart-item-qty-btn" onclick="updateCartQuantity(${idx}, 1)">+</button>
                            </div>
                            <span class="cart-item-price">$${(price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeCartItem(${idx})" aria-label="Remove item">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
        }
    });

    container.innerHTML = html;
    updateCartFooterDetails(false);
}

function updateCartFooterDetails(isEmpty) {
    const checkoutBtn = document.getElementById("cart-checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.disabled = isEmpty;
    }

    const math = calculateCartTotals();
    document.getElementById("cart-subtotal").textContent = `$${math.subtotal}`;
    
    // Toggle discount row
    const discountRow = document.getElementById("cart-discount-row");
    if (discountRow) {
        if (parseFloat(math.discount) > 0) {
            discountRow.style.display = "flex";
            document.getElementById("cart-discount").textContent = `-$${math.discount}`;
        } else {
            discountRow.style.display = "none";
        }
    }

    document.getElementById("cart-tax").textContent = `$${math.tax}`;
    document.getElementById("cart-shipping").textContent = math.shipping === "0.00" ? "FREE" : `$${math.shipping}`;
    document.getElementById("cart-total").textContent = `$${math.total}`;
}

// ==========================================
// 12. CHECKOUT FLOW BINDINGS
// ==========================================
let checkoutCurrentStep = 1;

function setupCheckoutFlow() {
    if (cart.length === 0) {
        // Can't checkout empty cart, send back
        window.location.hash = "shop";
        showToast("Add items to your cart to checkout.");
        return;
    }
    
    checkoutCurrentStep = 1;
    renderCheckoutSummary();
    updateCheckoutStepsUI();
}

function renderCheckoutSummary() {
    const wrapper = document.getElementById("checkout-summary-items-list");
    if (!wrapper) return;

    let html = "";
    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.id);
        if (p) {
            const price = p.discountPrice || p.price;
            html += `
                <div class="checkout-summary-item">
                    <img src="${p.image}" alt="${p.name}" class="checkout-summary-item-img">
                    <div class="checkout-summary-item-info">
                        <div class="checkout-summary-item-name">${p.name}</div>
                        <div class="checkout-summary-item-qty-price">
                            <span>Qty: ${item.quantity} | Size: ${item.size}</span>
                            <span>$${(price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    wrapper.innerHTML = html;

    const math = calculateCartTotals();
    document.getElementById("checkout-subtotal").textContent = `$${math.subtotal}`;
    
    const discountRow = document.getElementById("checkout-discount-row");
    if (discountRow) {
        if (parseFloat(math.discount) > 0) {
            discountRow.style.display = "flex";
            document.getElementById("checkout-discount").textContent = `-$${math.discount}`;
        } else {
            discountRow.style.display = "none";
        }
    }

    document.getElementById("checkout-tax").textContent = `$${math.tax}`;
    document.getElementById("checkout-shipping").textContent = math.shipping === "0.00" ? "FREE" : `$${math.shipping}`;
    document.getElementById("checkout-total").textContent = `$${math.total}`;
}

function updateCheckoutStepsUI() {
    // Nodes
    document.querySelectorAll(".checkout-step-node").forEach((node, idx) => {
        node.classList.remove("active", "completed");
        const stepNum = idx + 1;
        if (stepNum < checkoutCurrentStep) {
            node.classList.add("completed");
        } else if (stepNum === checkoutCurrentStep) {
            node.classList.add("active");
        }
    });

    // Form panels
    document.getElementById("checkout-step-1-panel").style.display = checkoutCurrentStep === 1 ? "block" : "none";
    document.getElementById("checkout-step-2-panel").style.display = checkoutCurrentStep === 2 ? "block" : "none";
    document.getElementById("checkout-step-3-panel").style.display = checkoutCurrentStep === 3 ? "block" : "none";
}

function validateStep1Form() {
    let isValid = true;
    const fields = [
        { id: "co-email", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMsg: "Enter a valid email" },
        { id: "co-fname", regex: /^[a-zA-Z\s]{2,50}$/, errorMsg: "Enter a valid first name" },
        { id: "co-lname", regex: /^[a-zA-Z\s]{2,50}$/, errorMsg: "Enter a valid last name" },
        { id: "co-address", regex: /.{6,100}/, errorMsg: "Enter a valid address" },
        { id: "co-city", regex: /^[a-zA-Z\s]{2,50}$/, errorMsg: "Enter a valid city" },
        { id: "co-zip", regex: /^\d{5,6}$/, errorMsg: "Enter 5-6 digit zip code" },
        { id: "co-phone", regex: /^\+?\d{10,13}$/, errorMsg: "Enter valid 10-13 digit phone number" }
    ];

    fields.forEach(f => {
        const input = document.getElementById(f.id);
        const err = document.getElementById(`${f.id}-error`);
        if (!input || !err) return;

        if (!f.regex.test(input.value.trim())) {
            err.textContent = f.errorMsg;
            err.style.display = "block";
            isValid = false;
        } else {
            err.style.display = "none";
        }
    });

    return isValid;
}

function validateStep2Form() {
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    if (paymentMethod === "card") {
        let isValid = true;
        const number = document.getElementById("pay-cardnumber");
        const expiry = document.getElementById("pay-expiry");
        const cvv = document.getElementById("pay-cvv");

        const numErr = document.getElementById("pay-cardnumber-error");
        const expErr = document.getElementById("pay-expiry-error");
        const cvvErr = document.getElementById("pay-cvv-error");

        // Simple validation
        if (!/^\d{16}$/.test(number.value.replace(/\s+/g, ""))) {
            numErr.style.display = "block";
            isValid = false;
        } else {
            numErr.style.display = "none";
        }

        if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiry.value.trim())) {
            expErr.style.display = "block";
            isValid = false;
        } else {
            expErr.style.display = "none";
        }

        if (!/^\d{3}$/.test(cvv.value.trim())) {
            cvvErr.style.display = "block";
            isValid = false;
        } else {
            cvvErr.style.display = "none";
        }

        return isValid;
    } else if (paymentMethod === "upi") {
        const upi = document.getElementById("pay-upi-id");
        const upiErr = document.getElementById("pay-upi-id-error");
        if (!/^.+@.+$/.test(upi.value.trim())) {
            upiErr.style.display = "block";
            return false;
        } else {
            upiErr.style.display = "none";
            return true;
        }
    }

    return true;
}

function checkoutNextStep() {
    if (checkoutCurrentStep === 1) {
        if (validateStep1Form()) {
            checkoutCurrentStep = 2;
            updateCheckoutStepsUI();
        } else {
            showToast("Please correct the form errors.");
        }
    } else if (checkoutCurrentStep === 2) {
        if (validateStep2Form()) {
            checkoutCurrentStep = 3;
            processMockOrder();
        } else {
            showToast("Please correct payment fields.");
        }
    }
}

function checkoutPrevStep() {
    if (checkoutCurrentStep > 1) {
        checkoutCurrentStep--;
        updateCheckoutStepsUI();
    }
}

function selectPaymentDetails(method) {
    document.querySelectorAll(".payment-input-details").forEach(div => div.classList.remove("active"));
    const target = document.getElementById(`pay-details-${method}`);
    if (target) {
        target.classList.add("active");
    }
}

function processMockOrder() {
    // Generate confirmation info
    const randomOrderId = "AURA-" + Math.floor(100000 + Math.random() * 900000);
    const date = new Date();
    date.setDate(date.getDate() + 4); // 4 days delivery duration
    const deliveryDateStr = date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Set UI details
    document.getElementById("success-order-id").textContent = randomOrderId;
    document.getElementById("success-delivery-date").textContent = deliveryDateStr;

    const finalTotal = calculateCartTotals().total;
    document.getElementById("success-amount").textContent = `$${finalTotal}`;

    // Reset shopping state
    cart = [];
    appliedCoupon = null;
    discountPercent = 0;
    localStorage.removeItem("aura_cart");
    localStorage.removeItem("aura_coupon");
    updateHeaderBadges();

    // Show Confirmation Panel (Step 3)
    updateCheckoutStepsUI();
    showToast("Order placed successfully!");
}

// ==========================================
// 13. AUTH DIALOGS (LOGIN / REGISTER)
// ==========================================
function openAuthModal(tab = "login") {
    switchAuthTab(tab);
    document.getElementById("auth-modal").classList.add("active");
}

function closeAuthModal() {
    document.getElementById("auth-modal").classList.remove("active");
}

function switchAuthTab(tab) {
    const loginTab = document.getElementById("tab-login");
    const regTab = document.getElementById("tab-register");
    const loginPanel = document.getElementById("panel-login");
    const regPanel = document.getElementById("panel-register");

    if (tab === "login") {
        loginTab.classList.add("active");
        regTab.classList.remove("active");
        loginPanel.classList.add("active");
        regPanel.classList.remove("active");
    } else {
        regTab.classList.add("active");
        loginTab.classList.remove("active");
        regPanel.classList.add("active");
        loginPanel.classList.remove("active");
    }
}

function handleLoginSubmit(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const pass = document.getElementById("login-pass").value.trim();

    if (!email || pass.length < 6) {
        showToast("Please enter valid credentials.");
        return;
    }

    userSession = { email: email, name: email.split("@")[0].toUpperCase() };
    localStorage.setItem("aura_user", JSON.stringify(userSession));
    closeAuthModal();
    updateUserSessionUI();
    showToast(`Welcome back, ${userSession.name}!`);
}

function handleRegisterSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const pass = document.getElementById("reg-pass").value.trim();

    if (!name || !email || pass.length < 6) {
        showToast("Please fill all fields correctly.");
        return;
    }

    userSession = { email: email, name: name.toUpperCase() };
    localStorage.setItem("aura_user", JSON.stringify(userSession));
    closeAuthModal();
    updateUserSessionUI();
    showToast(`Account created! Welcome, ${userSession.name}.`);
}

function handleLogout() {
    userSession = null;
    localStorage.removeItem("aura_user");
    updateUserSessionUI();
    showToast("Logged out successfully.");
}

function updateUserSessionUI() {
    const userBtn = document.getElementById("user-menu-btn");
    if (!userBtn) return;

    if (userSession) {
        userBtn.innerHTML = `<span style="font-weight:700; font-size:11px; border: 1px solid var(--gold-primary); padding: 4px 8px; border-radius: 20px;">${userSession.name.slice(0, 5)}</span>`;
        userBtn.title = "Click to Logout";
        userBtn.onclick = handleLogout;
    } else {
        userBtn.innerHTML = '<i class="far fa-user"></i>';
        userBtn.title = "Login / Register";
        userBtn.onclick = () => openAuthModal('login');
    }
}

// ==========================================
// 14. MOBILE DRAWER BINDINGS
// ==========================================
function openMobileDrawer() {
    document.getElementById("mobile-drawer").classList.add("open");
    document.getElementById("drawer-overlay").classList.add("active");
}

function closeMobileDrawer() {
    document.getElementById("mobile-drawer").classList.remove("open");
    document.getElementById("drawer-overlay").classList.remove("active");
}

// ==========================================
// 15. CONTACT & NEWSLETTER VALIDATION
// ==========================================
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("ct-name").value.trim();
    const email = document.getElementById("ct-email").value.trim();
    const msg = document.getElementById("ct-message").value.trim();

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !msg) {
        showToast("Please fill out the contact form correctly.");
        return;
    }

    // Success response
    showToast("Message sent successfully! We will contact you soon.");
    document.getElementById("contact-form").reset();
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const input = event.target.querySelector("input");
    if (!input || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        showToast("Please enter a valid email address.");
        return;
    }

    showToast("Subscribed! Thank you for joining AURA.");
    event.target.reset();
}

// ==========================================
// 16. FAQ ACCORDION HANDLERS
// ==========================================
function toggleFaq(element) {
    const item = element.parentElement;
    const wrapper = item.querySelector(".faq-answer-wrapper");
    const isOpen = item.classList.contains("open");

    // Close all other FAQs
    document.querySelectorAll(".faq-item").forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove("open");
            otherItem.querySelector(".faq-answer-wrapper").style.height = "0";
        }
    });

    if (isOpen) {
        item.classList.remove("open");
        wrapper.style.height = "0";
    } else {
        item.classList.add("open");
        const answer = item.querySelector(".faq-answer");
        wrapper.style.height = answer.scrollHeight + "px";
    }
}

// ==========================================
// 17. BACK TO TOP & SCROLL LISTENERS
// ==========================================
function handleScroll() {
    const header = document.querySelector("header");
    const btt = document.getElementById("back-to-top");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
        btt.classList.add("show");
    } else {
        btt.classList.remove("show");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==========================================
// 18. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Configuration
    initTheme();

    // 2. User profile check
    updateUserSessionUI();

    // 3. Setup shop filters bindings
    setupShopFilters();

    // 4. Update header counter numbers
    updateHeaderBadges();

    // 5. Scroll indicators
    window.addEventListener("scroll", handleScroll);

    // 6. Router hook
    window.addEventListener("hashchange", handleRouting);
    handleRouting(); // First load trigger

    // 7. Expand header search bar
    const searchIcon = document.getElementById("header-search-btn");
    const searchWrapper = document.getElementById("header-search-wrapper");
    if (searchIcon && searchWrapper) {
        searchIcon.addEventListener("click", (e) => {
            e.stopPropagation();
            searchWrapper.classList.toggle("active");
            if (searchWrapper.classList.contains("active")) {
                searchWrapper.querySelector("input").focus();
            }
        });
        
        // Hide if click outside
        document.addEventListener("click", (e) => {
            if (!searchWrapper.contains(e.target) && e.target !== searchIcon) {
                searchWrapper.classList.remove("active");
            }
        });
        
        // Dynamic search routing
        const headerInp = searchWrapper.querySelector("input");
        headerInp.addEventListener("input", (e) => {
            currentFilter.search = e.target.value;
            // Jump to shop hash if we search from other pages
            if (window.location.hash !== "#shop") {
                window.location.hash = "shop";
            } else {
                renderShopProducts();
            }
        });
    }

    // 8. Reviews Autoplay / dots trigger
    let activeReviewIdx = 0;
    const reviewSlider = document.getElementById("review-slider");
    const dots = document.querySelectorAll(".slider-dot");
    
    if (reviewSlider && dots.length > 0) {
        function gotoSlide(idx) {
            activeReviewIdx = idx;
            reviewSlider.style.transform = `translateX(-${idx * 100}%)`;
            dots.forEach((d, i) => {
                d.classList.toggle("active", i === idx);
            });
        }
        
        dots.forEach((dot, idx) => {
            dot.addEventListener("click", () => gotoSlide(idx));
        });
        
        // Auto scroll every 5 seconds
        setInterval(() => {
            activeReviewIdx = (activeReviewIdx + 1) % dots.length;
            gotoSlide(activeReviewIdx);
        }, 5000);
    }

    // 9. Loader Fadeout
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 800);
    }
});
