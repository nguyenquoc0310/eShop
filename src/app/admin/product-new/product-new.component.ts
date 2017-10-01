import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from '../../product';
import {Category} from '../../category';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  categories: Category[];
  product: Product = new Product();
  @Output() onCreateProductEvent = new EventEmitter();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getListCategory();
  }

  createNewProduct(m_product: Product) {
    let imageFile: string;
    imageFile = 'Product' + Date.now() + '.jpg';

    const formData = new FormData();
    const fileBrowser = this.fileInput.nativeElement;

    if (fileBrowser.files && fileBrowser.files[0]) {
      formData.append('image', fileBrowser.files[0], imageFile);
    }

    this.onCreateProductEvent.emit({product: m_product, formData: formData});
  }

  getListCategory() {
    this.categoryService.getListCategories()
      .then(categories => {
        this.categories = categories;
      })
      .catch(err => console.log(err));
  }
}
