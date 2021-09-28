const userInfo = require ("./information");

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${userInfo.nom} from ${userInfo.campus}`,
    e : "oO",
    T : "U"
}));