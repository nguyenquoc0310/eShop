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

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts() {
    this.productService.getListProducts()
      .then(products => this.products = products)
      .catch(err => console.log(err));
  }

  createNewProduct(product: any) {
    this.productService.createProduct(product)
      .then(res => {
        this.getListProducts();
      })
      .catch(err => console.log(err));
  }

  deleteProduct(product: any) {
    this.productService.deleteProduct(product)
      .then(res => {
        this.getListProducts();
      })
      .catch(err => console.log(err));
  }

  updateProductSelected(product: any) {
    this.isUpdate = true;
    this.productSelected = product;
  }

  submitProduct(product: any) {
    this.productService.updateProduct(product)
      .then(res => {
        this.getListProducts();
        this.isUpdate = false;
      })
      .catch(err => console.log(err));
  }
}
