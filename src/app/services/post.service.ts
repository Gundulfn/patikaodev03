import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingElement } from '../shared/RoutingElement';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postData: Post[] = [
    {
      post_id: "1",
      user_id: "1",
      category_id: "4",
      title: "Hunting of the President The",
      content: "Endless Night Sky",
      view_count: "64",
      creation_date: "2017-12-23 20:54:10",
      is_published: "true"
    },
    {
      post_id: "2",
      user_id: "6",
      category_id: "4",
      title: "Kremlin Letter",
      content: "Shattered Illusions",
      view_count: "72",
      creation_date: "2016-07-17 13:28:22",
      is_published: "true"
    },
    {
      post_id: "3",
      user_id: "1",
      category_id: "3",
      title: "Helen",
      content: "Shattered Dreams",
      view_count: "7",
      creation_date: "2016-05-15 23:54:29",
      is_published: "true"
    },
    {
      post_id: "4",
      user_id: "7",
      category_id: "1",
      title: "Stick It",
      content: "Fading Memories",
      view_count: "54",
      creation_date: "2023-04-08 21:23:06",
      is_published: "false"
    },
    {
      post_id: "5",
      user_id: "3",
      category_id: "3",
      title: "Drawn Together Movie: The Movie!",
      content: "Broken Dreams",
      view_count: "60",
      creation_date: "2016-07-11 06:52:30",
      is_published: "false"
    },
    {
      post_id: "6",
      user_id: "10",
      category_id: "2",
      title: "Ouija",
      content: "Fading Memories",
      view_count: "49",
      creation_date: "2017-03-16 10:53:54",
      is_published: "true"
    },
    {
      post_id: "7",
      user_id: "9",
      category_id: "2",
      title: "Theory of Everything The",
      content: "Love Lost Hope",
      view_count: "91",
      creation_date: "2021-06-18 19:59:37",
      is_published: "true"
    },
    {
      post_id: "8",
      user_id: "10",
      category_id: "3",
      title: "Nas: Time Is Illmatic",
      content: "Lonely Hearts Club",
      view_count: "29",
      creation_date: "2019-05-29 23:16:26",
      is_published: "true"
    },
    {
      post_id: "9",
      user_id: "2",
      category_id: "2",
      title: "Spanish Apartment",
      content: "Shattered Illusions",
      view_count: "29",
      creation_date: "null",
      is_published: "null"
    },
    {
      post_id: "10",
      user_id: "10",
      category_id: "4",
      title: "Blood from the Mummy''s Tomb",
      content: "Echoes of You",
      view_count: "17",
      creation_date: "2016-06-10 12:06:20",
      is_published: "true"
    },
    {
      post_id: "11",
      user_id: "6",
      category_id: "4",
      title: "Breakfast of Terror",
      content: "Whispers in Wind",
      view_count: "21",
      creation_date: "2022-03-23 10:16:34",
      is_published: "true"
    },
    {
      post_id: "12",
      user_id: "10",
      category_id: "4",
      title: "Sweet Sixteen",
      content: "Whispers in Dark",
      view_count: "36",
      creation_date: "2021-09-16 10:13:39",
      is_published: "true"
    },
    {
      post_id: "13",
      user_id: "5",
      category_id: "3",
      title: "Heimat - A Chronicle of Germany",
      content: "Fading Echoes",
      view_count: "76",
      creation_date: "null",
      is_published: "null"
    },
    {
      post_id: "14",
      user_id: "9",
      category_id: "4",
      title: "Matchmaker The",
      content: "Fading Sunlight",
      view_count: "100",
      creation_date: "2022-11-06 17:44:17",
      is_published: "false"
    },
    {
      post_id: "15",
      user_id: "4",
      category_id: "2",
      title: "Heroes for Sale",
      content: "Broken Promises",
      view_count: "92",
      creation_date: "2014-07-26 03:20:29",
      is_published: "false"
    },
    {
      post_id: "16",
      user_id: "6",
      category_id: "1",
      title: "Marmaduke",
      content: "Echoes of You",
      view_count: "65",
      creation_date: "null",
      is_published: "null"
    },
    {
      post_id: "17",
      user_id: "5",
      category_id: "4",
      title: "Talking Picture",
      content: "Bittersweet Goodbye",
      view_count: "63",
      creation_date: "2020-02-21 23:36:31",
      is_published: "true"
    },
    {
      post_id: "18",
      user_id: "1",
      category_id: "2",
      title: "Tales of Manhattan",
      content: "Fading Memories",
      view_count: "5",
      creation_date: "2021-09-13 03:24:44",
      is_published: "true"
    },
    {
      post_id: "19",
      user_id: "10",
      category_id: "2",
      title: "Creature",
      content: "Endless Raindrops",
      view_count: "38",
      creation_date: "null",
      is_published: "null"
    },
    {
      post_id: "20",
      user_id: "2",
      category_id: "4",
      title: "Wicker Man The",
      content: "Endless Raindrops",
      view_count: "91",
      creation_date: "2018-11-11 22:50:10",
      is_published: "true"
    },
    {
      post_id: "21",
      user_id: "6",
      category_id: "4",
      title: "Holiday The",
      content: "Whispers in Dark",
      view_count: "10",
      creation_date: "2018-05-24 07:04:45",
      is_published: "false"
    },
    {
      post_id: "22",
      user_id: "3",
      category_id: "1",
      title: "Prince & Me The",
      content: "Echoes of You",
      view_count: "60",
      creation_date: "2021-09-28 06:57:44",
      is_published: "true"
    },
    {
      post_id: "23",
      user_id: "6",
      category_id: "3",
      title: "Open Windows",
      content: "Silent Whispers",
      view_count: "19",
      creation_date: "2017-06-25 16:43:31",
      is_published: "true"
    },
    {
      post_id: "24",
      user_id: "7",
      category_id: "4",
      title: "One Trick Pony",
      content: "Whispers in Dark",
      view_count: "22",
      creation_date: "2016-07-29 14:30:13",
      is_published: "true"
    },
    {
      post_id: "25",
      user_id: "1",
      category_id: "1",
      title: "It''s a Gift",
      content: "Echoes of Love",
      view_count: "94",
      creation_date: "2015-12-20 19:09:09",
      is_published: "false"
    },
    {
      post_id: "26",
      user_id: "3",
      category_id: "3",
      title: "Lola (Twinky) (London Affair)",
      content: "Endless Night Sky",
      view_count: "78",
      creation_date: "2018-05-02 19:22:43",
      is_published: "false"
    },
    {
      post_id: "27",
      user_id: "7",
      category_id: "1",
      title: "Hard Way The",
      content: "Whispers in Wind",
      view_count: "84",
      creation_date: "null",
      is_published: "null"
    },
    {
      post_id: "28",
      user_id: "2",
      category_id: "1",
      title: "Dopamine",
      content: "Broken Dreams",
      view_count: "45",
      creation_date: "2016-02-10 21:43:57",
      is_published: "false"
    },
    {
      post_id: "29",
      user_id: "6",
      category_id: "4",
      title: "Assassination",
      content: "Fading Memories",
      view_count: "55",
      creation_date: "2019-10-27 01:26:36",
      is_published: "false"
    },
    {
      post_id: "30",
      user_id: "7",
      category_id: "3",
      title: "Woman of Affairs A",
      content: "Broken Promises",
      view_count: "64",
      creation_date: "2022-05-29 01:00:57",
      is_published: "false"
    },
    {
      post_id: "31",
      user_id: "1",
      category_id: "1",
      title: "Buried Alive",
      content: "Silent Whispers",
      view_count: "94",
      creation_date: "2021-10-11 18:51:11",
      is_published: "true"
    },
    {
      post_id: "32",
      user_id: "2",
      category_id: "1",
      title: "Empire of Dreams",
      content: "Silent Whispers",
      view_count: "5",
      creation_date: "2016-10-29 08:25:10",
      is_published: "false"
    },
    {
      post_id: "33",
      user_id: "3",
      category_id: "4",
      title: "Entertaining Angels",
      content: "Echoes of You",
      view_count: "8",
      creation_date: "2020-10-29 09:22:14",
      is_published: "true"
    },
    {
      post_id: "34",
      user_id: "7",
      category_id: "1",
      title: "Final Conflict",
      content: "Shattered Illusions",
      view_count: "82",
      creation_date: "2019-01-16 16:04:10",
      is_published: "false"
    },
    {
      post_id: "35",
      user_id: "6",
      category_id: "1",
      title: "Arsenic and Old Lace",
      content: "Broken Promises",
      view_count: "63",
      creation_date: "2018-09-27 09:29:38",
      is_published: "false"
    },
    {
      post_id: "36",
      user_id: "4",
      category_id: "1",
      title: "Gleason",
      content: "Silent Tears Fall",
      view_count: "31",
      creation_date: "2015-08-27 07:49:47",
      is_published: "true"
    },
    {
      post_id: "37",
      user_id: "10",
      category_id: "4",
      title: "Rasen",
      content: "Lonely Hearts Club",
      view_count: "77",
      creation_date: "null",
      is_published: "null"
    },
    {
      post_id: "38",
      user_id: "2",
      category_id: "4",
      title: "Smashing Pumpkins: Vieuphoria",
      content: "Broken Promises",
      view_count: "91",
      creation_date: "2018-03-29 15:56:08",
      is_published: "false"
    },
    {
      post_id: "39",
      user_id: "4",
      category_id: "1",
      title: "Iceberg L",
      content: "Echoes of Love",
      view_count: "71",
      creation_date: "2020-09-04 16:27:24",
      is_published: "true"
    },
    {
      post_id: "40",
      user_id: "2",
      category_id: "1",
      title: "Fighting Prince of Donegal",
      content: "Fading Echoes",
      view_count: "31",
      creation_date: "2019-02-17 03:07:38",
      is_published: "false"
    },
    {
      post_id: "41",
      user_id: "2",
      category_id: "1",
      title: "Stand Up and Fight",
      content: "Shattered Dreams",
      view_count: "39",
      creation_date: "null",
      is_published: "null"
    },
    {
      post_id: "42",
      user_id: "6",
      category_id: "2",
      title: "Rendez-vous d''Anna",
      content: "Broken Dreams",
      view_count: "64",
      creation_date: "2014-10-31 13:05:55",
      is_published: "false"
    },
    {
      post_id: "43",
      user_id: "7",
      category_id: "2",
      title: "Best Little Texas",
      content: "Broken Dreams",
      view_count: "10",
      creation_date: "2017-03-13 20:03:05",
      is_published: "false"
    },
    {
      post_id: "44",
      user_id: "7",
      category_id: "4",
      title: "Love on the Run",
      content: "Dancing Shadows",
      view_count: "87",
      creation_date: "2018-07-10 00:40:36",
      is_published: "true"
    },
    {
      post_id: "45",
      user_id: "10",
      category_id: "4",
      title: "Bruce Almighty",
      content: "Silent Whispers",
      view_count: "12",
      creation_date: "2016-08-22 22:34:32",
      is_published: "false"
    },
    {
      post_id: "46",
      user_id: "5",
      category_id: "3",
      title: "Human Nature",
      content: "Echoes of You",
      view_count: "18",
      creation_date: "2017-05-10 14:02:42",
      is_published: "true"
    },
    {
      post_id: "47",
      user_id: "6",
      category_id: "1",
      title: "Wrong Cops",
      content: "Broken Promises",
      view_count: "41",
      creation_date: "2020-09-27 11:03:27",
      is_published: "true"
    },
    {
      post_id: "48",
      user_id: "9",
      category_id: "3",
      title: "Sands of Iwo Jima",
      content: "Shattered Dreams",
      view_count: "1",
      creation_date: "null",
      is_published: "null"
    },
    {
      post_id: "49",
      user_id: "6",
      category_id: "2",
      title: "Rendezvous in Paris",
      content: "Whispers in Wind",
      view_count: "46",
      creation_date: "2018-12-26 22:55:53",
      is_published: "true"
    },
    {
      post_id: "50",
      user_id: "3",
      category_id: "2",
      title: "Mon Paradis - Der Winterpalast",
      content: "Fading Memories",
      view_count: "28",
      creation_date: "2017-08-02 02:37:01",
      is_published: "false"
    }
  ];
  private lastIdNum: number = 0;

  addPost(post: Post) {
    this.lastIdNum++;
    post.post_id = this.lastIdNum.toString();
    post.routing = new RoutingElement();
    post.routing.routePath = 'post';
    post.routing.queryParams = { post_id: post.post_id }

    this.postData.push(post);
  }

  updatePost(post_id: string, postItem: Post) {
    const _postItem = this.postData.find((post: Post) => {
      return post.post_id === post_id;
    });

    if (_postItem) {
      _postItem.user_id = postItem.user_id;
      _postItem.category_id = postItem.category_id;
      _postItem.title = postItem.title;
      _postItem.content = postItem.content;
      _postItem.view_count = postItem.view_count;
      _postItem.creation_date = postItem.creation_date;
      _postItem.is_published = postItem.is_published;
    }
  }

  deletePost(post_id: string) {
    const itemIndex = this.postData.findIndex((post: Post) => {
      return post.post_id === post_id;
    });
    this.postData.splice(itemIndex, 1);
  }

  // Get functions
  getPost(post_id: string): Post | undefined {
    return this.postData.find((post: Post) => { return post.post_id === post_id });
  }

  getPostCountByCategoryId(category_id: string): number {
    return this.postData.filter((post: Post) => { return post.category_id === category_id }).length;
  }

  getPostCountByUserId(user_id: string): number {
    return this.postData.filter((post: Post) => { return post.user_id === user_id }).length;
  }

  constructor(private router: Router) { 
    this.postData.forEach(element => {
      element.routing = new RoutingElement();
      element.routing.routePath = 'post';
      element.routing.queryParams = { id : element.post_id };
    });

    this.lastIdNum = parseInt(this.postData[this.postData.length - 1].post_id!)
  }

  getPosts(): Post[] {
    return this.postData;
  }
}

export interface Post{
  post_id?: string;
  user_id: string;
  category_id: string;
  title: string;
  content: string;
  view_count: string;
  creation_date: string;
  is_published: string;
  routing?: RoutingElement;
}