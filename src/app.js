const skidrow = require('./core/skidrow');
const igg = require('./core/igg');
const utils = require('./utils');
const game3rb = require('./core/game3rb');
const collector = require('./services/collector');

(async () => {
    let a = await utils.axios.getHTML('https://www.google.com/');
    console.log(a)
})()