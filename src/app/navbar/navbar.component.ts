import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public cartItemService: CartItemService) { }
}
