exports.run = (bot, msg, args, command, Discord, ms, moment, levels, fs) =>
{
  //Rank
  let rank = require(`./rank.js`);
  rank.run(bot, msg, args, command, Discord, ms, moment, levels, fs);
}