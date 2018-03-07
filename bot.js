const Discord = require('discord.js');
const robot = new Discord.Client();

robot.on('ready', () => {
    console.log('I am ready!');
});

robot.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

robot.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
robot.login(process.env.token);
