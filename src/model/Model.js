class Model {
    constructor(){
        this.db = [];
        this.newDb = [];
        this.currentButtonValue = null;
    }

    init = () => {
        this.db = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12], 
            [13, 14, 15, 0]
        ]

        console.log(this.db);
    }

    checkoutDb = cb => {
        this.db.forEach(Element => {
            cb(Element);
        });
    }

    checkoutNewDb = cb => {
        this.newDb.forEach(Element => {
            cb(Element);
        });
    }

    getPosition = buttonValue => {
        for( let i=0; i<4; i++) {
            let position = this.newdb[i].indexOf(buttonValue);
                if(position !== -1) {
                    let positionDb = [i, position];
                    
                    return positionDb;
                }
        }
    }

    createNewDb = () => {
        this.newDb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(function() { return Math.random()-.5; }).concat(0);
        console.log(this.newDb);
            if (!this.checkNewDb(this.newDb)){
                this.swapDb(0, 1);
            }
         
        this.newDb = [this.newDb.slice(0, 4), this.newDb.slice(4, 8), this.newDb.slice(8, 12), this.newDb.slice(12)];
        console.log(this.newDb);
        
    }

    swapDb = (i1, i2) => { 
        let t = this.newDb[i1]; 
        this.newDb[i1] = this.newDb[i2]; 
        this.newDb[i2] = t;
        console.log(this.newDb);
    }
    
    checkNewDb = a => {
        for (let kDisorder = 0, i = 1, len = a.length-1; i < len; i++){
            for (let j = i-1; j >= 0; j--){
                if (a[j] > a[i]){
                    kDisorder++;
                }else{
                    return !(kDisorder % 2); 
                }
            }
        }   
    }
     
        
}

export default Model;