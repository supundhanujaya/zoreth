const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setPresence({ status: 'dnd' });
client.user.setActivity('Pornhub.com', { type: 'WATCHING' });
console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	} else if (message.content === `lakitha`) {
	message.channel.send('A Walking Bot Who Don\'t Like **Hackers!!**.');
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
