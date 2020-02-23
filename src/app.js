const skidrow = require('./core/skidrow');

(async () => {
    let links = await skidrow.getTop10Links();
    let gamesInfo = []
    for (let index = 0; index < links.length; index++) {
        let data = await skidrow.getDataByUrl(links[index]);
        let info = await skidrow.convertDataToInfo(data);
        gamesInfo.push(info)
        console.log(info)
    }
    console.log(gamesInfo)
})()