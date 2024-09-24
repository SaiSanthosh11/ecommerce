let cart = [];
let couponDiscount = 0; 
let platformFee = 10;   
let shippingCharges = 5; 

// Fetch products from Fake Store API and display
function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            let productList = document.getElementById('product-list');
            productList.innerHTML = data.map(item => `
                <div class="product-item">
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <span>Price: $${item.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.title}', ${item.price}, '${item.image}')">Add to Cart</button>
                </div>
            `).join('');
        });
}

// Add product to the cart
function addToCart(id, title, price, image) {
    const item = cart.find(product => product.id === id);
    if (item) {
        item.quantity += 1;  // Increase quantity if item already exists
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }
    displayCart();
}

// Remove product from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    displayCart();
}

// Increase quantity of product in the cart
function increaseQuantity(id) {
    const item = cart.find(product => product.id === id);
    item.quantity += 1;
    displayCart();
}

// Decrease quantity of product in the cart
function decreaseQuantity(id) {
    const item = cart.find(product => product.id === id);
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        removeFromCart(id);
    }
    displayCart();
}

// Calculate total MRP (sum of item price * quantity without any discounts)
function calculateMRP() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

// Calculate discount based on coupon (percentage)
function calculateDiscount() {
    let totalMRP = calculateMRP();
    return ((totalMRP * couponDiscount) / 100).toFixed(2);
}

// Calculate final total after adding platform fee, shipping, and applying coupon discount
function calculateTotalAmount() {
    let totalMRP = calculateMRP();
    let discount = calculateDiscount();
    let finalAmount = (totalMRP - discount) + platformFee + shippingCharges;
    return finalAmount.toFixed(2);
}

// Display the cart items and billing details
function displayCart() {
    let cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear previous content

    let billingSummary = document.createElement('div');
    billingSummary.className = 'cart-billing';

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
        billingSummary.innerHTML = '';  // Clear billing summary if cart is empty
    } else {
        const cartItemsHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <h4>${item.title}</h4>
                <p>Price: $${item.price.toFixed(2)} | Quantity: ${item.quantity}</p>
                <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                <button class="cart-btn remove" onclick="removeFromCart(${item.id})">Remove</button>
                <button class="cart-btn" onclick="increaseQuantity(${item.id})">+</button>
                <button class="cart-btn" onclick="decreaseQuantity(${item.id})">-</button>
            </div>
        `).join('');

        // Wrap cart items in a div for vertical layout
        const cartBody = document.createElement('div');
        cartBody.className = 'cart-body';
        cartBody.innerHTML = cartItemsHTML;

        cartList.appendChild(cartBody);

        // Add billing summary
        billingSummary.innerHTML = `
            <h3>Total MRP: $${calculateMRP()}</h3>
            <p>Coupon Discount: -$${calculateDiscount()}</p>
            <p>Platform Fee: $${platformFee}</p>
            <p>Shipping Charges: $${shippingCharges}</p>
            <h2>Total Amount: $${calculateTotalAmount()}</h2>
            <button class="checkout-btn" onclick="placeOrder()">Place Order</button>
        `;
    }

    // Append the billing summary beside the cart items
    cartList.appendChild(billingSummary);
}

// Function to handle placing an order
function placeOrder() {
    alert(`Your order has been placed! Total amount: $${calculateTotalAmount()}`);
    cart = [];  // Clear the cart after order is placed
    displayCart();  // Refresh the cart display
}

// Search products
function searchItems() {
    let searchQuery = document.getElementById('search-bar').value.toLowerCase();
    
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            let filteredItems = data.filter(item => item.title.toLowerCase().includes(searchQuery));
            let productList = document.getElementById('product-list');
            productList.innerHTML = filteredItems.map(item => `
                <div class="product-item">
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <span>Price: $${item.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.title}', ${item.price}, '${item.image}')">Add to Cart</button>
                </div>
            `).join('');
        });
}

// Load products initially
fetchProducts();
