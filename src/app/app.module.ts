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
import {CartComponent} from './cart/cart.component';
import {CartService} from './cart.service';
import {LocalStorageService, StorageService} from './local-storage.service';
import {CategoryService} from './category.service';
import { CategoryListComponent } from './admin/category-list/category-list.component';
import { CategoryEditComponent } from './admin/category-edit/category-edit.component';
import { CategoryNewComponent } from './admin/category-new/category-new.component';

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
    CartComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    ProductService,
    CartService,
    LocalStorageService,
    {
      provide: StorageService,
      useClass: LocalStorageService
    },
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
