exports.run = (bot, msg, args, command, Discord, ms, moment) =>
{
  //Shows serv info
  if (command == 'serverinfo')
  {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "272954876021964800" || msg.channel.id == "464061186993029150")
    {
      return msg.channel.send(`Please use ${msg.guild.channels.get('284929847162306560')} for any \`commands\``);
    }
    const embed = new Discord.RichEmbed()
    .setTitle(`Here is This sever's info!`)
    .setAuthor(`${msg.author.username}`, `${msg.author.avatarURL}`)

    .setColor(0x00AE86)
    .setFooter(`Requested by: ${msg.author.username}`, `${msg.author.avatarURL}`)
    .setImage(msg.guild.iconURL)

    .setTimestamp()
    .addField("Name:",`${msg.guild.name}`)
    .addField("Server Created:", `${msg.guild.createdAt}`, true)
    .addField("Owner:", `${msg.guild.owner.nickname}`, true)
    .addField("Channel Region", `${msg.guild.region}`, true)
    .addField("Varification Level", `${msg.guild.verificationLevel}`, true)
    .addField("Members:", `${msg.guild.members.size}`, true)
    .addField("Number of Roles", `${msg.guild.roles.size}`, true)
    .addField("Number of Server Emojis:", `${msg.guild.emojis.size}`, true)
    .addField("Number of Channels:", `${msg.guild.channels.size}`, true)
    .addField("Avatar:", `${msg.guild.iconURL}`, true);


    msg.channel.send(embed);
  }
}