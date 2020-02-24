const utils = require('../../src/utils')
var expect = require('chai').expect;

describe('- axios utils', async () => {
    it('getHTML', function (done) {
      utils.axios.getHTML('https://www.google.com/')
          .then((data) => {
            expect(data).not.null;
            done();
          }).catch((e) => {
            done(e);
          });
      })
})