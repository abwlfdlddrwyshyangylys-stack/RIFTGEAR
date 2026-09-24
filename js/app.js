/* RIFTGEAR — app logic v2: i18n, catalog, cart, modal, rift, a11y */
"use strict";

/* ---------------- i18n ---------------- */
const I18N = {
  fa: {
    dir: "rtl", htmlLang: "fa",
    nav_all: "فروشگاه", nav_hot: "پرفروش", nav_about: "درباره ما",
    nav_label: "منوی اصلی", lang_btn: "EN",
    hero_t1: "گییر خودت رو از", hero_neon1: "ریفت", hero_t2: "بیار بیرون",
    hero_sub: "فروشگاه تجهیزات گیمینگ — ماوس، کیبورد، هدست، صندلی، کنسول و بازی. همهٔ کالاها با گارانتی اصالت و ارسال سریع به سراسر ایران.",
    cta_catalog: "مشاهدهٔ محصولات", cta_hot: "پرفروش‌ها",
    stat1: "محصول گیمینگ", stat2: "دسته‌بندی", stat3: "ارسال به سراسر ایران", stat4: "گارانتی اصالت",
    statN1: "۱۸", statN2: "۷",
    mq1: "ارسال سریع به سراسر ایران", mq2: "گارانتی اصالت کالا", mq3: "پرداخت در محل", mq4: "پشتیبانی آنلاین",
    shop_t: "محصولات",
    flash_label: "پیشنهاد ویژهٔ امروز", flash_until: "تا پایان روز",
    deal_badge: "کالای ویژهٔ امروز", price_filter: "محدودهٔ قیمت",
    pf_lo: "حداقل قیمت", pf_hi: "حداکثر قیمت", credits_t: "منابع تصاویر",
    rate_label: "امتیاز شما", rated_ok: "امتیازت ثبت شد ✓",
    search_ph: "جستجوی محصول…", search_label: "جستجوی محصول", sort_label: "مرتب‌سازی",
    sort_new: "جدیدترین", sort_asc: "ارزان‌ترین", sort_desc: "گران‌ترین",
    count_unit: "محصول",
    add: "افزودن به سبد", detail: "جزئیات +", hot: "داغ",
    empty: "محصولی با این جستجو پیدا نشد.",
    clear_filters: "پاک کردن جستجو و فیلترها",
    specs: "مشخصات فنی", related_t: "شاید بپسندید",
    low_stock: "فقط {n} عدد مانده", max_stock: "به سقف موجودی رسیدید ({n})",
    oos: "ناموجود", oos_btn: "موجود شد خبر می‌ده",
    cart: "سبد خرید", cart_btn: "سبد خرید", empty_cart: "سبد خالی است — بریم خرید!",
    cart_shop: "مرور محصولات", remove_item: "حذف از سبد",
    total: "جمع کل", checkout: "ثبت سفارش از طریق تلگرام",
    checkout_open: "در حال باز کردن تلگرام…", copy_order: "کپی متن سفارش", copied: "کپی شد ✓",
    ship_free: "ارسال رایگان ✓", ship_left: "تا ارسال رایگان {n} تومان مانده",
    local_note: "سبد فقط روی همین دستگاه ذخیره می‌شود.",
    added: "به سبد اضافه شد", undo: "بازگشت",
    close: "بستن", wish_add: "افزودن به علاقه‌مندی‌ها",
    wish_cat: "علاقه‌مندی‌ها",
    about_t: "دربارهٔ ریفت‌گیر",
    about_d: "ریفت‌گیر فروشگاهی برای گیمرهای ایرانی است: تجهیزات اصل، قیمت منصفانه و ارسال سریع. ساخته‌شده برای رقابت.",
    trust1_t: "ارسال سریع", trust1_d: "تهران ۲۴ ساعته، شهرستان ۲ تا ۴ روز کاری.",
    trust2_t: "گارانتی اصالت", trust2_d: "۷ روز ضمانت بازگشت کالا، بدون سؤال.",
    trust3_t: "پرداخت در محل", trust3_d: "پرداخت نقدی یا کارت خوان هنگام تحویل.",
    trust4_t: "پشتیبانی", trust4_d: "پاسخگویی در ساعات کاری از طریق تلگرام.",
    trust_aria: "مزایای خرید",
    faq_t: "سؤالات متداول",
    faq1q: "ارسال چقدر طول می‌کشد؟", faq1a: "تهران ۲۴ ساعته، شهرستان‌ها ۲ تا ۴ روز کاری. هزینهٔ ارسال برای سفارش بالای ۵ میلیون تومان رایگان است.",
    faq2q: "کالا اصل است؟", faq2a: "بله — همهٔ کالاها با گارانتی اصالت عرضه می‌شوند و ۷ روز ضمته بازگشت دارند.",
    faq3q: "پرداخت چطور انجام می‌شود؟", faq3a: "سفارش را از طریق تلگرام برای ما می‌فرستید و پرداخت هنگام تحویل (نقدی یا کارتخوان) انجام می‌شود.",
    faq4q: "موجودی کالا به‌روز است؟", faq4a: "بله — تعداد موجودی کنار هر کالا نمایش داده می‌شود؛ اگر کالایی ناموجود بود می‌توانید اطلاع‌رسانی بخواهید.",
    faq5q: "گارانتی و مرجوعی چگونه است؟", faq5a: "۷ روز ضمانت بازگشت کالا در صورت عدم استفاده؛ شرایط کامل را هنگام تحویل دریافت می‌کنید.",
    notify_t: "خبردار شو", notify_d: "ایمیلت را بگذار تا از موجود شدن کالاها و کدهای تخفیف باخبر شوی (روی همین دستگاه ذخیره می‌شود).",
    notify_ph: "ایمیل یا شمارهٔ تماس", notify_btn: "ثبت", notify_ok: "ثبت شد ✓", notify_exists: "قبلاً ثبت شده‌ای.",
    recent_t: "آخرین بازدیدها",
    foot_rights: "تمامی حقوق محفوظ است. © 2026",
    foot_note: "نمایشگاه نمونه — پرداخت آنلاین ندارد؛ سفارش از طریق تلگرام.",
    foot_shop: "فروشگاه", foot_support: "پشتیبانی",
    lnk_hot: "پرفروش‌ها", lnk_faq: "سؤالات متداول", lnk_ship: "ارسال و تحویل", lnk_warranty: "گارانتی و مرجوعی", lnk_contact: "تماس با ما",
    back_top: "بازگشت به بالا",
    drop_msg: "ریفت باز شد! کد تخفیف RG-RIFT-10 روی سفارشت اعمال می‌شود.",
  },
  en: {
    dir: "ltr", htmlLang: "en",
    nav_all: "Shop", nav_hot: "Hot", nav_about: "About",
    nav_label: "Main menu", lang_btn: "فارسی",
    hero_t1: "Pull your", hero_neon1: "gear", hero_t2: "out of the rift",
    hero_sub: "Gaming gear store — mice, keyboards, headsets, chairs, consoles and games. Authentic stock, fast shipping.",
    cta_catalog: "Browse products", cta_hot: "Hot picks",
    stat1: "Gaming products", stat2: "Categories", stat3: "Fast shipping", stat4: "Authenticity warranty",
    statN1: "18", statN2: "7",
    mq1: "Fast shipping across Iran", mq2: "Authenticity warranty", mq3: "Cash on delivery", mq4: "Online support",
    shop_t: "Products",
    flash_label: "Today's special offer", flash_until: "Until midnight",
    deal_badge: "Deal of the Day", price_filter: "Price range",
    pf_lo: "Minimum price", pf_hi: "Maximum price", credits_t: "Image credits",
    rate_label: "Your rating", rated_ok: "Rating saved ✓",
    search_ph: "Search products…", search_label: "Search products", sort_label: "Sort",
    sort_new: "Newest", sort_asc: "Price: low", sort_desc: "Price: high",
    count_unit: "products",
    add: "Add to cart", detail: "Details +", hot: "HOT",
    empty: "No products match your search.",
    clear_filters: "Clear search & filters",
    specs: "Specs", related_t: "You may also like",
    low_stock: "Only {n} left", max_stock: "Stock limit reached ({n})",
    oos: "Out of stock", oos_btn: "Notify me",
    cart: "Cart", cart_btn: "Cart", empty_cart: "Your cart is empty — go grab some gear!",
    cart_shop: "Browse products", remove_item: "Remove from cart",
    total: "Total", checkout: "Order via Telegram",
    checkout_open: "Opening Telegram…", copy_order: "Copy order text", copied: "Copied ✓",
    ship_free: "Free shipping ✓", ship_left: "{n} Toman to free shipping",
    local_note: "Cart is saved on this device only.",
    added: "Added to cart", undo: "Undo",
    close: "Close", wish_add: "Add to wishlist",
    wish_cat: "Wishlist",
    about_t: "About RiftGear",
    about_d: "RiftGear is a store for gamers: authentic gear, fair prices, fast shipping. Built for competition.",
    trust1_t: "Fast shipping", trust1_d: "Tehran in 24h, other cities in 2–4 working days.",
    trust2_t: "Authenticity warranty", trust2_d: "7-day return guarantee, no questions asked.",
    trust3_t: "Cash on delivery", trust3_d: "Pay cash or by card when you receive the order.",
    trust4_t: "Support", trust4_d: "Replies during working hours via Telegram.",
    trust_aria: "Why shop with us",
    faq_t: "FAQ",
    faq1q: "How long does shipping take?", faq1a: "Tehran within 24h, other cities 2–4 working days. Shipping is free for orders over 5,000,000 Toman.",
    faq2q: "Are the products authentic?", faq2a: "Yes — every item ships with an authenticity guarantee and a 7-day return window.",
    faq3q: "How do I pay?", faq3a: "Send your order via Telegram; payment happens on delivery (cash or card terminal).",
    faq4q: "Is the stock accurate?", faq4a: "Yes — each product shows its available quantity; ask for a notification if it's out of stock.",
    faq5q: "What about warranty and returns?", faq5a: "7-day return guarantee for unused items; full terms are provided on delivery.",
    notify_t: "Stay in the loop", notify_d: "Drop your email to hear about restocks and discount codes (stored on this device).",
    notify_ph: "Email or phone", notify_btn: "Subscribe", notify_ok: "Saved ✓", notify_exists: "You're already on the list.",
    recent_t: "Recently viewed",
    foot_rights: "All rights reserved. © 2026",
    foot_note: "Demo showcase — no online payment; orders via Telegram.",
    foot_shop: "Shop", foot_support: "Support",
    lnk_hot: "Hot picks", lnk_faq: "FAQ", lnk_ship: "Shipping", lnk_warranty: "Warranty & returns", lnk_contact: "Contact",
    back_top: "Back to top",
    drop_msg: "The rift opened! Discount code RG-RIFT-10 will be applied to your order.",
  },
};

