document.addEventListener('DOMContentLoaded', () => {
    const selectors = {
        gameContainer: document.querySelector('.game__container'),
        gameBox: document.querySelector('.game__box'),
        moves: document.querySelector('.controls__moves-current'),
        timer: document.querySelector('.controls__timer-current'),
        start: document.querySelector('content_btnPlay'),
    }
    
    const state = {
        gameStarted: false,
        flippedCards: 0,
        totalFlips: 0,
        totalTime: 0,
        loop: null
    }

    // создаем массив обьектов
    const cardArray = [{
            name: '2',
            img: 'images/card-img/2.png'
        },
        {
            name: 'cc',
            img: 'images/card-img/cc.png'
        },
        {
            name: 'java',
            img: 'images/card-img/java.png'
        },
        {
            name: 'phyton',
            img: 'images/card-img/phyton.png'
        },
        {
            name: 'php',
            img: 'images/card-img/php.png'
        },
        {
            name: 'sql',
            img: 'images/card-img/sql.png'
        },
        {
            name: 'sass',
            img: 'images/card-img/sass.png'
        },
        {
            name: 'react',
            img: 'images/card-img/react.png'
        }
    ];
    
    //создаем копию массива 
    const cloneCardArray = [...cardArray];
    
    
    // сортируем массив в случайном порядке
    cardArray.sort(function () {
        return 0.5 - Math.random()
    });
    
    //создаем игровое поле
    const gameBoard = (arr) => {
        for (i = 0; i < arr.length; i++) {
            const img = arr[i].img;
            const card = document.createElement('div');
            card.classList.add('card');
            selectors.gameBox.appendChild(card).innerHTML = `
                       <div class="card__front"></div>
                       <div class="card__back"><img class="card__img" src="${img}"></div>
                `   
        }
    };
    
    gameBoard(cardArray);
    gameBoard(cloneCardArray);
})
