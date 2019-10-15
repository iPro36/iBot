const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require("ms");
const moment = require("moment");
var prefix = '.'; //set the command here
const Keyv = require('keyv');
const keyv = new Keyv(); // for in-memory storage
const fs = require('fs');
let levels = require("./levels/levels.json");

//Test
bot.on('message', (msg) =>
{
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (msg.author.id == '260857663577915392')
  {

  }
});

//Logs when ready
bot.on('ready', () =>
{
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity(`${prefix}help`, 'PLAYING');
});

/*************************************************************************************/
//When bot joins a server
bot.on('guildCreate', (guild) =>
{
  
});

//Commands
bot.on('message', (msg) =>
{
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //Checks to see if the message was sent in dm
  if (!msg.guild) return;
  //Checks to see if the msg starts with the command or the author is a user
  if (msg.author.bot || !msg.content.startsWith(prefix)) return;

  /*********************Main***************************/
  //Admin
  let admin = require(`./files/admin.js`);
  admin.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //Mod
  let mod = require(`./files/mod.js`);
  mod.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //User
  let usercommands = require(`./user commands/user.js`);
  usercommands.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);
}).listenerCount("20");

//Other
bot.on('message', (msg) =>
{
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //Checks to see if the message was sent in dm
  if (!msg.guild) return;

  //Servers
  let server = require(`./servers/servers.js`);
  server.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //Levels
  let levels = require(`./levels/levelfiles.js`);
  levels.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);

});

//Auto Log
let log = require(`./automod/autolog.js`);
log.run(bot, Discord, ms, moment);

//Specific
let automod = require(`./servers/rn/automod/specific.js`);
automod.run(bot, Discord, ms, moment);



/*************************************************************************************************************************************/
bot.login(process.env.BOT_TOKEN);
