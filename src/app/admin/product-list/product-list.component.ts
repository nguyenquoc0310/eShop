import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<Product>;
  @Output() onUpdateProductEvent = new EventEmitter();
  @Output() onDeleteProductEvent = new EventEmitter();
  @Output() onShowNewProductEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deleteProduct(m_product: Product) {
    this.onDeleteProductEvent.emit(m_product);
  }

  updateProductSelected(m_product: Product) {
    this.onUpdateProductEvent.emit(m_product);
  }

  showNewProduct() {
    this.onShowNewProductEvent.emit();
  }
}
