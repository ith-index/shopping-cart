import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartItemService: CartItemService) { }

  removeFromCart(index: number) {
    this.cartItemService.removeCartItem(index);
  }
}
