import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Array<Product>;
  productSelected: Product;
  isUpdate = false;
  isNew = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts() {
    this.productService.getListProducts()
      .then(products => {
        this.products = products;
        this.setStatus(3);
      })
      .catch(err => console.log(err));
  }

  createNewProduct(product: any) {
    this.productService.createProduct(product)
      .then(res => {
        this.getListProducts();
        this.setStatus(1);
      })
      .catch(err => console.log(err));
  }

  deleteProduct(product: any) {
    this.productService.deleteProduct(product)
      .then(res => {
        this.getListProducts();
        this.setStatus(3);
      })
      .catch(err => console.log(err));
  }

  updateProductSelected(product: any) {
    this.setStatus(2);
    this.productSelected = product;
  }

  submitProduct(product: any) {
    this.productService.updateProduct(product)
      .then(res => {
        this.getListProducts();
        this.setStatus(1);
      })
      .catch(err => console.log(err));
  }

  setStatus(mode: number) {
    switch (mode) {
      case 1 :
        this.isNew = true;
        this.isUpdate = false;
        break;
      case 2:
        this.isNew = false;
        this.isUpdate = true;
        break;
      default :
        this.isNew = false;
        this.isUpdate = false;
        break;
    }
  }

  showNewProductEvent() {
    this.setStatus(1);
  }
}
