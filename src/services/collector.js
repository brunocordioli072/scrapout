const skidrow = require('../core/skidrow');
const igg = require('../core/igg');
const game3rb = require('../core/game3rb');

module.exports = {
    getAllSkidrow,
    getAllIGG,
    getAllGame3Rb
}

async function getAllSkidrow() {
    try {
        let colletedGames = [];
        let links = await skidrow.getTop10Links();
        console.log("- Collected Links - SKIDROW \n")
        for (let i = 0; i < links.length; i++) {
            let index = i + 1
            let data = await skidrow.getDataByUrl(links[i]);
            console.log("- "+ index +"/"+ links.length +" Trying to Get Data from URL: " + links[i])
            let game = await skidrow.convertDataToInfo(data);
            if (!game) console.log("ERROR - Cannot Get Data from URL: " + links[i] +"\n");
            if (game) {
                console.log("SUCCESS - Converted Data from title: " + game.title +"\n")
                colletedGames.push(game);
            } 
        }
        return colletedGames;
    } catch (err) {
        console.log(err)
    }
}

async function getAllIGG() {
    try {
        let colletedGames = [];
        let links = await igg.getTop8Links();
        console.log("- Collected Links - IGG \n")
        for (let i = 0; i < links.length; i++) {
            let index = i + 1
            let data = await igg.getDataByUrl(links[i]);
            console.log("- "+ index +"/"+ links.length +" Trying to Get Data from URL: " + links[i])
            let game = await igg.convertDataToInfo(data);
            if (!game) console.log("ERROR - Cannot Get Data from URL: " + links[i] +"\n");
            if (game) {
                console.log("SUCCESS - Converted Data from title: " + game.title +"\n")
                colletedGames.push(game);
            } 
        }
        return colletedGames;
    } catch (err) {
        console.log(err)
    }
}

async function getAllGame3Rb() {
    try {
        let colletedGames = [];
        let links = await game3rb.getTop10Links();
        console.log("- Collected Links - GAME3RB \n" )
        for (let i = 0; i < links.length; i++) {
            let index = i + 1
            let data = await game3rb.getDataByUrl(links[i]);
            console.log("- "+ index +"/"+ links.length +" Trying to Get Data from URL: " + links[i])
            let dataFiltered = await game3rb.filterData(data);
            let game = await game3rb.convertDataToInfo(dataFiltered);
            if (!game) console.log("ERROR - Cannot Get Data from URL: " + links[i] +"\n");
            if (game) {
                console.log("SUCCESS - Converted Data from title: " + game.title +"\n")
                colletedGames.push(game);
            } 
        }
        return colletedGames;
    } catch (err) {
        console.log(err)
    }
}