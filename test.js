var anglicize = require("./");

it('returns anglicized text', function(){

  var input = 'foo ÂÇİĞÖŞÜÑ bar âçığöşüñ qux',
      output = 'foo ACIGOSUN bar acigosun qux';

  expect(anglicize(input)).to.equal(output);

});
