import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService, Comment } from 'src/app/services/comment.service';
import { Utility } from 'src/app/shared/Utility';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  columnHeaders: string[] = [
    "ID",
    "Post ID",
    "User ID",
    "Comment",
    "Creation Date",
    "Is Confirmed",
    "Details"
  ];

  commentList: Comment[] = [];
  private _commentList: Comment[] = [];

  constructor(private commentService: CommentService,
    private route: ActivatedRoute) {
    this._commentList = this.commentService.getComments();

    this.route.queryParams.subscribe(q => {
      if (Object.keys(q).length != 0) {
        this.commentList = Utility.filterListByQueryParams(this._commentList, q);
      } else {
        this.commentList = this._commentList
      }
    })
  }
}