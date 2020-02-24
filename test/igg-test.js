var expect = require('chai').expect;
const igg = require('../src/core/igg')

describe('- igg', async () => {
    it('getTop8Links', function (done) {
        igg.getTop8Links()
          .then((data) => {
            expect(data).to.be.an('array');
            expect(data.length).to.equal(8);
            done();
          }).catch((e) => {
            done(e);
          });
      })
    
      it('getDataByUrl', function (done) {
        let url = 'https://igg-games.com/senren%ef%bc%8abanka-free-download.html';
        igg.getDataByUrl(url)
          .then((data) => {
            expect(data).to.be.an('array');
            expect(data).not.null;
            done();
          }).catch((e) => {
            done(e);
          });
      })
    
      it('convertDataToInfo', function (done) {
        let data = [ 'Title: Senren＊Banka Free Download',
        '\nPosted by Admin | February 14, 2020 | Adventure, Anime, Casual, Nudity, Popular Game, Visual Novel. ',
        'Senren＊Banka Free Download PC Game Cracked in Direct Link and Torrent. Senren＊Banka is a Japanese-style visual novel produced by Yuzusoft, a Japanese developer of romance VNs. This game commemorated Yuzusoft’s 10th anniversary. It won numerous awards…',      
        '',
        'CRACKED – FREE DOWNLOAD – TORRENT',
        ' ',
        ' Developer: Yuzusoft',
        ' Publisher: HIKARI FIELD, NekoNyan Ltd.',
        ' Release Date: 14 Feb, 2020',
        ' Genre: Adventure, Casual, Nudity, Visual Novel, Anime',
        ' ',
        'Senren＊Banka is a Japanese-style visual novel produced by Yuzusoft, a Japanese developer of romance VNs. ',
        ' This game commemorated Yuzusoft’s 10th anniversary. It won numerous awards on the year of its release in Japan for its art, music, and characters. ',
        ' It was a runner-up for the 2016 Moe Game Awards, and it won the first overall ranking in Getchu’s 2016 Bishoujo Game Awards.',  
        '',
        'The Steam version contains English, Simplified and Traditional Chinese, and Japanese text options with Japanese voice acting. It also enjoys Steam Cloud support.',
        ' Disclaimer: All characters depicted in this game are 18 years of age or older',
        ' CHARACTERS',
        '',
        ' All links are interchangeable, you can download different parts on different hosts \nRequest a game or request re-upload, visit Game Request \nIf you need help a problem, visit F.A.Q',
        ' ',
        'Link Senren Banka-DARKSiDERS TORRENT:\nDownload Senren Banka-DARKSiDERS Torrent Link',
        ' ',
        'Link MegaUp.net:\nPart 1 – Part 2',
        ' ',
        'Link Mega.nz:\nPart 1 – Part 2',
        ' ',
        'Link Rapidgator:\nPart 1 – Part 2',
        ' ',
        'Link Uptobox:\nPart 1 – Part 2',
        ' ',
        'Link Uploaded:\nPart 1 – Part 2',
        ' ',
        'Link Google Drive:\nPart 1 – Part 2',
        ' ',
        ' ',
        ' ',
        ' ',
        'Minimum:',
        '\nSenrenBanka Crack, SenrenBanka Free Download, SenrenBanka REPACK, SenrenBanka Torrent, SenrenBanka Torrent Download ',
        ' The list above is the latest updates, you can see the full list here: Game Request',
        '',
        ' Request new game or re-upload\n F.A.Q\n Random games\n Rank of Moderators\n You want to help us?\n How to install a game?\n Our Torrent site',
        'ADBLOCK DETECTED',
        'Please support us by disabling Adblock and refresh page, thank you.' ]
        igg.convertDataToInfo(data)
          .then((data) => {
            expect(data).to.be.an('object')
            expect(data.title).to.be.a('string');
            expect(data.genre).to.be.a('string');
            expect(data.releaseYear).to.be.a('string');
            expect(data.releaser).to.be.a('string');
            done();
          }).catch((e) => {
            done(e);
          });
      })
})