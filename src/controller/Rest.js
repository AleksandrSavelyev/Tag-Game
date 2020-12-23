export async function addNewGame(newGame){
    return await fetch(`http://localhost:3000/addNewGame/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame)
    })
}

export async function getGameId(id){
    const resp = await fetch(`http://localhost:3000/getGame/${id}/`);

    const data = await resp.json();

    return data;
}

export async function getAllGames(){
    const resp = await fetch(`http://localhost:3000/getAllGames/`);

    const data = await resp.json();

    return data;
}