import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Category} from './category';

@Injectable()
export class CategoryService {
  private getUrl = '/api/categories';
  private getGroupUrl = '/api/categories/group';
  private _postUrl = '/api/categories';
  private _putUrl = '/api/categories/';
  private _deleteUrl = '/api/categories/';

  constructor(private _http: Http) {
  }

  getListCategories() {
    return this._http.get(this.getUrl)
      .map(res => res.json())
      .toPromise();
  }

  getListCategoriesGroup() {
    return this._http.get(this.getGroupUrl)
      .map(res => res.json())
      .toPromise();
  }

  createCategory(category: Category) {
    console.log(category);
    return this._http.post(this._postUrl, category)
      .map(res => res.json())
      .toPromise();
  }

  updateCategory(category: Category) {
    return this._http.put(this._putUrl + category._id, category)
      .map(res => res.json())
      .toPromise();
  }

  deleteCategory(category: Category) {
    return this._http.delete(this._deleteUrl + category._id, category)
      .map(res => res.json())
      .toPromise();
  }

}
