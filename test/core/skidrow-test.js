
var expect = require('chai').expect;
const skidrow = require('../../src/core/skidrow')

describe('- skidrow', async () => {

  it('getTop10Links', function (done) {
    skidrow.getTop10Links()
      .then((data) => {
        expect(data).to.be.an('array');
        expect(data.length).to.equal(10);
        done();
      }).catch((e) => {
        done(e);
      });
  })

  it('getDataByUrl', function (done) {
    let url = 'https://skidrowgamereloaded.co/17-factorio-game.html';
    skidrow.getDataByUrl(url)
      .then((data) => {
        expect(data).to.be.an('array');
        expect(data).not.null;
        expect(data.length).to.equal(11);
        done();
      }).catch((e) => {
        done(e);
      });
  })

  it('convertDataToInfo', function (done) {
    let data = ['Title: Factorio',
      'Genre: Strategy, Simulation',
      'Developer: Tomas Kozelek, Marwin Kovarex',
      'Publisher: Tomas Kozelek, Marwin Kovarex',
      'Release year: 2016',
      'Steam link  http://store.steampowered.com/app/427520/Factorio/',
      'Release Name: Factorio v0.18.8 - Steam',
      'Game Version: v0.18.8 + ModPack',
      'Game Releaser: SKIDROW',
      'Size: 1.30 GB',
      'Available Languages: english, russian'];
    skidrow.convertDataToInfo(data)
      .then((data) => {
        expect(data).to.be.an('object')
        expect(data.title).to.be.a('string');
        expect(data.genre).to.be.a('string');
        expect(data.releaseYear).to.be.a('string');
        expect(data.steamLink).to.be.a('string');
        expect(data.version).to.be.a('string');
        expect(data.releaser).to.be.a('string');
        done();
      }).catch((e) => {
        done(e);
      });
  })
})