export default class Model {
    constructor() {
        this.cardArray = [{
                name: 'swift',
                img: 'images/card-img/swiftALL.png',
                imgBack: 'images/card-bg.png',
                id: 1,
            },
            {
                name: 'cc',
                img: 'images/card-img/c++ALL.png',
                imgBack: 'images/card-bg.png',
                id: 2,
            },
            {
                name: 'java',
                img: 'images/card-img/javaALL.png',
                imgBack: 'images/card-bg.png',
                id: 3,
            },
            {
                name: 'python',
                img: 'images/card-img/pythonALL.png',
                imgBack: 'images/card-bg.png',
                id: 4,
            },
            {
                name: 'php',
                img: 'images/card-img/phpALL.jpeg',
                imgBack: 'images/card-bg.png',
                id: 5,
            },
            {
                name: 'sql',
                img: 'images/card-img/SqlALL.png',
                imgBack: 'images/card-bg.png',
                id: 6,
            },
            {
                name: 'sass',
                img: 'images/card-img/sassALL.png',
                imgBack: 'images/card-bg.png',
                id: 7,
            },
            {
                name: 'react',
                img: 'images/card-img/REACTALL.png',
                imgBack: 'images/card-bg.png',
                id: 8,
            }
        ];
        this.firstCardId = null;
        this.secondCardId = null;
    }

    sortArray() {
        const cloneCardArray = [...this.cardArray];

        const allCards = this.cardArray.concat(cloneCardArray);

        return allCards.sort(function () {
            return 0.5 - Math.random()
        });
    }

    flipCard() {
        const gameBox = document.querySelector('.game__box');

        gameBox.addEventListener('click', (event) => {
            let e = event.target.parentElement;
            if (e.dataset.name === "card") {
                e.classList.toggle('is-flipped');
            }
            this.compareCard(event);
        })
    }

    unflipCard() {
        const gameBox = document.querySelector('.game__box');

        Array.from(gameBox.children).forEach((child) => {
            if (child.dataset.name) {
                child.classList.remove('is-flipped');
            }
        })
    }

    compareCard(event) {
        if (this.firstCardId && this.secondCardId) {
            clearTimeout(this.timeout)
            this.timeout = null
            this.unflipCard()

            setTimeout(() => {
                this.firstCardId = null;
                this.secondCardId = null;
            }, 0)
        }

        if (!this.firstCardId) {
            this.firstCardValue = event.target.parentElement.dataset.value;
            return this.firstCardId = event.target.parentElement.dataset.id;
        }

        if (!this.secondCardId) {
            this.secondCardId = event.target.parentElement.dataset.id;
            if (this.firstCardId === this.secondCardId) {
                this.getMatch(event);
            } else {
                this.getUnmatch();
            }
        }
    }

    getMatch(event) {
        if (this.firstCardValue !== event.target.parentElement.dataset.value) {
            let arrId = Array.from(document.querySelectorAll(`[data-id="${this.firstCardId}"]`));
            arrId.forEach((item) => {
                item.removeAttribute('data-name')
            })
            this.firstCardId = null;
            this.secondCardId = null;
        } else {
            this.firstCardId = null;
            this.secondCardId = null;
        }
        this.popUp();
    }

    getUnmatch() {
        this.timeout = setTimeout(() => {
            this.unflipCard();
            this.firstCardId = null;
            this.secondCardId = null;
        }, 1500)
    }

    getMoves() {
        let moves = document.querySelector('.controls__moves-current');
        let cards = document.querySelectorAll('.card');
        let count = 1;

        cards.forEach((card) => {
            card.addEventListener('click', function () {
                moves.innerText = count;
                // count++;
                localStorage.setItem('moves', count++);
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
            localStorage.setItem('time', time.textContent = `${minutesGame}:${secondsGame}`);
            // time.textContent = `${minutesGame}:${secondsGame}`;
        }, 1000);
    }
    textForPopUp() {
        let popup = document.querySelector('.popup');
        const nameUser = document.querySelector(".controls__nickname-userName");
        let moves = document.querySelector('.controls__moves-current');
        let time = document.querySelector('.controls__timer-current');

        const text = document.createElement('div');
        const title = document.createElement('h2');
        const mainText = document.createElement('p');

        text.classList.add('popupText');
        title.classList.add('popupTitle');
        mainText.classList.add('popupMainText');

        title.textContent = `Good job, ${nameUser.textContent}!`;
        mainText.innerHTML = `
                You completed this game in
                <p>moves: ${moves.textContent}</p> 
                time: ${time.textContent}
            `;

        text.appendChild(title);
        text.appendChild(mainText);
        popup.appendChild(text)
        this.popUpButtons();
    }
    popUpButtons() {
        const text = document.querySelector('.popupText');

        const tableBtns = document.createElement('div');
        const playAgain = document.createElement('button');
        const tableResults = document.createElement('button');

        tableBtns.classList.add('popupTableBtns');
        playAgain.classList.add('popupBtn');
        playAgain.classList.add('playAgain');
        tableResults.classList.add('popupBtn');
        tableResults.classList.add('tableResults');

        playAgain.textContent = 'Play again';
        tableResults.textContent = 'Results';

        tableBtns.appendChild(playAgain);
        tableBtns.appendChild(tableResults);
        text.appendChild(tableBtns)
    }
    popUp() {
        let popupBg = document.querySelector('.popup__bg');
        let popup = document.querySelector('.popup');
        let closePopupButton = document.querySelector('.close-popup');
        const gameBox = document.querySelector('.game__box');

        const arrCardsIsFlipped = [];
        Array.from(gameBox.children).map((child) => {
            if (child.classList.contains('is-flipped')) {
                arrCardsIsFlipped.push(child)
            }
        })
        if (arrCardsIsFlipped.length === 16) {
            popupBg.classList.add('active');
            popup.classList.add('active');
            this.textForPopUp();
            this.newGame();
            this.tableWithResults();
        }

        closePopupButton.addEventListener('click', () => {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        });

        document.addEventListener('click', (e) => {
            if (e.target === popupBg) {
                popupBg.classList.remove('active');
                popup.classList.remove('active');
            }
        });
    }
    newGame() {
        document.querySelector('.playAgain').addEventListener('click', () => {
            window.location = "./game.html";
        })
    }
    tableWithResults(){
        document.querySelector('.tableResults').addEventListener('click', () => {
            window.location = "./final.html";
        })
    }
}