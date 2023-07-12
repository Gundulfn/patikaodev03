import { Injectable } from '@angular/core';
import { RoutingElement } from '../shared/RoutingElement';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentData: Comment[] = [
    {
      comment_id: '',
      post_id: "42",
      user_id: "1",
      comment: "I loved this movie!",
      creation_date: "2020-03-19 11:46:51",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "26",
      user_id: "4",
      comment: "It was okay",
      creation_date: "2018-08-10 03:54:12",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "17",
      user_id: "4",
      comment: "but not my favorite.",
      creation_date: "2018-06-04 06:36:32",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "39",
      user_id: "10",
      comment: "I didn''t really like this one.",
      creation_date: "2021-07-30 07:52:26",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "6",
      user_id: "5",
      comment: "This movie was terrible!",
      creation_date: "2016-06-16 15:52:40",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "32",
      user_id: "null",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "14",
      user_id: "9",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2017-02-24 19:31:09",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "6",
      user_id: "9",
      comment: "It was good",
      creation_date: "2018-08-20 11:18:08",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "27",
      user_id: "2",
      comment: "but not great.",
      creation_date: "2021-07-16 12:23:33",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "44",
      user_id: "6",
      comment: "This movie was so boring.",
      creation_date: "2018-12-20 11:47:23",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "40",
      user_id: "9",
      comment: "I laughed so much during this movie!",
      creation_date: "2018-04-18 07:17:17",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "44",
      user_id: "1",
      comment: "I cried during this movie.",
      creation_date: "2021-05-15 02:18:32",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "19",
      user_id: "4",
      comment: "I loved this movie!",
      creation_date: "2017-02-03 08:39:04",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "11",
      user_id: "5",
      comment: "It was okay",
      creation_date: "2023-04-05 05:00:16",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "12",
      user_id: "10",
      comment: "but not my favorite.",
      creation_date: "2017-01-29 00:30:39",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "4",
      user_id: "6",
      comment: "I didn''t really like this one.",
      creation_date: "2017-01-28 23:04:20",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "40",
      user_id: "null",
      comment: "This movie was terrible!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "3",
      user_id: "8",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2020-07-08 18:34:12",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "2",
      user_id: "5",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2016-06-28 02:54:57",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "45",
      user_id: "8",
      comment: "It was good",
      creation_date: "2018-08-27 02:10:14",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "16",
      user_id: "null",
      comment: "but not great.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "38",
      user_id: "7",
      comment: "This movie was so boring.",
      creation_date: "2022-10-28 16:51:55",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "21",
      user_id: "null",
      comment: "I laughed so much during this movie!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "16",
      user_id: "5",
      comment: "I cried during this movie.",
      creation_date: "2022-05-28 13:44:55",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "30",
      user_id: "1",
      comment: "I loved this movie!",
      creation_date: "2017-07-27 23:09:28",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "14",
      user_id: "3",
      comment: "It was okay",
      creation_date: "2014-08-20 18:23:54",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "30",
      user_id: "1",
      comment: "but not my favorite.",
      creation_date: "2017-06-05 00:36:00",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "16",
      user_id: "null",
      comment: "I didn''t really like this one.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "16",
      user_id: "null",
      comment: "This movie was terrible!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "50",
      user_id: "7",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2017-07-14 05:43:01",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "46",
      user_id: "6",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2021-05-04 22:50:08",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "27",
      user_id: "7",
      comment: "It was good",
      creation_date: "2017-10-04 10:24:07",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "19",
      user_id: "7",
      comment: "but not great.",
      creation_date: "2022-08-22 21:33:36",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "43",
      user_id: "5",
      comment: "This movie was so boring.",
      creation_date: "2014-08-30 15:12:23",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "48",
      user_id: "null",
      comment: "I laughed so much during this movie!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "23",
      user_id: "7",
      comment: "I cried during this movie.",
      creation_date: "2021-05-18 09:47:58",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "49",
      user_id: "9",
      comment: "I loved this movie!",
      creation_date: "2020-07-06 04:22:55",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "45",
      user_id: "3",
      comment: "It was okay",
      creation_date: "2022-11-21 20:24:39",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "12",
      user_id: "9",
      comment: "but not my favorite.",
      creation_date: "2020-11-08 15:01:24",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "46",
      user_id: "3",
      comment: "I didn''t really like this one.",
      creation_date: "2017-12-22 16:41:46",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "47",
      user_id: "7",
      comment: "This movie was terrible!",
      creation_date: "2016-03-02 23:06:55",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "47",
      user_id: "7",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2021-11-08 23:32:17",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "42",
      user_id: "8",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2021-01-22 19:49:43",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "28",
      user_id: "1",
      comment: "It was good",
      creation_date: "2020-05-19 11:51:32",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "47",
      user_id: "5",
      comment: "but not great.",
      creation_date: "2021-08-19 23:30:49",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "31",
      user_id: "4",
      comment: "This movie was so boring.",
      creation_date: "2022-08-11 07:23:15",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "42",
      user_id: "8",
      comment: "I laughed so much during this movie!",
      creation_date: "2017-02-18 16:34:58",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "36",
      user_id: "null",
      comment: "I cried during this movie.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "8",
      user_id: "null",
      comment: "I loved this movie!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "27",
      user_id: "5",
      comment: "It was okay",
      creation_date: "2020-11-28 05:44:31",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "45",
      user_id: "8",
      comment: "but not my favorite.",
      creation_date: "2015-05-13 04:28:33",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "22",
      user_id: "null",
      comment: "I didn''t really like this one.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "39",
      user_id: "4",
      comment: "This movie was terrible!",
      creation_date: "2023-01-08 20:45:30",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "11",
      user_id: "7",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2019-10-22 13:23:49",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "28",
      user_id: "4",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2020-10-20 03:46:22",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "45",
      user_id: "10",
      comment: "It was good",
      creation_date: "2014-08-07 20:24:17",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "24",
      user_id: "null",
      comment: "but not great.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "18",
      user_id: "7",
      comment: "This movie was so boring.",
      creation_date: "2019-03-04 10:23:58",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "30",
      user_id: "5",
      comment: "I laughed so much during this movie!",
      creation_date: "2023-01-01 19:48:42",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "22",
      user_id: "2",
      comment: "I cried during this movie.",
      creation_date: "2021-05-07 05:12:28",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "3",
      user_id: "8",
      comment: "I loved this movie!",
      creation_date: "2019-01-26 08:29:05",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "40",
      user_id: "2",
      comment: "It was okay",
      creation_date: "2017-04-29 09:39:11",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "48",
      user_id: "8",
      comment: "but not my favorite.",
      creation_date: "2020-02-07 16:42:16",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "4",
      user_id: "4",
      comment: "I didn''t really like this one.",
      creation_date: "2023-01-31 05:16:43",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "16",
      user_id: "null",
      comment: "This movie was terrible!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "15",
      user_id: "6",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2018-12-30 22:06:19",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "2",
      user_id: "5",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2017-11-07 08:13:47",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "16",
      user_id: "null",
      comment: "It was good",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "23",
      user_id: "9",
      comment: "but not great.",
      creation_date: "2020-03-12 08:23:29",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "36",
      user_id: "7",
      comment: "This movie was so boring.",
      creation_date: "2021-01-18 06:11:47",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "7",
      user_id: "6",
      comment: "I laughed so much during this movie!",
      creation_date: "2015-02-08 20:35:18",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "44",
      user_id: "9",
      comment: "I cried during this movie.",
      creation_date: "2023-01-25 21:11:49",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "41",
      user_id: "5",
      comment: "I loved this movie!",
      creation_date: "2014-10-25 23:27:01",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "23",
      user_id: "3",
      comment: "It was okay",
      creation_date: "2019-07-01 14:12:21",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "8",
      user_id: "7",
      comment: "but not my favorite.",
      creation_date: "2016-07-27 20:41:55",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "17",
      user_id: "5",
      comment: "I didn''t really like this one.",
      creation_date: "2021-10-31 13:38:05",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "46",
      user_id: "4",
      comment: "This movie was terrible!",
      creation_date: "2018-05-21 00:35:43",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "26",
      user_id: "5",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2019-03-22 05:35:44",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "21",
      user_id: "7",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2019-01-11 11:36:55",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "50",
      user_id: "3",
      comment: "It was good",
      creation_date: "2019-12-13 23:46:31",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "38",
      user_id: "10",
      comment: "but not great.",
      creation_date: "2015-10-15 23:28:43",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "42",
      user_id: "1",
      comment: "This movie was so boring.",
      creation_date: "2015-05-23 21:40:13",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "44",
      user_id: "3",
      comment: "I laughed so much during this movie!",
      creation_date: "2021-02-24 17:18:41",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "43",
      user_id: "3",
      comment: "I cried during this movie.",
      creation_date: "2015-02-27 07:11:14",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "39",
      user_id: "9",
      comment: "I loved this movie!",
      creation_date: "2023-02-06 18:30:14",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "50",
      user_id: "5",
      comment: "It was okay",
      creation_date: "2015-05-28 11:26:52",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "29",
      user_id: "2",
      comment: "but not my favorite.",
      creation_date: "2015-08-26 17:50:25",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "39",
      user_id: "8",
      comment: "I didn''t really like this one.",
      creation_date: "2018-10-27 12:46:45",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "32",
      user_id: "null",
      comment: "This movie was terrible!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "49",
      user_id: "7",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2023-05-10 09:04:44",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "13",
      user_id: "10",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2016-02-12 14:36:23",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "4",
      user_id: "null",
      comment: "It was good",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "16",
      user_id: "null",
      comment: "but not great.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "2",
      user_id: "null",
      comment: "This movie was so boring.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "7",
      user_id: "6",
      comment: "I laughed so much during this movie!",
      creation_date: "2023-05-05 20:58:10",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "6",
      user_id: "8",
      comment: "I cried during this movie.",
      creation_date: "2021-06-29 16:48:26",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "42",
      user_id: "7",
      comment: "I loved this movie!",
      creation_date: "2019-02-17 00:39:45",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "7",
      user_id: "2",
      comment: "It was okay",
      creation_date: "2016-07-30 12:17:21",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "30",
      user_id: "5",
      comment: "but not my favorite.",
      creation_date: "2018-08-28 01:58:59",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "19",
      user_id: "4",
      comment: "I didn''t really like this one.",
      creation_date: "2020-08-20 01:50:48",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "17",
      user_id: "4",
      comment: "This movie was terrible!",
      creation_date: "2015-05-02 03:55:34",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "7",
      user_id: "1",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2018-04-28 07:09:34",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "50",
      user_id: "6",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2021-02-24 15:43:10",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "40",
      user_id: "1",
      comment: "It was good",
      creation_date: "2016-10-11 06:49:58",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "12",
      user_id: "7",
      comment: "but not great.",
      creation_date: "2022-08-23 20:53:21",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "15",
      user_id: "3",
      comment: "This movie was so boring.",
      creation_date: "2022-04-16 21:31:29",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "35",
      user_id: "9",
      comment: "I laughed so much during this movie!",
      creation_date: "2020-05-11 09:06:57",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "17",
      user_id: "4",
      comment: "I cried during this movie.",
      creation_date: "2019-03-30 14:56:08",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "7",
      user_id: "3",
      comment: "I loved this movie!",
      creation_date: "2016-06-19 04:52:37",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "46",
      user_id: "4",
      comment: "It was okay",
      creation_date: "2023-01-09 13:47:01",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "27",
      user_id: "3",
      comment: "but not my favorite.",
      creation_date: "2022-12-27 08:34:08",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "43",
      user_id: "10",
      comment: "I didn''t really like this one.",
      creation_date: "2022-07-11 06:25:59",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "35",
      user_id: "5",
      comment: "This movie was terrible!",
      creation_date: "2015-04-29 01:19:39",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "49",
      user_id: "1",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2018-06-17 07:10:12",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "11",
      user_id: "null",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "18",
      user_id: "2",
      comment: "It was good",
      creation_date: "2015-05-16 22:28:04",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "36",
      user_id: "null",
      comment: "but not great.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "40",
      user_id: "null",
      comment: "This movie was so boring.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "50",
      user_id: "4",
      comment: "I laughed so much during this movie!",
      creation_date: "2023-06-04 21:41:05",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "31",
      user_id: "2",
      comment: "I cried during this movie.",
      creation_date: "2019-05-21 00:04:12",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "12",
      user_id: "5",
      comment: "I loved this movie!",
      creation_date: "2020-09-15 16:50:57",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "9",
      user_id: "6",
      comment: "It was okay",
      creation_date: "2018-07-26 04:43:57",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "22",
      user_id: "10",
      comment: "but not my favorite.",
      creation_date: "2022-06-29 02:35:15",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "10",
      user_id: "null",
      comment: "I didn''t really like this one.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "40",
      user_id: "null",
      comment: "This movie was terrible!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "1",
      user_id: "10",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2014-12-12 03:41:26",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "24",
      user_id: "null",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "9",
      user_id: "5",
      comment: "It was good",
      creation_date: "2014-11-12 02:22:33",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "32",
      user_id: "5",
      comment: "but not great.",
      creation_date: "2017-03-09 01:49:24",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "45",
      user_id: "9",
      comment: "This movie was so boring.",
      creation_date: "2022-01-24 10:45:13",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "46",
      user_id: "5",
      comment: "I laughed so much during this movie!",
      creation_date: "2017-03-08 00:38:32",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "33",
      user_id: "10",
      comment: "I cried during this movie.",
      creation_date: "2017-05-28 06:23:30",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "20",
      user_id: "6",
      comment: "I loved this movie!",
      creation_date: "2020-10-10 15:56:39",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "11",
      user_id: "null",
      comment: "It was okay",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "22",
      user_id: "null",
      comment: "but not my favorite.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "7",
      user_id: "8",
      comment: "I didn''t really like this one.",
      creation_date: "2022-10-12 20:24:39",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "50",
      user_id: "1",
      comment: "This movie was terrible!",
      creation_date: "2014-10-04 00:47:57",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "3",
      user_id: "1",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2017-06-26 03:25:06",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "35",
      user_id: "5",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2023-02-21 01:54:31",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "11",
      user_id: "10",
      comment: "It was good",
      creation_date: "2021-07-07 10:43:24",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "33",
      user_id: "null",
      comment: "but not great.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "32",
      user_id: "null",
      comment: "This movie was so boring.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "26",
      user_id: "6",
      comment: "I laughed so much during this movie!",
      creation_date: "2019-05-29 11:09:14",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "11",
      user_id: "2",
      comment: "I cried during this movie.",
      creation_date: "2017-02-28 10:36:48",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "17",
      user_id: "7",
      comment: "I loved this movie!",
      creation_date: "2022-11-15 22:55:27",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "25",
      user_id: "4",
      comment: "It was okay",
      creation_date: "2016-06-12 00:00:30",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "44",
      user_id: "null",
      comment: "but not my favorite.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "42",
      user_id: "1",
      comment: "I didn''t really like this one.",
      creation_date: "2023-03-06 09:39:18",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "8",
      user_id: "5",
      comment: "This movie was terrible!",
      creation_date: "2019-08-19 12:38:10",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "9",
      user_id: "10",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2018-07-13 23:36:15",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "14",
      user_id: "8",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2018-05-12 06:28:58",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "22",
      user_id: "2",
      comment: "It was good",
      creation_date: "2021-11-19 12:32:15",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "45",
      user_id: "null",
      comment: "but not great.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "33",
      user_id: "null",
      comment: "This movie was so boring.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "24",
      user_id: "1",
      comment: "I laughed so much during this movie!",
      creation_date: "2018-03-04 19:57:09",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "12",
      user_id: "3",
      comment: "I cried during this movie.",
      creation_date: "2021-06-30 17:14:58",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "43",
      user_id: "4",
      comment: "I loved this movie!",
      creation_date: "2022-03-24 09:44:58",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "5",
      user_id: "3",
      comment: "It was okay",
      creation_date: "2022-01-13 12:15:35",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "32",
      user_id: "2",
      comment: "but not my favorite.",
      creation_date: "2018-01-24 06:40:29",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "22",
      user_id: "null",
      comment: "I didn''t really like this one.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "35",
      user_id: "10",
      comment: "This movie was terrible!",
      creation_date: "2017-03-02 02:08:39",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "26",
      user_id: "9",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2018-03-24 01:13:24",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "11",
      user_id: "5",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2018-11-24 10:40:11",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "33",
      user_id: "5",
      comment: "It was good",
      creation_date: "2015-03-20 08:52:07",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "43",
      user_id: "null",
      comment: "but not great.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "43",
      user_id: "null",
      comment: "This movie was so boring.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "2",
      user_id: "null",
      comment: "I laughed so much during this movie!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "20",
      user_id: "5",
      comment: "I cried during this movie.",
      creation_date: "2016-03-09 17:35:31",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "27",
      user_id: "6",
      comment: "I loved this movie!",
      creation_date: "2017-10-04 23:53:19",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "9",
      user_id: "9",
      comment: "It was okay",
      creation_date: "2021-10-18 21:58:24",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "7",
      user_id: "9",
      comment: "but not my favorite.",
      creation_date: "2020-04-20 20:03:32",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "48",
      user_id: "4",
      comment: "I didn''t really like this one.",
      creation_date: "2019-12-05 08:44:54",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "47",
      user_id: "2",
      comment: "This movie was terrible!",
      creation_date: "2016-09-13 17:50:21",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "27",
      user_id: "null",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "8",
      user_id: "4",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2022-03-07 08:24:58",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "42",
      user_id: "7",
      comment: "It was good",
      creation_date: "2022-06-09 12:01:58",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "49",
      user_id: "null",
      comment: "but not great.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "30",
      user_id: "null",
      comment: "This movie was so boring.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "19",
      user_id: "8",
      comment: "I laughed so much during this movie!",
      creation_date: "2023-06-13 08:54:19",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "13",
      user_id: "7",
      comment: "I cried during this movie.",
      creation_date: "2015-05-27 10:41:03",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "48",
      user_id: "null",
      comment: "I loved this movie!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "10",
      user_id: "4",
      comment: "It was okay",
      creation_date: "2021-12-19 18:02:13",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "17",
      user_id: "4",
      comment: "but not my favorite.",
      creation_date: "2019-11-19 04:20:09",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "21",
      user_id: "3",
      comment: "I didn''t really like this one.",
      creation_date: "2018-12-05 20:56:05",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "20",
      user_id: "3",
      comment: "This movie was terrible!",
      creation_date: "2016-07-03 22:13:26",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "26",
      user_id: "4",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2020-05-13 07:11:38",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "30",
      user_id: "6",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2020-05-09 00:06:50",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "32",
      user_id: "8",
      comment: "It was good",
      creation_date: "2016-03-14 17:46:26",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "21",
      user_id: "5",
      comment: "but not great.",
      creation_date: "2021-09-04 02:12:28",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "43",
      user_id: "8",
      comment: "This movie was so boring.",
      creation_date: "2019-04-09 03:48:45",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "26",
      user_id: "1",
      comment: "I laughed so much during this movie!",
      creation_date: "2017-05-26 15:45:56",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "38",
      user_id: "7",
      comment: "I cried during this movie.",
      creation_date: "2020-01-15 03:00:22",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "49",
      user_id: "2",
      comment: "I loved this movie!",
      creation_date: "2021-05-28 01:35:41",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "9",
      user_id: "4",
      comment: "It was okay",
      creation_date: "2015-02-01 07:34:24",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "43",
      user_id: "9",
      comment: "but not my favorite.",
      creation_date: "2016-08-17 02:18:00",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "42",
      user_id: "6",
      comment: "I didn''t really like this one.",
      creation_date: "2021-11-11 12:36:56",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "25",
      user_id: "6",
      comment: "This movie was terrible!",
      creation_date: "2022-10-08 18:18:22",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "6",
      user_id: "null",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "10",
      user_id: "null",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "22",
      user_id: "10",
      comment: "It was good",
      creation_date: "2018-05-13 06:54:22",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "34",
      user_id: "null",
      comment: "but not great.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "8",
      user_id: "6",
      comment: "This movie was so boring.",
      creation_date: "2018-06-02 12:38:16",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "50",
      user_id: "5",
      comment: "I laughed so much during this movie!",
      creation_date: "2014-12-29 01:37:53",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "12",
      user_id: "6",
      comment: "I cried during this movie.",
      creation_date: "2022-07-21 06:52:19",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "19",
      user_id: "8",
      comment: "I loved this movie!",
      creation_date: "2020-09-02 02:34:15",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "16",
      user_id: "null",
      comment: "It was okay",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "27",
      user_id: "8",
      comment: "but not my favorite.",
      creation_date: "2020-07-14 11:03:33",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "49",
      user_id: "null",
      comment: "I didn''t really like this one.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "11",
      user_id: "null",
      comment: "This movie was terrible!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "32",
      user_id: "4",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2017-01-07 09:26:37",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "38",
      user_id: "null",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "4",
      user_id: "null",
      comment: "It was good",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "18",
      user_id: "10",
      comment: "but not great.",
      creation_date: "2016-04-06 14:43:29",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "30",
      user_id: "10",
      comment: "This movie was so boring.",
      creation_date: "2022-11-07 18:02:20",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "48",
      user_id: "5",
      comment: "I laughed so much during this movie!",
      creation_date: "2023-06-09 10:32:40",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "50",
      user_id: "5",
      comment: "I cried during this movie.",
      creation_date: "2015-05-24 00:22:46",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "19",
      user_id: "4",
      comment: "I loved this movie!",
      creation_date: "2017-04-16 15:00:42",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "18",
      user_id: "null",
      comment: "It was okay",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "14",
      user_id: "9",
      comment: "but not my favorite.",
      creation_date: "2020-04-22 03:23:45",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "10",
      user_id: "null",
      comment: "I didn''t really like this one.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "33",
      user_id: "9",
      comment: "This movie was terrible!",
      creation_date: "2020-12-09 05:06:15",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "18",
      user_id: "8",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2016-03-06 19:12:47",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "4",
      user_id: "4",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2014-08-18 06:12:25",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "31",
      user_id: "7",
      comment: "It was good",
      creation_date: "2021-02-22 07:02:45",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "29",
      user_id: "6",
      comment: "but not great.",
      creation_date: "2020-11-05 22:26:31",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "6",
      user_id: "9",
      comment: "This movie was so boring.",
      creation_date: "2023-02-02 12:25:06",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "4",
      user_id: "6",
      comment: "I laughed so much during this movie!",
      creation_date: "2020-05-20 09:19:36",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "36",
      user_id: "null",
      comment: "I cried during this movie.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "40",
      user_id: "null",
      comment: "I loved this movie!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "21",
      user_id: "null",
      comment: "It was okay",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "14",
      user_id: "3",
      comment: "but not my favorite.",
      creation_date: "2020-04-20 22:42:24",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "20",
      user_id: "10",
      comment: "I didn''t really like this one.",
      creation_date: "2020-02-23 00:57:41",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "33",
      user_id: "8",
      comment: "This movie was terrible!",
      creation_date: "2017-07-19 15:06:57",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "18",
      user_id: "7",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "2016-09-09 05:47:13",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "47",
      user_id: "1",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2018-06-02 14:01:24",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "34",
      user_id: "1",
      comment: "It was good",
      creation_date: "2017-05-13 12:44:53",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "21",
      user_id: "7",
      comment: "but not great.",
      creation_date: "2016-02-12 19:47:25",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "35",
      user_id: "5",
      comment: "This movie was so boring.",
      creation_date: "2017-02-11 16:19:56",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "49",
      user_id: "6",
      comment: "I laughed so much during this movie!",
      creation_date: "2015-08-08 01:24:42",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "44",
      user_id: "6",
      comment: "I cried during this movie.",
      creation_date: "2019-02-02 23:48:30",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "10",
      user_id: "5",
      comment: "I loved this movie!",
      creation_date: "2022-02-02 08:48:28",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "24",
      user_id: "2",
      comment: "It was okay",
      creation_date: "2015-07-04 06:00:00",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "17",
      user_id: "5",
      comment: "but not my favorite.",
      creation_date: "2021-09-12 14:31:24",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "35",
      user_id: "null",
      comment: "I didn''t really like this one.",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "7",
      user_id: "6",
      comment: "This movie was terrible!",
      creation_date: "2019-03-12 12:31:10",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "4",
      user_id: "null",
      comment: "One of the best movies I''ve ever seen!",
      creation_date: "null",
      is_confirmed: "null"
    },
    {
      comment_id: '',
      post_id: "16",
      user_id: "9",
      comment: "I wouldn''t recommend this movie.",
      creation_date: "2019-04-27 09:36:23",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "13",
      user_id: "8",
      comment: "It was good",
      creation_date: "2020-12-13 20:53:46",
      is_confirmed: "true"
    },
    {
      comment_id: '',
      post_id: "41",
      user_id: "6",
      comment: "but not great.",
      creation_date: "2017-05-26 15:25:10",
      is_confirmed: "false"
    },
    {
      comment_id: '',
      post_id: "47",
      user_id: "null",
      comment: "This movie was so boring.",
      creation_date: "null",
      is_confirmed: "null"
    }
  ];

  private lastIdNum: number = 0;

  addComment(comment: Comment) {
    this.lastIdNum++;
    comment.comment_id = this.lastIdNum.toString();
    comment.routing = new RoutingElement();
    comment.routing.routePath = 'comment';
    comment.routing.queryParams = { comment_id: comment.post_id }

    this.commentData.push(comment);
  }

  updateComment(comment_id: string, commentItem: Comment) {
    const _commentItem = this.commentData.find((comment: Comment) => {
      return comment.comment_id === comment_id;
    });

    if (_commentItem) {
      _commentItem.post_id = commentItem.post_id;
      _commentItem.user_id = commentItem.user_id;
      _commentItem.user_id = commentItem.user_id;
      _commentItem.comment = commentItem.comment;
      _commentItem.creation_date = commentItem.creation_date;
      _commentItem.is_confirmed = commentItem.is_confirmed;
    }
  }

  deleteComment(comment_id: string) {
    const itemIndex = this.commentData.findIndex((comment: Comment) => {
      return comment.comment_id === comment_id;
    });
    this.commentData.splice(itemIndex, 1);
  }

  // Get functions
  getComments(): Comment[] {
    return this.commentData;
  }

  getCommentsByPostId(post_id: string): Comment[] {
    return this.commentData.filter((comment: Comment) => { return comment.post_id === post_id });
  }

  getComment(comment_id: string): Comment | undefined {
    return this.commentData.find((comment: Comment) => { return comment.comment_id === comment_id });
  }


  getCommentCountByUserId(user_id: string): number {
    return this.commentData.filter((comment: Comment) => { return comment.user_id === user_id }).length;
  }

  constructor() {
    let i = 1;
    this.commentData.forEach(element => {
      element.comment_id = i.toString();
      i++;

      element.routing = new RoutingElement();
      element.routing.routePath = 'comment';
      element.routing.queryParams = { id: element.comment_id};
    });

    this.lastIdNum = parseInt(this.commentData[this.commentData.length - 1].comment_id!)
  }

}

export interface Comment {
  comment_id?: string;
  post_id: string;
  user_id: string;
  comment: string;
  creation_date: string;
  is_confirmed: string;
  routing?: RoutingElement;
}