/* ---------------- safe storage ---------------- */
function loadJSON(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return v == null || typeof v !== "object" ? fallback : v;
  } catch { return fallback; }
}
function loadStr(key, allowed, dflt) {
  try { const v = localStorage.getItem(key); return allowed.includes(v) ? v : dflt; }
  catch { return dflt; }
}

let lang = loadStr("rg_lang", ["fa", "en"], "fa");
let activeCat = "all";
let query = "";
let sortMode = "new";
let hotOnly = false;

/* cart: drop ids that no longer exist in the catalog */
let cart = loadJSON("rg_cart", {});
if (Array.isArray(cart)) cart = {};
cart = Object.fromEntries(
  Object.entries(cart).filter(([id, q]) => PRODUCTS.some((p) => p.id === id) && Number(q) > 0)
);
let wish = loadJSON("rg_wish", []);
if (!Array.isArray(wish)) wish = [];
let recent = loadJSON("rg_recent", []);
if (!Array.isArray(recent)) recent = [];

const RM = matchMedia("(prefers-reduced-motion: reduce)");
const t = (k) => I18N[lang][k];
const cur = () => (lang === "fa" ? "تومان" : "Toman");
const iconOf = (cat) => `ic-${cat}`;
const svgIco = (id, cls = "ico") => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;

