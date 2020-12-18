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
        this.view.timerOn ();
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
        //console.log(zeroPosition);
    }
}

export default Controller;