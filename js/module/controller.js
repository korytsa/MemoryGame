export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init() {
        this.view.gameplay(this.view.gameBoard(this.model.sortArray()), this.model.getMoves(), this.model.getTime());
        this.model.flipCard();
        this.model.newGame();
        // this.model.compareCard();
        // this.model.validation();
        // this.model.getName();
        // this.view.gameBoard(this.model.sortArray());
        // this.model.getMoves();
        // this.model.getTime();
    }
}