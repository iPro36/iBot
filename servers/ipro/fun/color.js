exports.run = (bot, msg, args, command, Discord, ms, moment) =>
{
    const toHex = require('colornames');

    //Gives people role with the color of choice
  if (command == 'role')
  {
    let color = args[0];
    if (!color)
    {
      return msg.channel.send('Please type in the `color` you want your role to be!');
    }

    //Deletes the role if it already exists
    if(msg.guild.roles.find("name", `${msg.author.username}`))
    {
      let role = msg.guild.roles.find("name", msg.author.username);

      role.delete('The user tried creating a new role');
    }

    msg.guild.createRole({name:`${msg.author.username}`, color: `${toHex(`${color}`)}`, mentionable: true});

    setTimeout(function()
    { 
      let role = msg.guild.roles.find("name", msg.author.username);

      msg.member.addRole(role.id);

      msg.channel.send(`You have been given  \`${msg.author.username}\` role with \`${color}\` color`);
    }, ms('1s'));
  }

  //Gives people role with the color code of choice
  if (command == 'rolehex')
  {
    let color = args[0];
    //Checks to see if a color code was given
    if (!color)
    {
      return msg.channel.send('Please type in the `hex code` you want your role to be!');
    }

    //Deletes the old role if it exists
    if(msg.guild.roles.find("name", `${msg.author.username}`))
    {
      let role = msg.guild.roles.find("name", msg.author.username);

      role.delete('The user tried creating a new role');
    }

    //Creates the role with the user's name and color of choice
    msg.guild.createRole({name:`${msg.author.username}`, color: `${color}`, mentionable: true});

    //Assigns the role
    setTimeout(function()
    { 
      let role = msg.guild.roles.find("name", msg.author.username);

      msg.member.addRole(role.id);

      msg.channel.send(`You have been given  \`${msg.author.username}\` role with \`${color}\` hex code`);
    }, ms('1s'));
  }
}