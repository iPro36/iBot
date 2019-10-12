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
  if (msg.content=='test')
  {
    
  }

/**********************************************************/
  // if (msg.channel.id == '620079278515814420')
  // {
  //   return msg.channel.send(`**${msg.author.username}'s XP**: ${levels[msg.author.id].xp}\n **${msg.author.username}'s Level**: ${levels[msg.author.id].level}`);
  // }
/**********************************************************/
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

bot.on('message', (msg) =>
{
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //Checks to see if the message was sent in dm
  if (!msg.guild) return;
  //Checks to see if the msg starts with the command or the author is a user
  if (msg.author.bot || !msg.content.startsWith(prefix)) return;

  /*********************Main***************************/
  //Servers
  let server = require(`./servers/servers.js`);
  server.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //Admin
  let admin = require(`./files/admin.js`);
  admin.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //Mod
  let mod = require(`./files/mod.js`);
  mod.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //User
  let user = require(`./files/user.js`);
  user.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //Levels
  let levels = require(`./levels/levelfiles.js`);
  levels.run(bot, msg, args, command, Discord, ms, moment, levels, fs);
}).listenerCount("20");

//Auto Log
let log = require(`./automod/autolog`);
log.run(bot, Discord, ms, moment);

//Specific
let automod = require(`./servers/rn/automod/specific.js`);
automod.run(bot, Discord, ms, moment);



/*************************************************************************************************************************************/
bot.login(process.env.BOT_TOKEN);
