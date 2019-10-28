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
        } else if (message.content === '!hack') {
	message.channel.send('Download link - https://mega.nz/#!EFVDiShA!Oy_w9pO8HSpJiGC83Xz3W0JifmKXjjD_GmzGAotmoZA');
        } else if (message.content === '!invite') {
	message.channel.send('Here is the ivite link - https://discord.gg/72WFhw3');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

// Kick a member

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('$kick')
     <message.author.id === '504261424776871936') return message.reply("My Boss is **ZORETH!**"){
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});

 //reactions

const emojiChannelID = '612772262726205542';
client.on('ready', async () => {
  try {
    const channel = client.channels.get(emojiChannelID);
    if (!channel) return console.error('Invalid ID or missing channel.');

    const messages = await channel.fetchMessages({ limit: 100 });

    for (const [id, message] of messages) {
      await message.react('✅');
      await message.react('✖');
    }
  } catch(err) {
    console.error(err);
  }
});
client.on('message', async message => {
  if (message.channel.id === emojiChannelID) {
    try {
      await message.react('✅');
      await message.react('✖');
      await message.react('🖕')    
    } catch(err) {
      console.error(err);
    }
  }
});

