const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const url = 'https://skidrowgamereloaded.co/';

let createPage = async (page, url) => {
    await page.goto(url);
    global.page = page;
}

async function getDataByUrl(url) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await createPage(page, url);
        let html = await page.content();
        const $ = cheerio.load(html);
        let data = [];
        $('li[class="list-info-item"]').each(function () {
            let content = $(this).contents().text();
            data.push(content);
        });
        browser.close();
        return data;
    } catch (err) {
        console.log(err)
    }
}

async function getByUrl(url, position) {
    try {
        let game = {};
        let data = await getDataByUrl(url);
        game.position = position;
        data.forEach(element => {
            if (element.includes('Title')) game.title = element.substring(7);
            if (element.includes('Genre')) game.genre = element.substring(7);
            if (element.includes('Release year')) game.releaseYear = element.substring(14);
            if (element.includes('Steam link')) game.steamLink = element.substring(11);
            if (element.includes('Version')) game.version = element.substring(14);
            if (element.includes('Releaser')) game.releaser = element.substring(15);
        });
        return game;
    } catch (err) {
        console.log(err);
    }
}

async function getTop10Links() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await createPage(page, url);
        let html = await page.content();
        const $ = cheerio.load(html);
        const top10Links = [];

        let count = 1;
        $('ol[class="topnews"] > li > a').each(function () {
            let game = {};
            game.link = $(this).attr('href');
            game.position = count;
            count++
            top10Links.push(game);
        });
        console.log("- LINKS GOT");
        browser.close();
        return top10Links;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getTop10Links,
    getByUrl
}