let products = [];

/**
 * Check if the cart already exists.
 * If not, create an empty cart
 */
let cart = localStorage.getItem("cart");
if(cart === null) {
    cart = {};
    saveCart();
}
displayCartCount();

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data => {
        products = data;
        displayProducts();
        updateCart();
    }));

/**
 * Display the products from the API to the HTML
 */
function displayProducts()
{
    let productList = document.getElementById('product-list');
    if(productList) {
        for(let i = 0; i < products.length; i++) {
            const product = products[i];
            productList.innerHTML +=
                `<div class="card col-md-3 product-card">
                <img class="card-img-top" src="${product.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button type="button" class="btn btn-primary" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>`;
        }
    }
}

/**
 * This function save the cart in the localStorage after add/remove a product in the cart.
 * This also update the number of items in the cart
 */
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartCount();
}

/**
 * Add a product to the cart/localStorage.
 * If product is new, add product ID and quantity = 1
 * If product is already in the cart, increase quantity by 1
 */
function addToCart(productId)
{
    cart = JSON.parse(localStorage.getItem("cart"));
    if(!cart['product-' + productId]) {
        cart['product-' + productId] = {
            id: productId,
            quantity: 1
        };
    } else {
        cart['product-' + productId]['quantity'] += 1;
    }
    saveCart();
    updateCart();
}

/**
 * Remove a product from the cart/localStorage
 */
function removeFromCart(productId)
{
    cart = JSON.parse(localStorage.getItem("cart"));
    if(cart['product-' + productId]) {
        delete cart['product-' + productId];
    }
    saveCart();
    updateCart();
}

/**
 * Display the number of items in the cart near the cart menu
 */
function displayCartCount()
{
    let quantity = 0;
    cart = JSON.parse(localStorage.getItem("cart"));
    for (const index in cart) {
        quantity += cart[index]['quantity'];
    }
    if(quantity > 0) {
        document.getElementById('cart-count').innerHTML = quantity;
    } else {
        document.getElementById('cart-count').innerHTML = '';
    }

}

/**
 * Display the list of product in the localStorage to the cart menu dropdown
 */
function updateCart()
{
    cart = JSON.parse(localStorage.getItem("cart"));
    let cartList = document.getElementById('cart-list');
    if(cartList) {
        cartList.innerHTML = '';
        for (const index in cart) {
            let item = cart[index];
            let product = getProductById(item['id']);
            cartList.innerHTML += `
        <tr>
            <td><img class="card-img-top" src="${product.image}" alt="Card image cap"></td>
            <td>
                <span>${product.title}</span>
                <p>${item['quantity']} x $${product.price}</p>
            </td>
            <td>
                <button type="button" onclick="removeFromCart(${product.id})">x</button>
            </td>
        </tr>
        `;
        }
    }

}

/**
 * Get the product object by its ID.
 * The cart/localStorage contains only the ID of the product, but we also need the object (title, price, image ...)
 * when we display the cart items in the cart dropdown.
 * This function help to get that product object.
 */
function getProductById(productId)
{
    for (const index in products) {
        if(products[index]['id'] === productId) {
            return products[index];
        }
    }
    return null;
}