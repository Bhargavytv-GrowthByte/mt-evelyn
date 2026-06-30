"use client";

import { useEffect } from "react";
import "./menu.css";

const MENU_HTML = `
<nav>
  <a class="nav-logo" href="/" aria-label="Mt Evelyn Pizza & Pasta · Lounge Bar"><img src="/images/logo.png?v=1" alt="Mt Evelyn Pizza & Pasta · Lounge Bar"></a>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/menu" class="active">Menu</a></li>
    <li><a href="/#hours">Hours</a></li>
    <li><a href="/#bar">Bar</a></li>
    <li><a href="/#catering">Catering</a></li>
    <li><a href="/#contact">Contact</a></li>
  </ul>
  <a href="tel:0397363855" class="nav-cta">Call (03) 9736 3855</a>
</nav>

<div id="page-menu">
  <div class="page-hero">
    <div class="page-eyebrow">Fresh &amp; Made to Order</div>
    <h1 class="page-title">Our <em>Menu</em></h1>
  </div>

  <!-- LUNCH DEAL BANNER -->
  <div class="lunch-banner">
    <div class="lunch-banner-text">
      <h3>The Lunch Deal</h3>
      <p>Any one of Margherita, Hawaiian, Aussie, Garlic or Vegetarian, plus a can of drink. Available 12PM–4PM, Thursday to Saturday.</p>
    </div>
    <div class="lunch-banner-price">$9.99<span>Pizza + Can of Drink</span></div>
  </div>

  <div class="note-box" style="max-width:1120px;margin:18px auto 0;">We also do <strong style="color:var(--gold);">catering</strong> — parties, functions &amp; events. Call <a href="tel:0397363855" style="color:var(--gold);">(03) 9736 3855</a> to plan your menu.</div>

  <!-- TABS -->
  <div class="menu-tabs">
    <button class="tab-btn active" data-tab="traditional" onclick="showTab('traditional', this)">Traditional Pizza</button>
    <button class="tab-btn" data-tab="gourmet" onclick="showTab('gourmet', this)">Gourmet Pizza</button>
    <button class="tab-btn" data-tab="lunch" onclick="showTab('lunch', this)">Lunch Deal</button>
    <button class="tab-btn" data-tab="pasta" onclick="showTab('pasta', this)">Pastas</button>
    <button class="tab-btn" data-tab="mains" onclick="showTab('mains', this)">Mains</button>
    <button class="tab-btn" data-tab="deals" onclick="showTab('deals', this)">Great Value Deals</button>
    <button class="tab-btn" data-tab="sides" onclick="showTab('sides', this)">Sides</button>
    <button class="tab-btn" data-tab="drinks" onclick="showTab('drinks', this)">Cool Drinks</button>
  </div>

  <!-- TRADITIONAL PIZZA -->
  <div id="tab-traditional" class="menu-section active">
    <div class="sec-head">
      <h2>Traditional <em>Pizza</em></h2>
      <div class="price-pills"><span>Small 11&Prime; $11.99</span><span>Large 13&Prime; $16.49</span><span>Family 15&Prime; $20.99</span><span>+ Extra Toppings $2</span><span>Half n Half / Any Changes +$3</span></div>
    </div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Pepperoni pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Pepperoni</div><div class="menu-card-desc">Tomato, cheese, hot salami, onion, jalapenos and chilli flakes</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Margherita pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Margherita <span class="item-tag">Veg</span></div><div class="menu-card-desc">Tomato, cheese and herbs</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Garlic pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Garlic <span class="item-tag">Veg</span></div><div class="menu-card-desc">Garlic, cheese and herbs</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Vegetarian pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Vegetarian <span class="item-tag">Veg</span></div><div class="menu-card-desc">Tomato, cheese, mushroom, onion, capsicum, olives and garlic</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Aussie pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Aussie</div><div class="menu-card-desc">Tomato, cheese, ham, bacon and egg</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Hawaiian pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Hawaiian</div><div class="menu-card-desc">Tomato, cheese, ham and pineapple</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Capricciosa pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Capricciosa</div><div class="menu-card-desc">Tomato, cheese, ham, mushroom, olives and garlic</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Mexicana pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Mexicana</div><div class="menu-card-desc">Tomato, cheese, hot salami, onion, capsicum and olives</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Marinara pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Marinara</div><div class="menu-card-desc">Tomato, cheese, seafood mix, anchovies and garlic</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="BBQ Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">BBQ Chicken</div><div class="menu-card-desc">BBQ sauce, cheese, chicken, bacon and onion</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Napolitana pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Napolitana</div><div class="menu-card-desc">Tomato, cheese, hot salami, anchovies, olives and garlic</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Meat Lovers pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Meat Lovers</div><div class="menu-card-desc">BBQ sauce, cheese, ham, beef, hot salami and bacon</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Super Special pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Super Special</div><div class="menu-card-desc">Tomato, cheese, ham, mushroom, onion, capsicum, pineapple, prawns, olives and garlic</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Tropical Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Tropical Chicken</div><div class="menu-card-desc">Tomato, cheese, ham, chicken, pineapple and prawns</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Satay Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Satay Chicken</div><div class="menu-card-desc">Satay sauce, cheese, chicken, bacon and onion</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Americana pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Americana</div><div class="menu-card-desc">Tomato, cheese, ham, hot salami and onion</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Sweet Chilli Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Sweet Chilli Chicken</div><div class="menu-card-desc">Sweet chilli sauce, cheese, chicken, capsicum, pineapple and bacon</div><div class="menu-card-price">$11.99 / $16.49 / $20.99</div></div></div>
    </div>
  </div>

  <!-- GOURMET PIZZA -->
  <div id="tab-gourmet" class="menu-section">
    <div class="sec-head"><h2>Gourmet <em>Pizza</em></h2><div class="price-pills"><span>Large Only 13&Prime; $22.99</span><span>+ Extra Toppings $2</span><span>Half n Half / Any Changes +$3</span></div></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="The Todak pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">The Todak</div><div class="menu-card-desc">Tomato, cheese, smoked salmon, feta, cherry tomato, capsicum, sour cream and garlic</div><div class="menu-card-price">$22.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Lamb pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Lamb</div><div class="menu-card-desc">Tomato, cheese, roast lamb, cherry tomato, onion and garlic</div><div class="menu-card-price">$22.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Gourmet Vegetarian pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Gourmet Vegetarian <span class="item-tag">Veg</span></div><div class="menu-card-desc">Tomato, cheese, roast pumpkin, capsicum, mushroom, cherry tomato, fetta, olives, basil and garlic</div><div class="menu-card-price">$22.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="The Burger pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">The Burger</div><div class="menu-card-desc">Tomato, cheese, beef, onion, pickles, cherry tomato, mayo and English mustard</div><div class="menu-card-price">$22.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="The Caesar pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">The Caesar</div><div class="menu-card-desc">Tomato, cheese, chicken, onion, bacon, cherry tomato, Caesar dressing and parmesan cheese</div><div class="menu-card-price">$22.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Tandoori Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Tandoori Chicken</div><div class="menu-card-desc">Tandoori sauce, cheese, chicken, topped with yogurt and spring onion</div><div class="menu-card-price">$22.99</div></div></div>
    </div>
    <div class="note-box" style="max-width:1120px;margin:18px auto 0;"><strong style="color:var(--gold);">Extra Toppings +$2</strong> — Ham, chicken, prawns, bacon, cheese, mushroom, pineapple, olives, capsicum and onion. &nbsp;·&nbsp; <strong style="color:var(--gold);">Half 'n' Half / Any Changes +$3</strong> — choose any two halves or request changes to your pizza.</div>
  </div>

  <!-- LUNCH DEAL -->
  <div id="tab-lunch" class="menu-section">
    <div class="sec-head"><h2>Lunch <em>Deal</em></h2><div class="price-pills"><span>$9.99 — Pizza + Can of Drink</span><span>12PM–4PM, Thu–Sat</span></div></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Margherita pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Margherita <span class="item-tag">Veg</span></div><div class="menu-card-desc">Tomato, cheese and herbs. Plus a can of drink.</div><div class="menu-card-price">$9.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Hawaiian pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Hawaiian</div><div class="menu-card-desc">Tomato, cheese, ham and pineapple. Plus a can of drink.</div><div class="menu-card-price">$9.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Aussie pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Aussie</div><div class="menu-card-desc">Tomato, cheese, ham, bacon and egg. Plus a can of drink.</div><div class="menu-card-price">$9.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Garlic pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Garlic <span class="item-tag">Veg</span></div><div class="menu-card-desc">Garlic, cheese and herbs. Plus a can of drink.</div><div class="menu-card-price">$9.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Vegetarian pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Vegetarian <span class="item-tag">Veg</span></div><div class="menu-card-desc">Tomato, cheese, mushroom, onion, capsicum, olives and garlic. Plus a can of drink.</div><div class="menu-card-price">$9.99</div></div></div>
    </div>
  </div>

  <!-- PASTAS -->
  <div id="tab-pasta" class="menu-section">
    <div class="sec-head"><h2>Pastas</h2><div class="price-pills"><span>Small $13.99</span><span>Large $17.99</span></div></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=70&auto=format&fit=crop" alt="Bolognese pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Bolognese</div><div class="menu-card-desc">Rich beef bolognese sauce with herbs and parmesan</div><div class="menu-card-price">$13.99 / $17.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=70&auto=format&fit=crop" alt="Carbonara pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Carbonara</div><div class="menu-card-desc">Creamy sauce with bacon, onion and parmesan</div><div class="menu-card-price">$13.99 / $17.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=70&auto=format&fit=crop" alt="Creamy Chicken Mushroom pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Creamy Chicken Mushroom</div><div class="menu-card-desc">Creamy sauce with chicken, mushrooms, onion and parmesan</div><div class="menu-card-price">$13.99 / $17.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=70&auto=format&fit=crop" alt="Big Vegetarian pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Big Vegetarian <span class="item-tag">Veg</span></div><div class="menu-card-desc">Mixed seasonal vegetables in Napoli sauce with herbs and parmesan</div><div class="menu-card-price">$13.99 / $17.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=70&auto=format&fit=crop" alt="Marinara pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Marinara</div><div class="menu-card-desc">Napoli sauce with garlic, herbs and parmesan</div><div class="menu-card-price">$13.99 / $17.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=70&auto=format&fit=crop" alt="Alla Panna pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Alla Panna</div><div class="menu-card-desc">Creamy sauce with bacon, mushrooms, onion and parmesan</div><div class="menu-card-price">$13.99 / $17.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=70&auto=format&fit=crop" alt="Lasagna pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Lasagna</div><div class="menu-card-desc">Layers of pasta, homemade beef bolognese sauce, béchamel sauce and cheese</div><div class="menu-card-price">$13.99 / $17.99</div></div></div>
    </div>
  </div>

  <!-- MAINS -->
  <div id="tab-mains" class="menu-section">
    <div class="sec-head"><h2>Mains</h2><div class="price-pills"><span>Served with chips &amp; salad</span></div></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=70&auto=format&fit=crop" alt="Classic Chicken Schnitzel" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Classic Chicken Schnitzel</div><div class="menu-card-desc">Crumbed chicken breast served with chips and salad</div><div class="menu-card-price">$20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&q=70&auto=format&fit=crop" alt="Chicken Parmigiana" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Chicken Parmigiana</div><div class="menu-card-desc">Chicken breast topped with homemade Napoli sauce and mozzarella cheese, served with chips and salad</div><div class="menu-card-price">$24</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=70&auto=format&fit=crop" alt="Mexican Chicken Parmigiana" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Mexican Chicken Parmigiana</div><div class="menu-card-desc">Chicken breast topped with jalapeños, chilli cheese and Napoli sauce, served with chips and salad</div><div class="menu-card-price">$24</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&q=70&auto=format&fit=crop" alt="Hawaiian Chicken Parmigiana" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Hawaiian Chicken Parmigiana</div><div class="menu-card-desc">Chicken breast topped with ham, pineapple, Napoli sauce and cheese, served with chips and salad</div><div class="menu-card-price">$24</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=70&auto=format&fit=crop" alt="Aussie Chicken Parmigiana" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Aussie Chicken Parmigiana</div><div class="menu-card-desc">Chicken breast topped with ham, bacon, egg and cheese, served with chips and salad</div><div class="menu-card-price">$24</div></div></div>
    </div>
  </div>

  <!-- GREAT VALUE DEALS -->
  <div id="tab-deals" class="menu-section">
    <div class="sec-head"><h2>Great Value <em>Deals</em></h2></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Lunch Deal Pizza and can of drink" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Lunch Deal — Pizza + Can of Drink</div><div class="menu-card-desc">Choose Margherita, Hawaiian, Aussie, Garlic or Vegetarian with a can of drink. 12PM–4PM.</div><div class="menu-card-price">$9.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Dinner Deal" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Dinner Deal</div><div class="menu-card-desc">2 Large Traditional Pizzas, 1 Garlic Bread, 1.25 Litre Drink</div><div class="menu-card-price">$34.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Family Deal" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Family Deal</div><div class="menu-card-desc">2 Family Traditional Pizzas, 1 Garlic Bread, 1.25 Litre Drink</div><div class="menu-card-price">$45.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Gluten free pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Gluten Free Pizza <span class="item-tag">GF</span></div><div class="menu-card-desc">Made with quality ingredients for a delicious gluten free option.</div><div class="menu-card-price">$19.90</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=500&q=70&auto=format&fit=crop" alt="Nutella dessert pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Nutella Pizza <span class="item-tag">Veg</span></div><div class="menu-card-desc">Warm pizza base topped with rich Nutella and dusted with icing sugar.</div><div class="menu-card-price">$15.50</div></div></div>
    </div>
  </div>

  <!-- SIDES -->
  <div id="tab-sides" class="menu-section">
    <div class="sec-head"><h2>Sides</h2></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card no-img"><div class="menu-card-body"><div class="menu-card-name">Garlic Bread <span class="item-tag">Veg</span></div><div class="menu-card-price">$4</div></div></div>
      <div class="menu-card no-img"><div class="menu-card-body"><div class="menu-card-name">Chicken Nuggets</div><div class="menu-card-price">6 for $6</div></div></div>
      <div class="menu-card no-img"><div class="menu-card-body"><div class="menu-card-name">Arancini Bolognese</div><div class="menu-card-price">5 for $8.50</div></div></div>
      <div class="menu-card no-img"><div class="menu-card-body"><div class="menu-card-name">Arancini Four Cheese <span class="item-tag">Veg</span></div><div class="menu-card-price">5 for $8.50</div></div></div>
      <div class="menu-card no-img"><div class="menu-card-body"><div class="menu-card-name">Onion Rings <span class="item-tag">Veg</span></div><div class="menu-card-price">10 for $8.50</div></div></div>
      <div class="menu-card no-img"><div class="menu-card-body"><div class="menu-card-name">Wedges</div><div class="menu-card-price">$8.50</div></div></div>
      <div class="menu-card no-img"><div class="menu-card-body"><div class="menu-card-name">Spring Rolls <span class="item-tag">Veg</span></div><div class="menu-card-price">6 for $8.50</div></div></div>
      <div class="menu-card no-img"><div class="menu-card-body"><div class="menu-card-name">Chips</div><div class="menu-card-price">$7</div></div></div>
    </div>
  </div>

  <!-- COOL DRINKS -->
  <div id="tab-drinks" class="menu-section">
    <div class="sec-head"><h2>Cool <em>Drinks</em></h2></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=70&auto=format&fit=crop" alt="Can of drink" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Can of Drink</div><div class="menu-card-desc">Coca-Cola, Coca-Cola No Sugar, Sprite, Fanta or Lift</div><div class="menu-card-price">$3.50</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=70&auto=format&fit=crop" alt="1.25 litre soft drink bottle" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">1.25 Litre Bottle</div><div class="menu-card-desc">Coca-Cola, Sprite or Fanta</div><div class="menu-card-price">$4.99</div></div></div>
    </div>
  </div>

  <div class="fineprint">
    Traditional pizza prices shown as Small 11&Prime; / Large 13&Prime; / Family 15&Prime;. Extra toppings +$2. Half n half or any changes +$3. Gluten free bases available (Large $19.90). Alcohol delivery with food only. Please inform us of any dietary requirements or allergies. Home delivery charge will apply. Prices may change without notice.
  </div>
</div>

<!-- PRICE MODAL -->
<div class="modal-overlay" id="priceModal">
  <div class="modal">
    <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
    <img class="modal-img" id="modalImg" src="" alt="">
    <div class="modal-body">
      <div class="modal-name" id="modalName"></div>
      <div class="modal-desc" id="modalDesc"></div>
      <div class="modal-prices" id="modalPrices"></div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="foot-brand">Mt Evelyn <b>Pizza</b> &amp; <i>Pasta</i></div>
  <p>11A York Road, Mt Evelyn VIC 3796 · <a href="tel:0397363855">(03) 9736 3855</a></p>
  <p>© 2026 Mt Evelyn Pizza &amp; Pasta · <a href="/">Back to Home</a></p>
</footer>
`;

