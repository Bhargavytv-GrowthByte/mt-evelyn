"use client";

import { useEffect } from "react";
import "./home.css";

const HOME_HTML = `
<nav id="navbar" class="">
  <a class="nav-logo" href="#home" aria-label="Mt Evelyn Pizza & Pasta · Lounge Bar"><img src="/images/logo.png?v=1" alt="Mt Evelyn Pizza & Pasta · Lounge Bar"></a>
  <ul class="nav-links">
    <li><a href="/menu?deal=lunch">Lunch Deal</a></li>
    <li><a href="/menu">Menu</a></li>
    <li><a href="#hours">Hours</a></li>
    <li><a href="#bar">Bar</a></li>
    <li><a href="#catering">Catering</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="tel:0397363855" class="nav-cta">Call (03) 9736 3855</a>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <div class="offers-grid">

    <!-- LEFT: big rotating feature banner -->
    <div class="feature">
      <div class="hero-carousel" id="heroCarousel">
        <!-- Feature 1: Lunch Deal poster -->
        <a class="hero-slide feat-slide feat-img active" href="/menu?tab=deals">
          <img src="/images/banner-1.jpg?v=3" alt="Mt Evelyn Pizza & Pasta — $9.99 Lunch Deal, Pizza + Coke, 12PM–4PM">
        </a>

        <!-- Feature 2: Bar poster -->
        <a class="hero-slide feat-slide feat-img" href="#bar">
          <img src="/images/banner-2.jpg?v=4" alt="Bar is now open during trading hours — Mt Evelyn Pizza & Pasta" loading="lazy">
        </a>

        <!-- Feature 3: Open for lunch poster -->
        <a class="hero-slide feat-slide feat-img" href="#hours">
          <img src="/images/banner-3.jpg?v=3" alt="Mt Evelyn Pizza & Pasta — Open for lunch, new trading hours" loading="lazy">
        </a>

        <!-- Feature 4: Family Deal poster -->
        <a class="hero-slide feat-slide feat-img" href="/menu?tab=deals">
          <img src="/images/banner-4.jpg?v=2" alt="Mt Evelyn Pizza & Pasta — Dinner Family Deal, 2 family pizzas, 2 garlic bread & 1.25L drink, only $45.99" loading="lazy">
        </a>

        <!-- Feature 5: Dinner Deal poster -->
        <a class="hero-slide feat-slide feat-img" href="/menu?tab=deals">
          <img src="/images/banner-5.jpg?v=2" alt="Mt Evelyn Pizza & Pasta — Dinner Deal 1, 2 large pizzas, garlic bread & 1.25L drink, $34.99" loading="lazy">
        </a>

        <button class="car-arrow prev" id="heroPrev" aria-label="Previous banner">‹</button>
        <button class="car-arrow next" id="heroNext" aria-label="Next banner">›</button>
      </div>

      <div class="hero-dots" id="heroDots">
        <button class="dot-nav active" aria-label="Banner 1"></button>
        <button class="dot-nav" aria-label="Banner 2"></button>
        <button class="dot-nav" aria-label="Banner 3"></button>
        <button class="dot-nav" aria-label="Banner 4"></button>
        <button class="dot-nav" aria-label="Banner 5"></button>
      </div>
    </div>

    <!-- RIGHT: stacked promo tiles -->
    <div class="promo-col">
      <a class="promo-tile lunch-tile" id="lunchTile" href="/menu?deal=lunch">
        <span class="ghost">$9.99</span>
        <div class="promo-kicker">Pizza + Can of Drink</div>
        <div class="promo-title">Lunch Deal</div>
        <div class="promo-price">$9.99</div>
        <span class="promo-link" id="lunchTileLink">Order Lunch Deal →</span>
      </a>
      <a class="promo-tile t-green" href="/menu?tab=pasta">
        <span class="ghost">PASTA</span>
        <div class="promo-kicker">Hearty &amp; Fresh</div>
        <div class="promo-title">Pasta Classics</div>
        <div class="promo-price">From $16.90</div>
        <span class="promo-link">See Pasta →</span>
      </a>
    </div>

  </div>

  <div class="scroll-indicator"><span>Scroll</span><div class="scroll-line"></div></div>
</section>

<!-- MENU CTA -->
<section id="menu">
  <div class="menu-header reveal visible" style="text-align:center;">
    <div class="section-tag"><span class="brush green">Our Menu</span></div>
    <h2 class="section-title">Crafted <em>Fresh</em><br>Every Day</h2>
    <div class="section-divider" style="margin-left:auto;margin-right:auto;"></div>
  </div>

  <div class="menu-preview reveal visible">
    <a class="mp-card" href="/menu?tab=traditional">
      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Pizza" loading="lazy">
      <div class="mp-body">
        <div class="mp-title">Pizza</div>
        <div class="mp-note">From $11.99 · Classic &amp; Gourmet</div>
        <span class="mp-link">View Menu →</span>
      </div>
    </a>
    <a class="mp-card" href="/menu?tab=pasta">
      <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=70&auto=format&fit=crop" alt="Pasta" loading="lazy">
      <div class="mp-body">
        <div class="mp-title">Pasta</div>
        <div class="mp-note">From $13 · Made to order</div>
        <span class="mp-link">View Menu →</span>
      </div>
    </a>
    <a class="mp-card" href="/menu?tab=sides">
      <img src="https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=500&q=70&auto=format&fit=crop" alt="Sides" loading="lazy">
      <div class="mp-body">
        <div class="mp-title">Sides</div>
        <div class="mp-note">From $4 · Wedges, nuggets &amp; more</div>
        <span class="mp-link">View Menu →</span>
      </div>
    </a>
    <a class="mp-card" href="/menu?tab=drinks">
      <img src="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=70&auto=format&fit=crop" alt="Drinks" loading="lazy">
      <div class="mp-body">
        <div class="mp-title">Drinks</div>
        <div class="mp-note">From $3.50 · Cans, bottles &amp; water</div>
        <span class="mp-link">View Menu →</span>
      </div>
    </a>
  </div>

  <div style="text-align:center;margin-top:44px;">
    <a href="/menu" class="btn-primary">View Full Menu</a>
  </div>
</section>

<!-- HOURS -->
<section id="hours">
  <div class="section-tag reveal visible"><span class="brush gold">New Trading Hours</span></div>
  <h2 class="section-title reveal visible">When We're <em>Open</em></h2>
  <div class="section-divider reveal visible"></div>

  <div class="hours-grid reveal visible">
    <div class="day closed">
      <div class="day-name">Monday</div>
      <div class="cal-icon"><svg viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 9h18M8 2v4M16 2v4"></path></svg></div>
      <div class="closed-sign">Closed</div>
    </div>
    <div class="day eve">
      <div class="day-name">Tuesday</div>
      <div class="cal-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 9h18M8 2v4M16 2v4"></path></svg></div>
      <div class="day-hours">4PM – 9PM</div>
    </div>
    <div class="day eve">
      <div class="day-name">Wednesday</div>
      <div class="cal-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 9h18M8 2v4M16 2v4"></path></svg></div>
      <div class="day-hours">4PM – 9PM</div>
    </div>
    <div class="day lunch">
      <div class="day-name">Thursday</div>
      <div class="cal-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 9h18M8 2v4M16 2v4"></path></svg></div>
      <div class="day-hours">12PM – 9PM</div>
    </div>
    <div class="day lunch">
      <div class="day-name">Friday</div>
      <div class="cal-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 9h18M8 2v4M16 2v4"></path></svg></div>
      <div class="day-hours">12PM – 9PM</div>
    </div>
    <div class="day lunch">
      <div class="day-name">Saturday</div>
      <div class="cal-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 9h18M8 2v4M16 2v4"></path></svg></div>
      <div class="day-hours">12PM – 9PM</div>
    </div>
    <div class="day eve">
      <div class="day-name">Sunday</div>
      <div class="cal-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 9h18M8 2v4M16 2v4"></path></svg></div>
      <div class="day-hours">4PM – 9PM</div>
    </div>
  </div>

  <div class="hours-legend reveal visible">
    <div>Open for Lunch – 12PM</div>
    <div>Dinner Service – from 4PM</div>
  </div>
</section>

<!-- BAR -->
<section id="bar">
  <div class="bar-card reveal visible">
    <div class="bar-word burst">Bar</div>
    <div>Will Be <span class="open">Open</span></div>
    <div class="bar-days"><b>Thursday</b>, <b>Friday</b> &amp; <b>Saturday</b></div>
    <div class="bar-time">12PM – 9PM</div>
    <div class="bar-foot">Good Drinks. <span>Good Times.</span></div>
    <div class="bar-types">
      <span>Beer &amp; Cider</span>
      <span>Wine</span>
      <span>Spirits</span>
      <span>Cocktails</span>
    </div>
  </div>
</section>

<!-- CATERING -->
<section id="catering">
  <div class="bar-card reveal">
    <div class="section-tag" style="margin-bottom:20px;"><span class="brush gold">Now Available</span></div>
    <h2 class="section-title">We Do <em>Catering</em></h2>
    <p style="font-family:var(--f-body);color:var(--cream-dim);font-size:16px;line-height:1.7;max-width:560px;margin:18px auto 0;">From office lunches to parties and functions — let us cater your next event with fresh pizza, pasta and platters. Call us to plan a menu that suits.</p>
    <a href="tel:0397363855" class="btn-primary" style="margin-top:28px;display:inline-block;">Call to Enquire — (03) 9736 3855</a>
  </div>
</section>

<!-- FOOTER -->
<footer id="contact">
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="brand-name">Mt Evelyn <b>Pizza</b> &amp; <i>Pasta</i></div>
      <p>Under new management and now open for lunch. Your local for fresh wood-style pizza, hearty pasta and a relaxed lounge bar. Dine in, takeaway or home delivery — great food, great times.</p>
    </div>
    <div class="footer-col">
      <h5>Visit Us</h5>
      <ul>
        <li>11A York Road</li>
        <li>Mt Evelyn VIC 3796</li>
        <li style="margin-top:14px;">Open Tue – Sun</li>
        <li>Lunch from 12PM Thu – Sat</li>
        <li>Delivery service available</li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Contact</h5>
      <a href="tel:0397363855"><div class="footer-phone">(03) 9736 3855</div></a>
      <ul>
        <li><a href="http://www.mtevelynpizzas.com.au/">mtevelynpizzas.com.au</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Mt Evelyn Pizza &amp; Pasta. All rights reserved.</p>
    <div class="footer-legal">
      <span>18+ at the Bar</span><span>·</span>
      <span>RSA Policy Applies</span><span>·</span>
      <span>Lunch Deal 12PM – 4PM</span>
    </div>
  </div>
</footer>
`;