function fmtPrice(n) {
  return new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US").format(n);
}
const FX_TOMAN_USD = 71000; /* display-only exchange rate: Toman per USD */
function usdHint(price) {
  return "$" + new Intl.NumberFormat("en-US").format(Math.round(price / FX_TOMAN_USD));
}

/* ---------------- catalog render ---------------- */
function renderChips() {
  const el = document.getElementById("chips");
  const list = [...CATEGORIES, { id: "wish", fa: "♥ " + I18N.fa.wish_cat, en: "♥ " + I18N.en.wish_cat }];
  el.innerHTML = "";
  list.forEach((c) => {
    const b = document.createElement("button");
    b.className = "chip" + (c.id === activeCat ? " active" : "");
    b.textContent = c[lang];
    b.setAttribute("aria-pressed", String(c.id === activeCat));
    b.onclick = () => {
      activeCat = c.id;
      hotOnly = false;                       /* clicking a chip leaves hot-mode */
      setNavActive("navAll");
      renderChips(); renderGrid();
    };
    el.appendChild(b);
  });
}

function filtered() {
  let list = PRODUCTS.filter((p) =>
    activeCat === "wish" ? wish.includes(p.id) : activeCat === "all" || p.cat === activeCat
  );
  if (query) {
    const q = query.toLowerCase();
    list = list.filter((p) =>
      [p.name.fa, p.name.en, p.desc.fa, p.desc.en,
       ...(p.specs.fa || []), ...(p.specs.en || [])]
        .some((s) => String(s).toLowerCase().includes(q))
    );
  }
  if (sortMode === "asc") list = [...list].sort((a, b) => a.price - b.price);
  if (sortMode === "desc") list = [...list].sort((a, b) => b.price - a.price);
  if (hotOnly) list = list.filter((p) => p.hot);
  if (priceLo > 0 || priceHi < 100) {
    const [pa, pb] = priceBounds();
    list = list.filter((p) => p.price >= pa && p.price <= pb);
  }
  return list;
}

function stockLine(p) {
  if (p.stock <= 0) return `<span class="oos">${t("oos")}</span>`;
  if (p.stock <= 3) return `<span class="low-stock">${t("low_stock").replace("{n}", fmtPrice(p.stock))}</span>`;
  return "";
}

function renderGrid() {
  const el = document.getElementById("grid");
  const list = filtered();
  const rc = document.getElementById("rcount");
  if (rc) rc.textContent = fmtPrice(list.length) + " " + t("count_unit");
  if (!list.length) {
    el.innerHTML = `<div class="empty">
      <p>${t("empty")}</p>
      <button class="btn btn-ghost" id="clearFilters">${t("clear_filters")}</button>
    </div>`;
    document.getElementById("clearFilters").onclick = () => {
      query = ""; activeCat = "all"; hotOnly = false;
      priceLo = 0; priceHi = 100;
      const pl = document.getElementById("priceLo"), ph = document.getElementById("priceHi");
      if (pl) pl.value = 0; if (ph) ph.value = 100;
      updatePFOut();
      document.getElementById("search").value = "";
      setNavActive("navAll");
      renderChips(); renderGrid();
    };
    return;
  }
  el.innerHTML = list
    .map((p) => {
      const off = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
      const wished = wish.includes(p.id);
      return `
    <article class="card cut" data-id="${p.id}">
      ${p.hot ? `<span class="hot">${t("hot")}</span>` : ""}
      ${off ? `<span class="off">−${fmtPrice(off)}%</span>` : ""}
      <button class="wish${wished ? " on" : ""}" data-act="wish"
        aria-pressed="${wished}" aria-label="${t("wish_add")}" title="${t("wish_add")}">${wished ? "♥" : "♡"}</button>
      <div class="thumb">${svgIco(iconOf(p.cat))}${p.img ? `<img src="${p.img}" alt="" width="800" height="600" loading="lazy" onerror="this.remove()">` : ""}</div>
      <h3>${p.name[lang]}</h3>
      <div class="stars-row">${starsHTML(p)}</div>
      <p class="desc">${p.desc[lang]}</p>
      ${stockLine(p)}
      <div class="price-row">
        <span class="price">${fmtPrice(p.price)} <small>${cur()}</small></span>
        ${p.oldPrice ? `<span class="old-price">${fmtPrice(p.oldPrice)}</span>` : ""}
        ${lang === "en" ? `<span class="usd-hint">≈ ${usdHint(p.price)}</span>` : ""}
      </div>
      <button class="detail-link" data-act="detail">${t("detail")}</button>
      <button class="add" data-act="add" ${p.stock <= 0 ? "disabled" : ""}
        >${p.stock <= 0 ? t("oos_btn") : t("add")}</button>
    </article>`;
    })
    .join("");
  observeCards(el);
}

/* entrance animation (skip under reduced-motion) */
let cardIO = null;
function observeCards(scope) {
  const cards = scope.querySelectorAll(".card");
  if (RM.matches || !("IntersectionObserver" in window)) {
    cards.forEach((c) => c.classList.add("in")); return;
  }
  if (!cardIO) {
    cardIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); cardIO.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
  }
  cards.forEach((c) => cardIO.observe(c));
}

document.getElementById("grid").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-act]");
  if (!btn) return;
  const card = btn.closest(".card");
  if (!card) return;
  const id = card.dataset.id;
  if (btn.dataset.act === "add") addToCart(id, 1, btn);
  else if (btn.dataset.act === "wish") toggleWish(id);
  else openModal(id);
});

/* pointer spotlight on cards */
document.getElementById("grid").addEventListener("pointermove", (e) => {
  const card = e.target.closest(".card");
  if (!card || RM.matches) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
  card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
});

/* ---------------- wishlist / recent ---------------- */
function toggleWish(id) {
  const i = wish.indexOf(id);
  if (i >= 0) wish.splice(i, 1); else wish.push(id);
  try { localStorage.setItem("rg_wish", JSON.stringify(wish)); } catch {}
  renderGrid();
}
function pushRecent(id) {
  recent = [id, ...recent.filter((x) => x !== id)].slice(0, 8);
  try { localStorage.setItem("rg_recent", JSON.stringify(recent)); } catch {}
  renderRecent();
}
function renderRecent() {
  const sec = document.getElementById("recentSec");
  const items = recent.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  if (!items.length) { sec.hidden = true; return; }
  sec.hidden = false;
  document.getElementById("recentRow").innerHTML = items.map((p) => `
    <button class="recent-item" data-id="${p.id}">
      ${svgIco(iconOf(p.cat))}
      <b>${p.name[lang]}</b>
      <span class="price" style="font-size:.85rem">${fmtPrice(p.price)} <small>${cur()}</small></span>
    </button>`).join("");
}
document.getElementById("recentRow").addEventListener("click", (e) => {
  const b = e.target.closest(".recent-item");
  if (b) openModal(b.dataset.id);
});

/* ---------------- modal ---------------- */
let modalOpener = null, mQty = 1, currentId = null, suppressHash = false;

