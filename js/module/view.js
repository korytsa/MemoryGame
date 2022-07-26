export default class View {
    constructor() {
        this.gameContainer = document.querySelector('.game__container');
        this.gameBox = document.querySelector('.game__box');
        this.moves = document.querySelector('.controls__moves-current');
        this.timer = document.querySelector('.controls__timer-current');
        this.start = document.querySelector('content_btnPlay');
        this.spanPlayer = document.querySelector('.controls__nickname-userName');
    }

    //создаем игровое поле
    gameBoard(arr) {
        arr.forEach(item => {
            const img = item.img;
            const imgBack = item.imgBack;
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-name', 'card');
            card.setAttribute('data-id', item.id);
            card.setAttribute('data-value', Math.floor(Math.random() * 1000))
            this.gameBox.appendChild(card).innerHTML = `
                           <img class="card__face card__face--front" src="${imgBack}">
                           <img class="card__face card__face--back" src="${img}">
                    `
        });
    };

    // загрузка игрового поля
    gameplay() {
        window.onload = () => {
            const playerName = localStorage.getItem("player");
            this.spanPlayer.innerHTML = playerName;
        };
    }
}