exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix) =>
{
  /*********************Info***************************/
  //User Info
  let userinfo = require(`./userinfo`);
  userinfo.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);

  //Server Info
  let serverinfo = require(`./serverinfo`);
  serverinfo.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);

  //Roles Info
  let roles = require(`./roles`);
  roles.run(bot, msg, args, command, Discord, ms, moment, xp, fs, prefix);
}