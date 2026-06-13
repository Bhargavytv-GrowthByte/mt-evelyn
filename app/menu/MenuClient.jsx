"use client";

import { useEffect } from "react";
import "./menu.css";

const MENU_HTML = `
<nav>
  <a class="nav-logo" href="/">Mt Evelyn <b>Pizza</b> &amp; <i>Pasta</i></a>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/menu" class="active">Menu</a></li>
    <li><a href="/#hours">Hours</a></li>
    <li><a href="/#bar">Bar</a></li>
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
      <p>Any one of Margherita, Hawaiian, Aussie, Capricciosa or Garlic, plus a Coke. Available 12PM–9PM, Thursday to Saturday.</p>
    </div>
    <div class="lunch-banner-price">$9.90<span>Pizza + Coke</span></div>
  </div>

  <!-- TABS -->
  <div class="menu-tabs">
    <button class="tab-btn active" onclick="showTab('traditional', this)">Traditional Pizza</button>
    <button class="tab-btn" onclick="showTab('gourmet', this)">Gourmet Pizza</button>
    <button class="tab-btn" onclick="showTab('pasta', this)">Pastas</button>
    <button class="tab-btn" onclick="showTab('mains', this)">Mains</button>
    <button class="tab-btn" onclick="showTab('deals', this)">Other Deals</button>
    <button class="tab-btn" onclick="showTab('sides', this)">Sides</button>
    <button class="tab-btn" onclick="showTab('drinks', this)">Cool Drinks</button>
  </div>

  <!-- TRADITIONAL PIZZA -->
  <div id="tab-traditional" class="menu-section active">
    <div class="sec-head">
      <h2>Traditional <em>Pizza</em></h2>
      <div class="price-pills"><span>Small $11</span><span>Large $15.50</span><span>Family $20</span><span class="gf">Gluten Free · Large $19</span><span>+ Extra Toppings $2</span></div>
    </div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Pepperoni pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Pepperoni</div><div class="menu-card-desc">Tomato, cheese, hot salami, onion, jalapenos and chilli flakes</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Margarita pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Margarita <span class="item-tag">Veg</span></div><div class="menu-card-desc">Tomato, cheese and herbs</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Garlic pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Garlic <span class="item-tag">Veg</span></div><div class="menu-card-desc">Garlic, cheese and herbs</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Vegetarian pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Vegetarian <span class="item-tag">Veg</span></div><div class="menu-card-desc">Tomato, cheese, mushroom, onion, capsicum, olives and garlic</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Aussie pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Aussie</div><div class="menu-card-desc">Tomato, cheese, ham, bacon and egg</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Hawaiian pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Hawaiian</div><div class="menu-card-desc">Tomato, cheese, ham and pineapple</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Capricciosa pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Capricciosa</div><div class="menu-card-desc">Tomato, cheese, ham, mushroom, olives and garlic</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Mexicana pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Mexicana</div><div class="menu-card-desc">Tomato, cheese, hot salami, onion, capsicum and olives</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Marinara pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Marinara</div><div class="menu-card-desc">Tomato, cheese, seafood mix, anchovies and garlic</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="BBQ Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">BBQ Chicken</div><div class="menu-card-desc">BBQ sauce, cheese, chicken, bacon and onion</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Napolitana pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Napolitana</div><div class="menu-card-desc">Tomato, cheese, hot salami, anchovies, olives and garlic</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Meat Lovers pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Meat Lovers</div><div class="menu-card-desc">BBQ sauce, cheese, ham, beef, hot salami and bacon</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Super Special pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Super Special</div><div class="menu-card-desc">Tomato, cheese, ham, mushroom, onion, capsicum, pineapple, prawns, olives and garlic</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Tropical Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Tropical Chicken</div><div class="menu-card-desc">Tomato, cheese, ham, chicken, pineapple and prawns</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Satay Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Satay Chicken</div><div class="menu-card-desc">Satay sauce, cheese, chicken, bacon and onion</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Americana pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Americana</div><div class="menu-card-desc">Tomato, cheese, ham, hot salami and onion</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Sweet Chilli Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Sweet Chilli Chicken</div><div class="menu-card-desc">Sweet chilli sauce, cheese, chicken, capsicum, pineapple and bacon</div><div class="menu-card-price">$11 / $15.50 / $20</div></div></div>
    </div>
  </div>

  <!-- GOURMET PIZZA -->
  <div id="tab-gourmet" class="menu-section">
    <div class="sec-head"><h2>Gourmet <em>Pizza</em></h2><div class="price-pills"><span>Large Only $21</span><span>+ Extra Toppings $2</span></div></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="The Toorak pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">The Toorak</div><div class="menu-card-desc">Tomato, cheese, smoked salmon, fetta, cherry tomato, capsicum, sour cream and garlic</div><div class="menu-card-price">$21</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="Lamb pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Lamb</div><div class="menu-card-desc">Tomato, cheese, roast lamb, cherry tomato, onion and garlic</div><div class="menu-card-price">$21</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Gourmet Vegetarian pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Gourmet Vegetarian <span class="item-tag">Veg</span></div><div class="menu-card-desc">Tomato, cheese, roast pumpkin, capsicum, mushroom, cherry tomato, fetta, olives, basil and garlic</div><div class="menu-card-price">$21</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="The Burger pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">The Burger</div><div class="menu-card-desc">Tomato, cheese, beef, onion, pickles, cherry tomato, bacon, mayo and English mustard</div><div class="menu-card-price">$21</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="The Caesar pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">The Caesar</div><div class="menu-card-desc">Tomato, cheese, chicken, onion, bacon, cherry tomato, Caesar dressing and parmesan cheese</div><div class="menu-card-price">$21</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="The Taco pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">The Taco</div><div class="menu-card-desc">Tomato, cheese, spicy salsa, beef, onion, jalapenos, cherry tomato and sour cream</div><div class="menu-card-price">$21</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Parmesan Bruschetta pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Parmesan Bruschetta</div><div class="menu-card-desc">Garlic, cheese, cherry tomato, onion, parmesan cheese and basil</div><div class="menu-card-price">$21</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Spaghetti pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Spaghetti Pizza</div><div class="menu-card-desc">Tomato, cheese, spaghetti and bolognese sauce</div><div class="menu-card-price">$21</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Tandoori Chicken pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Tandoori Chicken</div><div class="menu-card-desc">Tandoori sauce, cheese, chicken, topped with yoghurt and spring onion</div><div class="menu-card-price">$21</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=70&auto=format&fit=crop" alt="BBQ Beef pizza" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">BBQ Beef</div><div class="menu-card-desc">BBQ sauce, cheese, beef, bacon and onion</div><div class="menu-card-price">$21</div></div></div>
    </div>
  </div>

  <!-- PASTAS -->
  <div id="tab-pasta" class="menu-section">
    <div class="sec-head"><h2>Pastas</h2><div class="price-pills"><span>Spaghetti · Fettuchine · Ravioli</span><span>Small $13</span><span>Large $16</span></div></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=70&auto=format&fit=crop" alt="Bolognese pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Bolognese</div><div class="menu-card-desc">Home made rich beef bolognese sauce</div><div class="menu-card-price">$13 / $16</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=70&auto=format&fit=crop" alt="Carbonara pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Carbonara</div><div class="menu-card-desc">Garlic, bacon, spring onion, cream, cheese and egg</div><div class="menu-card-price">$13 / $16</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=70&auto=format&fit=crop" alt="Creamy Chicken Mushroom pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Creamy Chicken Mushroom</div><div class="menu-card-desc">Chicken, mushroom, garlic, onion, cream and parmesan cheese</div><div class="menu-card-price">$13 / $16</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=70&auto=format&fit=crop" alt="Big Vegetarian pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Big Vegetarian <span class="item-tag">Veg</span></div><div class="menu-card-desc">Garlic, onion, mushroom, olives, Napoli sauce, capsicum and parmesan cheese</div><div class="menu-card-price">$13 / $16</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=70&auto=format&fit=crop" alt="Marinara pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Marinara</div><div class="menu-card-desc">Mixed seafood, garlic and Napoli sauce</div><div class="menu-card-price">$13 / $16</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=70&auto=format&fit=crop" alt="Allapanna pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Allapanna</div><div class="menu-card-desc">Garlic, bacon, mushroom, spring onion, cream and parmesan cheese</div><div class="menu-card-price">$13 / $16</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=70&auto=format&fit=crop" alt="Lasagna pasta" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Lasagna</div><div class="menu-card-desc">Cheese, layers of pasta, homemade beef bolognese sauce</div><div class="menu-card-price">$13 / $16</div></div></div>
    </div>
  </div>

  <!-- MAINS -->
  <div id="tab-mains" class="menu-section">
    <div class="sec-head"><h2>Mains</h2><div class="price-pills"><span>Served with salad &amp; chips</span></div></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=70&auto=format&fit=crop" alt="Classic Chicken Schnitzel" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Classic Chicken Schnitzel</div><div class="menu-card-desc">Crumbed chicken breast served with salad and chips</div><div class="menu-card-price">$20</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&q=70&auto=format&fit=crop" alt="Classic Chicken Parmigiana" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Classic Chicken Parmigiana</div><div class="menu-card-desc">Chicken breast, homemade Napoli sauce and mozzarella cheese, served with salad and chips</div><div class="menu-card-price">$24</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=70&auto=format&fit=crop" alt="Mexican Chicken Parmigiana" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Mexican Chicken Parmigiana</div><div class="menu-card-desc">Chicken breast, cheese, jalapeno and Napoli sauce, served with salad and chips</div><div class="menu-card-price">$24</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&q=70&auto=format&fit=crop" alt="Hawaiian Chicken Parmigiana" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Hawaiian Chicken Parmigiana</div><div class="menu-card-desc">Chicken breast, ham, pineapple, Napoli sauce and cheese, served with chips and salad</div><div class="menu-card-price">$24</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=70&auto=format&fit=crop" alt="Aussie Chicken Parmigiana" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Aussie Chicken Parmigiana</div><div class="menu-card-desc">Chicken breast, ham, bacon and egg, and cheese, served with salad and chips</div><div class="menu-card-price">$24</div></div></div>
    </div>
  </div>

  <!-- OTHER DEALS -->
  <div id="tab-deals" class="menu-section">
    <div class="sec-head"><h2>Other <em>Deals</em></h2></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=70&auto=format&fit=crop" alt="Lunch Deal Pizza and Coke" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Lunch Deal — Pizza + Coke</div><div class="menu-card-desc">Margherita, Hawaiian, Aussie, Capricciosa or Garlic with a Coke. 12PM–9PM, Thursday to Saturday.</div><div class="menu-card-price">$9.90</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70&auto=format&fit=crop" alt="Dinner Deal" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Dinner Deal</div><div class="menu-card-desc">2 Large traditional pizzas, garlic roll and a 1.25L drink</div><div class="menu-card-price">$34.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=70&auto=format&fit=crop" alt="Family Deal" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Family Deal</div><div class="menu-card-desc">2 Family traditional pizzas, garlic roll and a 1.25L drink</div><div class="menu-card-price">$45.99</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&q=70&auto=format&fit=crop" alt="Chicken Parma and Chips" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Chicken Parma &amp; Chips</div><div class="menu-card-desc">Parmigiana with Napoli sauce, ham and mozzarella. Or your choice: creamy mushroom, Aussie, Hawaiian, Mexican or Tandoori (sauce, cheese, spring onion &amp; yoghurt) toppings.</div><div class="menu-card-price">$18.00</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=70&auto=format&fit=crop" alt="Ribs" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Ribs</div><div class="menu-card-desc">Your choice of BBQ, smokey BBQ, satay or plum sauce. Served with chips.</div><div class="menu-card-price">$20.00</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=500&q=70&auto=format&fit=crop" alt="Garlic Roll" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Garlic Roll</div><div class="menu-card-price">$4.00</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&q=70&auto=format&fit=crop" alt="Nachos" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Nachos</div><div class="menu-card-price">$16.00</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=70&auto=format&fit=crop" alt="Hot Jam Donut" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Hot Jam Donut</div><div class="menu-card-price">$1.50 · 6 for $7</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=500&q=70&auto=format&fit=crop" alt="Chocolate Mousse" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Chocolate Mousse</div><div class="menu-card-price">$4.50</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500&q=70&auto=format&fit=crop" alt="Gelati Ice Cream" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Gelati Ice Cream</div><div class="menu-card-desc">500ml tub — Chocolate, Bacio, Strawberry, Pistachio or Banana</div><div class="menu-card-price">$6.00</div></div></div>
    </div>
  </div>

  <!-- SIDES -->
  <div id="tab-sides" class="menu-section">
    <div class="sec-head"><h2>Sides</h2></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=500&q=70&auto=format&fit=crop" alt="Garlic bread" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Garlic Bread</div><div class="menu-card-price">$4</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=70&auto=format&fit=crop" alt="Chicken nuggets" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Chicken Nuggets</div><div class="menu-card-price">6 for $6</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=70&auto=format&fit=crop" alt="Arancini bolognese" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Arancini Bolognese</div><div class="menu-card-price">5 for $8.50</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=70&auto=format&fit=crop" alt="Arancini four cheese" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Arancini Four Cheese <span class="item-tag">Veg</span></div><div class="menu-card-price">5 for $8.50</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=70&auto=format&fit=crop" alt="Onion rings" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Onion Rings <span class="item-tag">Veg</span></div><div class="menu-card-price">10 for $8.50</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=70&auto=format&fit=crop" alt="Wedges" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Wedges</div><div class="menu-card-price">$10</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=70&auto=format&fit=crop" alt="Chips" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Chips</div><div class="menu-card-price">S $4.50 · L $7</div></div></div>
    </div>
  </div>

  <!-- COOL DRINKS -->
  <div id="tab-drinks" class="menu-section">
    <div class="sec-head"><h2>Cool <em>Drinks</em></h2></div>
    <div class="sec-divider"></div>
    <div class="menu-grid">
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=70&auto=format&fit=crop" alt="Soft drink cans" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Soft Drink Cans</div><div class="menu-card-price">$3.00</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=70&auto=format&fit=crop" alt="1.25 litre soft drink bottle" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Soft Drink Bottle 1.25L</div><div class="menu-card-price">$4.00</div></div></div>
      <div class="menu-card"><img class="menu-card-img" src="https://images.unsplash.com/photo-1559839914-17aae19cec71?w=500&q=70&auto=format&fit=crop" alt="Water" loading="lazy"><div class="menu-card-body"><div class="menu-card-name">Water</div><div class="menu-card-price">$3.00</div></div></div>
    </div>
  </div>

  <div class="fineprint">
    Pizza prices shown as Small / Large / Family. Gluten free bases available on traditional pizzas (Large $19). Alcohol delivery with food only. Please inform us of any dietary requirements or allergies. Home delivery charge will apply. Prices may change without notice.
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
    // global handler for the inline onclick="showTab(...)" attributes
    window.showTab = function (tab, btn) {
      document.querySelectorAll(".menu-section").forEach((s) => s.classList.remove("active"));
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      const el = document.getElementById("tab-" + tab);
      if (el) el.classList.add("active");
      btn.classList.add("active");
    };

    // price modal: click a card to see sizes / prices
    const overlay = document.getElementById("priceModal");
    const mImg = document.getElementById("modalImg");
    const mName = document.getElementById("modalName");
    const mDesc = document.getElementById("modalDesc");
    const mPrices = document.getElementById("modalPrices");

    function rowsFor(card) {
      const sec = card.closest(".menu-section").id;
      if (sec === "tab-traditional") {
        return [["Small", "$11"], ["Large", "$15.50"], ["Family", "$20"], ["Gluten Free · Large", "$19", true]];
      }
      if (sec === "tab-gourmet") {
        return [["Large", "$21"]];
      }
      if (sec === "tab-pasta") {
        return [["Small", "$13"], ["Large", "$16"]];
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
