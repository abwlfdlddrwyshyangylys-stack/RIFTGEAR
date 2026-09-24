/* RIFTGEAR — app logic: i18n, catalog, cart, modal */
"use strict";

/* ---------------- i18n ---------------- */
const I18N = {
  fa: {
    dir: "rtl", htmlLang: "fa",
    nav_all: "فروشگاه", nav_hot: "پرفروش", nav_about: "درباره ما",
    lang_btn: "EN",
    hero_t1: "گییر خودت رو از", hero_neon1: "ریفت", hero_t2: "بیار بیرون",
    hero_sub: "فروشگاه تجهیزات گیمینگ — ماوس، کیبورد، هدست، صندلی، کنسول و بازی. همهٔ کالاها با گارانتی اصالت و ارسال سریع به سراسر ایران.",
    cta_catalog: "مشاهدهٔ محصولات", cta_hot: "پرفروش‌ها",
    stat1: "محصول گیمینگ", stat2: "دسته‌بندی", stat3: "ارسال به سراسر ایران", stat4: "گارانتی اصالت",
    statN1: "۱۷", statN2: "۷",
    search_ph: "جستجوی محصول…",
    sort_new: "جدیدترین", sort_asc: "ارزان‌ترین", sort_desc: "گران‌ترین",
    add: "افزودن به سبد", detail: "جزئیات +", hot: "داغ",
    empty: "محصولی با این جستجو پیدا نشد.",
    specs: "مشخصات فنی",
    cart: "سبد خرید", empty_cart: "سبد خالی است — بریم خرید!",
    total: "جمع کل", checkout: "ثبت سفارش", checkout_msg: "پرداخت آنلاین به‌زودی فعال می‌شود — فعلاً سبد شما ذخیره شد.",
    added: "به سبد اضافه شد ✓",
    about_t: "دربارهٔ ریفت‌گیر",
    about_d: "ریفت‌گیر فروشگاهی برای گیمرهای ایرانی است: تجهیزات اصل، قیمت منصفانه و ارسال سریع. ساخته‌شده برای رقابت.",
    foot_rights: "تمامی حقوق محفوظ است.",
    foot_note: "نمایشگاه نمونه — پرداخت فعال نیست.",
  },
  en: {
    dir: "ltr", htmlLang: "en",
    nav_all: "Shop", nav_hot: "Hot", nav_about: "About",
    lang_btn: "فارسی",
    hero_t1: "Pull your", hero_neon1: "gear", hero_t2: "out of the rift",
    hero_sub: "Gaming gear store — mice, keyboards, headsets, chairs, consoles and games. Authentic stock, fast shipping.",
    cta_catalog: "Browse products", cta_hot: "Hot picks",
    stat1: "Gaming products", stat2: "Categories", stat3: "Fast shipping", stat4: "Authenticity warranty",
    statN1: "17", statN2: "7",
    search_ph: "Search products…",
    sort_new: "Newest", sort_asc: "Price: low", sort_desc: "Price: high",
    add: "Add to cart", detail: "Details +", hot: "HOT",
    empty: "No products match your search.",
    specs: "Specs",
    cart: "Cart", empty_cart: "Your cart is empty — go grab some gear!",
    total: "Total", checkout: "Place order", checkout_msg: "Online payment coming soon — your cart is saved for now.",
    added: "Added to cart ✓",
    about_t: "About RiftGear",
    about_d: "RiftGear is a store for gamers: authentic gear, fair prices, fast shipping. Built for competition.",
    foot_rights: "All rights reserved.",
    foot_note: "Demo showcase — payment disabled.",
  },
};

let lang = localStorage.getItem("rg_lang") || "fa";
let activeCat = "all";
let query = "";
let sortMode = "new";

const t = (k) => I18N[lang][k];

function fmtPrice(n) {
  return new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US").format(n);
}

/* ---------------- catalog render ---------------- */
function renderChips() {
  const el = document.getElementById("chips");
  el.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const b = document.createElement("button");
    b.className = "chip" + (c.id === activeCat ? " active" : "");
    b.textContent = c[lang];
    b.onclick = () => { activeCat = c.id; renderChips(); renderGrid(); };
    el.appendChild(b);
  });
}

function filtered() {
  let list = PRODUCTS.filter((p) => activeCat === "all" || p.cat === activeCat);
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(
      (p) => p.name[lang].toLowerCase().includes(q) || p.desc[lang].toLowerCase().includes(q)
    );
  }
  if (sortMode === "asc") list = [...list].sort((a, b) => a.price - b.price);
  if (sortMode === "desc") list = [...list].sort((a, b) => b.price - a.price);
  if (hotOnly) list = list.filter((p) => p.hot);
  return list;
}

let hotOnly = false;

function renderGrid() {
  const el = document.getElementById("grid");
  const list = filtered();
  if (!list.length) {
    el.innerHTML = `<p class="empty">${t("empty")}</p>`;
    return;
  }
  el.innerHTML = list
    .map(
      (p) => `
    <article class="card cut" data-id="${p.id}">
      ${p.hot ? `<span class="hot">${t("hot")}</span>` : ""}
      <div class="thumb">${p.glyph}</div>
      <h3>${p.name[lang]}</h3>
      <p class="desc">${p.desc[lang]}</p>
      <div class="price-row">
        <span class="price">${fmtPrice(p.price)} <small>${lang === "fa" ? "تومان" : "Toman"}</small></span>
        <small style="color:var(--muted)">≈ $${p.usd}</small>
      </div>
      <button class="detail-link" data-act="detail">${t("detail")}</button>
      <button class="add" data-act="add">${t("add")}</button>
    </article>`
    )
    .join("");
}

