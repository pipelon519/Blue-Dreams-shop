document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM relacionados con el contenido del carrito
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotalFinal = document.getElementById('cart-total-final');
    const resetCartBtn = document.querySelector('.reset-cart-btn');

    // Cargar el carrito desde localStorage o inicializarlo como un array vacío
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // --- FUNCIONES INTERNAS DEL CARRITO ---

    const saveCart = () => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    };

    const updateCart = () => {
        renderCartItems();
        updateCartTotals();
        updateCartIconCount();
        saveCart();
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

    // --- RENDERIZADO (Actualización Visual) ---

    const renderCartItems = () => {
        if (!cartItemsContainer) return; // Salir si el contenedor no existe
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
            const price = parseFloat(item.price) || 0;
            const quantity = parseInt(item.quantity) || 0;
            itemElement.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <p class="item-price">$${(price * quantity).toLocaleString('es-CO')}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn minus-btn" data-id="${item.id}">-</button>
                        <span class="quantity-display">${quantity}</span>
                        <button class="quantity-btn plus-btn" data-id="${item.id}">+</button>
                    </div>
                    <button class="delete-item-btn" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    };

    const updateCartTotals = () => {
        if (!cartSubtotal || !cartTotalFinal) return;
        const subtotal = cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
        cartSubtotal.textContent = `$${subtotal.toLocaleString('es-CO')}`;
        cartTotalFinal.textContent = `$${subtotal.toLocaleString('es-CO')}`; // Asumiendo sin otros cargos
    };

    const updateCartIconCount = () => {
        if (!cartCount) return;
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCount.textContent = totalItems;
    };

    // --- FUNCIÓN PÚBLICA y EVENT LISTENERS ---

    // Función global para añadir productos al carrito
    window.addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity++;
        } else {
            const price = parseFloat(product.price) || 0;
            cart.push({ ...product, price: price, quantity: 1 });
        }
        updateCart();
        
        // Abrir la barra lateral del carrito (lógica de main.js)
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        }
    };

    // Listeners para acciones DENTRO del carrito
    if (resetCartBtn) {
        resetCartBtn.addEventListener('click', resetCart);
    }

    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            const target = e.target;
            const id = target.closest('[data-id]')?.dataset.id;
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
    }

    // --- CARGA INICIAL ---
    // Actualiza el estado visual del carrito tan pronto como la página se carga
    updateCart();
});
