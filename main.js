document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // Lógica para el Menú Hamburguesa
    // ===================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navCapsula = document.querySelector('.nav-capsula');

    if (menuToggle && navCapsula) {
        menuToggle.addEventListener('click', () => {
            // Muestra u oculta el menú
            navCapsula.classList.toggle('active');

            // Evita que el fondo se desplace cuando el menú está abierto
            if (navCapsula.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Cierra el menú si se hace clic en un enlace (para SPA o navegación en la misma página)
        navCapsula.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navCapsula.classList.contains('active')) {
                    navCapsula.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // ===================================
    // Lógica para el Header con Scroll
    // ===================================
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ===================================
    // LÓGICA DEL SLIDER PRINCIPAL
    // ===================================
    const mainSlider = document.querySelector('.slider');
if (mainSlider) {
    let list = mainSlider.querySelector('.list');
    let items = mainSlider.querySelectorAll('.list .item');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    if (list && items.length > 0 && prev && next) {
        let count = items.length;
        let active = 1; // Empezar desde el segundo item
        let width_item = items[active] ? items[active].offsetWidth : 0;

        function runCarousel() {
            if (active < 0 || active >= count) return;
            prev.style.display = (active === 0) ? 'none' : 'block';
            next.style.display = (active === count - 1) ? 'none' : 'block';
            
            let old_active = mainSlider.querySelector('.item.active');
            if (old_active) old_active.classList.remove('active');
            items[active].classList.add('active');
            
            let leftTransform = width_item * (active - 1) * -1;
            list.style.transform = `translateX(${leftTransform}px)`;
        }

        next.addEventListener('click', () => {
            active = active >= count - 1 ? count - 1 : active + 1;
            runCarousel();
        });

        prev.addEventListener('click', () => {
            active = active <= 0 ? 0 : active - 1;
            runCarousel();
        });

        let resizeObserver = new ResizeObserver(() => {
            width_item = items[active] ? items[active].offsetWidth : 0;
            runCarousel();
        });
        resizeObserver.observe(mainSlider);

        let circle = document.querySelector('.circle');
        if (circle && circle.innerText) {
            let textCircle = circle.innerText.split('');
            circle.innerText = '';
            textCircle.forEach((value, key) => {
                let newSpan = document.createElement("span");
                newSpan.innerText = value;
                let rotateThisSpan = (360 / textCircle.length) * (key + 1);
                newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
                circle.appendChild(newSpan);
            });
        }
        
        runCarousel(); // Llama inicial para establecer la posición
    }
}

    // ========================================================
    //  CONTROL CENTRALIZADO PARA ABRIR Y CERRAR EL CARRITO
    // ========================================================
    const cartBtn = document.querySelector('.cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.querySelector('.close-cart-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    const continueShoppingBtn = document.querySelector('.continue-shopping-btn');

    const toggleCart = () => {
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.toggle('active');
            cartOverlay.classList.toggle('active');
        }
    };

    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);
    if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', toggleCart);

});


// La lógica del slider no se modifica, se mantiene igual.
const mainSlider = document.querySelector('.slider');
if (mainSlider) {
    // ... (código del slider sin cambios)
}
