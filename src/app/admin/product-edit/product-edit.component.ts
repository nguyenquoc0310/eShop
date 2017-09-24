import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() productEdit: Product;
  @Output() onProductUpdateEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  updateProduct(m_product: Product) {
    this.onProductUpdateEvent.emit(m_product);
  }
}
