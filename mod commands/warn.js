exports.run = (bot, msg, args, command, Discord, ms, moment, logChannel, fs) =>
{
  let warns = JSON.parse(fs.readFileSync("./data/warnings.json", "utf8"));

  if (command == 'warn')
  {
    //If not enough perms
    if(!msg.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR" || "BAN_MEMBERS" || "MANAGE_ROLES" || "MANAGE_MESSAGES"))
    {
      msg.delete(1);
      return msg.author.send("Seems like you can't use that command!")
    }

    //Checks to see if a member was given
    let member = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0])
    if(!member)
    {
      return msg.channel.send("Sorry, but I couldn't find the said user :(");
    }

    //Checks to see if the other user is a staff
    if(member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR" || "BAN_MEMBERS" || "MANAGE_ROLES" || "MANAGE_MESSAGES"))
    {
      return msg.channel.send("You can't warn a `Staff Member`");
    }

    //Check to see if a reason was given
    let reason = args.slice(1).join(' ');
    if(!reason)
    {
      return msg.reply("Please give a `reason`.");
    }

    if(!warns[member.id]) warns[member.id] = 
    {
      warns: 0
    };

    warns[member.id].warns++;

    fs.writeFile("./data/warnings.json", JSON.stringify(warns), (err) => 
    {
      if (err) console.log(err)
    });

    let warnEmbed = new Discord.RichEmbed()
    .setFooter(`Staff: ${msg.author.username}`,`${msg.author.avatarURL}`)
    .setDescription("__**Warn Log**__")
    .setColor("#fc6400")
    .addField("Warned User:", member)
    .addField("Warned In:", msg.channel)
    .addField("Reason:", reason)
    .addField("Number of Warnings:", warns[member.id].warns);

    let nembed = new Discord.RichEmbed()
    .setTitle(`${member.displayName} Warned`)
    .setDescription(`Reason: ${reason}`)
    .setColor('f41823')
    .setThumbnail('https://media.tenor.com/images/bc59edc1b7897700e567e3a92e36365c/tenor.gif')
    .setFooter(`Staff: ${msg.author.username}`, msg.author.avatarURL)
    .setTimestamp();
    msg.channel.send(nembed);

    logChannel.send(warnEmbed);

  }
}