# Band Catalog

## Goal

Train the access of data (in objects and arrays).

## New Concepts

- [template literals](http://devdocs.io/javascript/template_literals) (multiline string)
- [Array .sort()](http://devdocs.io/javascript/global_objects/array/sort)
- [fetch()](http://devdocs.io/dom/windoworworkerglobalscope/fetch) (similar to jQuery AJAX)

## Preparation

## Exercise

### Step 1

Create a `index.html`, a `style.css` so that the design matches.

#### Design

If the viewport size is smaller than __640px__ the "cards" are
arranged on __1 column__.  
If the viewport size is bigger than __640px__ the "cards" are
arranged on __2 columns__.  
If the viewport size is bigger than 1024px the "cards" are
arranged on __4 columns__.  

The background color of the __header__ is `#333` and its text color is `#ccc`.  
The background color of the __body__ is `#ccc` and its text color is `#333`.  
When __hovering__ a band card, its background transition to `#fff` in `218ms`.

### Step 2

Load the `bands.json` using the `fetch()` function 

In order to exercise proper usage of git we create a _feature branch_ as follow:

- in your terminal enter `git checkout -b feature-js`
- make a commit of your index.js like `git add index.js` and then `git commit -m "add fetch"`
- push your branch `git push -u origin feature-js` (the `-u` option is used to keep your local branch and the remote branch synced)
