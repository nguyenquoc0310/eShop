import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() categories: Category[];
  @Output() onUpdateCategorySelected = new EventEmitter();
  @Output() onDeleteCategory = new EventEmitter();
  @Output() onShowNewCategory = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  updateCategorySelected(category: Category) {
    this.onUpdateCategorySelected.emit(category);
  }

  deleteCategory(category: Category) {
    this.onDeleteCategory.emit(category);
  }

  showNewCategory() {
    this.onShowNewCategory.emit('Show');
  }
}
