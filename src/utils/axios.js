const axios = require('axios');

async function getHTML(url) {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (err) {
        if (errorHandler) errorHandler(err);
        else throw err;
    }
}

module.exports = {
    getHTML
}

