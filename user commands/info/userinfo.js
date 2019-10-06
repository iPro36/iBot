exports.run = (bot, msg, args, command, Discord, ms, moment) =>
{
    //Shows user info
  if (command == 'info')
  {
    //Checks to see if the message was sent in general
    if (msg.channel.id == "272954876021964800" || msg.channel.id == "464061186993029150")
    {
      let channel = msg.guild.channels.get('284929847162306560');
      msg.delete(1);
      return msg.author.send(`Please use **#${channel.name}** for any \`commands\``);
    }
    //Checks to see if a memeber was given
    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if(!member)
    {
      member = msg.member;
    }

    //Checks Status
    const status = {
      online: "Online",
      idle: "Idle",
      dnd: "Do Not Disturb",
      offline: "Offline/Invisible"
    };

    const embed = new Discord.RichEmbed()
    .setTitle(`Here is ${member.user.username}\'s info!`)
    .setAuthor(`${member.user.username}`, `${member.user.avatarURL}`)

    .setColor(0x00AE86)
    .setFooter(`Requested by: ${msg.author.username}`, `${member.user.avatarURL}`)
    .setImage(member.user.avatarURL)

    .setTimestamp()
    .addField("User ID:",`${member.id}`)
    .addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname"}`, true)
    .addField("Status", `${status[member.user.presence.status]}`, true)
    .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "not playing anything."}`, true)
    .addField("Roles", `${member.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
    .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Avatar:", `${member.user.avatarURL}`);

    msg.channel.send({embed});
  }
}