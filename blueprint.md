
# Blueprint: New Product Page Design

## Overview
This document outlines the plan to create a new product page with a modern design, inspired by the user's provided images. The page will include a functional shopping cart overlay.

## Current Plan
1.  **Fix Cart and Implement Local Storage:**
    *   Modify `cart.js` to use `localStorage` to persist cart items across page reloads.
    *   Ensure the cart correctly loads from `localStorage` on page load.
    *   Verify that adding, removing, and updating quantities works correctly and syncs with `localStorage`.

2.  **Update User Button:**
    *   In all relevant HTML files (`index.html`, `products.html`, `about.html`, `contact.html`), wrap the user icon button in a link to `form.html`.
    *   In `style.css`, restyle the `.user-btn` to be circular, white, and have appropriate padding.

3.  **Add Category Filter Buttons:**
    *   Create a container for the filter buttons in `products.html` above the product grid.
    *   Dynamically generate the filter buttons from the product categories in `productos.js`.
    *   Implement the filtering logic in `productos.js` to show/hide products based on the selected category.
    *   Style the filter buttons and their active state in `productos.css`.

4.  **Redesign Hero Section:**
    *   Update `products.html` with a new two-column layout for the hero section, based on the Starbucks image.

5.  **Verify Overall Functionality:**
    *   Test the entire site to ensure the hero section, filters, cart, and user button all work as expected.
