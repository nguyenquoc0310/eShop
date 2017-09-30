import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getListCategories();
  }

  getListCategories() {
    this.categoryService.getListCategories()
      .then(categories => {
        this.categories = categories;
      })
      .catch(err => console.log(err));
  }
}
