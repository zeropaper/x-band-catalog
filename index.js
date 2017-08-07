'use strict';
function renderMembers(members) {
  var list = members.map(function(member) {
    return `<li>
      <span class="member-name">${member.name}</span>
      <span class="member-instrument">${member.instrument}</span>
    </li>`;
  }).join('');

  return `<div class="members">
    <h3>Members</h3>
    <ul>
      ${list}
    </ul>
  </div>`;
}

function renderAlbums(albums) {
  var list = albums.map(function(album) {
    return `<li>
      <span class="album-name">${album.title}</span>
      <span class="album-release-year">${album.releaseYear}</span>
    </li>`;
  }).join('');

  return `<div class="albums">
    <h3>Albums</h3>
    <ul>
      ${list}
    </ul>
  </div>`;
}

function compareByName(a, b) {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}

var mainElement = document.querySelector('main.bands');
function whenJSONLoaded(bands) {
  var completeListOfBands = bands.sort(compareByName).map(function(band) {
    return `<section>
      <header>
        <h1>${band.name}</h1>
        <h2>${band.genre}</h2>
      </header>

      ${renderMembers(band.members.sort(compareByName))}

      ${renderAlbums(band.albums)}
    </section>`;
  }).join('');

  mainElement.innerHTML = completeListOfBands;
}

fetch('./bands.json')
  .then(function(response) {
    return response.json();
  })
  .then(whenJSONLoaded)
  .catch(function(err) {
    throw err;
  });