require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const schedule = require('node-schedule');

var images = [
	'https://imgur.com/ilL38ap.jpg',
	'https://imgur.com/eZWiobM.jpg',
	'https://imgur.com/2GA6DnN.jpg',
	'https://imgur.com/Bpb8wRR.jpg',
	'https://imgur.com/Kz2tu2L.jpg',
	'https://imgur.com/QnJ7O2J.jpg',
	'https://imgur.com/8me5vdZ.jpg',
	'https://imgur.com/JAj8lGl.jpg',
	'https://imgur.com/esLLK0D.jpg',
	'https://imgur.com/7btdMNy.jpg',
	'https://imgur.com/cmnUWa9.jpg',
	'https://imgur.com/jtpu02J.jpg',
	'https://imgur.com/53aDleu.jpg',
	'https://imgur.com/wekzSUc.jpg',
	'https://imgur.com/dFzikYB.jpg',
	'https://imgur.com/0seoWWP.jpg',
	'https://imgur.com/KKITLit.jpg',
	'https://imgur.com/EBIiWXZ.jpg',
	'https://imgur.com/rPfAFxl.jpg',
	'https://imgur.com/9zJ8dje.jpg',
	'https://imgur.com/CZbelNk.jpg',
	'https://imgur.com/XsOuTzh.jpg',
	'https://imgur.com/T4DpAaf.jpg',
	'https://imgur.com/70Rqtcf.jpg'
];

var count = 0;

const job1 = schedule.scheduleJob('* * * 2 * *', function(){
  count = 0;
  //console.log("12");
});
const job2 = schedule.scheduleJob('* * * 3 * *', function(){
  count = 1;
  //console.log("13");
});
const job3 = schedule.scheduleJob('* * * 4 * *', function(){
  count = 2;
  //console.log("14");
});
const job4 = schedule.scheduleJob('* * * 5 * *', function(){
  count = 3;
  //console.log("15");
});
const job5 = schedule.scheduleJob('* * * 6 * *', function(){
  count = 4;
  //console.log("16");
});
const job6 = schedule.scheduleJob('* * * 7 * *', function(){
  count = 5;
  //console.log("17");
});
const job7 = schedule.scheduleJob('* * * 8 * *', function(){
  count = 6;
  //console.log("18");
});
const job8 = schedule.scheduleJob('* * * 9 * *', function(){
  count = 7;
  //console.log("19");
});
const job9 = schedule.scheduleJob('* * * 10 * *', function(){
  count = 8;
  //console.log("20");
});
const job10 = schedule.scheduleJob('* * * 11 * *', function(){
  count = 9;
  //console.log("21");
});
const job11 = schedule.scheduleJob('* * * 12 * *', function(){
  count = 10;
  //console.log("11");
});
const job12 = schedule.scheduleJob('* * * 13 * *', function(){
  count = 11;
  //console.log("11");
});
const job13 = schedule.scheduleJob('* * * 14 * *', function(){
  count = 12;
  //console.log("11");
});
const job14 = schedule.scheduleJob('* * * 15 * *', function(){
  count = 13;
  //console.log("11");
});
const job15 = schedule.scheduleJob('* * * 16 * *', function(){
  count = 14;
  //console.log("11");
});
const job16 = schedule.scheduleJob('* * * 17 * *', function(){
  count = 15;
  //console.log("11");
});
const job17 = schedule.scheduleJob('* * * 18 * *', function(){
  count = 16;
  //console.log("11");
});
const job18 = schedule.scheduleJob('* * * 19 * *', function(){
  count = 17;
  //console.log("11");
});
const job19 = schedule.scheduleJob('* * * 20 * *', function(){
  count = 18;
  //console.log("11");
});
const job20 = schedule.scheduleJob('* * * 21 * *', function(){
  count = 19;
  //console.log("11");
});
const job21 = schedule.scheduleJob('* * * 22 * *', function(){
  count = 20;
  //console.log("11");
});
const job22 = schedule.scheduleJob('* * * 23 * *', function(){
  count = 21;
  //console.log("11");
});
const job23 = schedule.scheduleJob('* * * 24 * *', function(){
  count = 22;
  //console.log("11");
});
const job24 = schedule.scheduleJob('* * * 25 * *', function(){
  count = 23;
  //console.log("11");
});

client.on("ready", () => {
	console.log("Ready for some lit quotes?");
	console.log("19:45:45 Every day!");
	console.log("Be there!");
	client.user.setActivity('submarineguns', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

// OLD SCRIPT
/*
var interval = setInterval (function (){
	    client.channels.cache.get('797442340884185118').send({files: [images[count]]})
	.then(message => console.log(`Sent submarinegun`))
  .catch(console.error);
  count = count + 1;
}, 86400000);*/

const job = schedule.scheduleJob('45 45 17 * * *', function(){
	client.channels.cache.get('797442340884185118').send({files: [images[count]]})
	.then(message => console.log(`Sent submarinegun`))
	.catch(console.error);
});

client.login(process.env.BOT_TOKEN);
