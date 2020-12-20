class Controller {
    constructor (view, model) {
        this.view = view;
        this.model = model;
        this.curentButtonValue = null;

        this.init();
    }

    init = () => {
        this.view.init();
        this.view.createGameboard()
        this.model.init();
        this.model.checkoutDb(this.printDb.bind(this));
        this.view.clickGameBoardElement(this.clickGameElement.bind(this));
        this.view.createNewPositionsForNumber(this.printNewDb.bind(this));
    }

    printNewDb = () => {
        this.model.createNewDb();
        this.view.deleteBoard();
        this.model.checkoutNewDb(this.printDb.bind(this));
        this.view.onOffTimer(true);
    }

    printDb = Element => {
        this.view.createTr({ className: 'table__table-line', id: 'table-line', text: Element });
    }

    clickGameElement = targetBut => {
        this.curentButtonValue = +targetBut;
        //console.log(this.curentButtonValue);
        const elementPosition = this.model.getPosition(this.curentButtonValue);
        //console.log(elementPosition);
        const zeroPosition = this.model.getPosition(0);
        //console.log(zeroPosition, elementPosition);
        let isCheck = this.model.checkZeroPosition(elementPosition);
        let result;
        if(isCheck){
            result = this.model.changePositionInDb(elementPosition, zeroPosition);
            this.incrementMoves();
            this.view.deleteBoard();
            this.model.checkoutNewDb(this.printDb.bind(this));
        }

        if(result){
            this.view.makeStartButtonVisible();
            this.view.deleteBoard();
            this.model.checkoutDb(this.printDb.bind(this));
            this.model.clearCurrentDb();
        }
    }

    incrementMoves = () => {
        let newMoves = this.view.getMoves();
        newMoves++;
        this.view.setMoves(newMoves);
        this.model.checkoutDb(this.printDb.bind(this));
    }
}

export default Controller;