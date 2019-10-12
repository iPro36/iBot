exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
    if (command == "makeilog")
    {
        if (!msg.guild.channels.find('name','ilog'))
        {
            msg.guild.createChannel("ilog","text",[{
            id: msg.guild.id,
            deny: ['READ_MESSAGES'],
          }])
          return msg.channel.send(`${msg.guild.channels.find('name','ilog')} has been created, it's only visible to admins.`+
          `\n\`Make sure you change perms according to your needs.\``);
        }
        else
        {
            return msg.channel.send(`It seems like ${msg.guild.channels.find('name','ilog')} already exists.`);
        }
    }
}