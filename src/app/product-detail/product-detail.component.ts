import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['product-id']))
      .subscribe(product => this.productDetail = product);
  }

}
