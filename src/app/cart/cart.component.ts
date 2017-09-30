import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {Cart} from '../cart';
import {Product} from '../product';

@Component({
  selector: 'app-card',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = new Cart();

  constructor(private  cartService: CartService) {
  }

  ngOnInit() {
    this.getListCart();
  }

  deleteCart(product: Product) {
    this.cartService.deleteCart(product);
    this.getListCart();
  }

  getListCart() {
    this.cart = this.cartService.retrieve();
  }

  updateCart(product: Product, qty: number) {
    this.cartService.updateCart(product, qty);
    this.getListCart();
  }
}
