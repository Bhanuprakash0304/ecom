
const cart = [];


function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
}


function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}


function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

  
    cartItems.innerHTML = '';

   
    let total = 0;
    for (const item of cart) {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
        total += item.price;
    }

    cartTotal.textContent = total.toFixed(2);
}


const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.parentElement.querySelector('h2').textContent;
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(name, price);
        displayCart();
    });
});


const cartButton = document.getElementById('cart-button');
cartButton.addEventListener('click', () => {
    const cartPage = document.getElementById('cart-page');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');


    cartItems.innerHTML = '';

    
    let total = 0;
    for (const item of cart) {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
        total += item.price;
    }

 
    cartTotal.textContent = total.toFixed(2);


    cartPage.style.display = 'block';
});


const closeCartButton = document.getElementById('close-cart');
closeCartButton.addEventListener('click', () => {
    const cartPage = document.getElementById('cart-page');
    cartPage.style.display = 'none';
});
