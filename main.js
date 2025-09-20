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
   // ===================================
// LÓGICA DEL SLIDER PRINCIPAL (CON FUNCIÓN DE ROTACIÓN ADAPTABLE)
// ===================================
const mainSlider = document.querySelector('.slider');
if (mainSlider) {
    const list = mainSlider.querySelector('.list');
    const items = mainSlider.querySelectorAll('.list .item');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const circle = document.querySelector('.circle');

    if (list && items.length > 0 && prev && next) {
        let count = items.length;
        let active = 1; // El índice del item activo

        const runCarousel = () => {
            if (active < 0 || active >= count) return;

            // Se calcula el ancho del item activo actual. Puede variar si la ventana cambia.
            const width_item = items[active].offsetWidth;
            if (width_item === 0) return; // Evitar cálculos si el elemento está oculto

            // Ocultar/mostrar botones en los extremos
            prev.style.display = (active === 0) ? 'none' : 'block';
            next.style.display = (active === count - 1) ? 'none' : 'block';

            // Limpiar la clase 'active' de cualquier otro item
            items.forEach(item => item.classList.remove('active'));
            // Aplicar la clase 'active' solo al item actual para la rotación 0
            items[active].classList.add('active');

            // Calcular la posición X para centrar el elemento activo.
            // Se resta la mitad del ancho del viewport menos la mitad del ancho del item para centrarlo.
            const leftPosition = (mainSlider.offsetWidth / 2) - (width_item / 2);
            const transformX = -items[active].offsetLeft + leftPosition;
            
            // Aplicar la transformación de traslación a la lista completa
            list.style.transform = `translateX(${transformX}px)`;
        };

        next.onclick = () => {
            active = Math.min(active + 1, count - 1);
            runCarousel();
        };

        prev.onclick = () => {
            active = Math.max(active - 1, 0);
            runCarousel();
        };

        // El ResizeObserver se asegura de que runCarousel se ejecute si cambia el tamaño
        // Esto hace que la rotación y posición se recalculen y se adapten siempre
        let resizeObserver = new ResizeObserver(runCarousel);
        resizeObserver.observe(mainSlider);

        // Animación del texto en círculo (sin cambios)
        if (circle && circle.innerText) {
            const textCircle = circle.innerText.split('');
            circle.innerText = '';
            textCircle.forEach((value, key) => {
                let newSpan = document.createElement("span");
                newSpan.innerText = value;
                let rotateThisSpan = (360 / textCircle.length) * (key + 1);
                newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
                circle.appendChild(newSpan);
            });
        }
        
        // Llamada inicial para que todo se posicione correctamente al cargar la página
        runCarousel();
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