import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: Product;
  qty: number;
  // capitalFlg = 1 : 16G
  // capitalFlg = 2 : 32G
  capitalFlg: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.qty = 1;
    this.capitalFlg = 1;
    this.getProduct();

  }

  addToCart(product: Product, qty: number) {
    this.cartService.addCart(product, qty);
  }

  getProduct() {
    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.productService.getProduct(id))
      .subscribe(product => {
        this.productDetail = product;
      });
  }

}
