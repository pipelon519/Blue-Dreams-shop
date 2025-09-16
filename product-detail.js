document.addEventListener('DOMContentLoaded', () => {

    // --- Base de Datos DEFINITIVA con Opciones Detalladas y Corregidas ---
    const productsDB = {
        'cf-01': {
            name: 'Caramel Frappuccino', base_price: 13500, short_desc: 'Café con sirope de caramelo, leche y crema batida.', images: ['assets/frapuccino.png'], rating: 4.8, reviews: 245, sku: 'BD-CF-001', category: 'Café Helado',
            options: [
                { title: 'Tamaño', items: [{ name: 'Pequeño', price_modifier: 0 }, { name: 'Mediano', price_modifier: 1000 }, { name: 'Grande', price_modifier: 2500 }] },
                { title: 'Tipo de Leche', items: [{ name: 'Entera', price_modifier: 0 }, { name: 'Deslactosada', price_modifier: 500 }, { name: 'Almendras', price_modifier: 1500 }] },
                { title: 'Adicional', items: [{ name: 'Ninguno', price_modifier: 0 }, { name: 'Crema Batida', price_modifier: 1000 }, { name: 'Sirope Extra', price_modifier: 1200 }] }
            ]
        },
        'cc-01': {
            name: 'Café Latte', base_price: 9500, short_desc: 'Café espresso con leche vaporizada y una fina capa de espuma.', images: ['assets/img13.png', 'assets/coffee-latte-1.jfif', 'assets/coffee-latte-2.webp', 'assets/coffee-latte-3.jpg'], rating: 4.7, reviews: 198, sku: 'BD-CC-001', category: 'Café Caliente',
            options: [
                { title: 'Tamaño', items: [{ name: 'Pequeño', price_modifier: 0 }, { name: 'Mediano', price_modifier: 1000 }, { name: 'Grande', price_modifier: 2000 }] },
                { title: 'Tipo de Leche', items: [{ name: 'Entera', price_modifier: 0 }, { name: 'Deslactosada', price_modifier: 500 }, { name: 'Almendras', price_modifier: 1500 }] }
            ]
        },
        'p-01':  {
            name: 'Pastel', base_price: 5500, short_desc: 'Suave y esponjosa torta con un glaseado de limón.', images: ['assets/torta-limon-1.png', 'assets/torta-limon.png', 'assets/pastel1.avif', 'assets/pastel2.jpg', 'assets/pastel3.jpg', 'assets/selva-negra.avif'], rating: 4.9, reviews: 150, sku: 'BD-P-001', category: 'Postres',
            options: [
                { title: 'Sabor', items: [{ name: 'Vainilla', price_modifier: 0 }, { name: 'Chocolate', price_modifier: 0 }, { name: 'Fresa', price_modifier: 0 }, { name: 'Vainilla y Chocolate', price_modifier: 0 }, { name: 'Frutos Rojos', price_modifier: 0 }, { name: 'Limón', price_modifier: 0 }, { name: 'Selva Negra', price_modifier: 0 }, { name: 'Vainilla y Fresa', price_modifier: 0 }, { name: 'Vainilla y Limón', price_modifier: 0 }, { name: 'Chocolate y Fresa', price_modifier: 0 }, { name: 'Chocolate y Limón', price_modifier: 0 }, { name: 'Fresa y Limón', price_modifier: 0 }, { name: 'Vainilla y Selva Negra', price_modifier: 0 }, { name: 'Chocolate y Selva Negra', price_modifier: 0 }, { name: 'Fresa y Selva Negra', price_modifier: 0 },] },
                { title: 'Porciones', items: [{ name: 'Una', price_modifier: 0 }, { name: 'Dos', price_modifier: 3500 }, { name: 'Tres', price_modifier: 6000 }] },
                { title: 'Adicional', items: [{ name: 'Ninguno', price_modifier: 0 }, { name: 'Bola de Helado', price_modifier: 3000 }, { name: 'Salsa de Chocolate', price_modifier: 1500 }] }
            ]
        },
        'g-01':  {
            name: 'Grano Origen Sierra Nevada', base_price: 45000, short_desc: 'Café de altura con notas cítricas y un cuerpo balanceado.', images: ['assets/grano-sierra.png'], rating: 5.0, reviews: 98, sku: 'BD-G-001', category: 'Granos',
            options: [
                { title: 'Presentación', items: [{ name: '250g', price_modifier:0 }, { name: '500g', price_modifier: 20000 }, { name: '1kg', price_modifier: 40000 }] },
                { title: 'Molienda', items: [{ name: 'Grano Entero', price_modifier: 0 }, { name: 'Fina (Espresso)', price_modifier: 0 }, { name: 'Media (Filtro)', price_modifier: 0 }] }
            ]
        },
        'cf-02': {
            name: 'Chocolate Frappuccino', base_price: 13500, short_desc: 'Dulce chocolate con café, leche y crema batida.', images: ['assets/chocofrapu1.jpg', 'assets/mocha-frapuccino.png'], rating: 4.8, reviews: 210, sku: 'BD-CF-002', category: 'Café Helado',
            options: [
                { title: 'Tamaño', items: [{ name: 'Pequeño', price_modifier: 0 }, { name: 'Mediano', price_modifier: 1000 }, { name: 'Grande', price_modifier: 2500 }] },
                { title: 'Tipo de Leche', items: [{ name: 'Entera', price_modifier: 0 }, { name: 'Deslactosada', price_modifier: 500 }, { name: 'Almendras', price_modifier: 1500 }] },
                { title: 'Adicional', items: [{ name: 'Ninguno', price_modifier: 0 }, { name: 'Crema Batida', price_modifier: 1000 }] }
            ]
        },
        'cf-03': {
            name: 'Matcha Latte Helado', base_price: 14000, short_desc: 'Té verde matcha de alta calidad con leche y un toque dulce, servido frío.', images: ['assets/matcha1.jfif', 'assets/matcha-latte.png'], rating: 4.9, reviews: 180, sku: 'BD-CF-003', category: 'Café Helado',
            options: [
                { title: 'Tamaño', items: [{ name: 'Pequeño', price_modifier: 0 }, { name: 'Mediano', price_modifier: 1000 }, { name: 'Grande', price_modifier: 2500 }] },
                { title: 'Tipo de Leche', items: [{ name: 'Entera', price_modifier: 0 }, { name: 'Deslactosada', price_modifier: 500 }, { name: 'Almendras', price_modifier: 1500 }] }
            ]
        },
        'cf-04': {
            name: 'Frapuccino de Vainilla', base_price: 13000, short_desc: 'Una cremosa mezcla de vainilla, café y leche, cubierta con crema.', images: ['assets/frapu1.jpg', 'assets/vanilla-frappe.png', 'assets/frapu2.jpg'], rating: 4.7, reviews: 155, sku: 'BD-CF-004', category: 'Café Helado',
             options: [
                { title: 'Tamaño', items: [{ name: 'Pequeño', price_modifier: 0 }, { name: 'Mediano', price_modifier: 1000 }, { name: 'Grande', price_modifier: 2500 }] },
                { title: 'Tipo de Leche', items: [{ name: 'Entera', price_modifier: 0 }, { name: 'Deslactosada', price_modifier: 500 }, { name: 'Almendras', price_modifier: 1500 }] },
                { title: 'Adicional', items: [{ name: 'Ninguno', price_modifier: 0 }, { name: 'Crema Batida', price_modifier: 1000 }, { name: 'Sirope Extra', price_modifier: 1200 }] }
             ]
        },
        'cc-02': {
            name: 'Americano', base_price: 7000, short_desc: 'Espresso intenso diluido con agua caliente, de sabor puro y fuerte.', images: ['assets/americano1.webp', 'assets/americano2.webp', 'assets/americano.png'], rating: 4.6, reviews: 120, sku: 'BD-CC-002', category: 'Café Caliente',
            options: [
                { title: 'Tamaño', items: [{ name: 'Pequeño', price_modifier: 0 }, { name: 'Mediano', price_modifier: 1000 }, {name: 'Grande', price_modifier: 2000 }] },
                { title: 'Intensidad', items: [{ name: 'Normal', price_modifier: 0 }, { name: 'Shot Extra', price_modifier: 2000 }] }
            ]
        },
        'cc-03': {
            name: 'Capuccino', base_price: 10500, short_desc: 'La perfecta armonía entre espresso, leche vaporizada y abundante espuma.', images: ['assets/capuccino.png', 'assets/gallery-thumb-2.png', 'assets/gallery-thumb-3.png', 'assets/gallery-thumb-4.png'], rating: 4.8, reviews: 280, sku: 'BD-CC-003', category: 'Café Caliente',
            options: [
                { title: 'Tamaño', items: [{ name: 'Pequeño', price_modifier: 0 }, { name: 'Mediano', price_modifier: 1000 }, { name: 'Grande', price_modifier: 2000 }] },
                { title: 'Tipo de Leche', items: [{ name: 'Entera', price_modifier: 0 }, { name: 'Deslactosada', price_modifier: 500 }, { name: 'Almendras', price_modifier: 1500 }] },
                { title: 'Topping', items: [{ name: 'Ninguno', price_modifier: 0 }, { name: 'Canela en Polvo', price_modifier: 300 }, { name: 'Cacao en Polvo', price_modifier: 300 }] }
            ]
        },
        'cc-04': {
            name: 'Chocolate Caliente', base_price: 9000, short_desc: 'Chocolate de origen derretido en leche cremosa, un abrazo en una taza.', images: ['assets/hot-chocolate.png', 'assets/gallery-thumb-2.png', 'assets/gallery-thumb-3.png', 'assets/gallery-thumb-4.png'], rating: 4.9, reviews: 250, sku: 'BD-CC-004', category: 'Café Caliente',
            options: [
                { title: 'Tamaño', items: [{ name: 'Pequeño', price_modifier: 0 }, { name: 'Mediano', price_modifier: 1000 }, { name: 'Grande', price_modifier: 2000 }] },
                { title: 'Tipo de Leche', items: [{ name: 'Entera', price_modifier: 0 }, { name: 'Deslactosada', price_modifier: 500 }, { name: 'Almendras', price_modifier: 1500 }] },
                { title: 'Adicional', items: [{ name: 'Ninguno', price_modifier: 0 }, { name: 'Masmelos', price_modifier: 800 }, { name: 'Crema Batida', price_modifier: 1000 }] }
            ]
        },
        'p-02':  {
            name: 'Brownie con Helado', base_price: 11500, short_desc: 'Brownie de chocolate tibio con una bola de helado de vainilla.', images: ['assets/brownie.png', 'assets/brownie-1.jfif'], rating: 4.9, reviews: 310, sku: 'BD-P-002', category: 'Postres',
            options: [
                { title: 'Salsa', items: [{ name: 'Chocolate', price_modifier: 0 }, { name: 'Caramelo', price_modifier: 500 }, { name: 'Frutos Rojos', price_modifier: 500 }] },
                { title: 'Adicional', items: [{ name: 'Ninguno', price_modifier: 0 }, { name: 'Nueces', price_modifier: 1000 }, { name: 'M&Ms', price_modifier: 1500 }, {name:'Grajeas', price_modifier: 500 }], },
                {title: 'Sabor De Helado', items: [{ name: 'Vainilla', price_modifier: 0 }, { name: 'Chocolate', price_modifier: 0 }, { name: 'Arequipe', price_modifier: 0 }, { name: 'Frutos Rojos', price_modifier: 0 }, { name: 'Vainilla y Chocolate', price_modifier: 0 }] },
                {title: 'Porciones De Helado', items: [ { name: 'Una', price_modifier: 0}, {name: 'Dos', price_modifier: 3500}, {name: 'Tres', price_modifier: 6000}]}
            ]
        },
        'p-03':  {
            name: 'Cheesecake Frutos Rojos', base_price: 12000, short_desc: 'Cremoso cheesecake sobre una base de galleta, cubierto con mermelada de frutos rojos.', images: ['assets/cheesecake.png', 'assets/gallery-thumb-2.png', 'assets/gallery-thumb-3.png', 'assets/gallery-thumb-4.png'], rating: 4.9, reviews: 290, sku: 'BD-P-003', category: 'Postres',
            options: [
                { title: 'Adicional', items: [{ name: 'Ninguno', price_modifier: 0 }, { name: 'Porción Extra de Salsa', price_modifier: 1500 }] }
            ]
        },
        'p-04':  {
            name: 'Galletas Artesanales', base_price: 6000, short_desc: 'Elige tu sabor favorito y llévalas por unidad o en nuestras cajas especiales.', images: ['assets/cookie.png', 'assets/caja-galletas.jpg', 'assets/galletas-varias.jpg'], rating: 4.8, reviews: 400, sku: 'BD-P-004', category: 'Postres',
            options: [
                { title: 'Sabor', items: [{ name: 'Choco Chips', price_modifier: 0 }, { name: 'Avena Pasas', price_modifier: 0 }, { name: 'Red Velvet', price_modifier: 1000 }, { name: 'Macadamia', price_modifier: 1500 }] },
                { title: 'Presentación', items: [{ name: 'Unidad', price_modifier: 0 }, { name: 'Caja x4', price_modifier: 16000 }, { name: 'Caja x12', price_modifier: 59000 }] },
                { title: 'Adicional', items: [{ name: 'Ninguno', price_modifier: 0 }, { name: 'Vaso de Leche', price_modifier: 2000 }, { name: 'Salsa de Chocolate', price_modifier: 1500 }] }
            ]
        },
        'g-02':  {
            name: 'Grano Blend de la Casa', base_price: 38000, short_desc: 'Nuestra mezcla secreta. Intenso, con notas a chocolate y frutos secos.', images: ['assets/grano-blend.png'], rating: 4.8, reviews: 110, sku: 'BD-G-002', category: 'Granos',
            options: [
                { title: 'Presentación', items: [{ name: '250g', price_modifier:0 }, { name: '500g', price_modifier: 17000 }, { name: '1kg', price_modifier: 35000 }] },
                { title: 'Molienda', items: [{ name: 'Grano Entero', price_modifier: 0 }, { name: 'Fina (Espresso)', price_modifier: 0 }, { name: 'Media (Filtro)', price_modifier: 0 }] }
            ]
        },
        'g-03':  {
            name: 'Grano Orgánico Antioquia', base_price: 55000, short_desc: 'Cultivado sin pesticidas, este café ofrece un sabor puro y notas afrutadas.', images: ['assets/grano-antioquia.png'], rating: 5.0, reviews: 130, sku: 'BD-G-003', category: 'Granos',
            options: [
                { title: 'Presentación', items: [{ name: '250g', price_modifier:0 }, { name: '500g', price_modifier: 25000 }, { name: '1kg', price_modifier: 50000 }] },
                { title: 'Molienda', items: [{ name: 'Grano Entero', price_modifier: 0 }, { name: 'Fina (Espresso)', price_modifier: 0 }, { name: 'Media (Filtro)', price_modifier: 0 }] }
            ]
        },
        'g-04':  {
            name: 'Grano Descafeinado', base_price: 42000, short_desc: 'Todo el sabor del café, sin la cafeína. Proceso de lavado natural.', images: ['assets/grano-finca.png'], rating: 4.7, reviews: 95, sku: 'BD-G-004', category: 'Granos',
            options: [
                { title: 'Presentación', items: [{ name: '250g', price_modifier:0 }, { name: '500g', price_modifier: 18000 }, { name: '1kg', price_modifier: 38000 }] },
                { title: 'Molienda', items: [{ name: 'Grano Entero', price_modifier: 0 }, { name: 'Fina (Espresso)', price_modifier: 0 }, { name: 'Media (Filtro)', price_modifier: 0 }] }
            ]
        }
    };

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 'cf-01';
    const currentProduct = productsDB[productId];

    const pageContent = document.querySelector('.page-content');
    const mainImage = document.getElementById('main-product-image');
    const thumbnailsContainer = document.getElementById('thumbnail-gallery');
    const productNameEl = document.getElementById('product-name');
    const productDescEl = document.getElementById('product-short-desc');
    const currentPriceEl = document.getElementById('product-price');
    const optionsWrapper = document.getElementById('product-options-wrapper');
    const quantityEl = document.getElementById('quantity');
    const decreaseQtyBtn = document.getElementById('decrease-qty');
    const increaseQtyBtn = document.getElementById('increase-qty');
    const addToCartBtn = document.querySelector('.add-to-cart-detail-btn');
    const productSkuEl = document.getElementById('product-sku');
    const productCategoryEl = document.getElementById('product-category');

    if (!currentProduct) {
        pageContent.innerHTML = '<div class="product-not-found"><h1><i class="fa-solid fa-triangle-exclamation"></i> Producto no encontrado</h1><p>El producto que buscas no existe o fue removido.</p><a href="products.html" class="btn-primary">Volver a Productos</a></div>';
        return;
    }

    let selectedOptions = {};

    function renderProduct() {
        productNameEl.textContent = currentProduct.name;
        productDescEl.textContent = currentProduct.short_desc;
        productSkuEl.textContent = currentProduct.sku;
        productCategoryEl.textContent = currentProduct.category;
        mainImage.src = currentProduct.images[0];
        
        thumbnailsContainer.innerHTML = currentProduct.images.map((img, i) => 
            `<img src="${img}" alt="Thumbnail ${i+1}" class="thumbnail-item ${i === 0 ? 'active' : ''}" data-index="${i}">`
        ).join('');
        
        document.querySelectorAll('.thumbnail-item').forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                mainImage.src = currentProduct.images[index];
                document.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        optionsWrapper.innerHTML = '';
        if (currentProduct.options && currentProduct.options.length > 0) {
            currentProduct.options.forEach((optionGroup) => {
                const groupDiv = document.createElement('div');
                groupDiv.className = 'option-group';
                
                const label = document.createElement('label');
                label.className = 'option-group-label';
                label.textContent = optionGroup.title;
                groupDiv.appendChild(label);

                const selectorDiv = document.createElement('div');
                selectorDiv.className = 'option-selector';

                optionGroup.items.forEach((item, itemIndex) => {
                    if (itemIndex === 0) {
                        selectedOptions[optionGroup.title] = item.name;
                    }

                    const btn = document.createElement('button');
                    btn.className = 'option-btn' + (itemIndex === 0 ? ' active' : '');
                    btn.textContent = item.name;
                    btn.dataset.group = optionGroup.title;
                    btn.dataset.name = item.name;

                    btn.addEventListener('click', () => {
                        handleOptionClick(optionGroup.title, item.name, btn);
                    });

                    selectorDiv.appendChild(btn);
                });
                
                groupDiv.appendChild(selectorDiv);
                optionsWrapper.appendChild(groupDiv);
            });
        }

        updatePrice();
    }

    function handleOptionClick(groupTitle, itemName, clickedButton) {
        selectedOptions[groupTitle] = itemName;
        document.querySelectorAll(`.option-btn[data-group="${groupTitle}"]`).forEach(btn => {
            btn.classList.remove('active');
        });
        clickedButton.classList.add('active');
        updatePrice();
    }

    function updatePrice() {
        let finalPrice = currentProduct.base_price;
        for (const groupTitle in selectedOptions) {
            const itemName = selectedOptions[groupTitle];
            const optionGroup = currentProduct.options.find(g => g.title === groupTitle);
            if (optionGroup) {
                const selectedItem = optionGroup.items.find(i => i.name === itemName);
                if (selectedItem) {
                    finalPrice += selectedItem.price_modifier;
                }
            }
        }
        
        const quantity = parseInt(quantityEl.textContent);
        currentPriceEl.textContent = formatPrice(finalPrice * quantity);
    }
    
    increaseQtyBtn.addEventListener('click', () => {
        quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
        updatePrice();
    });
    decreaseQtyBtn.addEventListener('click', () => {
        const currentQty = parseInt(quantityEl.textContent);
        if (currentQty > 1) {
            quantityEl.textContent = currentQty - 1;
            updatePrice();
        }
    });

    addToCartBtn.addEventListener('click', () => {
        const optionsSummary = Object.values(selectedOptions).join(', ');
        const detailedName = `${currentProduct.name}${optionsSummary ? ` (${optionsSummary})` : ''}`;
        
        let unitPrice = currentProduct.base_price;
        for (const groupTitle in selectedOptions) {
            const itemName = selectedOptions[groupTitle];
            const optionGroup = currentProduct.options.find(g => g.title === groupTitle);
            if(optionGroup) {
                const selectedItem = optionGroup.items.find(i => i.name === itemName);
                if (selectedItem) {
                    unitPrice += selectedItem.price_modifier;
                }
            }
        }

        const itemToAdd = {
            id: `${productId}_${Object.values(selectedOptions).join('_').replace(/\s+/g, '-')}`,
            name: detailedName,
            price: unitPrice,
            image: currentProduct.images[0],
            quantity: parseInt(quantityEl.textContent)
        };
        
        if(window.addToCart) {
            window.addToCart(itemToAdd, itemToAdd.quantity);
        }
    });

    renderProduct();
});

function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}