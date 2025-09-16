const formatCOP = (amount) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

// ... (La lista de productos completa se mantiene igual)
const products = [
    {
        id: 'cf-01',
        name: 'Caramel Frappuccino',
        price: 13500,
        image: 'assets/frapuccino.png',
        category: 'cafe-helado',
        description: 'Café con sirope de caramelo, leche y crema batida.',
        tag: 'new'
    },
    {
        id: 'cc-01',
        name: 'Café Latte',
        price: 9500,
        image: 'assets/img13.png',
        category: 'cafe-caliente',
        description: 'Café espresso con leche vaporizada y una fina capa de espuma.'
    },
    {
        id: 'p-01',
        name: 'Torta de Limón',
        price: 9500,
        image: 'assets/torta-limon.png',
        category: 'postres',
        description: 'Suave y esponjosa torta con un glaseado de limón.'
    },
    {
        id: 'g-01',
        name: 'Grano Origen Sierra Nevada',
        price: 45000,
        image: 'assets/grano-sierra.png',
        category: 'granos',
        description: 'Café de altura con notas cítricas y un cuerpo balanceado. Bolsa de 250g.'
    },
    {
        id: 'cf-02',
        name: 'Chocolate Frappuccino',
        price: 13500,
        image: 'assets/mocha-frapuccino.png',
        category: 'cafe-helado',
        description: 'Dulce chocolate con café, leche y crema batida.',
        tag: 'hot'
    },
    {
        id: 'cf-03',
        name: 'Matcha Latte Helado',
        price: 14000,
        image: 'assets/matcha-latte.png',
        category: 'cafe-helado',
        description: 'Té verde matcha de alta calidad con leche y un toque dulce, servido frío.'
    },
    {
        id: 'cf-04',
        name: 'Frapuccino de Vainilla',
        price: 13000,
        image: 'assets/vanilla-frappe.png',
        category: 'cafe-helado',
        description: 'Una cremosa mezcla de vainilla, café y leche, cubierta con crema.'
    },
    
    {
        id: 'cc-02',
        name: 'Americano',
        price: 7000,
        image: 'assets/americano.png',
        category: 'cafe-caliente',
        description: 'Espresso intenso diluido con agua caliente, de sabor puro y fuerte.'
    },
    {
        id: 'cc-03',
        name: 'Capuccino',
        price: 10500,
        image: 'assets/capuccino.png',
        category: 'cafe-caliente',
        description: 'La perfecta armonía entre espresso, leche vaporizada y abundante espuma.'
    },
    {
        id: 'cc-04',
        name: 'Chocolate Caliente',
        price: 9000,
        image: 'assets/hot-chocolate.png',
        category: 'cafe-caliente',
        description: 'Chocolate de origen derretido en leche cremosa, un abrazo en una taza.'
    },

    // --- CATEGORÍA: POSTRES ---
    
    {
        id: 'p-02',
        name: 'Brownie con Helado',
        price: 11500,
        image: 'assets/brownie.png',
        category: 'postres',
        description: 'Brownie de chocolate tibio con una bola de helado de vainilla.'
    },
    {
        id: 'p-03',
        name: 'Cheesecake',
        price: 12000,
        image: 'assets/cheesecake.png',
        category: 'postres',
        description: 'Cremoso cheesecake sobre una base de galleta, cubierto con mermelada de frutos rojos.'
    },
    {
        id: 'p-04',
        name: 'Galletas',
        price: 6000,
        image: 'assets/cookie.png',
        category: 'postres',
        description: 'Galleta gigante recién horneada con trozos de chocolate derretido.'
    },
    {
        id: 'g-02',
        name: 'Grano Blend de la Casa',
        price: 38000,
        image: 'assets/grano-blend.png',
        category: 'granos',
        description: 'Nuestra mezcla secreta. Intenso, con notas a chocolate y frutos secos. Bolsa de 250g.'
    },
    {
        id: 'g-03',
        name: 'Grano Orgánico Antioquia',
        price: 55000,
        image: 'assets/grano-antioquia.png',
        category: 'granos',
        description: 'Cultivado sin pesticidas, este café ofrece un sabor puro y notas afrutadas. Bolsa de 250g.'
    },
    {
        id: 'g-04',
        name: 'Grano De La Finca',
        price: 42000,
        image: 'assets/grano-finca.png',
        category: 'granos',
        description: 'Todo el sabor del café, sin la cafeína. Proceso de lavado natural. Bolsa de 250g.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const filterButtonsContainer = document.querySelector('.filter-buttons-container');

    const displayProducts = (filteredProducts) => {
        const productsToDisplay = filteredProducts || products;

        if (!productGrid) return;

        productGrid.innerHTML = productsToDisplay.map(product => {
            const tagHtml = product.tag ? `<div class="product-tag ${product.tag}">${product.tag.toUpperCase()}</div>` : '';

            // --- CAMBIO PRINCIPAL AQUÍ ---
            // Se reemplazó el <button> por una etiqueta <a> que lleva a la página de detalle
        return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${tagHtml}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="product-price">${formatCOP(product.price)}</span>
            </div>
            <a href="product-detail.html?id=${product.id}" class="add-to-cart-btn">Ver Opciones</a>
        </div>
        `;

        }).join('');

        // Ya no necesitamos el event listener para los botones, porque los enlaces funcionan por sí solos.
    };

    const displayFilterButtons = () => {
        const categories = ['all', ...new Set(products.map(p => p.category))];

        if (!filterButtonsContainer) return;

        filterButtonsContainer.innerHTML = categories.map(category => {
            const categoryName = category.replace(/-/g, ' ');
            return `<button class="filter-btn" data-category="${category}">${categoryName}</button>`;
        }).join('');

        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.dataset.category;

                filterButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                if (category === 'all') {
                    displayProducts(products);
                } else {
                    const filteredProducts = products.filter(p => p.category === category);
                    displayProducts(filteredProducts);
                }
            });
        });

        if (filterButtons.length > 0) {
            filterButtons[0].classList.add('active');
        }
    };

    displayProducts();
    displayFilterButtons();
});
