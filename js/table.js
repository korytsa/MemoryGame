const table = document.querySelector('table');
const results = document.createElement('tr')
const player = document.createElement('td');
const moves = document.createElement('td');
const time = document.createElement('td');

player.innerHTML = localStorage.getItem('player');
moves.innerHTML = localStorage.getItem('moves');
time.innerHTML = localStorage.getItem('time');

