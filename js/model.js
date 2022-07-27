class Model {
    constructor() {
        // создаем массив обьектов
        this.cardArray = [{
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
}