class Model {
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
            if(e.dataset.name === "card" ){
                e.classList.toggle('is-flipped');
                // console.log(e.classList)
            }
        })
    }
    getMatch() {
        const gameBox = document.querySelector('.game__box');

        gameBox.addEventListener('click', function (event) {
            let cardId = event.target.parentElement.dataset.id;
            
            console.log(`second ${cardId}`);

            // if(firstCard === secondCard ){
                // console.log('match')
                // firstCard.removeEventListener('click', this.toggleCard);
                // secondCard.removeEventListener('click', this.toggleCard);
            // }
        });
    }
    getMoves(){
        let moves = document.querySelector('.controls__moves-current');
        let cards = document.querySelectorAll('.card');
        let count = 1;

        cards.forEach((card) => {
            card.addEventListener('click', function() {
                moves.innerText = count;
                count++;
            })
        })
    }
}