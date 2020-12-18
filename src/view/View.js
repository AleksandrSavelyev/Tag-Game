class View {
    constructor () {
        this.root = null;
        this.timer = null;
        this.gameTable = null;
        this.startButton = null;
        this.topContainer = null;
        this.mainContainer = null;
        this.tableContainer = null;
        this.movesCalculator = null;
    }

    init = () => {
        this.root = document.getElementById('root');
        this.timer = this.createTimer({ className: 'main__container-timer', id: 'container-timer' });
        this.startButton = this.createButton({className: 'main__container-start', id: 'container-start'});
        this.topContainer = this.createDiv({className: 'top-container', id: 'top-container'})
        this.mainContainer = this.createDiv({ className: 'root__main-container', id: 'main-container' });
        this.movesCalculator = this.createCalculator({className: 'main__container-moves', id: 'container-moves'})
        
        this.timer.style.borderStyle = 'solid';
        this.timer.style.width = '100px';
        this.movesCalculator.style.borderStyle = 'solid';

        this.topContainer.append(this.movesCalculator);
        this.topContainer.append(this.timer);
        this.mainContainer.append(this.topContainer);
        this.mainContainer.append(this.startButton);
        this.root.append(this.mainContainer);

    }

    createNewPositionsForNumber = cb => {
        this.startButton.addEventListener('click', () => {
            cb();
        });
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
        this.gameTable = this.createTable({ className: 'main__game-table', id: 'game-table' });
        this.tableContainer = this.createDiv({ className: 'root__table-container', id: 'table-container' });

        this.tableContainer.append(this.gameTable);
        this.root.append(this.tableContainer);
    }

    clickGameBoardElement = (cb) => {
        this.gameTable.addEventListener('click', event => {
            if(event.path[0].id === 'table-element') {
                cb(event.target.textContent);
            }
        });
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

    createTd = props => {
        const tableTd = document.createElement('td');
        props.className && (tableTd.id = props.className);
        props.id && (tableTd.id = props.id);
        props.tdText && (tableTd.innerText = props.tdText);
        
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

        const gameTableElement1 = this.createTd({className: 'table__table-element', id: 'table-element', tdText: props.text[0]});
        const gameTableElement2 = this.createTd({className: 'table__table-element', id: 'table-element', tdText: props.text[1]});
        const gameTableElement3 = this.createTd({className: 'table__table-element', id: 'table-element', tdText: props.text[2]});
        const gameTableElement4 = this.createTd({className: 'table__table-element', id: 'table-element', tdText: props.text[3]});
        
        tableTr.append(gameTableElement1);
        tableTr.append(gameTableElement2);
        tableTr.append(gameTableElement3);
        tableTr.append(gameTableElement4);
        this.gameTable.append(tableTr);
    }

    deleteBoard = () => {
        console.log(this.tableContainer);
        this.tableContainer.innerHTML = '';
    }
}

export default View;