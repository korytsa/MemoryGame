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
        this.firstCardId = null;
        this.secondCardId = null;
        this.timer = null;
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
    getMatch(firstCardId) {
        let arrId = Array.from(document.querySelectorAll(`[data-id="${firstCardId}"]`));
        arrId.forEach((item) => {
            item.removeAttribute('data-name')
            // console.log(item.dataset)
        })
        this.firstCardId = null;
        this.secondCardId = null;
    }
    getUnmatch() {
        this.timer = setTimeout(() => {
            console.log('unmatch')

            let firstCard = document.querySelector(`[data-id="${this.firstCardId}"]`);
            let secondCard = document.querySelector(`[data-id="${this.secondCardId}"]`);
            console.log(firstCard, secondCard)

            let arrCard = [firstCard, secondCard]

            arrCard.forEach((item) => {
                item.classList.remove('is-flipped')
                console.log(item.classList)
            })

            this.firstCardId = null;
            this.secondCardId = null;
        }, 2000)
    }
    flipTimer() {
        if (this.timer) {
            console.log('unmatch')

            let elements = Array.from(document.querySelectorAll(`.card`));
            elements.forEach((item) => {
                item.classList.remove('is-flipped')
                console.log(item.classList)
            })

            this.firstCardId = null;
            this.secondCardId = null;

            clearTimeout(this.timer);
            this.timer = null;
            return;
        }
    }
    compareCard() {
        const gameBox = document.querySelector('.game__box');

        gameBox.addEventListener('click', function (event) {
            // this.flipTimer();

            if (!this.firstCardId) {
                this.firstCardId = event.target.parentElement.dataset.id;
            } else {
                this.secondCardId = event.target.parentElement.dataset.id;
                if (this.firstCardId === this.secondCardId) {
                    this.getMatch(this.firstCardId);
                } else {
                    this.getUnmatch();
                }
            }
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