export default function MenuClient() {
  useEffect(() => {
    const VALID_TABS = ["traditional", "gourmet", "lunch", "pasta", "mains", "deals", "sides", "drinks"];

    // activate a tab by key (used for deep-links from the home page)
    function activateTab(key) {
      const section = document.getElementById("tab-" + key);
      if (!section) return false;
      document.querySelectorAll(".menu-section").forEach((s) => s.classList.remove("active"));
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      section.classList.add("active");
      const btn = document.querySelector('.tab-btn[data-tab="' + key + '"]');
      if (btn) btn.classList.add("active");
      return true;
    }

    // global handler for the inline onclick="showTab(...)" attributes
    window.showTab = function (tab, btn) {
      document.querySelectorAll(".menu-section").forEach((s) => s.classList.remove("active"));
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      const el = document.getElementById("tab-" + tab);
      if (el) el.classList.add("active");
      btn.classList.add("active");
    };

    // deep-link: /menu?tab=pasta opens a category; /menu?deal=lunch opens the Lunch Deal tab
    const params = new URLSearchParams(window.location.search);
    let requestedTab = params.get("tab");
    if (params.get("deal") === "lunch") requestedTab = "lunch";
    if (requestedTab && VALID_TABS.includes(requestedTab) && requestedTab !== "traditional") {
      if (activateTab(requestedTab)) {
        const tabsEl = document.querySelector(".menu-tabs");
        if (tabsEl) tabsEl.scrollIntoView({ block: "start" });
      }
    }

    // price modal: click a card to see sizes / prices
    const overlay = document.getElementById("priceModal");
    const mImg = document.getElementById("modalImg");
    const mName = document.getElementById("modalName");
    const mDesc = document.getElementById("modalDesc");
    const mPrices = document.getElementById("modalPrices");

    function rowsFor(card) {
      const sec = card.closest(".menu-section").id;
      if (sec === "tab-traditional") {
        return [["Small 11″", "$11.99"], ["Large 13″", "$16.49"], ["Family 15″", "$20.99"], ["Gluten Free · Large", "$19.90", true]];
      }
      if (sec === "tab-gourmet") {
        return [["Large 13″", "$22.99"]];
      }
      if (sec === "tab-lunch") {
        return [["Pizza + Can of Drink", "$9.99"]];
      }
      if (sec === "tab-pasta") {
        return [["Small", "$13.99"], ["Large", "$17.99"]];
      }
      const p = card.querySelector(".menu-card-price");
      return [["Price", p ? p.textContent.trim() : ""]];
    }

    function openModal(card) {
      const img = card.querySelector(".menu-card-img");
      const nameEl = card.querySelector(".menu-card-name");
      const descEl = card.querySelector(".menu-card-desc");
      mImg.src = img ? img.src : "";
      mImg.alt = nameEl ? nameEl.textContent.trim() : "";
      mImg.style.display = img ? "block" : "none";
      mName.textContent = nameEl ? nameEl.childNodes[0].textContent.trim() : "";
      mDesc.textContent = descEl ? descEl.textContent.trim() : "";
      mDesc.style.display = descEl ? "block" : "none";
      mPrices.innerHTML = rowsFor(card)
        .map(
          (r) =>
            '<div class="row"><span class="modal-size' +
            (r[2] ? " gf" : "") +
            '">' +
            r[0] +
            '</span><span class="modal-amt">' +
            r[1] +
            "</span></div>"
        )
        .join("");
      overlay.classList.add("open");
    }
    function closeModal() {
      overlay.classList.remove("open");
    }

    const cardEls = Array.from(document.querySelectorAll(".menu-card"));
    const cardHandlers = cardEls.map((c) => {
      const h = () => openModal(c);
      c.addEventListener("click", h);
      return [c, h];
    });

    const closeBtn = document.getElementById("modalClose");
    const onClose = () => closeModal();
    if (closeBtn) closeBtn.addEventListener("click", onClose);

    const onOverlay = (e) => {
      if (e.target === overlay) closeModal();
    };
    if (overlay) overlay.addEventListener("click", onOverlay);

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      try {
        delete window.showTab;
      } catch {
        window.showTab = undefined;
      }
      cardHandlers.forEach(([c, h]) => c.removeEventListener("click", h));
      if (closeBtn) closeBtn.removeEventListener("click", onClose);
      if (overlay) overlay.removeEventListener("click", onOverlay);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: MENU_HTML }} />;
}
