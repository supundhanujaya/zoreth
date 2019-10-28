const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>
client.user.setPresence({ status: 'dnd' })

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
