
# Blueprint: Blue Dreams E-Commerce

## Overview
This document outlines the plan for building and refining the Blue Dreams Coffee & Bakery e-commerce website. The goal is to create a visually appealing, user-friendly, and fully functional online store.

## Current Plan: Cart Overhaul & Bug Fixes

1.  **Implement New Shopping Cart Design (Based on Image):**
    *   **HTML Structure:** Rebuild the cart's HTML (`<aside id="cart-sidebar">`) in all pages to match the provided design, including a header with "Your Order" and "Clear Cart" buttons, an item list area, and a footer with Subtotal, Total, and action buttons.
    *   **CSS Styling (`cart.css`):** Create a new `cart.css` to style the cart with the Blue Dreams theme, replicating the layout, item controls, and summary section from the user's image.
    *   **JavaScript Logic (`cart.js`):**
        *   Ensure persistence with `localStorage`.
        *   Implement `updateCart()` to render items, calculate totals, and update the display.
        *   Add event listeners for: closing on outside click, clearing the entire cart, increasing/decreasing item quantity, and deleting a single item.
    *   **Create Checkout Page (`cart.html`):** Build a new, dedicated `cart.html` page that the main "Checkout" button will link to.

2.  **Fix Critical Script Loading Order:**
    *   In `index.html`, `products.html`, `about.html`, and `contact.html`, ensure that `<script src="cart.js"></script>` is loaded *before* `<script src="productos.js"></script>`. This is essential for the "Add to Cart" functionality to work correctly.

3.  **Finalize User Button Style:**
    *   Add the new CSS rules to `style.css` to make the user button circular, white, and with a hover effect, as previously discussed.

## Completed Tasks

*   **Hero Section Redesign:** Updated `products.html` with a new two-column layout.
*   **Offers Section:** Added the offers section back to `products.html`.
*   **User Button Link:** Wrapped the user icon in a link to `form.html` across all pages.
*   **Initial Local Storage:** Implemented the first version of `localStorage` in `cart.js`.
