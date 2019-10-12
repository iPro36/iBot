exports.run = (bot, msg, args, command, Discord, ms, moment, logChannel, prefix) =>
{
      //Ban Member
  if (command == 'ban')
  {
    //Checks to see if person has anyone of the roles
    if (!msg.member.permissions.has('BAN_MEMBERS'))
    {
      msg.delete(1);
      return msg.author.send(`${msg.author} it looks like you don't have permission to \`Ban\``);
    }

    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if(!member)
    {
      return msg.reply("Please mention a `valid member`.");
    }
    if(!member.kickable)
    {
      return msg.reply("I cannot ban the said user!");
    }

    
    //Checks to see if the member is a part of staff
    if (member.permissions.has('KICK_MEMBERS' || 'BAN_MEMBERS' || 'ADMINISTRATOR' || 'MANAGE_ROLES' || 'MANAGE_MESSAGES'))
    {  
      return msg.channel.send(`${msg.author} You can't Ban a \`Staff Member\``);
    }

    if (member.id == msg.author.id)
    {
      return msg.reply("You cannot `ban` your self!");
    }

    let reason = args.slice(1).join(' ');
    if(!reason) 
    {
      return msg.reply("Please provide a `reason`.");
    }

    let embed = new Discord.RichEmbed()
    .setFooter(`Staff: ${msg.author.username}`,`${msg.author.avatarURL}`)
    .setDescription("__**Ban Log**__")
    .setColor('f41823')
    .setThumbnail('https://cdn.discordapp.com/emojis/504373826981855232.gif?v=1')
    .addField('Banned User:',member)
    .addField('Banned by:', msg.author.username)
    .addField('Banned in:', msg.channel)
    .addField('Time:', msg.createdAt)
    .addField('Reason:', reason);
    member.send(embed);


    let nembed = new Discord.RichEmbed()
    .setTitle(`${member.displayName} Banned`)
    .setDescription(`Reason: ${reason}`)
    .setColor('f41823')
    .setThumbnail('https://cdn.discordapp.com/emojis/504373826981855232.gif?v=1')
    .setFooter(`Staff: ${msg.author.username}`, msg.author.avatarURL)
    .setTimestamp();
    msg.channel.send(nembed);

    logChannel.send(embed);
    member.ban(reason);
  }  

}