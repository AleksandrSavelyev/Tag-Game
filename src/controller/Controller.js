class Controller {
    constructor (view) {
        this.view = view;
        // this.model = model;

        this.view.init();
    }
}

export default Controller;