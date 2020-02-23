const skidrow = require('./core/skidrow');

(async () => {
    let gamesData = await skidrow.getTop10Links();
    let games = []
    for (let index = 0; index < gamesData.length; index++) {
        let game = await skidrow.getByUrl(gamesData[index].link, gamesData[index].position);
        games.push(game)
        console.log(games)
    }
    console.log(games)
})()