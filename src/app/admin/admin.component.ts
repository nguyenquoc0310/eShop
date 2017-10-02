import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {Category} from '../category';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Array<Product>;
  productSelected: Product;
  isUpdate = false;
  isNew = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts() {
    this.productService.getListProducts()
      .then(products => {
        this.products = products;
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

  updateProductSelected(product: any) {
    this.setStatus(2);
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

  showNewProductEvent(status: any) {
    this.setStatus(1);
  }
}
