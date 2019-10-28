const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ()
client.user.setGame('Pornhub.com', { type: 'WATCHING' }),

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'lakitha') {
    	message.reply('A Walking Bot Who Dont like **Hackers**');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login('proccess.env.BOT_TOKEN');
