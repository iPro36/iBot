exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
    //Help Command
    if (command == 'help')
    {
      setTimeout(function()
      {
        msg.channel.send(
          `-\n`+
          `• **${msg.guild.name} Server Commands: **\n`+
          `> \`${prefix}ihelp:\` Gives you iPro's Server Commands`);
      },10);
    }
  //Lists all the bot commands
  if (command == 'ihelp')
  {
    setTimeout(function()
    {
      msg.channel.send(
      `• **Fun Commands: **\n`+
      `> \`${prefix}role [color]:\` Lets you make a role with your name and pick a color\n`+
      `> \`${prefix}rolehex [hex code]:\` Lets you make a role with your name and pick a color using hex\n\n`+

      `• **Other Commands: **\n`+
      `> \`${prefix}ihelp:\` This list`);

    },10);
  
  }

  //Assigns a role
  bot.on('guildMemberAdd', member =>
  {
    if (!member.guild.roles.find("id", '630457915400257557'))
    {
      msg.guild.createRole({name:"Guest", mentionable: false});
    }

    let role = member.guild.roles.find("id", '630457915400257557');
    member.addRole(role);
  });

  //Role Color
  let color = require(`./fun/color.js`);
  color.run(bot, msg, args, command, Discord, ms, moment);
}

