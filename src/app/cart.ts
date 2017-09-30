import {Product} from './product';

export class Cart {
  public products: Array<Product>;
  public totalQty: number;
  public totalPrice: number;

  constructor() {
    this.products = new Array<Product>()
    this.totalPrice = 0;
    this.totalQty = 0;
  }

  public updateFrom(src: Cart) {
    this.products = src.products;
    this.totalQty = src.totalQty;
    this.totalPrice = src.totalPrice;
  }
}
