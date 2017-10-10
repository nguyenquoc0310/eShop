import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../comment';
import {CommentService} from '../comment-service';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {isUndefined} from 'util';
import {isEmpty} from 'rxjs/operator/isEmpty';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() product: Product;
  comments: Array<Comment> = new Array<Comment>();
  comment: Comment = new Comment();
  isError: Boolean = false;

  constructor(private commentService: CommentService,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.getListComment();
  }

  checkInput() {
    if (this.comment.name && this.comment.comment) {
      this.isError = false;
    } else {
      this.isError = true;
    }
  }

  createComment() {
    this.checkInput();

    if (this.isError === false) {
      this.comment.productId = this.product._id;
      this.comment.date = Date.now();
      this.commentService.createComment(this.comment)
        .then(comment => {
          this.increaseNumComment();
          this.getListComment();
          this.comment = new Comment();
        })
        .catch(err => console.log(err));
    }
  }

  getListComment() {
    this.commentService.getListCommentsById(this.product._id)
      .then(comments => {
        this.comments = comments;
      })
      .catch(err => console.log(err));
  }

  increaseNumComment() {
    if (!isUndefined(this.product.commentNum)) {
      this.product.commentNum++;
    }

    this.productService.updateProduct(this.product)
      .then(product => {
      })
      .catch(err => console.log(err));
  }
}
