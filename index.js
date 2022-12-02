const Discord = require('discord.js');
var http = require('http');
var XMLHttpRequest = require('xhr2');

const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], partials: [Partials.Channel] });

const token = 'MTA0Nzk0MDM1Njg1NzE1NTYzNA.GocpkA.bOvk1eR90neKLyfLlrJ3QVqJI4YsT5C35BQt7A'

client.once('ready', () => {
  console.log('ready pour les polypotes');
});

client.login(token);

client.on("messageCreate", (message) => {
  if (message.author.bot == false && message.content == 'change le thème') {
    message.channel.send('Je change le thème');
    console.log("Chgt_thm");
    const Http = new XMLHttpRequest();
    const url=' http://polypotes.alwaysdata.net/api';
    Http.open("POST", url);
    Http.send("Chgt_thm");
    
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }
  }
  if (message.author.bot == false && message.content == '!help') {
    message.channel.send('Voici les instructions disponibles sur le Polybot :');
    message.channel.send('change le thème --> permet de changer le thème');
  }
});