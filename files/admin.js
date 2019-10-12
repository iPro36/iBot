exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
if(!msg)
{
  return;
}
//Checks to see if the person has moderator role
  if(!msg.member.hasPermission("ADMINISTRATOR")) return;

  //Gives the list of admin commands
  if (command == 'adminhelp')
  {
    return msg.channel.send(
      `• **Make Commands: **\n`+
      `> \`${prefix}makemute:\` To make a mute role\n`+
      `> \`${prefix}makeilog:\` Creates a channel where, all commands used by mods are logged\n`+
      `> \`${prefix}makeautolog:\` Creates a channel which logs every action on discord\n\n`+

      `• **Other Commands: **\n`+
      `> \`${prefix}dm [message]:\` Dm everyone on the server, with the given message\n\n`+

      `• **Help Command(s): **\n`+
      `> \`${prefix}adminhelp:\` This list`);
  }

  //Make
  let make = require(`../admin commands/makeCommands/make.js`);
  make.run(bot, msg, args, command, Discord, ms, moment, prefix);

  //Others
  let other = require(`../admin commands/other/other.js`);
  other.run(bot, msg, args, command, Discord, ms, moment, prefix);
}