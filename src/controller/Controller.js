class Controller {
    constructor (view, model) {
        this.view = view;
        this.model = model;

        this.view.init();
        this.view.createGameboard()
        this.model.init();
        this.model.checkoutDb(this.printDb.bind(this));
    }

    printDb = Element => {
        this.view.createTr({ className: 'table__table-line', id: 'table-line', text: Element });
    }
}

export default Controller;