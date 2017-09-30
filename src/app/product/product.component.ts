import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Cart} from '../cart';
import {CartService} from '../cart.service';
import {ActivatedRoute, Router} from '@angular/router';

const GET_PRODUCT_TYPE_URL = 'product/type/';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products: Array<Product> = new Array<Product>();

  // Cart
  cart: Cart = new Cart();

  // The number products display in a page
  pageSize: number;

  // The total number from db
  total: number;

  url: string;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute,
              private router: Router) {
    this.url = this.route.snapshot.url.join('/');
    this.pageSize = 6;
  }

  ngOnInit() {
    if (this.url.includes(GET_PRODUCT_TYPE_URL)) {
      this.getListProductsByCat();
    } else {
      this.getListProducts();
    }
  }

  getListProducts() {
    this.productService.getListProducts()
      .then(products => {
        this.products = products;
        this.total = products.length;
      })
      .catch(err => console.log(err));
  }

  getListProductsByCat() {
    this.route.params
      .map(params => params['type'])
      .switchMap(type => this.productService.getProductsByCat(type))
      .subscribe(product => {
        this.products = product;
      });
  }

  addToCart(product: Product, qty: number) {
    this.cartService.addCart(product, qty);
    const totalQty = this.cartService.getTotalQty();
  }
}
