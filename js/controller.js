export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init() {
        // this.view.gameplay();
        this.view.gameBoard(this.model.sortArray());
        this.model.toggleCard();
        this.model.getMatch();
        this.model.getMoves();
        this.model.getTime();

    }
}