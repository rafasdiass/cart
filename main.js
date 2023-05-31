import CartItem from './cartitem.js';
import CartService from './cartservice.js';

const cart = new CartService();
cart.addItem(new CartItem("1", "Maçã", 1.99, 2));

const cartElement = document.getElementById('cart');
const subtotalElement = document.getElementById('subtotal');

function updateCart() {
  // Limpa a lista de itens do carrinho atual
  cartElement.innerHTML = '';

  // Adiciona cada item do carrinho ao HTML
  for (const item of cart.getCartItems()) {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.textContent = `${item.name} - R$ ${item.getSubtotal()} (x${item.quantity})`;
    cartElement.appendChild(itemElement);
  }

  // Atualiza o subtotal
  subtotalElement.textContent = cart.getSubtotal().toFixed(2);
}

// Atualiza o carrinho na primeira vez
updateCart();

document.getElementById('clear').addEventListener('click', () => {
  cart.clearCart();
  updateCart();
});
