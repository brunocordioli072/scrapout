const utils = require('../utils')
const cheerio = require('cheerio');
const URL = 'https://igg-games.com/';

module.exports = {
    getTop8Links,
    getDataByUrl,
    convertDataToInfo
}

async function getTop8Links() {
    let html = await utils.axios.getHTML(URL);
    const $ = cheerio.load(html);
    const links = [];

    

    $('div[id="wk-grid733"] > div > div > figure > div > div > div > div > a').each(function () {
        link = $(this).attr('href');
        links.push(link);
    });
    return links;
}

async function getDataByUrl(url) {
    let html = await utils.axios.getHTML(url);
    const $ = cheerio.load(html);
    let data = [];
    let title = 'Title: ' + $('h1').contents().text();
    data.push(title);

    $('p').each(function () {
        data.push($(this).contents().text());
    });
    return data;
}

async function convertDataToInfo(data) {
    try {
        let game = {};
        data.forEach(element => {
            if (element.includes('Title')) game.title = element.substring(7);
            if (element.includes('Genre')) game.genre = element.substring(8);
            if (element.includes('Publisher')) game.releaser = element.substring(12);
            if (element.includes('Release Date')) game.releaseYear = element.substring(15);
        });
        return game;
    } catch (err) {
        console.log(err);
    }
}