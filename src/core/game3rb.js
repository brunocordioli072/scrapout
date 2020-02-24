const utils = require('../utils')
const cheerio = require('cheerio');
const URL = 'https://www.game3rb.com/';

module.exports = {
    getTop10Links,
    getDataByUrl,
    filterData,
    convertDataToInfo
}

async function getTop10Links() {
    try {
        let html = await utils.axios.getHTML(URL)
        const $ = cheerio.load(html);
        const links = [];

        $('ul > li > article > div > a ').each(function () {
            link = $(this).attr('href');
            links.push(link);
        });
        return links;
    } catch (err) {
        console.log(err);
    }
}

async function getDataByUrl(url) {
    try {
        let html = await utils.axios.getHTML(url);
        const $ = cheerio.load(html);
        let data = [];
        let title = 'Title: ' + $('h1').contents().text();
        data.push(title);

        $('p').each(function () {
            data.push($(this).contents().text());
        });
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function filterData(data) {
    try {
        let formattedData = "";
        let dataFiltered = [];
        data.forEach(element => {
            if (element.includes('Title') && element.includes('Genre')) {
                formattedData = element;
            }
        });
        for (let index = 0; index < 4; index++) {
            let breakIndex = formattedData.indexOf("\n")
            let attribute = formattedData.substring(0, breakIndex);
            dataFiltered.push(attribute)
            formattedData = formattedData.substring(breakIndex + 1);
            if (index == 3) {
                dataFiltered.push(formattedData)
            }
        }
        return dataFiltered;
    } catch (err) {
        console.log(err);
    }
}

async function convertDataToInfo(data) {
    try {
        let game = {};
        data.forEach(element => {
            if (element.includes('Title')) game.title = element.substring(7);
            if (element.includes('Genre')) game.genre = element.substring(7);
            if (element.includes('Release Date')) game.releaseYear = element.substring(14);
            if (element.includes('Publisher:')) game.releaser = element.substring(11);
        });
        if (!game.hasOwnProperty('title') && !game.hasOwnProperty('genre') && !game.hasOwnProperty('releaseYear') && !game.hasOwnProperty('releaser')) {
            return null;
        }
        return game;
    } catch (err) {
        console.log(err);
    }
}