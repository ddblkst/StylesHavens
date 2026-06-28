<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StylesHaven – Panels</title>
    <style>
        :root {
            --buyer-bg: #0a0a14;
            --buyer-accent: #00f0ff;
            --buyer-font: #ff0040;
            --seller-bg: #140a0a;
            --seller-accent: #ff003c;
            --seller-font: #0088ff;
            --dev-bg: #0a0a14;
            --dev-accent: #b300ff;
            --dev-font: #00ff66;
            --radius: 14px;
            --radius-sm: 8px;
            --font: 'Segoe UI', system-ui, -apple-system, sans-serif;
            --transition: 0.2s;
        }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{
            font-family:var(--font);
            background:var(--buyer-bg);
            color:#ddd;
            display:flex;
            min-height:100vh;
            transition: background 0.3s;
        }
        body[data-panel="seller"]{background:var(--seller-bg);}
        body[data-panel="dev"]{background:var(--dev-bg);}
        .sidebar{
            width:270px;min-width:270px;background:rgba(0,0,0,0.7);
            border-right:2px solid var(--buyer-accent);
            display:flex;flex-direction:column;position:fixed;top:0;left:0;bottom:0;z-index:110;
            transition:0.3s;overflow-y:auto;backdrop-filter:blur(10px);
        }
        body[data-panel="seller"] .sidebar{border-color:var(--seller-accent);}
        body[data-panel="dev"] .sidebar{border-color:var(--dev-accent);}
        .sidebar-header{padding:20px;border-bottom:2px solid currentColor;}
        .logo{font-size:1.6rem;font-weight:800;letter-spacing:-0.5px;}
        body[data-panel="buyer"] .logo{color:var(--buyer-accent);}
        body[data-panel="seller"] .logo{color:var(--seller-accent);}
        body[data-panel="dev"] .logo{color:var(--dev-accent);}
        .sidebar-nav{flex:1;padding:8px 0;}
        .nav-btn{
            display:flex;align-items:center;gap:10px;padding:12px 20px;cursor:pointer;
            border:none;background:transparent;color:#aaa;font-size:0.9rem;text-align:left;width:100%;
            font-family:var(--font);border-left:3px solid transparent;transition:0.2s;
        }
        .nav-btn:hover{background:rgba(255,255,255,0.05);}
        .nav-btn.active{background:rgba(255,255,255,0.1);font-weight:600;}
        body[data-panel="buyer"] .nav-btn.active{color:var(--buyer-font);border-left-color:var(--buyer-accent);}
        body[data-panel="seller"] .nav-btn.active{color:var(--seller-font);border-left-color:var(--seller-accent);}
        body[data-panel="dev"] .nav-btn.active{color:var(--dev-font);border-left-color:var(--dev-accent);}
        .sidebar-footer{padding:15px;border-top:2px solid currentColor;display:flex;flex-direction:column;gap:10px;}
        .cart-indicator{
            background:var(--buyer-accent);color:#000;padding:10px;border-radius:30px;text-align:center;
            font-weight:700;cursor:pointer;border:none;
        }
        body[data-panel="seller"] .cart-indicator{display:none;}
        body[data-panel="dev"] .cart-indicator{display:none;}
        .main-content{margin-left:270px;flex:1;padding:20px 28px 40px;transition:0.3s;}
        .top-bar{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;}
        .mode-badge{
            padding:6px 18px;border-radius:30px;font-weight:700;font-size:0.8rem;text-transform:uppercase;
        }
        body[data-panel="buyer"] .mode-badge{background:var(--buyer-accent);color:#000;}
        body[data-panel="seller"] .mode-badge{background:var(--seller-accent);color:#fff;}
        body[data-panel="dev"] .mode-badge{background:var(--dev-accent);color:#fff;}
        .section-title{font-size:1.8rem;font-weight:800;margin-bottom:8px;}
        body[data-panel="buyer"] .section-title{color:var(--buyer-font);}
        body[data-panel="seller"] .section-title{color:var(--seller-font);}
        body[data-panel="dev"] .section-title{color:var(--dev-font);}
        .tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;}
        .tab{
            padding:8px 20px;border-radius:30px;background:transparent;cursor:pointer;font-weight:600;
            border:2px solid #555;color:#aaa;transition:0.2s;font-family:var(--font);
        }
        body[data-panel="buyer"] .tab.active{background:var(--buyer-accent);border-color:var(--buyer-accent);color:#000;}
        body[data-panel="seller"] .tab.active{background:var(--seller-accent);border-color:var(--seller-accent);color:#fff;}
        body[data-panel="dev"] .tab.active{background:var(--dev-accent);border-color:var(--dev-accent);color:#fff;}
        .product-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:16px;}
        .product-card{
            background:rgba(255,255,255,0.05);border-radius:var(--radius);border:1px solid rgba(255,255,255,0.08);
            overflow:hidden;transition:0.2s;
        }
        body[data-panel="buyer"] .product-card:hover{border-color:var(--buyer-accent);box-shadow:0 0 15px rgba(0,240,255,0.2);}
        .img-slot{
            height:170px;display:flex;align-items:center;justify-content:center;background:#1a1a2e;
            overflow:hidden;position:relative;
        }
        .img-slot img{width:100%;height:100%;object-fit:cover;}
        .card-body{padding:12px;}
        .product-name{font-weight:700;margin-bottom:4px;}
        body[data-panel="buyer"] .product-name{color:var(--buyer-font);}
        .price-range{font-size:0.7rem;color:#888;}
        .standing-price{font-size:1.2rem;font-weight:800;}
        body[data-panel="buyer"] .standing-price{color:var(--buyer-font);}
        .qty-row{display:flex;align-items:center;gap:6px;margin:8px 0;}
        .qty-btn{
            width:30px;height:30px;border-radius:50%;border:2px solid #555;background:#1e1e2a;
            color:white;cursor:pointer;font-weight:bold;transition:0.2s;
        }
        body[data-panel="buyer"] .qty-btn:hover{border-color:var(--buyer-accent);background:var(--buyer-accent);color:#000;}
        .btn-add{
            width:100%;padding:8px;border-radius:30px;border:none;font-weight:700;cursor:pointer;
            background:var(--buyer-accent);color:#000;margin-top:6px;transition:0.2s;
        }
        body[data-panel="buyer"] .btn-add.in-cart{background:#1f7a3c;color:white;}
        .cart-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:200;opacity:0;pointer-events:none;transition:0.3s;}
        .cart-overlay.open{opacity:1;pointer-events:all;}
        .cart-panel{
            position:fixed;top:0;right:0;bottom:0;width:400px;max-width:95vw;background:#14141f;
            border-left:2px solid var(--buyer-accent);z-index:201;transform:translateX(100%);transition:0.3s;
            display:flex;flex-direction:column;box-shadow:-10px 0 30px rgba(0,0,0,0.8);
        }
        .cart-panel.open{transform:translateX(0);}
        .cart-header{padding:16px;border-bottom:2px solid var(--buyer-accent);display:flex;justify-content:space-between;}
        .cart-items{flex:1;overflow-y:auto;padding:16px;}
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:300;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:0.25s;}
        .modal-overlay.open{opacity:1;pointer-events:all;}
        .modal{
            background:#1a1a2e;border-radius:18px;padding:24px;width:500px;max-width:90vw;max-height:85vh;overflow-y:auto;
            border:2px solid var(--buyer-accent);box-shadow:0 0 30px rgba(0,240,255,0.3);
        }
        body[data-panel="seller"] .modal{border-color:var(--seller-accent);}
        body[data-panel="dev"] .modal{border-color:var(--dev-accent);}
        input,select,textarea{
            padding:10px;border-radius:6px;border:2px solid #444;background:#0f0f18;color:white;font-family:var(--font);width:100%;
        }
        .btn-primary{
            background:var(--buyer-accent);color:#000;border:none;padding:10px 24px;border-radius:30px;font-weight:700;cursor:pointer;
        }
        body[data-panel="seller"] .btn-primary{background:var(--seller-accent);color:#fff;}
        body[data-panel="dev"] .btn-primary{background:var(--dev-accent);color:#fff;}
        .toast{position:fixed;bottom:20px;right:20px;background:var(--buyer-accent);color:#000;padding:12px 24px;border-radius:30px;font-weight:bold;z-index:400;}
        body[data-panel="seller"] .toast{background:var(--seller-accent);color:#fff;}
        body[data-panel="dev"] .toast{background:var(--dev-accent);color:#fff;}
        @media(max-width:850px){
            .sidebar{transform:translateX(-100%);}
            .sidebar.mobile-open{transform:translateX(0);}
            .main-content{margin-left:0;}
            .mobile-menu-btn{display:flex!important;}
        }
        .mobile-menu-btn{
            display:none;position:fixed;top:12px;right:12px;z-index:120;
            background:var(--buyer-accent);border:none;border-radius:50%;width:42px;height:42px;
            font-size:1.3rem;align-items:center;justify-content:center;cursor:pointer;color:#000;
        }
        body[data-panel="seller"] .mobile-menu-btn{background:var(--seller-accent);}
        body[data-panel="dev"] .mobile-menu-btn{background:var(--dev-accent);}
    </style>
</head>
<body data-panel="buyer">

<button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>

<aside class="sidebar" id="sidebar">
    <div class="sidebar-header"><div class="logo">🧵 StylesHaven</div></div>
    <nav class="sidebar-nav" id="sidebarNav"></nav>
    <div class="sidebar-footer">
        <button class="cart-indicator" id="btnOpenCart">🛒 Cart (<span id="cartBadge">0</span>)</button>
        <button id="btnPanelSwitch" style="background:#555;color:white;border:none;padding:8px;border-radius:20px;cursor:pointer;">Switch Panel</button>
    </div>
</aside>

<main class="main-content" id="mainContent"></main>

<div class="cart-overlay" id="cartOverlay"></div>
<div class="cart-panel" id="cartPanel">
    <div class="cart-header">🛒 Cart <button id="btnCloseCart" style="background:none;border:none;color:white;font-size:1.3rem;">✕</button></div>
    <div class="cart-items" id="cartItems"></div>
    <div id="cartFooter" style="padding:16px;display:none;">
        <div style="font-weight:bold;">Total: $<span id="cartTotal">0</span></div>
        <button id="btnCheckout" class="btn-primary" style="width:100%;margin-top:10px;">Buy Now & Pay</button>
        <button id="btnClearCart" style="background:none;color:#aaa;border:none;margin-top:6px;">Clear</button>
    </div>
</div>

<div class="modal-overlay" id="paymentModalOverlay">
    <div class="modal" id="paymentModal">
        <h3 style="color:var(--buyer-accent);">💳 Pay with M-Pesa</h3>
        <div class="form-group"><label>Phone Number (e.g., 2547...)</label><input id="mpesaPhone" placeholder="254712345678"></div>
        <div id="paymentSummary" style="background:#111;padding:10px;border-radius:8px;margin:10px 0;"></div>
        <p style="font-size:0.8rem;color:var(--buyer-accent);">⚠️ Real M‑Pesa STK Push will be sent to your phone.</p>
        <div style="display:flex;gap:10px;justify-content:flex-end;">
            <button class="btn-secondary" id="btnCancelPayment">Cancel</button>
            <button class="btn-primary" id="btnInitiatePayment">Pay Now</button>
        </div>
    </div>
</div>

<div class="modal-overlay" id="successOverlay">
    <div class="modal" style="text-align:center;">
        <h2 style="color:var(--buyer-accent);">✅ Payment Prompt Sent</h2>
        <p>Check your phone and enter your M‑Pesa PIN to complete payment.</p>
        <button class="btn-primary" id="btnCloseSuccess">OK</button>
    </div>
</div>

<div class="modal-overlay" id="sellerPinOverlay">
    <div class="modal"><h3>🔐 Seller PIN</h3><input type="password" id="sellerPinInput"><button class="btn-primary" id="btnSellerLogin">Enter</button></div>
</div>

<div class="modal-overlay" id="devPinOverlay">
    <div class="modal"><h3>🔐 Developer PIN</h3><input type="password" id="devPinInput"><button class="btn-primary" id="btnDevLogin">Enter</button></div>
</div>

<script>
    (() => {
        const STORE_KEY = 'styleshaven_store', ORDERS_KEY = 'styleshaven_orders', DEV_KEY = 'styleshaven_dev', SELLER_PIN_KEY = 'sellerPin', DEV_PIN_KEY = 'devPin';
        const defaultStore = {
            Clothes:{icon:'👕',subtypes:{Tops:{icon:'👔',products:[{id:'c1',name:'Classic T-Shirt',price:15,range:'$10-$25',emoji:'👕',quantity:20,image:''}]},Bottoms:{icon:'👖',products:[{id:'c2',name:'Sweatpants',price:25,range:'$20-$40',emoji:'👖',quantity:15,image:''}]}}},
            Beddings:{icon:'🛏️',subtypes:{Sheets:{icon:'🛌',products:[{id:'b1',name:'Fitted Sheet',price:18,range:'$12-$28',emoji:'🛏️',quantity:10,image:''}]}}},
            Hygiene:{icon:'🧴',subtypes:{Towels:{icon:'🛁',products:[{id:'h1',name:'Bath Towel',price:14,range:'$10-$22',emoji:'🛁',quantity:30,image:''}]}}}
        };
        let store = JSON.parse(localStorage.getItem(STORE_KEY)) || JSON.parse(JSON.stringify(defaultStore));
        let orders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
        let devSettings = JSON.parse(localStorage.getItem(DEV_KEY)) || { commissionRate:10, devPhone:'+254700000000', tillNumber:'123456', paybill:'', accountNo:'' };
        let sellerPin = localStorage.getItem(SELLER_PIN_KEY) || '1234';
        let devPin = localStorage.getItem(DEV_PIN_KEY) || '5678';
        let cart = {};
        let currentPanel = 'buyer';
        let currentCategory = null, currentSubtype = null;

        function saveAll() {
            localStorage.setItem(STORE_KEY, JSON.stringify(store));
            localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
            localStorage.setItem(DEV_KEY, JSON.stringify(devSettings));
            localStorage.setItem(SELLER_PIN_KEY, sellerPin);
            localStorage.setItem(DEV_PIN_KEY, devPin);
        }

        function switchPanel(panel) {
            currentPanel = panel;
            document.body.setAttribute('data-panel', panel);
            renderSidebar();
            if (panel === 'buyer') { if (!currentCategory) currentCategory = Object.keys(store)[0]||null; renderBuyer(); }
            else if (panel === 'seller') renderSellerDashboard();
            else if (panel === 'dev') renderDevDashboard();
        }

        function renderSidebar() {
            const nav = document.getElementById('sidebarNav');
            let html = '';
            if (currentPanel === 'buyer') {
                html += Object.keys(store).map(cat => `<button class="nav-btn ${cat===currentCategory?'active':''}" data-cat="${cat}">${store[cat].icon} ${cat}</button>`).join('');
            } else if (currentPanel === 'seller') {
                html += `<button class="nav-btn active" data-view="dashboard">📊 Dashboard</button>`;
                html += `<button class="nav-btn" data-view="stock">📦 Manage Stock</button>`;
                html += `<button class="nav-btn" data-view="orders">📋 Pending Orders</button>`;
                html += `<button class="nav-btn" data-view="settings">⚙️ Change PIN</button>`;
            } else if (currentPanel === 'dev') {
                html += `<button class="nav-btn active" data-view="dashboard">💰 Dashboard</button>`;
                html += `<button class="nav-btn" data-view="orders">🧾 All Orders</button>`;
                html += `<button class="nav-btn" data-view="settings">⚙️ Settings & Export</button>`;
            }
            nav.innerHTML = html;
            nav.querySelectorAll('.nav-btn').forEach(btn => btn.addEventListener('click', (e) => {
                if (currentPanel === 'buyer') { currentCategory = btn.dataset.cat; renderBuyer(); }
                else if (currentPanel === 'seller') handleSellerNav(btn.dataset.view);
                else if (currentPanel === 'dev') handleDevNav(btn.dataset.view);
                if (window.innerWidth<=850) document.getElementById('sidebar').classList.remove('mobile-open');
            }));
        }

        function renderBuyer() {
            if (!currentCategory) return;
            const cat = store[currentCategory];
            const subtypes = Object.keys(cat.subtypes);
            if (!currentSubtype || !cat.subtypes[currentSubtype]) currentSubtype = subtypes[0];
            const main = document.getElementById('mainContent');
            main.innerHTML = `
                <div class="top-bar"><span class="mode-badge">BUYER PANEL</span></div>
                <div class="section-title">${cat.icon} ${currentCategory}</div>
                <div class="tabs">${subtypes.map(s => `<button class="tab ${s===currentSubtype?'active':''}" data-sub="${s}">${cat.subtypes[s].icon} ${s}</button>`).join('')}</div>
                <div class="product-grid" id="productGrid"></div>
            `;
            main.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => { currentSubtype = t.dataset.sub; renderBuyer(); }));
            renderProductGrid();
        }

        function renderProductGrid() {
            const grid = document.getElementById('productGrid');
            if (!grid) return;
            const products = store[currentCategory].subtypes[currentSubtype].products;
            grid.innerHTML = products.map(p => {
                const qty = cart[p.id] || 0;
                return `<div class="product-card">
                    <div class="img-slot">${p.image ? `<img src="${p.image}" alt="">` : `<span style="font-size:3rem;">${p.emoji||'📦'}</span>`}</div>
                    <div class="card-body">
                        <div class="product-name">${p.name}</div>
                        <div class="price-range">${p.range}</div>
                        <div class="standing-price">$${p.price.toFixed(2)}</div>
                        <div class="qty-row">
                            <button class="qty-btn" data-act="dec" data-id="${p.id}">−</button>
                            <input value="${qty}" readonly data-id="${p.id}" style="width:40px;text-align:center;">
                            <button class="qty-btn" data-act="inc" data-id="${p.id}">+</button>
                        </div>
                        <button class="btn-add ${qty?'in-cart':''}" data-id="${p.id}">${qty?'✓ In Cart':'Add to Cart'}</button>
                    </div>
                </div>`;
            }).join('');
            grid.querySelectorAll('.qty-btn').forEach(b => b.addEventListener('click', (e) => {
                const id = b.dataset.id;
                cart[id] = (cart[id]||0) + (b.dataset.act==='inc'?1:-1);
                if (cart[id]<=0) delete cart[id];
                renderProductGrid(); updateCartBadge();
            }));
            grid.querySelectorAll('.btn-add').forEach(b => b.addEventListener('click', () => {
                if (!cart[b.dataset.id]) { cart[b.dataset.id]=1; renderProductGrid(); updateCartBadge(); toast('Added!'); }
            }));
        }

        function updateCartBadge() {
            document.getElementById('cartBadge').textContent = Object.values(cart).reduce((a,b)=>a+b,0);
        }
        function getCartItems() {
            const items = [];
            for (let [id,qty] of Object.entries(cart)) {
                const prod = findProduct(id);
                if (prod) items.push({...prod, qty});
            }
            return items;
        }
        function getCartTotal() { return getCartItems().reduce((s,i)=>s+i.price*i.qty,0); }
        function findProduct(id) {
            for (let cat of Object.values(store)) for (let sub of Object.values(cat.subtypes)) for (let p of sub.products) if (p.id===id) return p;
            return null;
        }

        document.getElementById('btnOpenCart').addEventListener('click', openCart);
        function openCart() {
            const items = getCartItems();
            const cartItemsDiv = document.getElementById('cartItems');
            if (items.length===0) {
                cartItemsDiv.innerHTML = '<p style="color:#aaa;">Empty</p>';
                document.getElementById('cartFooter').style.display='none';
            } else {
                cartItemsDiv.innerHTML = items.map(i => `<div style="display:flex;gap:8px;align-items:center;padding:8px;border-bottom:1px solid #333;">
                    <span>${i.emoji}</span><b>${i.name}</b> x${i.qty} <span>$${(i.price*i.qty).toFixed(2)}</span>
                </div>`).join('');
                document.getElementById('cartFooter').style.display='block';
                document.getElementById('cartTotal').textContent = getCartTotal().toFixed(2);
            }
            document.getElementById('cartPanel').classList.add('open');
            document.getElementById('cartOverlay').classList.add('open');
        }
        document.getElementById('btnCloseCart').addEventListener('click', ()=>{ document.getElementById('cartPanel').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); });
        document.getElementById('cartOverlay').addEventListener('click', ()=>{ document.getElementById('cartPanel').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); });
        document.getElementById('btnClearCart').addEventListener('click', ()=>{ cart={}; updateCartBadge(); openCart(); renderProductGrid(); });

        document.getElementById('btnCheckout').addEventListener('click', () => {
            if (getCartItems().length===0) return toast('Cart empty');
            document.getElementById('cartPanel').classList.remove('open');
            document.getElementById('cartOverlay').classList.remove('open');
            document.getElementById('paymentSummary').innerHTML = `Total: $${getCartTotal().toFixed(2)}`;
            document.getElementById('paymentModalOverlay').classList.add('open');
        });
        document.getElementById('btnCancelPayment').addEventListener('click', ()=> document.getElementById('paymentModalOverlay').classList.remove('open'));

        // REAL STK PUSH CALL
        async function initiateMpesaPayment(phone, amount) {
            const backendURL = 'https://styleshaven-backend.onrender.com/stkpush';
            try {
                const res = await fetch(backendURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phone, amount })
                });
                const data = await res.json();
                if (data.ResponseCode === '0') {
                    saveOrderAndClearCart(phone);
                    document.getElementById('paymentModalOverlay').classList.remove('open');
                    document.getElementById('successOverlay').classList.add('open');
                } else {
                    toast('Payment request failed. Check phone number.');
                }
            } catch (err) {
                toast('Network error – try again');
            }
        }

        document.getElementById('btnInitiatePayment').addEventListener('click', () => {
            const phone = document.getElementById('mpesaPhone').value.trim();
            if (!phone) return toast('Enter phone number');
            initiateMpesaPayment(phone, getCartTotal());
        });

        function saveOrderAndClearCart(phone) {
            const items = getCartItems();
            const total = getCartTotal();
            const order = {
                id: Date.now(),
                items: items.map(i => ({id:i.id, name:i.name, price:i.price, qty:i.qty})),
                total,
                buyerPhone: phone,
                status: 'paid_to_dev',
                commissionPaid: false,
                timestamp: new Date().toISOString()
            };
            orders.push(order);
            saveAll();
            cart = {}; updateCartBadge(); renderProductGrid();
        }
        document.getElementById('btnCloseSuccess').addEventListener('click', ()=> document.getElementById('successOverlay').classList.remove('open'));

        function handleSellerNav(view) {
            if (view==='dashboard') renderSellerDashboard();
            else if (view==='stock') renderSellerStock();
            else if (view==='orders') renderSellerOrders();
            else if (view==='settings') renderSellerSettings();
        }
        function renderSellerDashboard() {
            document.getElementById('mainContent').innerHTML = `<div class="top-bar"><span class="mode-badge">SELLER PANEL</span></div><div class="section-title">📊 Seller Dashboard</div><p>Manage products and view orders.</p>`;
        }
        function renderSellerStock() {
            let html = `<div class="top-bar"><span class="mode-badge">SELLER PANEL</span></div><div class="section-title">📦 Manage Stock</div>`;
            html += `<button id="btnAddCategory" class="btn-primary" style="margin-bottom:10px;">+ Add Category</button><div id="stockList"></div>`;
            document.getElementById('mainContent').innerHTML = html;
            renderStockList();
            document.getElementById('btnAddCategory').addEventListener('click', addCategoryPrompt);
        }
        function renderStockList() {
            const div = document.getElementById('stockList');
            let html = '';
            for (let [cat, catData] of Object.entries(store)) {
                html += `<h4>${catData.icon} ${cat}</h4>`;
                for (let [sub, subData] of Object.entries(catData.subtypes)) {
                    html += `<p><b>${subData.icon} ${sub}</b> <button data-cat="${cat}" data-sub="${sub}" class="addProductBtn">+ Product</button></p>`;
                    html += subData.products.map(p => `<div style="display:flex;align-items:center;gap:10px;background:#111;padding:8px;margin:4px;">
                        ${p.image?`<img src="${p.image}" style="width:40px;height:40px;object-fit:cover;">`:p.emoji}
                        <span>${p.name}</span> <input value="${p.price}" data-id="${p.id}" class="priceInput" style="width:70px;"> 
                        <input value="${p.quantity}" data-id="${p.id}" class="qtyInput" style="width:50px;">
                        <button data-id="${p.id}" class="deleteProductBtn">🗑</button>
                    </div>`).join('');
                }
            }
            div.innerHTML = html;
            div.querySelectorAll('.priceInput').forEach(inp => inp.addEventListener('change', (e) => {
                const prod = findProduct(e.target.dataset.id); if (prod) { prod.price = parseFloat(e.target.value)||0; saveAll(); }
            }));
            div.querySelectorAll('.qtyInput').forEach(inp => inp.addEventListener('change', (e) => {
                const prod = findProduct(e.target.dataset.id); if (prod) { prod.quantity = parseInt(e.target.value)||0; saveAll(); }
            }));
            div.querySelectorAll('.deleteProductBtn').forEach(btn => btn.addEventListener('click', (e) => { removeProduct(e.target.dataset.id); renderStockList(); }));
            div.querySelectorAll('.addProductBtn').forEach(btn => btn.addEventListener('click', () => addProductPrompt(btn.dataset.cat, btn.dataset.sub)));
        }
        function addCategoryPrompt() {
            const name = prompt('Category name'); if (!name) return;
            if (!store[name]) store[name] = {icon:'📦', subtypes:{}};
            const sub = prompt('Subtype name'); if (!sub) return;
            store[name].subtypes[sub] = {icon:'📦', products:[]};
            saveAll(); renderStockList();
        }
        function addProductPrompt(cat, sub) {
            const name = prompt('Product name'); if (!name) return;
            const price = parseFloat(prompt('Price'))||0;
            store[cat].subtypes[sub].products.push({id:Date.now().toString(), name, price, range:`$${(price*0.6).toFixed(0)}-$${(price*1.6).toFixed(0)}`, emoji:'📦', quantity:10, image:''});
            saveAll(); renderStockList();
        }
        function removeProduct(id) {
            for (let cat of Object.values(store)) for (let sub of Object.values(cat.subtypes)) sub.products = sub.products.filter(p => p.id!==id);
            saveAll();
        }
        function renderSellerOrders() {
            const devOrders = orders.filter(o => !o.commissionPaid);
            document.getElementById('mainContent').innerHTML = `<div class="top-bar"><span class="mode-badge">SELLER PANEL</span></div><div class="section-title">📋 Pending Orders</div>${devOrders.length===0?'<p>No pending orders.</p>':devOrders.map(o => `<div style="background:#111;padding:8px;margin:4px;">Order #${o.id} - $${o.total.toFixed(2)}</div>`).join('')}`;
        }
        function renderSellerSettings() {
            document.getElementById('mainContent').innerHTML = `<div class="top-bar"><span class="mode-badge">SELLER PANEL</span></div><div class="section-title">⚙️ Change PIN</div><input id="newSellerPin" placeholder="New PIN"><button id="saveSellerPin" class="btn-primary">Save</button>`;
            document.getElementById('saveSellerPin').addEventListener('click', ()=>{ sellerPin = document.getElementById('newSellerPin').value; saveAll(); toast('PIN updated'); });
        }

        function handleDevNav(view) {
            if (view==='dashboard') renderDevDashboard();
            else if (view==='orders') renderDevOrders();
            else if (view==='settings') renderDevSettings();
        }
        function renderDevDashboard() {
            document.getElementById('mainContent').innerHTML = `<div class="top-bar"><span class="mode-badge">DEVELOPER PANEL</span></div><div class="section-title">💰 Developer Dashboard</div><p>Commission: ${devSettings.commissionRate}% | Till: ${devSettings.tillNumber}</p>`;
        }
        function renderDevOrders() {
            document.getElementById('mainContent').innerHTML = `<div class="top-bar"><span class="mode-badge">DEVELOPER PANEL</span></div><div class="section-title">🧾 All Orders</div>${orders.map(o => `<div style="background:#111;padding:8px;margin:4px;display:flex;justify-content:space-between;"><span>#${o.id} $${o.total.toFixed(2)} ${o.commissionPaid?'✅ Paid':'❌ Unpaid'}</span>${!o.commissionPaid?`<button class="paySellerBtn btn-primary" data-id="${o.id}">Pay Seller</button>`:''}</div>`).join('')}`;
            document.querySelectorAll('.paySellerBtn').forEach(b => b.addEventListener('click', (e) => paySeller(parseInt(e.target.dataset.id))));
        }
        function paySeller(orderId) {
            const order = orders.find(o => o.id===orderId);
            if (!order) return;
            if (confirm(`Pay seller $${(order.total*(1-devSettings.commissionRate/100)).toFixed(2)}?`)) {
                order.commissionPaid = true; saveAll(); renderDevOrders(); toast('Seller paid!');
            }
        }
        function renderDevSettings() {
            document.getElementById('mainContent').innerHTML = `<div class="top-bar"><span class="mode-badge">DEVELOPER PANEL</span></div><div class="section-title">⚙️ Settings & Export</div>
                <label>Commission % <input id="commRate" value="${devSettings.commissionRate}"></label>
                <label>Till Number <input id="tillNo" value="${devSettings.tillNumber}"></label>
                <label>Dev Phone <input id="devPhone" value="${devSettings.devPhone}"></label>
                <label>New PIN <input id="newDevPin"></label>
                <button id="saveDevSettings" class="btn-primary">Save</button>
                <button id="exportHTML" class="btn-primary" style="margin-top:10px;">📥 Export HTML</button>`;
            document.getElementById('saveDevSettings').addEventListener('click', ()=>{
                devSettings.commissionRate = parseFloat(document.getElementById('commRate').value)||10;
                devSettings.tillNumber = document.getElementById('tillNo').value;
                devSettings.devPhone = document.getElementById('devPhone').value;
                const newPin = document.getElementById('newDevPin').value;
                if (newPin) devPin = newPin;
                saveAll(); toast('Saved');
            });
            document.getElementById('exportHTML').addEventListener('click', ()=>{
                const blob = new Blob([document.documentElement.outerHTML], {type:'text/html'});
                const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'styleshaven_export.html'; a.click();
            });
        }

        function toast(msg) {
            const t = document.createElement('div'); t.className='toast'; t.textContent=msg;
            document.body.appendChild(t); setTimeout(()=>t.remove(), 2500);
        }

        document.getElementById('btnPanelSwitch').addEventListener('click', () => {
            const next = {buyer:'seller', seller:'dev', dev:'buyer'};
            if (next[currentPanel]==='seller') document.getElementById('sellerPinOverlay').classList.add('open');
            else if (next[currentPanel]==='dev') document.getElementById('devPinOverlay').classList.add('open');
            else switchPanel('buyer');
        });
        document.getElementById('btnSellerLogin').addEventListener('click', () => {
            if (document.getElementById('sellerPinInput').value === sellerPin) { document.getElementById('sellerPinOverlay').classList.remove('open'); switchPanel('seller'); }
            else toast('Wrong PIN');
        });
        document.getElementById('btnDevLogin').addEventListener('click', () => {
            if (document.getElementById('devPinInput').value === devPin) { document.getElementById('devPinOverlay').classList.remove('open'); switchPanel('dev'); }
            else toast('Wrong PIN');
        });

        document.getElementById('mobileMenuBtn').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('mobile-open'));

        if (!store || Object.keys(store).length===0) store = JSON.parse(JSON.stringify(defaultStore));
        currentCategory = Object.keys(store)[0] || null;
        if (currentCategory) currentSubtype = Object.keys(store[currentCategory].subtypes)[0] || null;
        switchPanel('buyer');
    })();
</script>
</body>
</html>

