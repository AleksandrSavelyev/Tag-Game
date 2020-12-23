export async function addNewGame(newGame){
    return await fetch('http://localhost:3000/addNewGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame)
    });
}

export async function getGame(id){
    const resp = await fetch('http://localhost:3000/getGame/id', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id)
    });

    const data = await resp.json();

    return data;
}

export async function getAllGames(){
    const resp = await fetch('http://localhost:3000/getAllGames');

    const data = await resp.json();

    return data;
}

// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }