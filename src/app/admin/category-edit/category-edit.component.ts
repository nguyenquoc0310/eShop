import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  @Input() category: Category;
  @Output() onUpdateCategoryEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  updateCategory() {
    this.onUpdateCategoryEvent.emit(this.category);
  }
}
