import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product>;
  pageSize = 3;
  total = 7;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getListProducts();
    // this.total = this.products.length;
  }

  getListProducts() {
    this.productService.getListProducts()
      .then(products => this.products = products)
      .catch(err => console.log(err));
  }

  addToCart(product: Product) {
    this.productService.addCart(product)
      .then(products => {
      })
      .catch(err => console.log(err));
  }
}
