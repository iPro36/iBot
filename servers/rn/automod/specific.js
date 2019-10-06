exports.run = (bot, Discord, ms, moment) =>
{
    bot.on('message', (msg) =>
    {
        //Checks to see if the message was sent in dm 
        if (!msg.guild) return;
        //Checks to see if the msg starts with the command or the author is a user
        if (msg.author.bot) return;

        /*********************Rn***************************/

        //Keep-it-Going
        if (msg.channel.id == "620080072677654528")
        {
            if (msg.content != '...')
            {
                msg.delete(1);
                return msg.author.send(`You can only do "..." in **#Keep-it-Going**!`);
            }
        }

        //Count to
        if (msg.channel.id == "620080110279589911")
        {
            if (isNaN(msg.content))
            {
                msg.delete(1);
                return msg.author.send(`Only numbers allowed in **#Count-to-100000**`);
            }
        }

        //Server-Invites
        if (msg.channel.id == "622679486680268805")
        {
        if (!msg.content.includes("https://discord.gg/"))
        {
            msg.delete(1);
            return msg.author.send("Only `invite` links accepted in **#Server-Invites**");
        }
        }

        //Youtube Share
        if (msg.channel.id == "622679596030099486")
        {
        msg.react("👍");
        msg.react("👎");
        if (!msg.content.includes("https://www.youtube.com/") || !msg.content.includes("https://youtu.be/"))
        {
            msg.delete(1);
            return msg.author.send("Only `Youtube Videos` allowed in **#Youtube-Share** ");
        }
        }

    });

}