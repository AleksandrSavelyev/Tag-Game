async function addNewGame(newGame){
    return await fetch('http://localhost:2020/addNewGame/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame)
    })
}

module.exports = addNewGame;