function openModal(id, fromHash) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  currentId = id; mQty = 1;
  if (!document.getElementById("ovModal").classList.contains("open"))
    modalOpener = document.activeElement;
  const m = document.getElementById("modal");
  const catName = (CATEGORIES.find((c) => c.id === p.cat) || {})[lang] || "";
  const related = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 3);
  const stockCls = p.stock <= 0 ? "" : p.stock <= 3 ? "low" : "ok";
  const stockTxt = p.stock <= 0 ? t("oos")
    : p.stock <= 3 ? t("low_stock").replace("{n}", fmtPrice(p.stock))
    : fmtPrice(p.stock) + " " + t("count_unit");
  m.innerHTML = `
    <button class="close" aria-label="${t("close")}">✕</button>
    <div class="glyph" aria-hidden="true">${svgIco(iconOf(p.cat))}${p.img ? `<img src="${p.img}" alt="" width="800" height="600" onerror="this.remove()">` : ""}</div>
    <span class="cat-label">${catName}</span>
    <h2 id="modalTitle">${p.name[lang]}</h2>
    ${rateRowHTML(p)}
    <span class="stock-badge ${stockCls}">${stockTxt}</span>
    <p class="desc">${p.desc[lang]}</p>
    <h4 style="margin-bottom:8px;color:var(--magenta)">${t("specs")}</h4>
    <ul>${p.specs[lang].map((s) => `<li>${s}</li>`).join("")}</ul>
    <div class="price-row" style="margin-bottom:16px">
      <span class="price" style="font-size:1.5rem">${fmtPrice(p.price)} <small>${cur()}</small></span>
      ${p.oldPrice ? `<span class="old-price">${fmtPrice(p.oldPrice)}</span>` : ""}
      ${lang === "en" ? `<span class="usd-hint">≈ ${usdHint(p.price)}</span>` : ""}
    </div>
    <div class="mqty" ${p.stock <= 0 ? "hidden" : ""}>
      <button id="mMinus" aria-label="−">−</button>
      <span id="mQtyV">۱</span>
      <button id="mPlus" aria-label="+">+</button>
    </div>
    <button class="btn btn-primary" style="width:100%;justify-content:center" id="mAdd"
      ${p.stock <= 0 ? "disabled" : ""}>${p.stock <= 0 ? t("oos") : t("add")}</button>
    ${related.length ? `<div class="related"><h4>${t("related_t")}</h4><div class="related-row">
      ${related.map((r) => `<button class="related-item" data-rid="${r.id}">${svgIco(iconOf(r.cat))} ${r.name[lang]}</button>`).join("")}
    </div></div>` : ""}`;
  document.getElementById("ovModal").classList.add("open");
  document.body.classList.add("no-scroll");
  m.querySelector(".close").onclick = closeModal;
  m.querySelectorAll(".related-item").forEach((b) => b.onclick = () => openModal(b.dataset.rid));
  const setQ = (v) => {
    mQty = Math.max(1, Math.min(v, Math.max(1, p.stock)));
    document.getElementById("mQtyV").textContent = fmtPrice(mQty);
  };
  if (p.stock > 0) {
    document.getElementById("mQtyV").textContent = fmtPrice(1);
    document.getElementById("mMinus").onclick = () => setQ(mQty - 1);
    document.getElementById("mPlus").onclick = () => setQ(mQty + 1);
    document.getElementById("mAdd").onclick = () => { addToCart(id, mQty); closeModal(); };
  } else {
    document.getElementById("mAdd").onclick = () => toast(t("oos"));
  }
  m.querySelector(".close").focus();
  pushRecent(id);
  if (!fromHash) {
    suppressHash = true;
    try { location.hash = "p=" + id; } catch {}
    setTimeout(() => { suppressHash = false; }, 50);
  }
}
function closeModal(fromHash) {
  const ov = document.getElementById("ovModal");
  if (!ov.classList.contains("open")) return;
  ov.classList.remove("open");
  currentId = null;
  document.body.classList.toggle("no-scroll", document.getElementById("drawer").classList.contains("open"));
  if (modalOpener && modalOpener.focus) modalOpener.focus();
  if (!fromHash && location.hash.startsWith("#p=")) {
    suppressHash = true;
    try { history.replaceState(null, "", location.pathname + location.search); } catch {}
    setTimeout(() => { suppressHash = false; }, 50);
  }
}
/* focus trap for modal */
document.getElementById("modal").addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const f = [...document.getElementById("modal").querySelectorAll("button, [href], input, select")]
    .filter((x) => !x.disabled && x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ---------------- cart ---------------- */
function saveCart() {
  try { localStorage.setItem("rg_cart", JSON.stringify(cart)); } catch {}
  renderCart();
}
function addToCart(id, n = 1, btn) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p || p.stock <= 0) return false;
  const have = cart[id] || 0;
  if (have + n > p.stock) { toast(t("max_stock").replace("{n}", fmtPrice(p.stock))); return false; }
  cart[id] = have + n;
  saveCart();
  popBadge();
  if (btn) {
    const old = btn.textContent;
    btn.textContent = t("added") + " ✓";
    btn.classList.add("done");
    setTimeout(() => { btn.textContent = old; btn.classList.remove("done"); }, 1200);
  }
  toast(t("added"), { label: t("undo"), fn: () => { changeQty(id, -n); } });
  return true;
}
function changeQty(id, delta) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) { delete cart[id]; saveCart(); return; }
  const next = (cart[id] || 0) + delta;
  if (next <= 0) {
    const had = cart[id];
    delete cart[id]; saveCart();
    if (had) toast(t("remove_item"), { label: t("undo"), fn: () => { cart[id] = had; saveCart(); } });
    return;
  }
  if (next > p.stock) { toast(t("max_stock").replace("{n}", fmtPrice(p.stock))); return; }
  cart[id] = next;
  saveCart();
}
function removeItem(id) {
  const had = cart[id];
  if (!had) return;
  delete cart[id]; saveCart();
  toast(t("remove_item"), { label: t("undo"), fn: () => { cart[id] = had; saveCart(); } });
}
function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, q]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return sum + (p ? p.price * q : 0);
  }, 0);
}
function popBadge() {
  const b = document.getElementById("cartBadge");
  b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
}
function renderCart() {
  const badge = document.getElementById("cartBadge");
  const n = cartCount();
  badge.textContent = fmtPrice(n);
  badge.style.display = n ? "grid" : "none";
  const live = document.getElementById("cartLive");
  if (live) live.textContent = t("cart") + ": " + fmtPrice(n);

  const box = document.getElementById("cartItems");
  const ids = Object.keys(cart);
  if (!ids.length) {
    box.innerHTML = `<div class="cart-empty"><p>${t("empty_cart")}</p>
      <button class="btn btn-ghost" id="cartShop">${t("cart_shop")}</button></div>`;
    document.getElementById("cartShop").onclick = () => { toggleDrawer(false); navGo("all"); };
  } else {
    box.innerHTML = ids
      .map((id) => {
        const p = PRODUCTS.find((x) => x.id === id);
        if (!p) return "";
        const line = p.price * cart[id];
        return `
      <div class="citem">
        <div class="g" aria-hidden="true">${svgIco(iconOf(p.cat))}</div>
        <div>
          <div class="n">${p.name[lang]}</div>
          <div class="p">${fmtPrice(line)} ${cur()}</div>
          <div class="line">${fmtPrice(cart[id])} × ${fmtPrice(p.price)}</div>
        </div>
        <div class="qty">
          <button data-q="+" data-id="${id}" aria-label="+">+</button>
          <span>${fmtPrice(cart[id])}</span>
          <button data-q="-" data-id="${id}" aria-label="−">−</button>
          <button class="rm" data-rm="${id}" aria-label="${t("remove_item")}">✕</button>
        </div>
      </div>`;
      })
      .join("");
  }
  const total = cartTotal();
  document.getElementById("cartTotal").textContent = fmtPrice(total) + " " + cur();
  const ship = document.getElementById("shipNote");
  if (ship) {
    ship.innerHTML = !n ? "" : total >= 5000000
      ? `<b>${t("ship_free")}</b>`
      : t("ship_left").replace("{n}", fmtPrice(5000000 - total));
  }
  document.getElementById("checkoutBtn").disabled = !n;
}
document.getElementById("cartItems").addEventListener("click", (e) => {
  const rm = e.target.closest("[data-rm]");
  if (rm) { removeItem(rm.dataset.rm); return; }
  const b = e.target.closest("[data-q]");
  if (!b) return;
  changeQty(b.dataset.id, b.dataset.q === "+" ? 1 : -1);
});

