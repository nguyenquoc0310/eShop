import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {Category} from '../category';
import {CategoryService} from '../category.service';
import {Features} from '../features';
import {isUndefined} from 'util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Array<Product>;
  categories: Array<Category>;
  productSelected: Product = new Product();
  categorySelected: Category = new Category();
  isUpdate = false;
  isNew = false;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getListProducts();
    this.getListCategories();
  }

  getListProducts() {
    this.productService.getListProducts()
      .then(products => {
        this.products = products;
        this.setStatus(3);
      })
      .catch(err => console.log(err));
  }

  getListCategories() {
    this.categoryService.getListCategories()
      .then(categories => {
        this.categories = categories;
        this.setStatus(3);
      })
      .catch(err => console.log(err));
  }

  createNewProduct(params: any) {
    // Update file name image
    let imageFile: string;

    if (params.formData.get('image')) {
      imageFile = params.formData.get('image').name;
    }

    const p_Product: Product = params.product;
    params.product.image = imageFile;
    params.formData.append('product', p_Product);

    this.productService.createProduct(params.product)
      .then(res => {
        this.uploadImage(params.formData);
        this.getListProducts();
        this.setStatus(1);
      })
      .catch(err => console.log(err));
  }

  uploadImage(params: any) {
    this.productService.uploadImageProduct(params).then(res => {
    })
      .catch(err => console.log(err));
  }

  deleteProduct(product: any) {
    this.productService.deleteProduct(product)
      .then(res => {
        this.getListProducts();
        this.setStatus(3);
      })
      .catch(err => console.log(err));
  }

  updateProductSelected(product: Product) {
    this.setStatus(2);
    if (isUndefined(product.feature)) {
      product.feature = new Features();
    }
    this.productSelected = product;

  }

  submitProduct(params: any) {
    // Update file name image
    let imageFile: string;

    const p_Product: Product = params.product;

    if (params.formData.get('image')) {
      imageFile = params.formData.get('image').name;
      params.product.image = imageFile;
    }

    params.formData.append('product', p_Product);

    this.productService.updateProduct(params.product)
      .then(res => {
        this.uploadImage(params.formData);
        this.getListProducts();
        this.setStatus(1);
      })
      .catch(err => console.log(err));
  }

  setStatus(mode: number) {
    switch (mode) {
      case 1 :
        this.isNew = true;
        this.isUpdate = false;
        break;
      case 2:
        this.isNew = false;
        this.isUpdate = true;
        break;
      default :
        this.isNew = false;
        this.isUpdate = false;
        break;
    }
  }

  showNewProduct(status: any) {
    this.setStatus(1);
  }

  showNewCategory(status: any) {
    this.setStatus(1);
  }

  deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category)
      .then(res => {
        this.getListCategories();
        this.setStatus(3);
      })
      .catch(err => console.log(err));
  }

  updateCategorySelected(category: Category) {
    this.setStatus(2);
    this.categorySelected = category;
  }

  createNewCategory(category: Category) {
    this.categoryService.createCategory(category)
      .then(res => {
        this.getListProducts();
        this.getListCategories()
        this.setStatus(1);
      })
      .catch(err => console.log(err));
  }

  submitCategory(category: Category) {
    this.categoryService.updateCategory(category)
      .then(res => {
        this.getListProducts();
        this.getListCategories()
        this.setStatus(1);
      })
      .catch(err => console.log(err));
  }

}
