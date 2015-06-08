var test = require('prova');
var anglicize = require("./");

test('returns anglicized text', function (t) {
  t.plan(1);

  var input = 'foo ÂÇİĞÖŞÜÑ bar âçığöşüñ qux',
      output = 'foo ACIGOSUN bar acigosun qux';

  t.equal(anglicize(input), output);
});
