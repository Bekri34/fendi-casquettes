// Récupérer le panier depuis le localStorage (si il existe)
let panier = JSON.parse(localStorage.getItem('panier')) || [];

// Fonction pour ajouter un produit au panier
document.querySelectorAll('.ajouter-panier').forEach(button => {
    button.addEventListener('click', function() {
        const produit = this.dataset.produit;
        panier.push(produit);
        localStorage.setItem('panier', JSON.stringify(panier));  // Sauvegarder dans localStorage
        updatePanierCount();
    });
});

// Fonction pour mettre à jour le compteur d'articles dans le panier
function updatePanierCount() {
    const panierCount = panier.length;
    document.getElementById('panier-count').innerText = panierCount;
}

// Fonction pour afficher les produits dans le panier
function updateCart() {
    const panierItems = JSON.parse(localStorage.getItem('panier') || '[]');
    const panierContainer = document.getElementById('panier-items');
    panierContainer.innerHTML = ''; // Réinitialiser le panier

    if (panierItems.length === 0) {
        panierContainer.innerHTML = "<p>Votre panier est vide.</p>"; // Si le panier est vide, afficher ce message
    } else {
        let totalPrice = 0;
        panierItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-panier');
            itemElement.innerHTML = `<p>Casquette Fendi ${item.charAt(0).toUpperCase() + item.slice(1)} - 35€</p>`;
            panierContainer.appendChild(itemElement);
            totalPrice += 35; // Ajoute le prix de chaque casquette
        });
        document.getElementById('total-price').innerText = totalPrice; // Afficher le total
    }
}

// Si on est sur la page cart.html, mettre à jour l'affichage du panier
if (document.body.classList.contains('panier')) {
    updateCart();
}

// Mettre à jour le compteur du panier sur chaque page
updatePanierCount();
