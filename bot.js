const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
    console.log('I am ready!');
});

Client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

Client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
Client.login(process.env.token);
