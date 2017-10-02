import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from '../../product';
import {Category} from '../../category';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() productEdit: Product;
  @Output() onProductUpdateEvent = new EventEmitter();
  @ViewChild('fileInput') fileInput;
  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getListCategory();
  }

  updateProduct() {
    let imageFile: string;
    imageFile = 'Product' + Date.now() + '.jpg';

    const formData = new FormData();
    const fileBrowser = this.fileInput.nativeElement;

    if (this.fileInput && fileBrowser.files && fileBrowser.files[0]) {
      formData.append('image', fileBrowser.files[0], imageFile);
    }

    this.onProductUpdateEvent.emit({product: this.productEdit, formData: formData});
  }
  getListCategory() {
    this.categoryService.getListCategories()
      .then(categories => {
        this.categories = categories;
      })
      .catch(err => console.log(err));
  }
}
