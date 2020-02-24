const skidrow = require('./core/skidrow');
const igg = require('./core/igg');

(async () => {
    /* let links = await skidrow.getTop10Links();
    let gamesInfo = []
    for (let index = 0; index < links.length; index++) {
        let data = await skidrow.getDataByUrl(links[index]);
        let info = await skidrow.convertDataToInfo(data);
        gamesInfo.push(info)
        console.log(info)
    }
    console.log(gamesInfo) */
    /* let a = await skidrow.getDataByUrl('https://skidrowgamereloaded.co/17-factorio-game.html')
    console.log(a) */
    let data = await igg.getDataByUrl('https://igg-games.com/senren%ef%bc%8abanka-free-download.html');
    console.log(data)
    /* let info = await igg.convertDataToInfo(data);
    console.log(info) */
})()