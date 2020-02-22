const skidrow = require('./core/skidrow');

(async () => {
    let links = await skidrow.getTop10GamesLinks();
    await skidrow.getGameInfoByUrl(links[0]);
})()