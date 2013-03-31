var charactersRE = require("./re"),
    dict         = require('./dict');

module.exports = anglicize;

function anglicize(input){

  return input.replace(charactersRE, function(character){
    return dict[character] || character;
  });

}
