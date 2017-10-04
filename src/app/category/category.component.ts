import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {ProductService} from '../product.service';
import {CategoryGroup} from '../category-group';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryGroup: CategoryGroup[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getListCategories();
  }

  getListCategories() {
    this.categoryService.getListCategoriesGroup()
      .then(categoryGroup => {
        this.categoryGroup = categoryGroup;
      })
      .catch(err => console.log(err));
  }
}
