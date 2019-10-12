exports.run = (bot, msg, args, command, Discord, ms, moment, logChannel, prefix) =>
{
   //Kick member
  if (command == 'kick')
  {
    //Checks to see if person has anyone of the roles
    if (!msg.member.permissions.has('KICK_MEMBERS'))
    {
      msg.delete(1);
      return msg.author.send(`${msg.author} it looks like you don't have permission to \`Kick\``);
    }

    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if(!member)
    {
      return msg.reply("Please mention a `valid member`.");
    }
    if(!member.kickable)
    {
      return msg.reply("I cannot kick the said user!");
    }


    //Checks to see if the member is a part of staff
    if (member.permissions.has('KICK_MEMBERS' || 'BAN_MEMBERS' || 'ADMINISTRATOR' || 'MANAGE_ROLES' || 'MANAGE_MESSAGES'))
    {  
      return msg.channel.send(`${msg.author} You can't Kick a \`Staff Member\``);
    }

    
    if (member.id == msg.author.id)
    {
      return msg.reply("You cannot `kick` your self.. like wtf!");
    }

    let reason = args.slice(1).join(' ');
    if(!reason) 
    {
      return msg.reply("Please provide a `reason`.");
    }

    let embed = new Discord.RichEmbed()
    .setFooter(`Staff: ${msg.author.username}`,`${msg.author.avatarURL}`)
    .setDescription("__**Kick Log**__")
    .setColor('RANDOM')
    .addField('Kicked User:',member)
    .addField('Kicked by:', msg.author.username)
    .addField('Kicked in:', msg.channel)
    .addField('Time:', msg.createdAt)
    .addField('Reason:', reason);

    let nembed = new Discord.RichEmbed()
    .setTitle(`${member.displayName} Kicked`)
    .setDescription(`Reason: ${reason}`)
    .setColor('f41823')
    .setThumbnail('https://media1.giphy.com/media/Kg9DmEoDJjhC1gWPHE/giphy.gif')
    .setFooter(`Staff: ${msg.author.username}`, msg.author.avatarURL)
    .setTimestamp();
    msg.channel.send(nembed);
    
    logChannel.send(embed); 
    member.send(embed);
    member.kick(reason);
  }  

}