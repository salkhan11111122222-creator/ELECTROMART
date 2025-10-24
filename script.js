// Cart management functions
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        if (cart.length > 0) {
            cartCount.textContent = cart.length;
            cartCount.style.display = 'flex';
        } else {
            cartCount.style.display = 'none';
        }
    }
}

function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
}

function removeFromCart(productId) {
    let cart = getCart();
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart(cart);
    }
}

function updateQuantity(productId, newQuantity) {
    let cart = getCart();
    const currentItems = cart.filter(item => item.id === productId);
    const otherItems = cart.filter(item => item.id !== productId);
    
    if (newQuantity > 0 && currentItems.length > 0) {
        const product = currentItems[0];
        const newItems = Array(newQuantity).fill(product);
        saveCart([...otherItems, ...newItems]);
    } else if (newQuantity === 0) {
        saveCart(otherItems);
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
