/* RIFTGEAR — product catalog (static) */
const CATEGORIES = [
  { id: "all",      fa: "همه",        en: "All" },
  { id: "mouse",    fa: "ماوس",       en: "Mouse" },
  { id: "keyboard", fa: "کیبورد",     en: "Keyboard" },
  { id: "headset",  fa: "هدست",       en: "Headset" },
  { id: "pad",      fa: "دسته بازی",  en: "Controller" },
  { id: "chair",    fa: "صندلی",      en: "Chair" },
  { id: "console",  fa: "کنسول",      en: "Console" },
  { id: "game",     fa: "بازی",       en: "Game" },
];

const PRODUCTS = [
  { id: "m1", img: "images/m1.webp", cat: "mouse", glyph: "🖱️", price: 2490000, usd: 35, stock: 3, oldPrice: 2890000, hot: true,
    name: { fa: "ماوس بدون‌سیم Vortex X8", en: "Vortex X8 Wireless Mouse" },
    desc: { fa: "سنسور ۲۶K، وزن ۵۸ گرم، لاته‌سنجی ۰.۸ms — برای FPS رقابتی ساخته شده.",
            en: "26K sensor, 58g weight, 0.8ms latency — built for competitive FPS." },
    specs: { fa: ["سنسور 26,000 DPI", "وزن 58g", "باتری 70 ساعت", "2.4G + بلوتوث"],
             en: ["26,000 DPI sensor", "58g weight", "70h battery", "2.4G + Bluetooth"] } },

  { id: "m2", img: "images/m2.webp", cat: "mouse", glyph: "🖱️", price: 1190000, usd: 17, stock: 24,
    name: { fa: "ماوس Razor Claw Mini", en: "Razor Claw Mini" },
    desc: { fa: "سبک و اقتصادی، سنسور 12K، مناسب MOBA و روزمره.",
            en: "Light and affordable, 12K sensor, great for MOBA and daily use." },
    specs: { fa: ["سنسور 12,000 DPI", "وزن 74g", "نورپردازی RGB"],
             en: ["12,000 DPI sensor", "74g weight", "RGB lighting"] } },

  { id: "m3", img: "images/m3.webp", cat: "mouse", glyph: "🖱️", price: 4890000, usd: 69, stock: 8, hot: true,
    name: { fa: "ماوس حرفه‌ای Nova Pro", en: "Nova Pro Esports Mouse" },
    desc: { fa: "پرچمدار: سنسور 30K، سوییچ‌های نوری 100M کلیک، داک شارژ مغناطیسی.",
            en: "Flagship: 30K sensor, 100M-click optical switches, magnetic charging dock." },
    specs: { fa: ["سنسور 30,000 DPI", "سوییچ نوری", "وزن 52g", "داک شارژ"],
             en: ["30,000 DPI sensor", "Optical switches", "52g weight", "Charging dock"] } },

  { id: "k1", img: "images/k1.webp", cat: "keyboard", glyph: "⌨️", price: 3790000, usd: 53, stock: 2, oldPrice: 4290000, hot: true,
    name: { fa: "کیبورد مکانیکی Hex 65%", en: "Hex 65% Mechanical Keyboard" },
    desc: { fa: "سوییچ‌های خطی Red، هات‌سواپ، کابل Type-C جمع‌شونده — کوچک و سریع.",
            en: "Linear red switches, hot-swappable, detachable Type-C — compact and fast." },
    specs: { fa: ["چیدمان 65%", "سوییچ خطی Red", "هات‌سواپ", "نورپردازی per-key"],
             en: ["65% layout", "Linear red switches", "Hot-swap", "Per-key RGB"] } },

  { id: "k2", img: "images/k2.webp", cat: "keyboard", glyph: "⌨️", price: 6990000, usd: 98, stock: 6,
    name: { fa: "کیبورد گیسکین Atlas TKL", en: "Atlas TKL Gasket Keyboard" },
    desc: { fa: "بدنهٔ آلومینیومی، صدای ژله‌ای، لایه‌بندی gasket-mount — برای تایپ و گیم.",
            en: "Aluminium body, thocky sound, gasket-mount layers — for typing and gaming." },
    specs: { fa: ["چیدمان TKL", "بدنه آلومینیوم", "QMK/VIA", "سوییچ طلایی"],
             en: ["TKL layout", "Aluminium case", "QMK/VIA", "Gold switches"] } },

  { id: "k3", img: "images/k3.webp", cat: "keyboard", glyph: "⌨️", price: 890000, usd: 12, stock: 30,
    name: { fa: "کیبورد ممورینی Plasma", en: "Plasma Membrane Keyboard" },
    desc: { fa: "غشایی مقاوم با نور نئونی زیر کلیدها، ضدآب — شروع ارزان گیمینگ.",
            en: "Durable membrane with underglow neon, spill-resistant — budget gaming start." },
    specs: { fa: ["ضدآب", "نور زیرکلید", "نرم‌افزار اختصاصی"],
             en: ["Spill-resistant", "Underglow", "Companion software"] } },

  { id: "h1", img: "images/h1.webp", cat: "headset", glyph: "🎧", price: 2890000, usd: 41, stock: 4, oldPrice: 3290000, hot: true,
    name: { fa: "هدست بی‌سیم Echo 7.1", en: "Echo 7.1 Wireless Headset" },
    desc: { fa: "صدای فراگیر 7.1، میکروفون نویزگیر، باتری 40 ساعت.",
            en: "7.1 surround, noise-cancelling mic, 40h battery." },
    specs: { fa: ["7.1 فراگیر", "باتری 40 ساعت", "میکروفون ENC", "درایور 50mm"],
             en: ["7.1 surround", "40h battery", "ENC microphone", "50mm drivers"] } },

  { id: "h2", img: "images/h2.webp", cat: "headset", glyph: "🎧", price: 5490000, usd: 77, stock: 5,
    name: { fa: "هدست استودیویی Neon Wave", en: "Neon Wave Studio Headset" },
    desc: { fa: "درایورهای 53mm تیتانیومی، صدای استودیویی + حالت گیم، کابل و بی‌سیم.",
            en: "53mm titanium drivers, studio sound + game mode, wired and wireless." },
    specs: { fa: ["درایور 53mm", "Hi-Res Audio", "حالت گیم کم‌تأخیر", "دو حالته"],
             en: ["53mm drivers", "Hi-Res Audio", "Low-latency game mode", "Dual mode"] } },

  { id: "h3", img: "images/h3.webp", cat: "headset", glyph: "🎧", price: 790000, usd: 11, stock: 0,
    name: { fa: "هدست سیمی Byte Buds", en: "Byte Buds Wired Headset" },
    desc: { fa: "ساده، سبک، ارزان — برای شروع و چت تیمی.",
            en: "Simple, light, cheap — for starting out and team chat." },
    specs: { fa: ["اتصال 3.5mm", "میکروفون خمیده", "وزن 210g"],
             en: ["3.5mm jack", "Boom mic", "210g weight"] } },

  { id: "p1", img: "images/p1.webp", cat: "pad", glyph: "🎮", price: 2190000, usd: 31, stock: 12,
    name: { fa: "دسته Orion Elite", en: "Orion Elite Controller" },
    desc: { fa: "دستهٔ بی‌سیم با موتور لرزشی دوگانه، پد شارژ، سازگار PC/کنسول.",
            en: "Wireless pad with dual rumble, charging cradle, PC/console compatible." },
    specs: { fa: ["بی‌سیم 2.4G", "موتور دوگانه", "4 ضمیمه پشتی", "باتری 20 ساعت"],
             en: ["2.4G wireless", "Dual rumble", "4 rear paddles", "20h battery"] } },

  { id: "p2", img: "images/p2.webp", cat: "pad", glyph: "🎮", price: 1450000, usd: 20, stock: 18,
    name: { fa: "دسته سیمی Byte Pad", en: "Byte Pad Wired Controller" },
    desc: { fa: "سازگار با PC و امولاتورها، ارگونومی ساده، کابل 2 متر.",
            en: "PC and emulator friendly, simple ergonomics, 2m cable." },
    specs: { fa: ["USB سیمی", "لرزش", " plugged-and-play"],
             en: ["Wired USB", "Rumble", "Plug-and-play"] } },

  { id: "c1", img: "images/c1.webp", cat: "chair", glyph: "🪑", price: 7990000, usd: 112, stock: 2, oldPrice: 8990000, hot: true,
    name: { fa: "صندلی Throne S", en: "Throne S Gaming Chair" },
    desc: { fa: "تکیه‌گاه بلند با بالشت کمری، روکش چرم مصنوعی، تحمل 150kg.",
            en: "High back with lumbar pillow, PU leather, 150kg capacity." },
    specs: { fa: ["پشتیبانی کمر", "تنظیم ارتفاع", "تکیه‌گاه 180°", "تحمل 150kg"],
             en: ["Lumbar support", "Height adjustable", "180° backrest", "150kg capacity"] } },

  { id: "c2", img: "images/c2.webp", cat: "chair", glyph: "🪑", price: 12900000, usd: 181, stock: 4,
    name: { fa: "صندلی شبکه‌ای Atlas Air", en: "Atlas Air Mesh Chair" },
    desc: { fa: "پشت شبکه‌ای تنفس‌پذیر، دسته 4D، مناسب نشستن‌های طولانی.",
            en: "Breathable mesh back, 4D armrests, made for long sessions." },
    specs: { fa: ["پشت شبکه‌ای", "دسته 4D", "سرپرست استاندارد", "کمر فنری"],
             en: ["Mesh back", "4D armrests", "Headrest", "Adaptive lumbar"] } },

  { id: "cs1", img: "images/cs1.webp", cat: "console", glyph: "🕹️", price: 34500000, usd: 485, stock: 1, hot: true,
    name: { fa: "پلی‌استیشن 5 Pro — نسخه دیسک", en: "PlayStation 5 Pro — Disc Edition" },
    desc: { fa: "پردازندهٔ سریع‌تر، ری‌تریسینگ پیشرفته، 2TB SSD.",
            en: "Faster GPU, advanced ray tracing, 2TB SSD." },
    specs: { fa: ["2TB SSD", "4K/120Hz", "کنترلر DualSense"],
             en: ["2TB SSD", "4K/120Hz", "DualSense controller"] } },

  { id: "cs2", img: "images/cs2.webp", cat: "console", glyph: "🕹️", price: 26900000, usd: 378, stock: 6,
    name: { fa: "ایکس‌باکس سری X — 1TB", en: "Xbox Series X — 1TB" },
    desc: { fa: "قدرت 12 ترافلاپس، رابط Game Pass، بی‌صدا و خنک.",
            en: "12 teraflops, Game Pass ready, quiet and cool." },
    specs: { fa: ["1TB SSD", "12 TFLOPS", "Game Pass"],
             en: ["1TB SSD", "12 TFLOPS", "Game Pass"] } },

  { id: "g1", img: "images/g1.webp", cat: "game", glyph: "🎯", price: 3200000, usd: 45, stock: 15, oldPrice: 3800000, hot: true,
    name: { fa: "Cyber Rift 2 — نسخهٔ کامل", en: "Cyber Rift 2 — Complete Edition" },
    desc: { fa: "جهان‌باز سایبرپانک با نبرد رباتیک؛ شامل همهٔ بسته‌های الحاقی.",
            en: "Cyberpunk open world with mech combat; all DLC included." },
    specs: { fa: ["تک‌نفره/آنلاین", "زیرنویس فارسی", "4K HDR"],
             en: ["Single/Online", "4K HDR", "Cloud saves"] } },

  { id: "g2", img: "images/g2.webp", cat: "game", glyph: "🎯", price: 2100000, usd: 29, stock: 40,
    name: { fa: "Shadow Protocol — استاندارد", en: "Shadow Protocol — Standard" },
    desc: { fa: "تیراندازی تاکتیکال 5v5 با اپراتورهای منحصربه‌فرد.",
            en: "5v5 tactical shooter with unique operators." },
    specs: { fa: ["آنلاین 5v5", "رتبه‌بندی رقابتی", "رایگان‌بازی تا سطح 20"],
             en: ["5v5 online", "Ranked", "Free-to-play to level 20"] } },

  { id: "g3", img: "images/g3.webp", cat: "game", glyph: "🎯", price: 1500000, usd: 21, stock: 25,
    name: { fa: "Pixel Dungeon Deluxe", en: "Pixel Dungeon Deluxe" },
    desc: { fa: "روگ‌لایت پیکسلی اعتیادآور با هزاران اتاق تصادفی.",
            en: "Addictive pixel roguelite with thousands of random rooms." },
    specs: { fa: ["تک‌نفره", "کنترلر پشتیبانی", "Steam Deck Verified"],
             en: ["Single-player", "Controller support", "Steam Deck Verified"] } },
];

