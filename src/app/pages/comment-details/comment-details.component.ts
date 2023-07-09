
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Comment, CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})

export class CommentDetailsComponent {
  @ViewChild('title') commentInput?: NgModel;
  commentItem!: Comment;
  commentId?: string;

  users: any[] = [];
  posts: any[] = [];

  date: string = '';
  time: string = '';
  isConfirmed: boolean = false;
  isSuccess: boolean = false;

  get isButtonDisabled() {
    if (this.commentInput) {
      return this.commentInput.invalid;
    }
    return true;
  }

  constructor(
    private commentService: CommentService,
    private router: Router,
    private userService: UserService,
    private postService: PostService,
    private datePipe: DatePipe
  ) {

    var paramCommentId;

    if (this.router.url.includes('?'))
      paramCommentId = this.router.url.split('?')[1].split('&')[0].split('=')[1]

    if (paramCommentId) {
      let commentItem = this.commentService.getComment(paramCommentId);
      if (!commentItem) {
        this.router.navigateByUrl('/comments');
      } else {
        this.commentItem = commentItem;
        this.setDateTime();
        this.commentId = this.commentItem.comment_id;
        this.isConfirmed = JSON.parse(this.commentItem.is_confirmed);
      }
    } else {
      this.resetForm();
    }

    this.users = this.userService.getUsers().map(user =>
      ({
        user_id: user.user_id,
        username: user.username
      }));
  
      this.posts = this.postService.getPosts().map(post =>
      ({
        post_id: post.post_id
      }));
  }

  handleDateChange(value: string) {
    this.date = value;
  }

  handleTimeChange(value: string) {
    this.time = value + ":00";
  }

  handleDeleteItem() {
    this.commentService.deleteComment(this.commentId!);
    this.router.navigateByUrl('/comments');
  }

  setCreationDate() {
    // Automatically set missing values
    const currentDate = new Date();
    if (this.date === 'null')
      this.date = this.datePipe.transform(currentDate, 'yyyy-MM-dd')!.toString();

    if (this.time === 'Invalid')
      this.time = this.datePipe.transform(currentDate, 'hh:mm:ss')!.toString();

    this.commentItem.creation_date = this.date + " " + this.time;
  }

  handleSaveItem() {
    this.setCreationDate();
    this.commentItem.is_confirmed = "" + this.isConfirmed;

    if (this.commentId) {
      this.commentService.updateComment(this.commentId, this.commentItem);
    } else {
      this.commentService.addComment(this.commentItem);
      this.resetForm();
    }

    this.isSuccess = true;
  }

  private resetForm() {
    this.commentItem = {
      post_id: '',
      user_id: '',
      comment: '',
      creation_date: '',
      is_confirmed: ''
    };

    this.setDateTime();
    setTimeout(() => {
      this.isSuccess = false;
    }, 2000);
  }

  private setDateTime() {
    const creationDateParts = this.commentItem.creation_date.split(' ');
    const timeString = new Date(this.commentItem.creation_date).toTimeString();

    this.date = creationDateParts[0];
    this.time = timeString.split(' ')[0].split(':').slice(0, 2).join(':');
  }
}