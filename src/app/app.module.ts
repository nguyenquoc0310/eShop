import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {AdminComponent} from './admin/admin.component';
import {ProductService} from './product.service';
import {ProductNewComponent} from './admin/product-new/product-new.component';
import {ProductListComponent} from './admin/product-list/product-list.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ProductEditComponent} from './admin/product-edit/product-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    ProductComponent,
    ProductDetailComponent,
    AdminComponent,
    ProductNewComponent,
    ProductListComponent,
    ProductEditComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
