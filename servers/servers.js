exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
    if (msg.author.bot || !msg.content.startsWith(prefix)) return;

    else
    {
        if (msg.guild.id == '274678517730508802')
        {
            //iPro
            let ipro = require(`./ipro/ipro.js`);
            ipro.run(bot, msg, args, command, Discord, ms, moment, prefix);
        }
    
        if (msg.guild.id == '272954876021964800')
        {
            //Rn
            let rn = require(`./rn/rn.js`);
            rn.run(bot, msg, args, command, Discord, ms, moment, prefix);
        }
    }
}
