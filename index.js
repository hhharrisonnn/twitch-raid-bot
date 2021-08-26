//require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.BOT_USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [ 
		process.env.CHANNEL_NAME,
	]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  const target = tags.username.toLowerCase() == process.env.TARGET_USERNAME;

  if (target) {
    if (message.includes('A Raid Event at Level')) {
			client.say(channel, '!raid');
			setTimeout(() => { 
				client.say(channel, '+join');
			}, 2000);
		}
  }
});