require('dotenv').config();
const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000
});

// ============= 이벤트 발생  ========================================

const welcomeChannelId = 'C02PDR5QUH0';

// When a user joins the team, send a message in a predefined channel asking them to introduce themselves
app.event('team_join', async ({ event, client }) => {
  try {
    // Call chat.postMessage with the built-in client
    const result = await client.chat.postMessage({
      channel: welcomeChannelId,
      text: `Welcome to the team, <@${event.user.id}>! 🎉 You can introduce yourself in this channel.`
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});

// ============ 메시지 응답 =========================================

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(":wave:");
});

app.message('!출석시작', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `출석해라 <@${message.user}>!`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "출석"
          },
          "action_id": "button_click"
        }
      }
    ],
    text: `Hey there <@${message.user}>!`
  });
});

(async () => {
  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();
