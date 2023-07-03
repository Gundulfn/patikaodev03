import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @ViewChild('title') usernameInput?: NgModel;
  userItem!: User;
  userId?: string;

  date: string = '';
  time: string = '';
  isActive: boolean = false;
  isSuccess: boolean = false;

  get isButtonDisabled() {
    if (this.usernameInput) {
      return this.usernameInput.invalid;
    }
    return true;
  }

  constructor(
    private userService: UserService,
    private commentService: CommentService,
    private postService: PostService,
    private router: Router,
    private datePipe: DatePipe,
    private toast: NgToastService
  ) {

    var paramUserId;

    if (this.router.url.includes('?'))
      paramUserId = this.router.url.split('?')[1].split('&')[0].split('=')[1]

    if (paramUserId) {
      let userItem = this.userService.getUser(paramUserId);
      if (!userItem) {
        this.router.navigateByUrl('/users');
      } else {
        this.userItem = userItem;
        this.setDateTime();
        this.userId = this.userItem.user_id;
        this.isActive = JSON.parse(this.userItem.is_active);
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

  handleDeleteItem() {
    if (this.userService.getUserCount() > 1) {
      if (this.commentService.getCommentCountByUserId(this.userId!) == 0 && this.postService.getPostCountByUserId(this.userId!) == 0) {
        this.userService.deleteUser(this.userId!);
        this.router.navigateByUrl('/users');
      } else {
        this.toast.error({ detail: "ERROR", summary: 'Cannot delete user which has posts or comments', duration: 5000 });
      }
    } else {
      this.toast.error({ detail: "ERROR", summary: 'Cannot delete last user', duration: 5000 });
    }
  }

  setCreationDate() {
    // Automatically set missing values
    const currentDate = new Date();
    if (this.date === 'null')
      this.date = this.datePipe.transform(currentDate, 'yyyy-MM-dd')!.toString();

    if (this.time === 'Invalid')
      this.time = this.datePipe.transform(currentDate, 'hh:mm:ss')!.toString();

    this.userItem.creation_date = this.date + " " + this.time;
  }

  handleSaveItem() {
    this.setCreationDate();
    this.userItem.is_active = "" + this.isActive;

    if (this.userId) {
      this.userService.updateUser(this.userId, this.userItem);
    } else {
      this.userService.addUser(this.userItem);
      this.resetForm();
    }

    this.isSuccess = true;
  }

  private resetForm() {
    this.userItem = {
      username: '',
      email: '',
      creation_date: new Date().toString(),
      is_active: ''
    };

    this.setDateTime();
    setTimeout(() => {
      this.isSuccess = false;
    }, 2000);
  }

  private setDateTime() {
    const creationDateParts = this.userItem.creation_date.split(' ');
    const timeString = new Date(this.userItem.creation_date).toTimeString();

    this.date = creationDateParts[0];
    this.time = timeString.split(' ')[0].split(':').slice(0, 2).join(':');
  }
}