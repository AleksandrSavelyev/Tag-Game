class Model {
    constructor(){
        this.db = [];
    }

    init = () => {
        this.db = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12], 
            [13, 14, 15, '0']
        ]
    }

    checkoutDb = cb => {
        this.db.forEach(Element => {
            cb(Element);
        });
    }
}

export default Model;