import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingElement } from '../shared/RoutingElement';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: User[] = [
    {
      user_id: "1",
      username: "ssmeed0",
      email: "gbricklebank0@cmu.edu",
      creation_date: "2019-05-23 08:32:50",
      is_active: "false"
    },
    {
      user_id: "2",
      username: "gstruan1",
      email: "dvane1@wix.com",
      creation_date: "2014-05-26 01:04:10",
      is_active: "false"
    },
    {
      user_id: "3",
      username: "vrubinlicht2",
      email: "gcarvill2@smugmug.com",
      creation_date: "2015-03-05 13:35:41",
      is_active: "false"
    },
    {
      user_id: "4",
      username: "dearley3",
      email: "vcostanza3@auda.org.au",
      creation_date: "null",
      is_active: "false"
    },
    {
      user_id: "5",
      username: "ijurisch4",
      email: "nilyukhov4@alibaba.com",
      creation_date: "2019-10-18 09:01:29",
      is_active: "false"
    },
    {
      user_id: "6",
      username: "cbaggaley5",
      email: "gcunio5@yellowbook.com",
      creation_date: "null",
      is_active: "true"
    },
    {
      user_id: "7",
      username: "hsleeman6",
      email: "dkleinplatz6@unc.edu",
      creation_date: "2019-01-01 16:23:39",
      is_active: "false"
    },
    {
      user_id: "8",
      username: "gruzek7",
      email: "gkarolewski7@icq.com",
      creation_date: "null",
      is_active: "true"
    },
    {
      user_id: "9",
      username: "brizzotto8",
      email: "lpenburton8@list-manage.com",
      creation_date: "2022-03-30 07:56:30",
      is_active: "true"
    },
    {
      user_id: "10",
      username: "tgarfath9",
      email: "dmichiel9@netvibes.com",
      creation_date: "2015-09-17 20:35:37",
      is_active: "false"
    }
  ];
  
  private lastIdNum: number = 0;

  // User edit functions
  addUser(user: User) {
    this.lastIdNum++;
    user.user_id = this.lastIdNum.toString();
    user.routing = new RoutingElement();
    user.routing.routePath = 'user';
    user.routing.queryParams = { user_id: user.user_id }

    this.userData.push(user);
  }

  updateUser(user_id: string, userItem: User) {
    const _userItem = this.userData.find((user: User) => {
      return user.user_id === user_id;
    });
    if (_userItem) {
      _userItem.username = userItem.username;
      _userItem.email = userItem.email;
      _userItem.creation_date = userItem.creation_date;
      _userItem.is_active = userItem.is_active;
    }
  }

  deleteUser(user_id: string) {
    const itemIndex = this.userData.findIndex((user: User) => {
      return user.user_id === user_id;
    });
    
    this.userData.splice(itemIndex, 1);
  }

  // Get functions
  getUser(user_id: string): User | undefined {
    return this.userData.find((user: User) => { return user.user_id === user_id });
  }

  getUsers(): User[] {
    return this.userData;
  }

  getUserCount(): number{
    return this.userData.length;
  }

  constructor(private router: Router) {
    this.userData.forEach(element => {
      element.routing = new RoutingElement();
      element.routing.routePath = 'user';
      element.routing.queryParams = { id: element.user_id };
    });

    this.lastIdNum = parseInt(this.userData[this.userData.length - 1].user_id!)
  }

}

export interface User {
  user_id?: string,
  username: string;
  email: string;
  creation_date: string;
  is_active: string;
  routing?: RoutingElement;
}

