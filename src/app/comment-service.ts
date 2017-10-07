import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Comment} from './comment';

@Injectable()
export class CommentService {
  private _getUrl = '/api/comments/';
  private _postUrl = '/api/comments';

  constructor(private _http: Http) {
  }

  getListCommentsById(id: String) {
    return this._http.get(this._getUrl + id)
      .map(res => res.json())
      .toPromise();
  }

  createComment(comment: Comment) {
    return this._http.post(this._postUrl, comment)
      .map(res => res.json())
      .toPromise();
  }

}
