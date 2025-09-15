document.addEventListener('DOMContentLoaded', () => {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartBtn = document.querySelector('.cart-btn');
    const closeCartBtn = document.querySelector('.close-cart-btn');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotalFinal = document.getElementById('cart-total-final');
    const resetCartBtn = document.querySelector('.reset-cart-btn');
    const continueShoppingBtn = document.querySelector('.continue-shopping-btn');

    // Cargar el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // --- FUNCIONES DEL CARRITO ---

    const saveCart = () => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    };

    const updateCart = () => {
        renderCartItems();
        updateCartTotals();
        updateCartIconCount();
        saveCart();
    };

    const toggleCart = () => {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    };

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
        toggleCart(); // Abrir el carrito al añadir un producto
    };

    const changeQuantity = (productId, newQuantity) => {
        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex > -1) {
            if (newQuantity > 0) {
                cart[productIndex].quantity = newQuantity;
            } else {
                cart.splice(productIndex, 1); // Eliminar si la cantidad es 0 o menos
            }
        }
        updateCart();
    };

    const resetCart = () => {
        cart = [];
        updateCart();
    };

    // --- RENDERIZADO --- 

    const renderCartItems = () => {
        cartItemsContainer.innerHTML = ''; // Limpiar el contenedor

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="cart-empty-message">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>Tu carrito está vacío.</p>
                </div>
            `;
            return;
        }

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <p class="item-price">$${(item.price * item.quantity).toFixed(3)}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn minus-btn" data-id="${item.id}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn plus-btn" data-id="${item.id}">+</button>
                    </div>
                    <button class="delete-item-btn" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    };

    const updateCartTotals = () => {
        const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        cartSubtotal.textContent = `$${subtotal.toFixed(3)}`;
        cartTotalFinal.textContent = `$${subtotal.toFixed(3)}`; // Asumiendo que no hay otros cargos por ahora
    };

    const updateCartIconCount = () => {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCount.textContent = totalItems;
    };

    // --- EVENT LISTENERS ---

    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', toggleCart);
    }
    if (resetCartBtn) {
        resetCartBtn.addEventListener('click', resetCart);
    }
    

    cartItemsContainer.addEventListener('click', (e) => {
        const target = e.target;
        const parentItem = target.closest('.cart-item-controls');
        if (!parentItem) return;
        
        const id = target.dataset.id || parentItem.querySelector('.quantity-btn')?.dataset.id || parentItem.querySelector('.delete-item-btn')?.dataset.id;
        if (!id) return;
        
        const product = cart.find(item => item.id === id);
        if (!product) return;

        if (target.classList.contains('plus-btn')) {
            changeQuantity(id, product.quantity + 1);
        } else if (target.classList.contains('minus-btn')) {
            changeQuantity(id, product.quantity - 1);
        } else if (target.closest('.delete-item-btn')) {
            changeQuantity(id, 0); // Poner cantidad a 0 elimina el producto
        }
    });
    

    // --- EXPOSICIÓN GLOBAL Y CARGA INICIAL ---

    // Exponer la función addToCart globalmente para que `productos.js` pueda usarla
    window.addToCart = addToCart;

    // Carga inicial
    updateCart();
});
