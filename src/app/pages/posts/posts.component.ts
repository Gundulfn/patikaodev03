import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostService } from 'src/app/services/post.service';
import { Utility } from 'src/app/shared/Utility';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  columnHeaders: string[] = [
    "ID",
    "Title",
    "Creation Date",
    "Details"
  ];

  postList: Post[] = [];
  private _postList: Post[] = []

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) {

    this._postList = this.postService.getPosts();

    this.route.queryParams.subscribe(q => {
      if (Object.keys(q).length != 0) {
        this.postList = Utility.filterListByQueryParams(this._postList, q);
      }else{
        this.postList = this._postList
      }
    })
  }

  getPostListInfo(): any[] {
    return this.postList.map(post => ({
      post_id: post.post_id,
      title: post.title,
      creation_date: post.creation_date,
      routing: post.routing
    }));
  }
}
