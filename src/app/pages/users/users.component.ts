import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from 'src/app/services/user.service';
import { Utility } from 'src/app/shared/Utility';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  columnHeaders: string[] = [
    "ID",
    "Username",
    "Email",
    "Creation Date",
    "Is Active",
    "Settings"
  ];

  userList: User[] = [];
  private _userList: User[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {

    this._userList = userService.getUsers();

    this.route.queryParams.subscribe(q => {
      if (Object.keys(q).length != 0) {
        this.userList = Utility.filterListByQueryParams(this._userList, q);
      }else{
        this.userList = this._userList
      }
    })
  }
}