class View {
    constructor () {
        this.root = null;
        this.timer = null;
        this.gameTable = null;
        this.startButton = null;
        this.topContainer = null;
        this.mainContainer = null;
        this.movesCalculator = null;
        }

    init = () => {
        this.root = document.getElementById('root');
        this.mainContainer = this.createDiv({ className: 'root__main-container', id: 'main-container' });
        this.topContainer = this.createDiv({className: 'top-container', id: 'top-container'})
        this.timer = this.createTimer({ className: 'main__container-timer', id: 'container-timer' });
        this.startButton = this.createButton({className: 'main__container-start', id: 'container-start'});
        this.movesCalculator = this.createCalculator({className: 'main__container-moves', id: 'container-moves'})
        this.timer.style.borderStyle = 'solid';
        this.movesCalculator.style.borderStyle = 'solid';

        this.topContainer.append(this.movesCalculator);
        this.topContainer.append(this.timer);
        this.mainContainer.append(this.topContainer);
        this.mainContainer.append(this.startButton);
        this.root.append(this.mainContainer);

        this.createGameboard();
    }

    createDiv = props => {
        const div = document.createElement('div');

        props.id && (div.id = props.id);
        props.className && (div.className = props.className);

        return div;
    }

    createTimer = props => {
        const hour = document.createElement('span')
        const minute = document.createElement('span');
        const second = document.createElement('span');
        const millisec = document.createElement('span');
        const timerDiv = this.createDiv({className: 'main__time-container', id: 'time-container'})

        hour.innerText = '00' + ':';
        second.innerText = '00' + ':';
        minute.innerText = '00' + ':';
        millisec.innerText = '00';

        timerDiv.append(hour);
        timerDiv.append(minute);
        timerDiv.append(second);
        timerDiv.append(millisec);
                
        props.id && (timerDiv.id = props.id);
        props.className && (timerDiv.className = props.className);

        return timerDiv;
    }

    createButton = props => {
        const start = document.createElement('button');

        start.innerText = 'Let`s go!';

        props.id && (start.id = props.id);
        props.className && (start.className = props.className);

        return start;
    }

    createCalculator = props => {
        const movesDiv = this.createDiv({className: 'moves-container', id: 'moves-container'})
        const moves = document.createElement('span');

        moves.innerText = '0';
        movesDiv.append(moves);

        props.id && (moves.id = props.id);
        props.className && (moves.className = props.className);

        return movesDiv;
    }

    createGameboard = () => {
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