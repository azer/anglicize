var characters = require("./characters");

module.exports = new RegExp('[' + characters.join('') + ']', 'g');