document.getElementById("grid").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-act]");
  if (!btn) return;
  const id = btn.closest(".card").dataset.id;
  if (btn.dataset.act === "add") { addToCart(id); }
  else openModal(id);
});

/* ---------------- modal ---------------- */
function openModal(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const m = document.getElementById("modal");
  m.innerHTML = `
    <button class="close" aria-label="close">✕</button>
    <div class="glyph">${p.glyph}</div>
    <h2>${p.name[lang]}</h2>
    <p class="desc">${p.desc[lang]}</p>
    <h4 style="margin-bottom:8px;color:var(--magenta)">${t("specs")}</h4>
    <ul>${p.specs[lang].map((s) => `<li>${s}</li>`).join("")}</ul>
    <div class="price-row" style="margin-bottom:16px">
      <span class="price" style="font-size:1.5rem">${fmtPrice(p.price)} <small>${lang === "fa" ? "تومان" : "Toman"}</small></span>
      <small style="color:var(--muted)">≈ $${p.usd}</small>
    </div>
    <button class="btn btn-primary" style="width:100%;justify-content:center" id="mAdd">${t("add")}</button>`;
  document.getElementById("ovModal").classList.add("open");
  m.querySelector(".close").onclick = closeModal;
  document.getElementById("mAdd").onclick = () => { addToCart(id); closeModal(); };
}
function closeModal() { document.getElementById("ovModal").classList.remove("open"); }

/* ---------------- cart ---------------- */
let cart = JSON.parse(localStorage.getItem("rg_cart") || "{}");

function saveCart() {
  localStorage.setItem("rg_cart", JSON.stringify(cart));
  renderCart();
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  toast(t("added"));
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
}

function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, q]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return sum + (p ? p.price * q : 0);
  }, 0);
}

function renderCart() {
  const badge = document.getElementById("cartBadge");
  const n = cartCount();
  badge.textContent = fmtPrice(n);
  badge.style.display = n ? "grid" : "none";

  const box = document.getElementById("cartItems");
  const ids = Object.keys(cart);
  if (!ids.length) {
    box.innerHTML = `<p class="cart-empty">${t("empty_cart")}</p>`;
  } else {
    box.innerHTML = ids
      .map((id) => {
        const p = PRODUCTS.find((x) => x.id === id);
        return `
      <div class="citem">
        <div class="g">${p.glyph}</div>
        <div>
          <div class="n">${p.name[lang]}</div>
          <div class="p">${fmtPrice(p.price * cart[id])} ${lang === "fa" ? "تومان" : "T"}</div>
        </div>
        <div class="qty">
          <button data-q="-" data-id="${id}">−</button>
          <span>${fmtPrice(cart[id])}</span>
          <button data-q="+" data-id="${id}">+</button>
        </div>
      </div>`;
      })
      .join("");
  }
  document.getElementById("cartTotal").textContent =
    fmtPrice(cartTotal()) + (lang === "fa" ? " تومان" : " Toman");
}

document.getElementById("cartItems").addEventListener("click", (e) => {
  const b = e.target.closest("[data-q]");
  if (!b) return;
  changeQty(b.dataset.id, b.dataset.q === "+" ? 1 : -1);
});

function toggleDrawer(open) {
  document.getElementById("drawer").classList.toggle("open", open);
  document.getElementById("scrim").classList.toggle("show", open);
}

/* ---------------- toast ---------------- */
let toastTimer;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

/* ---------------- language ---------------- */
function applyLang() {
  const L = I18N[lang];
  document.body.dir = L.dir;
  document.documentElement.lang = L.htmlLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = L[el.dataset.i18n] || el.textContent;
  });
  document.getElementById("search").placeholder = t("search_ph");
  const sel = document.getElementById("sort");
  sel.options[0].textContent = t("sort_new");
  sel.options[1].textContent = t("sort_asc");
  sel.options[2].textContent = t("sort_desc");
  localStorage.setItem("rg_lang", lang);
  renderChips();
  renderGrid();
  renderCart();
}

document.getElementById("langBtn").onclick = () => {
  lang = lang === "fa" ? "en" : "fa";
  applyLang();
};

/* ---------------- toolbar ---------------- */
document.getElementById("search").addEventListener("input", (e) => {
  query = e.target.value.trim();
  renderGrid();
});
document.getElementById("sort").addEventListener("change", (e) => {
  sortMode = e.target.value;
  renderGrid();
});

/* ---------------- nav ---------------- */
function navGo(mode) {
  hotOnly = mode === "hot";
  document.querySelectorAll("nav.main button").forEach((b) => b.classList.remove("active"));
  if (mode === "all") document.getElementById("navAll").classList.add("active");
  if (mode === "hot") document.getElementById("navHot").classList.add("active");
  if (mode === "about") {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    return;
  }
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  renderGrid();
}
document.getElementById("navAll").onclick = () => navGo("all");
document.getElementById("navHot").onclick = () => navGo("hot");
document.getElementById("navAbout").onclick = () => navGo("about");
document.getElementById("ctaCatalog").onclick = () => navGo("all");
document.getElementById("ctaHot").onclick = () => navGo("hot");

/* ---------------- drawer / modal triggers ---------------- */
document.getElementById("cartBtn").onclick = () => toggleDrawer(true);
document.getElementById("drawerClose").onclick = () => toggleDrawer(false);
document.getElementById("scrim").onclick = () => toggleDrawer(false);
document.getElementById("ovModal").addEventListener("click", (e) => {
  if (e.target.id === "ovModal") closeModal();
});
document.getElementById("checkoutBtn").onclick = () => {
  if (!cartCount()) return;
  toast(t("checkout_msg"));
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); toggleDrawer(false); }
});

/* ---------------- boot ---------------- */
applyLang();
