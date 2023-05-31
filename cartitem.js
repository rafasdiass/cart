// CartItem.js
export default class CartItem {
    constructor(id, name, unitPrice, quantity) {
      this.id = id;
      this.name = name;
      this.unitPrice = unitPrice;
      this.quantity = quantity;
    }
  
    getSubtotal() {
      return this.unitPrice * this.quantity;
    }
  }