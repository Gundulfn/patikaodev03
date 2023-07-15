
# Patika Ödev 3

This is an Angular Blog Management System project made during "Allianz GeleceğimAll Meslek Edindirme" program.

## Data Models
This project is based on the following data models:

* User
    * user_id
    * username
    * email
    * creation_date
    * is_active
    
* Post
    * post_id
    * user_id
    * category_id
    * title
    * content
    * view_count
    * creation_date
    * is_published
    
* Category
    * category_id
    * name
    * creation_date
    
* Comment
    * comment_id
    * post_id
    * user_id
    * comment
    * creation_date
    * is_confirmed
  
## Project Details
This project has multiple main and detail pages, these pages controlled by Angular routing. 
* Main pages such as "Users", "Posts", "Categories" have tables which show JSON data from local storage and "Create" button to add new item to these tables. Also, you can filter table results using query params like : 
	* /comments?user_id=1
	* /comments?user_id=1&post_id=42
	* /posts?user_id=2
* Detail pages contain whole and extra informations about current item. Furthermore, it enables to update item's data with text input or different selection types (Example: Username selection, Date, Hour). Moreover, you can delete the item in this page.
* To create new item to table, click "Create" button at one of main pages that you want to add. Creation page looks similar to detail pages.

## Get started

### Clone the repo

```
git clone https://github.com/Gundulfn/patikaodev03.git
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```
npm install
npm start
```
### Start localhost
Start localhost at your environment, open project file from terminal and enter:

```
ng serve --open
```
Shut it down manually with `Ctrl-C`.
