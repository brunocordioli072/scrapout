const puppeteer = require('puppeteer');

module.exports = {
    navigate,
    getPage
}

async function navigate(page, url) {
    try {
        await page.goto(url);
        global.page = page;
    } catch (err) {
        console.log(err);
    }
}

async function getPage() {
    try {
        let browser = await puppeteer.launch();
        let page = await browser.newPage();
        return page;
    } catch (err) {
        console.log(err);
    }
}