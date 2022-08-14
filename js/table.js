const player = document.querySelector('#player');
const moves = document.querySelector('#moves');
const time = document.querySelector('#time');

player.innerHTML = localStorage.getItem('player');
moves.innerHTML = localStorage.getItem('moves');
time.innerHTML = localStorage.getItem('time');


