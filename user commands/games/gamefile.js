exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix) =>
{
  /*********************Games***************************/
  //Rps
  let rps = require(`./rps`);
  rps.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);

  //Toss
  let toss = require(`./toss`);
  toss.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix)
  
  //Chase the Rabbit
  let rabbit = require(`./rabbit`);
  rabbit.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix)
}