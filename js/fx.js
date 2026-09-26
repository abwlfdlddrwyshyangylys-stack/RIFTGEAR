/* RIFTGEAR fx.js — 2049 layer: bubbles canvas, grid horizon, data rain,
   cursor spotlight, HUD clock, boot sequence, scroll reveal.
   Pure vanilla, no dependencies. Respects prefers-reduced-motion. */
(() => {
  "use strict";
  const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (id) => document.getElementById(id);

  /* ---------------- canvas: bubbles + data rain + horizon ---------------- */
  const cv = $("fx");
  if (cv) {
    const ctx = cv.getContext("2d");
    let W = 0, H = 0, dpr = 1, raf = 0, t = 0;
    const COL = ["#2de2ff", "#8b5cf6", "#ff2e9a", "#6fe9c3"];
    const GLYPHS = "アイウエオカキクケコ0123456789ABCDEFXYZ<>/#$%&{}[]";
    const MOB = innerWidth < 720;
    const N_BUB = MOB ? 10 : 26;
    const N_RAIN = MOB ? 0 : 8;
    const bubbles = [], rains = [];
    let mx = -999, my = -999;

    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth; H = innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = W + "px"; cv.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function mkBubble(s) {
      const r = 2 + Math.random() * (s ? 6 : 13);
      return {
        x: Math.random() * W, y: H + 20 + Math.random() * H * .5,
        r, sp: (.18 + Math.random() * .55) * (r / 8),
        ph: Math.random() * Math.PI * 2, amp: 6 + Math.random() * 16,
        c: COL[(Math.random() * COL.length) | 0],
        a: .05 + Math.random() * .13
      };
    }
    function mkRain() {
      const cols = 3 + ((Math.random() * 5) | 0);
      return {
        x: Math.random() * W, y: Math.random() * -H,
        sp: .7 + Math.random() * 1.6, cols,
        cells: Array.from({ length: 16 }, () => GLYPHS[(Math.random() * GLYPHS.length) | 0]),
        c: Math.random() < .75 ? "#2de2ff" : "#ff2e9a",
        seed: Math.random() * 999
      };
    }
    function init() {
      size();
      bubbles.length = 0; rains.length = 0;
      for (let i = 0; i < N_BUB; i++) { const b = mkBubble(false); b.y = Math.random() * H; bubbles.push(b); }
      for (let i = 0; i < N_RAIN; i++) rains.push(mkRain());
    }

    function horizon() {
      // moving perspective floor grid (bottom 26% of viewport)
      const hz = H * .74, off = (t * .35) % 40;
      ctx.save();
      ctx.strokeStyle = "rgba(45,226,255,.10)"; ctx.lineWidth = 1;
      for (let i = 0; i < 7; i++) {
        const p = (i * 40 + off) / 360;            // 0..1 toward horizon
        const y = hz + p * p * (H - hz);
        ctx.globalAlpha = .25 + p * .75;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      ctx.globalAlpha = .5;
      const cx = W / 2;
      for (let i = -11; i <= 11; i++) {
        ctx.beginPath();
        ctx.moveTo(cx + i * 26, H);
        ctx.lineTo(cx + i * 3.2, hz);
        ctx.stroke();
      }
      ctx.restore();
    }

    let last = 0;
    function frame(ts) {
      raf = requestAnimationFrame(frame);
      if (ts - last < 33) return;          // cap at ~30fps — half the GPU/CPU cost
      last = ts; t++;
      ctx.clearRect(0, 0, W, H);
      horizon();

      // bubbles (حبابی)
      for (const b of bubbles) {
        b.y -= b.sp; b.ph += .012;
        if (b.y < -30) Object.assign(b, mkBubble(true), { y: H + 30 });
        const x = b.x + Math.sin(b.ph) * b.amp;
        ctx.beginPath();
        ctx.arc(x, b.y, b.r, 0, 7);
        ctx.strokeStyle = b.c; ctx.globalAlpha = b.a + .12; ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.globalAlpha = b.a * .5;
        ctx.fillStyle = b.c; ctx.fill();
        // specular highlight
        ctx.globalAlpha = b.a * 1.6;
        ctx.beginPath();
        ctx.arc(x - b.r * .35, b.y - b.r * .35, Math.max(1, b.r * .18), 0, 7);
        ctx.fillStyle = "#ffffff"; ctx.fill();
        // link to cursor spotlight
        const dx = x - mx, dy = b.y - my, d2 = dx * dx + dy * dy;
        if (d2 < 200 * 200) {
          ctx.globalAlpha = .18 * (1 - d2 / 40000);
          ctx.strokeStyle = "#2de2ff";
          ctx.beginPath(); ctx.moveTo(x, b.y); ctx.lineTo(mx, my); ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      // data rain (sparse matrix stream)
      ctx.font = "11px 'Chakra Petch', monospace";
      for (const r of rains) {
        r.y += r.sp;
        if (r.y > H + 300) Object.assign(r, mkRain(), { y: -200 });
        for (let c = 0; c < r.cols; c++) {
          for (let i = 0; i < r.cells.length; i++) {
            const yy = r.y + i * 13;
            if (yy < 0 || yy > H) continue;
            const head = i === ((t / 6 + r.seed) | 0) % r.cells.length;
            ctx.globalAlpha = head ? .55 : .10 + (i / r.cells.length) * .12;
            ctx.fillStyle = head ? "#ffffff" : r.c;
            if (((t + i * 7 + r.seed) | 0) % 24 === 0)
              r.cells[i] = GLYPHS[(Math.random() * GLYPHS.length) | 0];
            ctx.fillText(r.cells[i], r.x + c * 14, yy);
          }
        }
      }
      ctx.globalAlpha = 1;
    }
    function staticFrame() { t = 1; ctx.clearRect(0, 0, W, H); horizon(); }

    addEventListener("resize", () => { init(); if (RM) staticFrame(); });
    addEventListener("pointermove", (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
      else if (!RM && !raf) raf = requestAnimationFrame(frame);
    });
    init();
    if (RM) staticFrame(); else raf = requestAnimationFrame(frame);
  }

  /* ---------------- cursor spotlight ---------------- */
  const spot = $("fxSpot");
  if (spot && !RM && matchMedia("(pointer: fine)").matches) {
    let pending = null;
    addEventListener("pointermove", (e) => {
      pending = e;
      if (spot._q) return;
      spot._q = requestAnimationFrame(() => {
        spot._q = 0;
        spot.style.setProperty("--sx", pending.clientX + "px");
        spot.style.setProperty("--sy", pending.clientY + "px");
        document.body.classList.add("has-cursor");
      });
    }, { passive: true });
  }

  /* ---------------- HUD clock (Tehran) ---------------- */
  const clock = $("hudClock");
  if (clock) {
    let fmt;
    try {
      fmt = new Intl.DateTimeFormat("fa-IR", {
        timeZone: "Asia/Tehran", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
      });
    } catch (e) { fmt = null; }
    const tick = () => {
      const d = new Date();
      clock.textContent = fmt
        ? "THT " + fmt.format(d).replace(/\u200f|\u200e/g, "")
        : "UTC " + d.toISOString().slice(11, 19);
    };
    tick(); setInterval(tick, 1000);
  }
  const net = $("hudNet");
  if (net) {
    const probe = () => {
      const on = navigator.onLine !== false;
      net.textContent = on ? "NET: OK" : "NET: OFFLINE";
      net.classList.toggle("warn", !on);
    };
    probe(); addEventListener("online", probe); addEventListener("offline", probe);
  }

  /* ---------------- hero holo stream rotation ---------------- */
  const holo = $("holoStream");
  if (holo && !RM) {
    const msgs = [
      "> SYS.BOOT 2049 // LINK STABLE // RIFT.CORE ONLINE //",
      "> UPLINK 42ms // NODE IR-THR-07 // SYNC 100% //",
      "> INVENTORY.BUS: 18 UNITS INDEXED // 7 CATEGORIES //",
      "> SHIELD: 7-DAY GUARANTEE // PAY: ON-DELIVERY //",
      "> LATENCY 12ms // CACHE WARM // RENDER PIPELINE OK //"
    ];
    let mi = 0;
    setInterval(() => {
      mi = (mi + 1) % msgs.length;
      holo.style.opacity = "0";
      setTimeout(() => { holo.textContent = msgs[mi]; holo.style.opacity = "1"; }, 350);
    }, 5200);
    holo.style.transition = "opacity .35s";
  }

  /* ---------------- boot sequence (once per session) ---------------- */
  const boot = $("boot");
  if (boot) {
    const skip = RM || sessionStorage.getItem("rg-booted");
    const finish = () => {
      boot.classList.add("done");
      boot.setAttribute("aria-hidden", "true");
      setTimeout(() => boot.remove(), 700);
      try { sessionStorage.setItem("rg-booted", "1"); } catch (e) {}
    };
    if (skip) boot.remove();
    else {
      const lines = [
        "RIFT.CORE kernel 20.49 — INIT",
        "mount /neon ... OK",
        "link rift-channel ... ESTABLISHED",
        "load catalog: 18 units / 7 classes ... OK",
        "secure checkout bridge ... TELEGRAM",
        "ALL SYSTEMS NOMINAL"
      ];
      const box = $("bootLines"), bar = $("bootBar");
      let i = 0;
      boot.addEventListener("click", finish, { once: true });
      const step = () => {
        if (i < lines.length && box) {
          const d = document.createElement("div");
          d.textContent = lines[i];
          box.appendChild(d);
          if (bar) bar.style.width = Math.round(((i + 1) / lines.length) * 100) + "%";
          i++;
          setTimeout(step, 170 + Math.random() * 140);
        } else setTimeout(finish, 380);
      };
      step();
      setTimeout(finish, 4200); // hard cap
    }
  }

  /* ---------------- scroll reveal ---------------- */
  const targets = [
    ".flash-bar", ".deal", ".toolbar", "#chips",
    ".trust-card", ".about-box", ".notify", ".recent"
  ];
  const nodes = [];
  document.querySelectorAll("section > h2, .trust > *, .about-grid > *").forEach((n, i) => {
    n.classList.add("rv", "rv-d" + ((i % 4) + 1)); nodes.push(n);
  });
  document.querySelectorAll(targets.join(",")).forEach((n) => {
    if (!n.classList.contains("rv")) { n.classList.add("rv"); nodes.push(n); }
  });
  if ("IntersectionObserver" in window && !RM) {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach((n) => io.observe(n));
    // failsafe: if observer fired for nobody in viewport, reveal all (never stuck hidden)
    setTimeout(() => {
      const any = nodes.some((n) => n.classList.contains("in"));
      if (!any) nodes.forEach((n) => n.classList.add("in"));
    }, 5000);
  } else nodes.forEach((n) => n.classList.add("in"));
})();
