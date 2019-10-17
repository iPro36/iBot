exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix, Canvas) =>
{
  /*********************Rank Info***************************/
  //Rank
  let rankinfo = require(`./rankinfo`);
  rankinfo.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix, Canvas);
}