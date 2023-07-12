import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingElement } from '../shared/RoutingElement';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryData: Category[] = [
    {
      category_id: "1",
      name: "Funny",
      creation_date: "null"
    },
    {
      category_id: "2",
      name: "News",
      creation_date: "null"
    },
    {
      category_id: "3",
      name: "Opinion",
      creation_date: "2015-03-14 19:16:03"
    },
    {
      category_id: "4",
      name: "Sports",
      creation_date: "2023-03-16 04:21:47"
    }
  ];

  private lastIdNum: number = 0;

  addCategory(category: Category) {
    this.lastIdNum++;
    category.category_id = this.lastIdNum.toString();
    category.routing = new RoutingElement();
    category.routing.routePath = 'category';
    category.routing.queryParams = { category_id: category.category_id }

    this.categoryData.push(category);
  }

  updateCategory(category_id: string, categoryItem: Category) {
    const _categoryItem = this.categoryData.find((category: Category) => {
      return category.category_id === category_id;
    });

    if (_categoryItem) {
      _categoryItem.name = categoryItem.name;
      _categoryItem.creation_date = categoryItem.creation_date;
    }
  }

  getCategory(category_id: string): Category | undefined {
    return this.categoryData.find((category: Category) => { return category.category_id === category_id });
  }
  
  constructor(private router: Router) { 
    this.categoryData.forEach(element => {
      element.routing = new RoutingElement();
      element.routing.routePath = 'category';
      element.routing.queryParams = { id:element.category_id };
    });

    this.lastIdNum = parseInt(this.categoryData[this.categoryData.length - 1].category_id!)
  }

  getCategories(): Category[] {
    return this.categoryData;
  }
}

export interface Category {
  category_id?: string;
  name: string;
  creation_date: string;
  routing?: RoutingElement;
}