require('dotenv').config();
const { App } = require('@slack/bolt');

const bot_token = process.env.SLACK_BOT_TOKEN;
const ch_id = "C02PDR5QUH0";

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	appToken: process.env.SLACK_APP_TOKEN,
	socketMode: true,
	port: process.env.PORT || 3000
});


app.message('hello', async ({ message, say }) => {
	console.log("asd");
	await say('Hello');
});

(async () => {
	await app.start();
	console.log('⚡️ Bolt app is running!');
})();



//// Reply to a message with the channel ID and message TS
//async function replyMessage(id, message) {
//	try {
//		// Call the chat.postMessage method using the built-in WebClient
//		const result = await app.client.chat.postMessage({
//		// The token you used to initialize your app
//			token: process.env.SLACK_BOT_TOKEN,
//			channel: id,
//			text: message
//		// You could also use a blocks[] array to send richer content
//		});

//	// Print result
//		console.log(result);
//	}
//	catch (error) {
//		console.error(error);
//	}
//}

//// Uses a known channel ID and message
//replyMessage("C02PDR5QUH0", "hello");

//const welcomeChannelId = ch_id;

//// When a user joins the team, send a message in a predefined channel asking them to introduce themselves
//app.event('team_join', async ({ event, client }) => {
//  try {
//    // Call chat.postMessage with the built-in client
//	if (event.user.id.indexOf("hello")) {

//		const result = await client.chat.postMessage({
//			channel: welcomeChannelId,
//			text: `Welcome to the team, <@${event.user.id}>! 🎉 You can introduce yourself in this channel.`
//		});
//		console.log(result);
//	}
//  }
//  catch (error) {
//    console.error(error);
//  }
//});
