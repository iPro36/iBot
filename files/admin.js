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
      `• **Admin Commands: **\n`+
      `> \`${prefix}dm [message]:\` Dm everyone on the server, with the given message\n`+
      `> \`${prefix}makemute:\` To make a mute role\n\n`+

      `• **Other Commands: **\n`+
      `> \`${prefix}adminhelp:\` This list`);
  }

  //Make mute role 
  if (command == 'makemute')
  {
    if(msg.guild.roles.find(`name`, "iMute"))
    {
      return msg.channel.send('It seems like there is already an iMute role that exists\n`If you would like to make a new one, please delete the old one.`')
    } 
    else 
    {
      let mute = require(`../admin commands/makemute.js`);
      mute.run(bot, msg, args, command, Discord, ms, moment);
      return msg.channel.send("**iMute** role has been created!")
    }
  }

  //dm
  let dm = require(`../admin commands/dm`);
  dm.run(bot, msg, args, command, Discord, ms, moment);
}