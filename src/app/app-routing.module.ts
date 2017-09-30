import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CartComponent} from './cart/cart.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'product/type/:type', component: ProductComponent},
  {path: 'carts', component: CartComponent},
  {path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
