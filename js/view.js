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
            const card = document.createElement('div');
            card.classList.add('card');
            this.gameBox.appendChild(card).innerHTML = `
                       <div class="card__front"><div class="card__img-box"></div></div>
                       <div class="card__back"><div class="card__img-box"><img class="card__img" src="${img}"></div></div>
                `
        }
    };

}