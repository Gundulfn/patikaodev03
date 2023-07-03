import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category.service';
import { Utility } from 'src/app/shared/utilities';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  columnHeaders: string[] = [
    "ID",
    "Title",
    "Creation Date",
    "Details"
  ];

  categoryList: Category[] = [];
  private _categoryList: Category[] = [];

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute) {
    this._categoryList = categoryService.getCategories();

    this.route.queryParams.subscribe(q => {
      if (Object.keys(q).length != 0) {
        this.categoryList = Utility.filterListByQueryParams(this._categoryList, q);
      }else{
        this.categoryList = this._categoryList
      }
    })
  }
}
