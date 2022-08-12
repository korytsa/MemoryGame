export default class Model {
    constructor() {
        // создаем массив обьектов
        this.cardArray = [{
                name: 'swift',
                img: 'images/card-img/swiftALL.png',
                imgBack: 'images/card-bg.png',
                id: 1,
                flip: false,
            },
            {
                name: 'cc',
                img: 'images/card-img/c++ALL.png',
                imgBack: 'images/card-bg.png',
                id: 2,
                flip: false,

            },
            {
                name: 'java',
                img: 'images/card-img/javaALL.png',
                imgBack: 'images/card-bg.png',
                id: 3,
                flip: false,

            },
            {
                name: 'python',
                img: 'images/card-img/pythonALL.png',
                imgBack: 'images/card-bg.png',
                id: 4,
                flip: false,

            },
            {
                name: 'php',
                img: 'images/card-img/phpALL.jpeg',
                imgBack: 'images/card-bg.png',
                id: 5,
                flip: false,

            },
            {
                name: 'sql',
                img: 'images/card-img/SqlALL.png',
                imgBack: 'images/card-bg.png',
                id: 6,
                flip: false,

            },
            {
                name: 'sass',
                img: 'images/card-img/sassALL.png',
                imgBack: 'images/card-bg.png',
                id: 7,
                flip: false,

            },
            {
                name: 'react',
                img: 'images/card-img/REACTALL.png',
                imgBack: 'images/card-bg.png',
                id: 8,
                flip: false,

            }
        ];
        this.firstCardId = '';
        this.secondCardId = '';
        this.firstCard;
    }
    
    sortArray() {
        //создаем копию массива 
        const cloneCardArray = [...this.cardArray];

        // создвем массив 
        const allCards = this.cardArray.concat(cloneCardArray);

        // сортируем массив в случайном порядке
        return allCards.sort(function () {
            return 0.5 - Math.random()
        });
    }

    toggleCard() {
        const gameBox = document.querySelector('.game__box');

        gameBox.addEventListener('click', function (event) {
            let e = event.target.parentElement;
            if (e.dataset.name === "card") {
                e.classList.toggle('is-flipped');
                // console.log(e.classList)
            }
        })
    }

    getMatch() {
        const gameBox = document.querySelector('.game__box');

        gameBox.addEventListener('click', function (event) {
            console.log(`first ${this.firstCard} second ${event.target.parentElement.classList}`);

            if (this.firstCardId) {
                if (this.firstCardId === this.secondCardId) {
                    console.log('f')

                    this.firstCard.removeAttribute('date-name');
                    event.target.parentElement.classList.removeAttribute('date-name');
                } else {
                    this.firstCardId = '';
                    this.secondCardId = '';
                    this.firstCard.remove('is-flipped');
                    event.target.parentElement.classList.remove('is-flipped')
                }
                return this.secondCardId = event.target.parentElement.dataset.id;
            }
            this.firstCardId = event.target.parentElement.dataset.id;
            this.firstCard = event.target.parentElement.classList;
        });
    }

    getMoves() {
        let moves = document.querySelector('.controls__moves-current');
        let cards = document.querySelectorAll('.card');
        let count = 1;

        cards.forEach((card) => {
            card.addEventListener('click', function () {
                moves.innerText = count;
                count++;
            })
        })
    }

    getTime() {
        let time = document.querySelector('.controls__timer-current');
        let secondsGame = 0;
        let minutesGame = `0${0}`;

        setInterval(() => {
            secondsGame < 9 ? secondsGame = `0${++secondsGame}` : secondsGame = `${++secondsGame}`;
            if (secondsGame > 59) {
                minutesGame < 9 ? minutesGame = `0${++minutesGame}` : minutesGame = `${++minutesGame}`;
                secondsGame = `0${0}`;
            }
            time.textContent = `${minutesGame}:${secondsGame}`;
        }, 1000);
    }
}