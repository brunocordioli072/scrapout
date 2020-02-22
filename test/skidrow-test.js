
var expect = require('chai').expect;
const skidrow = require('../src/core/skidrow')

describe('- skidrow', async () => {
    it('getTop10GamesLinks', function (done) {
        skidrow.getTop10GamesLinks()
        .then((data) => {
          expect(data).to.be.an('array')
          expect(data.length).to.equal(10);
          done(); 
        }).catch((e) => {
          done(e); 
        }); 
    })

    it('getGameInfoByUrl', function (done) {
        let url = "https://skidrowgamereloaded.co/17-factorio-game.html"
        skidrow.getGameInfoByUrl(url)
        .then((data) => {
          expect(data).to.be.an('object')
          expect(data.title).to.be.a('string');
          expect(data.genres).to.be.a('array');
          expect(data.developers).to.be.a('array');
          done(); 
        }).catch((e) => {
          done(e); 
        }); 
    })
})