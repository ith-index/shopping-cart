import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = []

  constructor() {
    [1, 2, 3, 4, 5, 6, 7, 1000].forEach(
      i => this.products.push(
        {
          id: i, 
          name: `Foo ${i}`, 
          description: "Foo ".repeat(i), 
          price: i
        }
      )
    );
  }
}
