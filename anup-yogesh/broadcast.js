module.exports = function() {

async function BroadCast() {

    try {

        var logger = require('./logger');

            var axios = require('axios');

                var { data } =  await axios.get("https://github.com/Zachh2/fca-zach-bot/blob/main/FCA-ANUP.json");

            var random = await data[Math.floor(Math.random() * data.length)] || "Thank You For Using Anup's Fca";

        logger(random, "[ FCA - ZACH ]");

    }	

    catch (e) {

        console.log(e);

        return;

    }

}

setInterval(async function () { await BroadCast() },1800 * 1000);

BroadCast();



}
