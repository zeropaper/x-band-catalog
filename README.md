# Band Catalog

## Goal

Train the access of data (in objects and arrays).

## New Concepts

- [template literals](http://devdocs.io/javascript/template_literals) (multiline string)
- [Array .sort()](http://devdocs.io/javascript/global_objects/array/sort)
- [fetch()](http://devdocs.io/dom/windoworworkerglobalscope/fetch) (similar to jQuery AJAX)

## Preparation

## Steps

### Step 1

Create a `index.html`, a `style.css` so that the design matches.

#### Design

If the viewport size is smaller than __640px__ the "cards" are
arranged on __1 column__.  
If the viewport size is bigger than __640px__ the "cards" are
arranged on __2 columns__.  
If the viewport size is bigger than __1024px__ the "cards" are
arranged on __4 columns__.  

The background color of the __header__ is `#333` and its text color is `#ccc`.  
The background color of the __body__ is `#ccc` and its text color is `#333`.  
When __hovering__ a band card, its background color transitions to `#fff` in `218ms`.

### Step 2

Load the `bands.json` using the `fetch()` function 

In order to exercise proper usage of git we create a _feature branch_ as follow:

- in your terminal enter `git checkout -b feature-js`
- make a commit of your index.js like `git add index.js` and then `git commit -m "add fetch"`
- push your branch `git push -u origin feature-js` (the `-u` option is used to keep your local branch and the remote branch synced)

<details>
<summary>using fetch()</summary>
<pre>
fetch('./bands.json')
  .then(function(response) {
    return response.json();
  })
  .then(whenJSONLoaded)
  .catch(function(err) {
    throw err;
  });</pre>
</details>

### Step 3

Take the __HTML of 1 band__ and use it has template to display the previously loaded data.  
__Only__ take care of displaying the right band _name_ and _genre_ (we will take care of the albums and members later).

<details>
<summary>Band Template</summary>

    var mainElement = document.querySelector('main.bands');
    function whenJSONLoaded(bands) {
      var completeListOfBands = bands.map(function(band) {
        return `<section>
          <header>
            <h1>${band.name}</h1>
            <h2>${band.genre}</h2>
          </header>

          <div class="members">
            <h3>Members</h3>
            <ul>
              <li>
                <span class="member-name">John Doe</span>
                <span class="member-instrument">Guitar</span>
              </li>
              <li>
                <span class="member-name">John Doe</span>
                <span class="member-instrument">Guitar</span>
              </li>
            </ul>
          </div>

          <div class="albums">
            <h3>Albums</h3>
            <ul>
              <li>
                <span class="album-name">Album Name</span>
                <span class="album-release-year">(2001)</span>
              </li>
              <li>
                <span class="album-name">Album Name</span>
                <span class="album-release-year">(2001)</span>
              </li>
            </ul>
          </div>
        </section>`;
      }).join('');

      mainElement.innerHTML = completeListOfBands;
    }
</details>

### Step 4

Create a function (called `renderMembers`) which takes 1 argument (`members`) to render the members of a band.

<details>
<summary>Band Members</summary>

    function renderMembers(members) {
      return '<ul>' + members.map(function(member) {
        return `<li>
          <span class="member-name">${member.name}</span>
          <span class="member-instrument">${member.instrument}</span>
        </li>`;
      }).join('') + '</ul>';
    }
</details>

### Step 5

Make the list of members of each bands rely on the data using the previously create `renderMembers` function.

<details>
<summary>Band Members Usage</summary>

    var mainElement = document.querySelector('main.bands');
    function whenJSONLoaded(bands) {
      var completeListOfBands = bands.map(function(band) {
        var membersList = renderMembers(band.members);
        return `<section>
          <header>
            <h1>${band.name}</h1>
            <h2>${band.genre}</h2>
          </header>

          <div class="members">
            <h3>Members</h3>
            ${membersList}
          </div>

          <div class="albums">
            <h3>Albums</h3>
            <ul>
              <li>
                <span class="album-name">Album Name</span>
                <span class="album-release-year">(2001)</span>
              </li>
              <li>
                <span class="album-name">Album Name</span>
                <span class="album-release-year">(2001)</span>
              </li>
            </ul>
          </div>
        </section>`;
      }).join('');

      mainElement.innerHTML = completeListOfBands;
    }
</details>

### Step 6

Repeat steps 4 and 5 for the albums of each bands.

### Step 7

Sort the bands by their `name`.

### Step 8

Sort the members by their `name`.

### Step 9

Sort the albums by their `releaseYear`.
