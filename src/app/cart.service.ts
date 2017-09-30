import {Injectable} from '@angular/core';
import {Product} from './product';
import {Http} from '@angular/http';
import {Cart} from './cart';
import {ProductService} from './product.service';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {StorageService} from './local-storage.service';

const CART_KEY = 'cart';

@Injectable()
export class CartService {
  private storage: Storage;
  products: Product[];

  constructor(private storageService: StorageService,
              private productService: ProductService) {
    this.getListProducts();
    this.storage = this.storageService.get();
  }

  // Create new list carts
  public empty(): void {
    const newCart = new Cart();
    this.saveCart(newCart);
  }

  // Add a product with quantity into list carts
  public addCart(product: Product, quantity: number): void {
    const cart = this.retrieve();

    let pInCart = cart.products.find((p) => p._id === product._id);

    if (pInCart === undefined) {
      pInCart = new Product();
      pInCart = product;
      pInCart.quantity = 0;

      cart.products.push(pInCart);
    }

    pInCart.quantity += quantity;
    cart.products = cart.products.filter((cartItem) => cartItem.quantity > 0);

    this.calcCart(cart);
    this.saveCart(cart);
  }

  // Add a product with quantity into list carts
  public updateCart(product: Product, quantity: number): void {
    const cart = this.retrieve();
    let itemIndex;
    let pInCart: Product;

    pInCart = cart.products.find((p) => p._id === product._id);
    itemIndex = cart.products.indexOf(pInCart);

    pInCart.quantity = quantity;

    cart.products[itemIndex] = pInCart;
    cart.products = cart.products.filter((cartItem) => cartItem.quantity > 0);

    this.calcCart(cart);
    this.saveCart(cart);
  }

  // Delete a product from list carts
  public deleteCart(product: Product) {
    const cart = this.retrieve();

    let m_product: Product;
    let itemIndex;

    m_product = cart.products.find(p => p._id === product._id);
    itemIndex = cart.products.indexOf(m_product);

    cart.products.splice(itemIndex, 1);

    this.calcCart(cart);
    this.saveCart(cart);
  }

  // Get list products from DB
  private getListProducts() {
    this.productService.getListProducts()
      .then(products => {
        this.products = products;
      })
      .catch(err => console.log(err));
  }

  // Save Cart to store
  private saveCart(cart: Cart) {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }

  // Revert from store to Class Cart
  public retrieve(): Cart {
    const cart = new Cart();

    const storedCart = this.storage.getItem(CART_KEY);

    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  // Calculate quantity and price from Cart
  private calcCart(cart: Cart) {
    cart.totalPrice = cart.products
      .map((m_product) => m_product.quantity * this.products.find((p) => p._id === m_product._id).price)
      .reduce((previous, current) => previous + current, 0);

    cart.totalQty = cart.products
      .map((m_product) => m_product.quantity)
      .reduce((previous, current) => previous + current, 0);
  }

  // Get total quantity
  public getTotalQty(): number {
    const cart = new Cart();

    const storedCart = this.storage.getItem(CART_KEY);

    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart.totalQty || 0;
  }

}
