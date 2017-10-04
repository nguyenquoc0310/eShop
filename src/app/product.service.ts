import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Product} from './product';

@Injectable()
export class ProductService {
  private _getUrl = '/api/products';
  private _getProductByCatUrl = '/api/products/type/';
  private _postUrl = '/api/products';
  private _uploadUrl = '/upload';
  private _uploadDistUrl = '/upload/dist';
  private _putUrl = '/api/products/';
  private _deleteUrl = '/api/products/';

  constructor(private _http: Http) {
  }

  getListProducts() {
    return this._http.get(this._getUrl)
      .map(res => res.json())
      .toPromise();
  }

  getProductsByCat(catType: String) {
    return this._http.get(this._getProductByCatUrl + catType)
      .map(res => res.json())
      .toPromise();
  }

  getProduct(id: Number) {
    return this._http.get(this._getUrl + '/' + id)
      .map(res => res.json())
      .toPromise();
  }

  createProduct(product: Product) {
    return this._http.post(this._postUrl, product)
      .map(res => res.json())
      .toPromise();
  }

  uploadImageProduct(params: any) {
    this._http.post(this._uploadUrl, params)
      .map(res => res.json())
      .toPromise();

    return this._http.post(this._uploadDistUrl, params)
      .map(res => res.json())
      .toPromise();
  }

  updateProduct(product: Product) {
    return this._http.put(this._putUrl + product._id, product)
      .map(res => res.json())
      .toPromise();
  }

  deleteProduct(product: Product) {
    return this._http.delete(this._deleteUrl + product._id, product)
      .map(res => res.json())
      .toPromise();
  }
}
