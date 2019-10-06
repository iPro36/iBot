exports.run = (bot, Discord, ms, moment) =>
{  
  //banned_unbanned
  let banned_unbanned = require(`./banned_unbanned`);
  banned_unbanned.run(bot, Discord, ms, moment);

  //leave_join
  let leave_join = require(`./leave_join`);
  leave_join.run(bot, Discord, ms, moment);

  //msg
  let msg = require(`./msg`);
  msg.run(bot, Discord, ms, moment);
}