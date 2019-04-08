import { Component, Input } from '@angular/core';
import { CartItemService } from '../cart-item.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;

  constructor(private cartItemService: CartItemService) {}

  addToCart() {
    this.cartItemService.addCartItem(this.product);
  }
}
