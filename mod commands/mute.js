exports.run = (bot, msg, args, command, Discord, ms, moment, logChannel, prefix) =>
{
  //mute memeber
  if (command == 'mute')
  {
    //Checks to see if person has anyone of the roles
    if (!msg.member.roles.find("name", "Moderator") && !msg.member.permissions.has('KICK_MEMBERS' || 'BAN_MEMBERS' || 'ADMINISTRATOR' || 'MANAGE_ROLES' || 'MANAGE_MESSAGES'))
    {
      msg.delete(1);
      return msg.author.send(`${msg.author} it looks like you can't \`Mute\` people.`);
    }

    let muterole = msg.guild.roles.find("name", 'iMute');
    if(!muterole)
    {
      //Mute
      let mute = require(`../admin commands/makeCommands/mute.js`);
      mute.run(bot, msg, args, command, Discord, ms, moment, prefix);
      return msg.channel.send('It seems like there was no mute role in this server, no worries I took care of that. Please tray once again...');
    }

    //Checks to see if a memeber was given
    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if(!member)
    {
      return msg.reply("Please mention a `valid member`.");
    }
    if (member.id == msg.author.id)
    {
      return msg.reply("You cannot `mute` your self!");
    }

    //Checks to see if the member is a part of staff
    if (member.permissions.has('KICK_MEMBERS' || 'BAN_MEMBERS' || 'ADMINISTRATOR' || 'MANAGE_ROLES' || 'MANAGE_MESSAGES'))
    {  
      return msg.channel.send(`${msg.author} You can't Mute a \`Staff Member\``);
    }

    //Checks to see if mute time was given
    let mutetime = args[1];
    if(!mutetime)
    {
      return msg.channel.send("Please give a `time`.");
    }
    if (isNaN(mutetime.charAt(0)))
    {
      return msg.channel.send("Plase make sure to mention the `number` of **seconds/minutes/hours/days** you want the mute to last.")
    }
    // if (mutetime.charAt(1) != "s" && mutetime.charAt(1) != "m" && mutetime.charAt(1) != "h" && mutetime.charAt(1) != "d")
    // {
    //   return msg.channel.send("Please give a `valid time`.\n\n__**For Example:**__\n**1m** = 1 minute\n**1h** = 1 hour\n**1d** = 1day")
    // }
    //Checks to see if a reason was given
    let reason = args.slice(2).join(' ');
    if(!reason)
    {
      return msg.reply("Please give a `reason`.");
    }

    msg.guild.member(member).addRole(muterole.id);
    
    let embed = new Discord.RichEmbed()
    .setFooter(`Staff: ${msg.author.username}`,`${msg.author.avatarURL}`)
    .setDescription("__**Mute Log**__")
    .setColor('RANDOM')
    .addField('Muted User:', member)
    .addField('Muted by:', msg.author.username)
    .addField('Muted in:', msg.channel)
    .addField('Time:', msg.createdAt)
    .addField('Duration:', ms(ms(mutetime), {long: true}))
    .addField('Reason:', reason);

    let nembed = new Discord.RichEmbed()
    .setTitle(`${member.displayName} Muted`)
    .setDescription(`Reason: ${reason}\n Duration: ${ms(ms(mutetime), {long: true})}`)
    .setColor('f41823')
    .setThumbnail('https://media1.giphy.com/media/hKBFbhNCjYjuw/giphy.gif')
    .setFooter(`Staff: ${msg.author.username}`, msg.author.avatarURL)
    .setTimestamp();
    msg.channel.send(nembed);
    
    logChannel.send(embed);
    member.send(embed);


    setTimeout(function()
    { 
      member.removeRole(muterole.id);
      let embed = new Discord.RichEmbed()
      .setFooter(`${msg.author.username}`,`${msg.author.avatarURL}`)
      .setDescription("__**Unmute Log**__")
      .setColor('RANDOM')
      .addField('Unmuted User', member)
      .addField('Muted by', msg.author.username)
      .addField('Muted in', msg.channel)
      .addField('At', msg.createdAt)
      .addField('Duration:', ms(ms(mutetime), {long: true}))
      .addField('Reason', reason);

      logChannel.send(embed);
    }, ms(mutetime));
  }

  //Unmute member
  if (command == 'unmute')
  {
    //Checks to see if person has anyone of the roles
    if (!msg.member.permissions.has('KICK_MEMBERS' || 'BAN_MEMBERS' || 'ADMINISTRATOR' || 'MANAGE_ROLES' || 'MANAGE_MESSAGES'))
    {
      msg.delete(1);
      return msg.channel.send(`${msg.author} it looks like you can't \`Unmute\` people.`);
    }

    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if(!member)
    {
      return msg.reply("Please mention a `valid member`.");
    }
    if (member.id == msg.author.id)
    {
      return msg.reply("You cannot `Unmute` your self!");
    }

    let muterole = msg.guild.roles.find("name", 'iMute'); //Change role depending on the server


    if (!msg.guild.member(member).roles.find("name", 'iMute'))
    {
      msg.channel.send(`${member} was **not muted** :|`);
    }
    if (msg.guild.member(member).roles.find("name", 'iMute'))
    {
      msg.guild.member(member).removeRole(muterole.id);

      let embed = new Discord.RichEmbed()
      .setFooter(`${msg.author.username}`,`${msg.author.avatarURL}`)
      .setDescription("__**Unmute Log**__")
      .setColor('RANDOM')
      .addField('Unmuted User', member)
      .addField('Unmuted by', msg.author.username)
      .addField('At', msg.createdAt)


      let nembed = new Discord.RichEmbed()
      .setColor('23d313')
      .setTitle(`Un-Muted`)
      .setDescription(`${member} has been un-muted at your request`)
      .setFooter(`Staff: ${msg.author.username}`, msg.author.avatarURL);
      msg.channel.send(nembed);

      logChannel.send(embed);
      member.send(embed);
    }
  }
}