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
            let position = this.newDb[i].indexOf(buttonValue);
                if(position !== -1) {
                    let positionDb = [i, position];
                    
                    return positionDb;
                }
        }
    }

    createNewDb = () => {
        this.newDb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(function() { return Math.random()-.5; }).concat(0);
        //console.log(this.newDb);
            if (!this.checkNewDb(this.newDb)){
                this.swapDb(0, 1);
            }
         
        this.newDb = [this.newDb.slice(0, 4), this.newDb.slice(4, 8), this.newDb.slice(8, 12), this.newDb.slice(12)];
        //console.log(this.newDb);
    }

    swapDb = (i1, i2) => { 
        let t = this.newDb[i1]; 
        this.newDb[i1] = this.newDb[i2]; 
        this.newDb[i2] = t;
        //console.log(this.newDb);
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
    
    checkZeroPosition = position => {
        let i = position[0];
        let j = position[1];
        if( i != 3 && this.newDb[i + 1][j] == 0) {
            return true;
        } else if( i != 0 && this.newDb[i - 1][j] == 0) {
            return true;
        } else if(this.newDb[i][j + 1] == 0) {
            return true;
        } else if(this.newDb[i][j - 1] == 0) {
            return true;
        } else {
            return false;
        }
    }

    changePositionInDb = (elementPosition, zeroPosition) => {
            let currElemPosition = this.newDb[elementPosition[0]][elementPosition[1]];
            // console.log(currElemPosition);
            this.newDb[elementPosition[0]][elementPosition[1]] = 0;
            this.newDb[zeroPosition[0]][zeroPosition[1]] = currElemPosition;
            //console.log(this.newDb);
            let result = this.compareDatabases();
            //console.log(result);
            
            return result;
    }

    compareDatabases = () => {
        //console.log(this.newDb.join());
        //console.log(this.db.join());
        if(this.newDb.join() == this.db.join()){

            return true;
        }else{

            return false;
        }
    }

    clearCurrentDb = () => {
        this.newDb = [];
    }
}

export default Model;