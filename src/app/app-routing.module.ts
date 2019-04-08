import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', pathMatch: 'full', redirectTo: '/products'},
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: CartComponent},
    {path: '**', component: NotFoundComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
