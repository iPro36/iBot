exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix) =>
{
    if(command == 'rank')
    {
        let user = msg.author.id + msg.guild.id;
        if (!xp[user])
        {
            return msg.channel.send("Your xp: 0\nYour Level: 1");
        }
        else
        {
            return msg.channel.send(`Your xp: ${xp[user].xp}\nYour Level: ${xp[user].level}`);
        }
    }
}