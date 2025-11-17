export function setCartProduct(product, qte) {
  // Sauvegarder un produit dans le localStorage
  const products = getCartProducts()
    product.qte = qte
  products.push(product)
  localStorage.setItem('cart', JSON.stringify(products))
}

export function getCartProducts() {
  // Récupérer tous les produits sauvegardés
  const data = localStorage.getItem('cart')
  return data ? JSON.parse(data) : []
}

export function removeProduct(product) {
  let products = getCartProducts()

  // Garde uniquement les produits dont l'id est différent de celui à supprimer
  products = products.filter(p => p.id !== product.id)
  localStorage.removeItem('cart')
  // Mets à jour le localStorage
  localStorage.setItem('cart', JSON.stringify(products))
}

