const DomParser = require('dom-parser');
const cheerio = require('cheerio');
const utils = require('../utils')
const url = 'https://skidrowgamereloaded.co';
async function getTop10Links() {
    try {
        let html = await utils.axios.getHTML(url)
        const $ = cheerio.load(html);
        const links = [];

        $('ol[class="topnews"] > li > a').each(function () {
            link = $(this).attr('href');
            links.push(link);
        });
        console.log("- LINKS GOT");
        return links;
    } catch (err) {
        console.log(err);
    }
}

async function getDataByUrl(url) {
    try {
        let html = await utils.axios.getHTML(url)
        const $ = cheerio.load(html);
        let data = [];

        $('li[class="list-info-item"]').each(function () {
            let content = $(this).contents().text();
            data.push(content);
        });
        return data;
    } catch (err) {
        console.log(err)
    }
}

async function convertDataToInfo(data) {
    try {
        let game = {};
        data.forEach(element => {
            if (element.includes('Title')) game.title = element.substring(7);
            if (element.includes('Genre')) game.genre = element.substring(7);
            if (element.includes('Release year')) game.releaseYear = element.substring(14);
            if (element.includes('Steam link')) game.steamLink = element.substring(12);
            if (element.includes('Version')) game.version = element.substring(14);
            if (element.includes('Releaser')) game.releaser = element.substring(15);
        });
        return game;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getTop10Links,
    convertDataToInfo,
    getDataByUrl
}