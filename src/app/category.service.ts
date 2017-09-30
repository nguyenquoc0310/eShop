import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CategoryService {
  private getUrl = '/api/categories';

  constructor(private _http: Http) {
  }

  getListCategories() {
    return this._http.get(this.getUrl)
      .map(res => res.json())
      .toPromise();
  }
}
