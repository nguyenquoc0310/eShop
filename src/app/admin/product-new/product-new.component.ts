import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  @ViewChild('fileInput') fileInput;

  product: Product = new Product();
  @Output() onCreateProductEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  createNewProduct(m_product: Product) {
    this.onCreateProductEvent.emit(m_product);
  }
}