let drawerOpener = null;
function toggleDrawer(open) {
  const d = document.getElementById("drawer");
  if (open && !d.classList.contains("open")) drawerOpener = document.activeElement;
  d.classList.toggle("open", open);
  document.getElementById("scrim").classList.toggle("show", open);
  document.body.classList.toggle("no-scroll", open || document.getElementById("ovModal").classList.contains("open"));
  if (open) document.getElementById("drawerClose").focus();
  else if (drawerOpener && drawerOpener.focus) drawerOpener.focus();
}
/* focus trap for drawer */
document.getElementById("drawer").addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const f = [...document.getElementById("drawer").querySelectorAll("button, [href], input")]
    .filter((x) => !x.disabled && x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ---------------- checkout → Telegram ---------------- */
function orderText() {
  const lines = Object.entries(cart).map(([id, q]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return "";
    return `${q}× ${p.name[lang]} — ${fmtPrice(p.price * q)} ${cur()}`;
  }).filter(Boolean);
  let drop = ""; try { drop = JSON.parse(localStorage.getItem("rg_drop")) || ""; } catch {}
  const head = lang === "fa" ? "سفارش از RIFTGEAR:" : "RIFTGEAR order:";
  const total = lang === "fa" ? "جمع کل" : "Total";
  return [head, ...lines, `${total}: ${fmtPrice(cartTotal())} ${cur()}`,
    drop ? (lang === "fa" ? `کد تخفیف: ${drop}` : `Discount code: ${drop}`) : ""]
    .filter(Boolean).join("\n");
}
function checkout() {
  if (!cartCount()) return;
  const site = "https://abwlfdlddrwyshyangylys-stack.github.io/RIFTGEAR/";
  const text = orderText();
  const url = "https://t.me/share/url?url=" + encodeURIComponent(site) +
              "&text=" + encodeURIComponent(text);
  toast(t("checkout_open"), { label: t("copy_order"), fn: () => copyText(text) });
  try { window.open(url, "_blank", "noopener"); } catch {}
}
function copyText(s) {
  const done = () => toast(t("copied"));
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(s).then(done).catch(() => fallbackCopy(s, done));
  } else fallbackCopy(s, done);
}
function fallbackCopy(s, done) {
  const ta = document.createElement("textarea");
  ta.value = s; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); done(); } catch {}
  ta.remove();
}

/* ---------------- toast ---------------- */
let toastTimer;
function toast(msg, action) {
  const el = document.getElementById("toast");
  el.innerHTML = `<span></span>`;
  el.firstChild.textContent = msg;
  if (action) {
    const b = document.createElement("button");
    b.className = "undo"; b.textContent = action.label;
    b.onclick = () => { action.fn(); el.classList.remove("show"); };
    el.appendChild(b);
  }
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), action ? 4000 : 2400);
}

/* ---------------- language ---------------- */
function applyLang() {
  const L = I18N[lang];
  document.documentElement.dir = L.dir;
  document.body.dir = L.dir;
  document.documentElement.lang = L.htmlLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = L[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const v = L[el.dataset.i18nPh];
    if (v != null) el.placeholder = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const v = L[el.dataset.i18nAria];
    if (v != null) el.setAttribute("aria-label", v);
  });
  const sel = document.getElementById("sort");
  sel.options[0].textContent = t("sort_new");
  sel.options[1].textContent = t("sort_asc");
  sel.options[2].textContent = t("sort_desc");
  try { localStorage.setItem("rg_lang", lang); } catch {}
  renderChips(); renderGrid(); renderCart(); renderRecent();
  if (currentId) openModal(currentId, true);
}

document.getElementById("langBtn").onclick = () => {
  lang = lang === "fa" ? "en" : "fa";
  applyLang();
};

/* ---------------- toolbar ---------------- */
let searchTimer;
document.getElementById("search").addEventListener("input", (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    query = e.target.value.trim();
    renderGrid();
  }, 150);
});
document.getElementById("sort").addEventListener("change", (e) => {
  sortMode = e.target.value;
  renderGrid();
});

/* ---------------- nav ---------------- */
function setNavActive(id) {
  document.querySelectorAll("nav.main button").forEach((b) => {
    const on = b.id === id;
    b.classList.toggle("active", on);
    if (on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
  });
}
function scrollEl(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: RM.matches ? "auto" : "smooth" });
}
function navGo(mode) {
  if (mode === "about") { setNavActive("navAbout"); scrollEl("about"); closeBurger(); return; }
  hotOnly = mode === "hot";
  setNavActive(mode === "hot" ? "navHot" : "navAll");
  closeBurger();
  scrollEl("shop");
  renderChips(); renderGrid();
}
document.getElementById("navAll").onclick = () => navGo("all");
document.getElementById("navHot").onclick = () => navGo("hot");
document.getElementById("navAbout").onclick = () => navGo("about");
document.getElementById("ctaCatalog").onclick = () => navGo("all");
document.getElementById("ctaHot").onclick = () => navGo("hot");

/* burger */
function closeBurger() { document.querySelector("nav.main").classList.remove("open"); }
document.getElementById("burgerBtn").onclick = () =>
  document.querySelector("nav.main").classList.toggle("open");

/* ---------------- drawer / modal triggers ---------------- */
document.getElementById("cartBtn").onclick = () => toggleDrawer(true);
document.getElementById("drawerClose").onclick = () => toggleDrawer(false);
document.getElementById("scrim").onclick = () => toggleDrawer(false);
document.getElementById("ovModal").addEventListener("click", (e) => {
  if (e.target.id === "ovModal") closeModal();
});
document.getElementById("checkoutBtn").onclick = checkout;
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); toggleDrawer(false); closeBurger(); }
});

