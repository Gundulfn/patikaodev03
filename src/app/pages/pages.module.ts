import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UserService } from '../services/user.service';
import { AppRoutingModule } from '../app-routing.module';
import { PostService } from '../services/post.service';
import { CommentService } from '../services/comment.service';
import { CategoryService } from '../services/category.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../shared/table/table.component';
import { RouteButtonComponent } from '../shared/route-button/route-button.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { NgToastModule } from 'ng-angular-popup';
import { PopupMessageComponent } from '../shared/popup-message/popup-message.component';
import { NullReplacePipe } from '../shared/null-replace.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    NotFoundComponent,
    UserDetailsComponent,
    TableComponent,
    RouteButtonComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
    CategoryDetailsComponent,
    PopupMessageComponent,
    NullReplacePipe,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgToastModule
  ],
  exports: [
    TableComponent,
    PopupMessageComponent
  ],
  providers: [
    UserService,
    PostService,
    CommentService,
    CategoryService,
    DatePipe
  ]
})
export class PagesModule { }
