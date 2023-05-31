export default class CartService {
    constructor() {
      this.cartItems = [];
    }
  
    addItem(item) {
      const existingItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.cartItems.push(item);
      }
    }
  
    getCartItems() {
      return this.cartItems;
    }
  
    clearCart() {
      this.cartItems = [];
    }
  
    increaseItemQuantity(itemId) {
      const item = this.cartItems.find((cartItem) => cartItem.id === itemId);
      if (item) {
        item.quantity++;
      }
    }
  
    decreaseItemQuantity(itemId) {
      const item = this.cartItems.find((cartItem) => cartItem.id === itemId);
      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          const index = this.cartItems.indexOf(item);
          if (index !== -1) {
            this.cartItems.splice(index, 1);
          }
        }
      }
    }
  
    getSubtotal() {
      let subtotal = 0;
      for (const item of this.cartItems) {
        subtotal += item.getSubtotal();
      }
      return subtotal;
    }
  }