/* hash deep-link #p=id */
window.addEventListener("hashchange", () => {
  if (suppressHash) return;
  const m = location.hash.match(/^#p=(.+)$/);
  if (m) openModal(m[1], true);
  else closeModal(true);
});

/* ---------------- notify form ---------------- */
document.getElementById("notifyForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("notifyInput");
  const v = input.value.trim();
  if (!v) return;
  const list = loadJSON("rg_notify", []);
  const arr = Array.isArray(list) ? list : [];
  if (arr.includes(v)) { toast(t("notify_exists")); return; }
  arr.push(v);
  try { localStorage.setItem("rg_notify", JSON.stringify(arr)); } catch {}
  input.value = "";
  toast(t("notify_ok"));
});

/* ---------------- rift signature ---------------- */
(function riftSetup() {
  const hero = document.querySelector(".hero");
  const rift = document.getElementById("rift");
  if (!hero || !rift) return;
  if (!RM.matches) {
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 34;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 22;
      rift.style.setProperty("--px", x.toFixed(1) + "px");
      rift.style.setProperty("--py", y.toFixed(1) + "px");
    });
    hero.addEventListener("pointerleave", () => {
      rift.style.setProperty("--px", "0px");
      rift.style.setProperty("--py", "0px");
    });
  }
  const surge = () => {
    if (!RM.matches) {
      rift.classList.remove("surge"); void rift.offsetWidth; rift.classList.add("surge");
      document.body.classList.remove("rift-wave"); void document.body.offsetWidth;
      document.body.classList.add("rift-wave");
      setTimeout(() => { rift.classList.remove("surge"); document.body.classList.remove("rift-wave"); }, 950);
    }
    try { localStorage.setItem("rg_drop", JSON.stringify("RG-RIFT-10")); } catch {}
    toast(t("drop_msg"));
  };
  rift.addEventListener("click", surge);
  const neon = document.querySelector(".hero h1 .neon-c");
  if (neon) neon.addEventListener("click", surge);
})();

/* ---------------- scroll: progress, header, to-top ---------------- */
(function scrollFx() {
  const bar = document.getElementById("progress");
  const header = document.querySelector("header");
  const top = document.getElementById("toTop");
  let lastY = 0, ticking = false;
  function frame() {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    if (y > 240 && y > lastY) header.classList.add("hidden");
    else header.classList.remove("hidden");
    top.classList.toggle("show", y > 600);
    lastY = y; ticking = false;
  }
  addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }, { passive: true });
  top.onclick = () => scrollTo({ top: 0, behavior: RM.matches ? "auto" : "smooth" });
})();

/* footer quick links */
document.getElementById("lnkHot").onclick = () => navGo("hot");
document.getElementById("lnkFaq").onclick = () => scrollEl("faq");
document.getElementById("lnkContact").onclick = () => {
  try { window.open("https://t.me/share/url?url=" +
    encodeURIComponent("https://abwlfdlddrwyshyangylys-stack.github.io/RIFTGEAR/"),
    "_blank", "noopener"); } catch {}
};


/* ================= widgets v2.1: ratings, flash, deal, price filter, credits, confetti ================= */
const rgRatings = (() => {
  try { const v = JSON.parse(localStorage.getItem("rg_ratings") || "{}"); return v && typeof v === "object" ? v : {}; }
  catch { return {}; }
})();
function seedHash(str) { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; }
function seedRating(p) { const h = seedHash(p.id); return { avg: 3.6 + (h % 14) / 10, n: 3 + (h % 28) }; }
function round1(x) { return Math.round(x * 10) / 10; }
function starsHTML(p) {
  const s = seedRating(p);
  const full = Math.round(s.avg);
  let stars = "";
  for (let i = 1; i <= 5; i++) stars += i <= full ? "★" : "☆";
  const lbl = fmtPrice(round1(s.avg)) + " / 5";
  return `<span class="stars" role="img" aria-label="${lbl}">${stars}</span><small class="rate-n">(${fmtPrice(s.n)})</small>`;
}
function rateRowHTML(p) {
  const s = seedRating(p);
  const mine = rgRatings[p.id] || 0;
  let btns = "";
  for (let i = 1; i <= 5; i++)
    btns += `<button class="rate-btn${mine >= i ? " on" : ""}" data-rate="${i}" aria-pressed="${mine === i}" aria-label="${i}">★</button>`;
  return `<div class="rate-row">
      <span class="stars big" role="img" aria-label="${fmtPrice(round1(s.avg))} / 5">${[1,2,3,4,5].map(i => i <= Math.round(s.avg) ? "★" : "☆").join("")}</span>
      <b class="rate-avg">${fmtPrice(round1(s.avg))}</b>
      <small class="rate-n">(${fmtPrice(s.n)})</small>
      <span class="rate-spacer"></span>
      <span class="rate-label">${t("rate_label")}:</span>
      <span class="rate-btns" role="group" aria-label="${t("rate_label")}">${btns}</span>
    </div>`;
}
document.getElementById("modal").addEventListener("click", (e) => {
  const b = e.target.closest(".rate-btn");
  if (!b || !currentId) return;
  rgRatings[currentId] = +b.dataset.rate;
  try { localStorage.setItem("rg_ratings", JSON.stringify(rgRatings)); } catch {}
  toast(t("rated_ok"));
  openModal(currentId, true);
});

