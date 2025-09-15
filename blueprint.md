
# Blueprint: Blue Dreams E-Commerce

## Overview
This document outlines the plan for building and refining the Blue Dreams Coffee & Bakery e-commerce website. The goal is to create a visually appealing, user-friendly, and fully functional online store.

## Current Plan: Form Redesign

1.  **Rediseñar la Página de Formulario (`form.html`):
    *   **Fondo:** Aplicar la imagen `assets/fondo2.jpg` como fondo de pantalla completo.
    *   **Navegación:** Integrar la misma barra de navegación presente en las demás páginas para mantener la consistencia del diseño.
    *   **Doble Funcionalidad:** Reestructurar el contenido para tener dos formularios en uno:
        *   Un formulario para **Iniciar Sesión** (visible por defecto).
        *   Un formulario para **Registrarse** (inicialmente oculto).
    *   **Interactividad:** Añadir enlaces o botones que permitan al usuario cambiar fácilmente entre la vista de inicio de sesión y la de registro. La transición será fluida y animada.
    *   **Estilo:** Adaptar los estilos en `form.css` para que el contenedor del formulario mantenga el efecto de "cristal" (glassmorphism) sobre el nuevo fondo, asegurando que sea legible y atractivo.

## Completed Tasks

*   **Cart Overhaul & Bug Fixes:**
    *   Implemented the new shopping cart design based on the user-provided image.
    *   Corrected the script loading order on all pages (`index.html`, `products.html`, `about.html`, `contact.html`).
    *   Created `cart.css` with the new styles.
    *   Rewrote `cart.js` to handle `localStorage` persistence, dynamic rendering, and all cart actions (add, remove, update quantity, clear).
    *   Created the final checkout page, `cart.html`.
    *   Fixed the bug in `productos.js` preventing items from being added to the cart.
*   **Hero Section Redesign:** Updated `products.html` with a new two-column layout.
*   **Offers Section:** Added the offers section back to `products.html`.
*   **User Button Link:** Wrapped the user icon in a link to `form.html` across all pages.

