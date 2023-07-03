import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { CommentDetailsComponent } from './pages/comment-details/comment-details.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, pathMatch: 'full' },
  { path: 'users/:username', component: UserDetailsComponent, pathMatch: 'full'},
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:post', component: PostDetailsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:category', component: CategoryDetailsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/:comment', component: CommentDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
