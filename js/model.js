class Model {
    constructor() {
        // создаем массив обьектов
        this.cardArray = [{
                name: '2',
                img: 'images/card-img/2.png',
                imgBack: 'images/card-bg.png',
                id: 1,
            },
            {
                name: 'cc',
                img: 'images/card-img/cc.png',
                imgBack: 'images/card-bg.png',
                id: 2,
            },
            {
                name: 'java',
                img: 'images/card-img/java.png',
                imgBack: 'images/card-bg.png',
                id: 3,
            },
            {
                name: 'phyton',
                img: 'images/card-img/phyton.png',
                imgBack: 'images/card-bg.png',
                id: 4,
            },
            {
                name: 'php',
                img: 'images/card-img/php.png',
                imgBack: 'images/card-bg.png',
                id: 5,
            },
            {
                name: 'sql',
                img: 'images/card-img/sql.png',
                imgBack: 'images/card-bg.png',
                id: 6,
            },
            {
                name: 'sass',
                img: 'images/card-img/sass.png',
                imgBack: 'images/card-bg.png',
                id: 7,
            },
            {
                name: 'react',
                img: 'images/card-img/react.png',
                imgBack: 'images/card-bg.png',
                id: 8,
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
        const card = document.querySelectorAll('.card');
        const cardBack = document.querySelector('.card__back');
        const cardFront = document.querySelector('.card__front');
        console.log(card)
        card.forEach((item) => {
            item.addEventListener('click', function () {
                if (cardFront.classList.contains('hidden')) {
                    cardBack.classList.add('hidden');
                    cardFront.classList.remove('hidden');
                } else {
                    cardBack.classList.remove('hidden');
                    cardFront.classList.add('hidden');
                }
            })
        })

    }


}