var XMLHttpRequest = require('xhr2');
var dotenv = require('dotenv');
dotenv.config();

const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], partials: [Partials.Channel] });

client.once('ready', () => {
  console.log('ready pour les polypotes');
});

client.login();

client.on("messageCreate", (message) => {
  if (message.author.bot == false && message.content == 'change le thème') {
    message.channel.send('Je change le thème');
    console.log("Chgt_thm");
    const Http = new XMLHttpRequest();
    const url=' http://polypotes.alwaysdata.net/api/changetheme';
    Http.open("POST", url);
    Http.send("Chgt_thm");
    
    Http.onreadystatechange = (e) => {
      if (Http.responseText) {
        console.log(Http.responseText)
        message.reply(Http.responseText)
      }

    }
  }
  if (message.author.bot == false && message.content == '!help') {
    message.reply('Voici les instructions disponibles sur le Polybot :');
    message.reply('change le thème --> permet de changer le thème');
  }

  
});