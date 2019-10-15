exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix) =>
{
    //https://www.youtube.com/watch?v=1A14eyfh8Fs  (At: 6:00mins)
    //Gets a random number for xp and sets author's level if none exist
    let xpadd = Math.floor(Math.random() * 10)+ 5;
    let user = msg.author.id + msg.guild.id;

    if (!xp[user])
    {
        xp[user] =
        {
            xp: 0,
            level: 1
        };
    }

    let currentxp = xp[user].xp;
    let currentlevl = xp[user].level;
    let levelup = currentlevl * 200;

    //Adds user's xp, everytime they send a message
    xp[user].xp = currentxp + xpadd;
    if (levelup <= xp[user].xp)
    {
        xp[user].level = currentlevl + 1;
        msg.channel.send(`• __**Level Up**__:\n> Current Level: ${currentlevl}`);
    }

    fs.writeFile("../data/xp.json", JSON.stringify(xp), (err) =>
    {
        if (err) console.log(err);
    });
}