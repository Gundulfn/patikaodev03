import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category.service';
import { Post, PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})

export class CategoryDetailsComponent {
  @ViewChild('title') categoryNameInput?: NgModel;
  categoryItem!: Category;
  categoryId?: string;

  date: string = '';
  time: string = '';
  isSuccess: boolean = false;
  totalPostCount: number = 0;

  get isButtonDisabled() {
    if (this.categoryNameInput) {
      return this.categoryNameInput.invalid;
    }
    return true;
  }

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private datePipe: DatePipe,
    private postService: PostService
  ) {

    var paramCategoryId;

    if (this.router.url.includes('?'))
      paramCategoryId = this.router.url.split('?')[1].split('&')[0].split('=')[1]

    if (paramCategoryId) {
      let categoryItem = this.categoryService.getCategory(paramCategoryId);
      if (!categoryItem) {
        this.router.navigateByUrl('/categories');
      } else {
        this.categoryItem = categoryItem;
        this.setDateTime();
        this.categoryId = this.categoryItem.category_id;

        this.totalPostCount = postService.getPostCountByCategoryId(this.categoryId!);
      }
    } else {
      this.resetForm();
    }
  }

  handleDateChange(value: string) {
    this.date = value;
  }

  handleTimeChange(value: string) {
    this.time = value + ":00";
  }

  setCreationDate() {
    // Automatically set missing values
    const currentDate = new Date();
    if (this.date === 'null')
      this.date = this.datePipe.transform(currentDate, 'yyyy-MM-dd')!.toString();

    if (this.time === 'Invalid')
      this.time = this.datePipe.transform(currentDate, 'hh:mm:ss')!.toString();

    this.categoryItem.creation_date = this.date + " " + this.time;
  }

  handleSaveItem() {
    this.setCreationDate();

    if (this.categoryId) {
      this.categoryService.updateCategory(this.categoryId, this.categoryItem);
    } else {
      this.categoryService.addCategory(this.categoryItem);
      this.resetForm();
    }

    this.isSuccess = true;
  }

  private resetForm() {
    this.categoryItem = {
      name: '',
      creation_date: ''
    };

    this.setDateTime();
    setTimeout(() => {
      this.isSuccess = false;
    }, 2000);
  }

  private setDateTime() {
    const creationDateParts = this.categoryItem.creation_date.split(' ');
    const timeString = new Date(this.categoryItem.creation_date).toTimeString();

    this.date = creationDateParts[0];
    this.time = timeString.split(' ')[0].split(':').slice(0, 2).join(':');
  }
}