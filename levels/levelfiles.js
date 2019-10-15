exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix) =>
{
  //Rank
  let rank = require("./rank.js");
  rank.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);
}