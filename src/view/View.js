class View {
    constructor () {
        this.root = null;
        this.timer = null;
        this.gameTable = null;
        this.startButton = null;
        this.mainContainer = null;
        this.movesCalculator = null;
    }

    init = () => {
        this.root = document.getElementById('root');
        this.mainContainer = this.createDiv({ className: 'root__main-container', id: 'main-container' });
        this.gameTable = this.createTable({ className: 'main__game-table', id: 'game-table' });
        const gameTableLine1 = this.createTr({ className: 'table__table-line', id: 'table-line' });
        const gameTableLine2 = this.createTr({ className: 'table__table-line', id: 'table-line' });
        const gameTableLine3 = this.createTr({ className: 'table__table-line', id: 'table-line' });
        const gameTableLine4 = this.createTr({ className: 'table__table-line', id: 'table-line' });
        
        this.gameTable.append(gameTableLine1);
        this.gameTable.append(gameTableLine2);
        this.gameTable.append(gameTableLine3);
        this.gameTable.append(gameTableLine4);
        this.mainContainer.append(this.gameTable);
        this.root.append(this.mainContainer);
    }



    createDiv = props => {
        const div = document.createElement('div');

        props.id && (div.id = props.id);
        props.className && (div.className = props.className);

        return div;
    }

    createTable = props => {
        const table = document.createElement('table')
        props.className && (table.className = props.className);
        props.id && (table.id = props.id);
        table.style.border = 'solid';
        table.style.height = '250px';
        table.style.width = '250px';

        return table;
    }

    createTb = props => {
        const tableTd = document.createElement('td');
        props.className && (tableTd.id = props.className);
        props.id && (tableTd.id = props.id);
        tableTd.style.border = 'solid';
        tableTd.style.height = '50px';
        tableTd.style.width = '50px';
        tableTd.style.bgcolor = 'red';

        return tableTd;
    }

    createTr = props => {
        const tableTr = document.createElement('tr');
        props.className && (tableTr.id = props.className);
        props.id && (tableTr.id = props.id);
        tableTr.style.border = 'solid';
        tableTr.style.height = '50px';
        tableTr.style.width = '50px';
        const gameTableElement1 = this.createTb({ className: 'table__table-element', id: 'table-elemnt'});
        const gameTableElement2 = this.createTb({ className: 'table__table-element', id: 'table-elemnt'});
        const gameTableElement3 = this.createTb({ className: 'table__table-element', id: 'table-elemnt'});
        const gameTableElement4 = this.createTb({ className: 'table__table-element', id: 'table-elemnt'});
        
        tableTr.append(gameTableElement1);
        tableTr.append(gameTableElement2);
        tableTr.append(gameTableElement3);
        tableTr.append(gameTableElement4);

        return tableTr;
    }
}

export default View;