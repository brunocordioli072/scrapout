const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const url = 'https://skidrowgamereloaded.co/';

let createPage = async (page, url) => {
    await page.goto(url);
    global.page = page;
}

async function getGameInfoByUrl(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await createPage(page, url);
    let html = await page.content();
    const $ = cheerio.load(html);
    let gameInfo = {}
    $('li[class="list-info-item"] > span').each(function () {
        let data = $(this).contents().text();
        let key = data.substring(0, data.length - 1)
        console.log(key)
        if (!key == "Title") {
            let title = $('li[class="list-info-item"] > #text').contents().text();
            console.log('gamer'+ title)
            gameInfo.title = title;
        }
    });
    browser.close()
    console.log(gameInfo)
    return gameInfo;
}

async function getTop10GamesLinks() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await createPage(page, url);
        let html = await page.content();
        const $ = cheerio.load(html);
        const top10GameLinks = [];
        $('ol[class="topnews"] > li > a').each(function () {
            let link = $(this).attr('href')
            top10GameLinks.push(link)
        });
        console.log("- LINKS GOT")
        browser.close()
        return top10GameLinks;
    } catch (err) {
        throw new err
    }
}

module.exports = {
    getTop10GamesLinks,
    getGameInfoByUrl
}