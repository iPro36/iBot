exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
  //Make Mute
  let makemute = require(`./makemute.js`);
  makemute.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //Make iLog
  let makeilog = require(`./makeilog.js`);
  makeilog.run(bot, msg, args, command, Discord, ms, moment, prefix);
  
  //Make Bot-Log
  let makebotlog = require(`./makebotlog.js`);
  makebotlog.run(bot, msg, args, command, Discord, ms, moment, prefix);
}