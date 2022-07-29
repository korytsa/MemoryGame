class View {
    constructor() {
        this.gameContainer = document.querySelector('.game__container')
        this.gameBox = document.querySelector('.game__box')
        this.moves = document.querySelector('.controls__moves-current')
        this.timer = document.querySelector('.controls__timer-current')
        this.start = document.querySelector('content_btnPlay')
    }
    //создаем игровое поле
    gameBoard(arr) {
        for (let i = 0; i < arr.length; i++) {
            const img = arr[i].img;
            const imgBack = arr[i].imgBack;
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-name', 'card')
            this.gameBox.appendChild(card).innerHTML = `
                       <img class="card__face card__face--front" src="${imgBack}">
                       <img class="card__face card__face--back" src="${img}">
                `
        }
    };
}