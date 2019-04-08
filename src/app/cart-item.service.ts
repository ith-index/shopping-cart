import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  cartItems: CartItem[] = [];

  addCartItem(product: Product) {
    const cartItems = this.cartItems.slice();
    const index = cartItems.findIndex(cartItem => cartItem.product.id === product.id);
    if (index === -1) {
      this.cartItems = cartItems.concat({product: product, quantity: 1})
    } else {
      const quantity = cartItems[index].quantity;
      cartItems.splice(index, 1, {product: product, quantity: quantity + 1})
      this.cartItems = cartItems;
    }
  }

  removeCartItem(index: number) {
    const cartItems = this.cartItems.slice();
    cartItems.splice(index, 1);
    this.cartItems = cartItems;
  }

  getTotalQuantity(): number {
    return this.cartItems
      .map(cartItem => cartItem.quantity)
      .reduce((left, right) => left + right, 0);
  }

  getTotalPrice(): number {
    return this.cartItems
      .map(cartItem => cartItem.product.price * cartItem.quantity)
      .reduce((left, right) => left + right, 0)
      ;
  }
} 
