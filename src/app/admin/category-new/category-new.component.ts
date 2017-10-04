import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../category';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  category: Category = new Category();

  @Output() onCreateNewCategory = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  createNewCategory(category: Category) {
    this.onCreateNewCategory.emit(category);
  }

}