export default function HomeClient() {
  useEffect(() => {
    const cleanups = [];

    // nav scroll effect
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // hero carousel
    const carousel = document.getElementById("heroCarousel");
    if (carousel) {
      const slides = Array.from(carousel.querySelectorAll(".hero-slide"));
      const dots = Array.from(document.querySelectorAll("#heroDots .dot-nav"));
      let current = 0;
      let timer;

      const go = (i) => {
        current = (i + slides.length) % slides.length;
        slides.forEach((s, n) => s.classList.toggle("active", n === current));
        dots.forEach((d, n) => d.classList.toggle("active", n === current));
      };
      const next = () => go(current + 1);
      const prev = () => go(current - 1);
      const stop = () => { if (timer) clearInterval(timer); };
      const start = () => { stop(); timer = setInterval(next, 3000); };

      const nextBtn = document.getElementById("heroNext");
      const prevBtn = document.getElementById("heroPrev");
      const onNext = () => { next(); start(); };
      const onPrev = () => { prev(); start(); };
      if (nextBtn) nextBtn.addEventListener("click", onNext);
      if (prevBtn) prevBtn.addEventListener("click", onPrev);

      const dotHandlers = dots.map((d, n) => {
        const h = () => { go(n); start(); };
        d.addEventListener("click", h);
        return [d, h];
      });

      carousel.addEventListener("mouseenter", stop);
      carousel.addEventListener("mouseleave", start);

      start();

      cleanups.push(() => {
        stop();
        if (nextBtn) nextBtn.removeEventListener("click", onNext);
        if (prevBtn) prevBtn.removeEventListener("click", onPrev);
        dotHandlers.forEach(([d, h]) => d.removeEventListener("click", h));
        carousel.removeEventListener("mouseenter", stop);
        carousel.removeEventListener("mouseleave", start);
      });
    }

    // Lunch Deal tile: only clickable 12PM–4PM, Thursday–Saturday (Melbourne time)
    const lunchTile = document.getElementById("lunchTile");
    if (lunchTile) {
      const link = document.getElementById("lunchTileLink");
      const now = new Date();
      const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Australia/Melbourne", weekday: "short" }).format(now);
      const hr = parseInt(
        new Intl.DateTimeFormat("en-US", { timeZone: "Australia/Melbourne", hour: "2-digit", hour12: false }).format(now),
        10
      );
      const openNow = ["Thu", "Fri", "Sat"].includes(wd) && hr >= 12 && hr < 16;
      if (!openNow) {
        lunchTile.classList.add("closed");
        lunchTile.setAttribute("aria-disabled", "true");
        if (link) link.textContent = "Closed now · 12PM–4PM Thu–Sat";
        const block = (e) => e.preventDefault();
        lunchTile.addEventListener("click", block);
        cleanups.push(() => lunchTile.removeEventListener("click", block));
      }
    }

    // scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 70);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    cleanups.push(() => observer.disconnect());

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: HOME_HTML }} />;
}
