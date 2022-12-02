const Discord = require('discord.js');
var http = require('http');

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

});