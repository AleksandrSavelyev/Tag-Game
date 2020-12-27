export function addNewGame(newGame){
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/addNewGame', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newGame)
            })
            .then(response => {
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject(new Error('НЕ Нашел'))
                }
            })
        })
    } catch (e) {
        console.log('ERROR', e);
    }
}

export function getGame(id){
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/getGame/id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(id)
            })
            .then(response => {
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject(new Error('НЕ Нашел'))
                }
            })
        })
    } catch (e) {
        console.log('ERROR', e);
    }
}

export function getAllGames() {
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/getGountGames')
            .then(response => {
                console.log(response)
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject(new Error('НЕ Нашел'))
                }
            })
        });
    } catch (e) {
        console.log('ERROR:', e)
    }
}