/* image credits (Wikimedia Commons) */
const CREDITS = [
 {
  "id": "m1",
  "title": "G502 Hero.jpg",
  "license": "CC0",
  "src": "https://commons.wikimedia.org/wiki/File:G502_Hero.jpg"
 },
 {
  "id": "m2",
  "title": "Razer Naga 2014 MMO Gaming Mouse (14714867599).jpg",
  "license": "CC BY 2.0",
  "src": "https://commons.wikimedia.org/wiki/File:Razer_Naga_2014_MMO_Gaming_Mouse_(14714867599).jpg"
 },
 {
  "id": "m3",
  "title": "Sega-Dreamcast-Mouse-BR.jpg",
  "license": "Public domain",
  "src": "https://commons.wikimedia.org/wiki/File:Sega-Dreamcast-Mouse-BR.jpg"
 },
 {
  "id": "k1",
  "title": "Logitech-g910 (16475940137).jpg",
  "license": "CC BY 2.0",
  "src": "https://commons.wikimedia.org/wiki/File:Logitech-g910_(16475940137).jpg"
 },
 {
  "id": "k2",
  "title": "Razer BlackWidow Ultimate 2014 Elite Mechanical Gaming Keyboard.jpg",
  "license": "CC BY 2.0",
  "src": "https://commons.wikimedia.org/wiki/File:Razer_BlackWidow_Ultimate_2014_Elite_Mechanical_Gaming_Keyboard.jpg"
 },
 {
  "id": "k3",
  "title": "2018 Bay Area Mechanical Keyboard Meetup (31008002537).jpg",
  "license": "CC BY 2.0",
  "src": "https://commons.wikimedia.org/wiki/File:2018_Bay_Area_Mechanical_Keyboard_Meetup_(31008002537).jpg"
 },
 {
  "id": "h1",
  "title": "Xbox One Chat Headset.jpg",
  "license": "CC0",
  "src": "https://commons.wikimedia.org/wiki/File:Xbox_One_Chat_Headset.jpg"
 },
 {
  "id": "h2",
  "title": "Xbox-360-Headset-Mk2-Black.jpg",
  "license": "Public domain",
  "src": "https://commons.wikimedia.org/wiki/File:Xbox-360-Headset-Mk2-Black.jpg"
 },
 {
  "id": "h3",
  "title": "AirPods (cropped).jpg",
  "license": "CC BY 2.0",
  "src": "https://commons.wikimedia.org/wiki/File:AirPods_(cropped).jpg"
 },
 {
  "id": "p1",
  "title": "Playstation DualSense Controller.png",
  "license": "CC BY-SA 4.0",
  "src": "https://commons.wikimedia.org/wiki/File:Playstation_DualSense_Controller.png"
 },
 {
  "id": "p2",
  "title": "Xbox One Controller.jpg",
  "license": "CC BY-SA 3.0",
  "src": "https://commons.wikimedia.org/wiki/File:Xbox_One_Controller.jpg"
 },
 {
  "id": "c1",
  "title": "PlayStation 5 and DualSense.jpg",
  "license": "CC BY-SA 4.0",
  "src": "https://commons.wikimedia.org/wiki/File:PlayStation_5_and_DualSense.jpg"
 },
 {
  "id": "c2",
  "title": "Xbox Series S with controller.jpg",
  "license": "CC BY-SA 4.0",
  "src": "https://commons.wikimedia.org/wiki/File:Xbox_Series_S_with_controller.jpg"
 },
 {
  "id": "cs1",
  "title": "PS5DigitalEdition.png",
  "license": "CC BY-SA 4.0",
  "src": "https://commons.wikimedia.org/wiki/File:PS5DigitalEdition.png"
 },
 {
  "id": "cs2",
  "title": "Nintendo-Switch-Console-Docked-wJoyConRB.jpg",
  "license": "Public domain",
  "src": "https://commons.wikimedia.org/wiki/File:Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
 },
 {
  "id": "g1",
  "title": "N64-Game-Cartridge.jpg",
  "license": "Public domain",
  "src": "https://commons.wikimedia.org/wiki/File:N64-Game-Cartridge.jpg"
 },
 {
  "id": "g2",
  "title": "Retro Game display case.jpg",
  "license": "CC BY-SA 4.0",
  "src": "https://commons.wikimedia.org/wiki/File:Retro_Game_display_case.jpg"
 },
 {
  "id": "g3",
  "title": "PS4 and Wii U collection.jpg",
  "license": "CC BY-SA 2.0",
  "src": "https://commons.wikimedia.org/wiki/File:PS4_and_Wii_U_collection.jpg"
 }
];
