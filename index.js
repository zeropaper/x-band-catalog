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

var mainElement = document.querySelector('main.bands');
function whenJSONLoaded(bands) {
  var completeListOfBands = bands.map(function(band) {
    return `<section>
      <header>
        <h1>${band.name}</h1>
        <h2>${band.genre}</h2>
      </header>

      ${renderMembers(band.members)}

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

fetch('./bands.json')
  .then(function(response) {
    return response.json();
  })
  .then(whenJSONLoaded)
  .catch(function(err) {
    throw err;
  });