/* ---- price range state ---- */
const P_MIN = Math.min(...PRODUCTS.map((p) => p.price));
const P_MAX = Math.max(...PRODUCTS.map((p) => p.price));
let priceLo = 0, priceHi = 100;
function priceBounds() {
  const span = P_MAX - P_MIN || 1;
  return [Math.round(P_MIN + (span * priceLo) / 100), Math.round(P_MIN + (span * priceHi) / 100)];
}
function updatePFOut() {
  const out = document.getElementById("priceOut");
  if (!out) return;
  const [a, b] = priceBounds();
  out.textContent = fmtPrice(a) + " – " + fmtPrice(b) + " " + cur();
}
(function bindPF() {
  const lo = document.getElementById("priceLo"), hi = document.getElementById("priceHi");
  if (!lo || !hi) return;
  function sync(src) {
    let a = +lo.value, b = +hi.value;
    if (a > b) { if (src === "lo") { b = a; hi.value = b; } else { a = b; lo.value = a; } }
    priceLo = a; priceHi = b;
    updatePFOut(); renderGrid();
  }
  lo.addEventListener("input", () => sync("lo"));
  hi.addEventListener("input", () => sync("hi"));
})();

/* ---- flash sale countdown to local midnight ---- */
function toFaDigits(str) { return str.replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]); }
function tickFlash() {
  const el = document.getElementById("flashTimer");
  if (!el) return;
  const now = new Date();
  const mid = new Date(now); mid.setHours(24, 0, 0, 0);
  const s = Math.max(0, Math.floor((mid - now) / 1000));
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  const txt = `${hh}:${mm}:${ss}`;
  el.textContent = lang === "fa" ? toFaDigits(txt) : txt;
}
tickFlash();
setInterval(tickFlash, 1000);

/* ---- deal of the day ---- */
function renderDeal() {
  const el = document.getElementById("deal");
  if (!el) return;
  let best = null, bestOff = 0;
  PRODUCTS.forEach((p) => {
    if (p.oldPrice) {
      const o = Math.round((1 - p.price / p.oldPrice) * 100);
      if (o > bestOff) { bestOff = o; best = p; }
    }
  });
  if (!best) best = PRODUCTS.find((p) => p.hot) || PRODUCTS[0];
  const off = bestOff;
  el.innerHTML = `
    <div class="deal-media">${svgIco(iconOf(best.cat))}${best.img ? `<img src="${best.img}" alt="" width="800" height="600" onerror="this.remove()">` : ""}</div>
    <div class="deal-body">
      <span class="deal-badge">${t("deal_badge")}</span>
      <h3>${best.name[lang]}</h3>
      <p class="desc">${best.desc[lang]}</p>
      <div class="price-row">
        <span class="price big">${fmtPrice(best.price)} <small>${cur()}</small></span>
        ${best.oldPrice ? `<span class="old-price">${fmtPrice(best.oldPrice)}</span>` : ""}
        ${off ? `<span class="off">−${fmtPrice(off)}%</span>` : ""}
        ${lang === "en" ? `<span class="usd-hint">≈ ${usdHint(best.price)}</span>` : ""}
      </div>
      <div class="deal-cta">
        <button class="btn btn-primary" id="dealAdd">${best.stock <= 0 ? t("oos_btn") : t("add")}</button>
        <button class="btn btn-ghost" id="dealMore">${t("detail")}</button>
      </div>
      <p class="deal-timer">${t("flash_until")} — <b id="dealTimer">${document.getElementById("flashTimer").textContent}</b></p>
    </div>`;
  el.hidden = false;
  const add = document.getElementById("dealAdd");
  const more = document.getElementById("dealMore");
  if (add) add.disabled = best.stock <= 0;
  if (add) add.onclick = () => addToCart(best.id, 1, add);
  if (more) more.onclick = () => openModal(best.id);
}

/* ---- image credits ---- */
function renderCredits() {
  const ul = document.getElementById("creditsList");
  if (!ul || typeof CREDITS === "undefined") return;
  ul.innerHTML = CREDITS.map((c) =>
    `<li>${c.title} — ${c.license}${c.src ? ` — <a href="${c.src}" target="_blank" rel="noopener">Wikimedia Commons</a>` : ""}</li>`
  ).join("");
}

/* ---- confetti burst on add ---- */
function burst(x, y) {
  if (RM.matches) return;
  const colors = ["#2de2ff", "#ff2e9a", "#8b5cf6", "#ffe45e"];
  for (let i = 0; i < 14; i++) {
    const sp = document.createElement("span");
    sp.className = "conf";
    sp.style.left = x + "px";
    sp.style.top = y + "px";
    sp.style.background = colors[i % colors.length];
    const ang = Math.random() * Math.PI * 2, dist = 40 + Math.random() * 70;
    sp.style.setProperty("--dx", Math.round(Math.cos(ang) * dist) + "px");
    sp.style.setProperty("--dy", Math.round(Math.sin(ang) * dist - 30) + "px");
    document.body.appendChild(sp);
    sp.addEventListener("animationend", () => sp.remove());
    setTimeout(() => sp.remove(), 1600);
  }
}
const _addToCart = addToCart;
addToCart = function (id, n, btn) {
  const ok = _addToCart(id, n, btn);
  if (ok) {
    const b = document.getElementById("cartBadge");
    if (b) { const r = b.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2); }
  }
  return ok;
};

/* ---- applyLang wrap so widgets re-render on language switch ---- */
const _applyLang = applyLang;
applyLang = function () {
  _applyLang();
  renderDeal(); updatePFOut(); renderCredits(); tickFlash();
};

/* widget init (boot will run applyLang once more) */
renderDeal(); updatePFOut(); renderCredits();

/* ---------------- boot ---------------- */
applyLang();
(function bootHash() {
  const m = location.hash.match(/^#p=(.+)$/);
  if (m) openModal(m[1], true);
})();
