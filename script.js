const products = [
    { id: '1', name: 'Laptop', price: 999.99, description: 'High performance laptop', imageUrl: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Smartphone', price: 699.99, description: 'Latest model smartphone', imageUrl: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Headphones', price: 199.99, description: 'Noise-cancelling headphones', imageUrl: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Smartwatch', price: 249.99, description: 'Water-resistant smartwatch', imageUrl: 'https://via.placeholder.com/150' }
];

// Function to load products on index.html
function loadProducts() {
    const productListElement = document.getElementById('productList');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.id}', '${product.name}', ${product.price})">Add to Cart</button>
        `;
        productListElement.appendChild(productDiv);
    });
}

// Function to add products to the cart
function addToCart(productId, productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productId, productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to your cart!`);
}

// Function to display cart
