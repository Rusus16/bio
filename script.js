// Exemple de produits
const products = [
    {
        name: "Miel d'Acacia",
        image: "product1.jpg",
        price: 3500,
        id: 1
    },
    {
        name: "Confiture Artisanale",
        image: "product2.jpg",
        price: 2500,
        id: 2
    },
    {
        name: "Huile Naturelle",
        image: "product3.jpg",
        price: 4500,
        id: 3
    }
];

// Afficher les produits dans la boutique
const productGrid = document.getElementById('product-grid');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price} FCFA</p>
        <button class="add-to-cart" data-id="${product.id}">Ajouter au panier</button>
    `;
    productGrid.appendChild(productDiv);
});

// Gestion du panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Ajouter un produit au panier
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    });
});

// Initialiser l'affichage du nombre d'articles dans le panier
updateCartCount();

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Merci pour votre message !");
    this.reset();
});
