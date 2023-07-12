import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';
import { Comment, CommentService } from 'src/app/services/comment.service';
import { Post, PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { PopupMessageComponent } from 'src/app/shared/popup-message/popup-message.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent extends PopupMessageComponent {
  @ViewChild('title') postTitleInput?: NgModel;
  postItem!: Post;
  postId?: string;

  columnHeaders: string[] = ['User Id', 'Comment', 'Date']
  private postComments: Comment[] = [];

  users: any[] = [];
  categories: any[] = [];

  date: string = '';
  time: string = '';
  isPublished: boolean = false;
  isSuccess: boolean = false;

  get isButtonDisabled() {
    if (this.postTitleInput) {
      return this.postTitleInput.invalid;
    }
    return true;
  }

  get isCreatingNewItem() {
    return this.getPostComments().length <= 0
  }

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private userService: UserService,
    private categoryService: CategoryService,
    private router: Router,
    private datePipe: DatePipe,
    private toastService: NgToastService
  ) {

    super(toastService);
    var paramPostId;

    if (this.router.url.includes('?'))
      paramPostId = this.router.url.split('?')[1].split('&')[0].split('=')[1]

    if (paramPostId) {
      let postItem = this.postService.getPost(paramPostId);
      if (!postItem) {
        this.router.navigateByUrl('/posts');
      } else {
        this.postItem = postItem;
        this.setDateTime();
        this.postId = this.postItem.post_id;
        this.isPublished = JSON.parse(this.postItem.is_published);
        this.postComments = this.commentService.getCommentsByPostId(this.postId!);
      }
    } else {
      this.resetForm();
    }

    this.users = this.userService.getUsers().map(user =>
    ({
      user_id: user.user_id,
      username: user.username
    }));

    this.categories = this.categoryService.getCategories().map(category =>
    ({
      category_id: category.category_id,
      name: category.name
    }));
  }

  getPostComments(): any[] {
    return this.postComments.map(comment => ({
      user_id: comment.user_id,
      comment: comment.comment,
      creation_date: comment.creation_date
    }));
  }

  handleDateChange(value: string) {
    this.date = value;
  }

  handleTimeChange(value: string) {
    this.time = value + ":00";
  }

  handleDeleteItem() {
    if (this.postComments.length == 0) {
      this.postService.deletePost(this.postId!);
      this.router.navigateByUrl('/posts');

      this.createSuccessMessage('Post was deleted succesfully');
    } else {
      this.createErrorMessage('Cannot delete post which has comments');
    }
  }

  setCreationDate() {
    // Automatically set missing values
    const currentDate = new Date();
    if (this.date === 'null')
      this.date = this.datePipe.transform(currentDate, 'yyyy-MM-dd')!.toString();

    if (this.time === 'Invalid')
      this.time = this.datePipe.transform(currentDate, 'hh:mm:ss')!.toString();

    this.postItem.creation_date = this.date + " " + this.time;
  }

  handleSaveItem() {
    this.setCreationDate();
    this.postItem.is_published = "" + this.isPublished;

    if (this.postId) {
      this.postService.updatePost(this.postId, this.postItem);
    } else {
      this.postService.addPost(this.postItem);
      this.resetForm();
    }

    this.isSuccess = true;
  }

  private resetForm() {
    this.postItem = {
      user_id: '',
      category_id: '',
      title: '',
      content: '',
      view_count: '',
      creation_date: '',
      is_published: ''
    };

    this.setDateTime();
    setTimeout(() => {
      this.isSuccess = false;
    }, 2000);
  }

  private setDateTime() {
    const creationDateParts = this.postItem.creation_date.split(' ');
    const timeString = new Date(this.postItem.creation_date).toTimeString();

    this.date = creationDateParts[0];
    this.time = timeString.split(' ')[0].split(':').slice(0, 2).join(':');
  }
}