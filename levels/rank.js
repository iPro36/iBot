exports.run = (bot, msg, args, command, Discord, ms, moment, xp, fs, prefix, Canvas) =>
{
    //https://www.youtube.com/watch?v=1A14eyfh8Fs  (At: 6:00mins)
    //Gets a random number for xp and sets author's level if none exist
    let xpadd = Math.floor(Math.random() * 10)+ 5;
    let user = msg.author.id;

    if(!fs.existsSync(`./data/levels/${msg.guild.id}.json`))
    {
      fs.writeFile(`./data/levels/${msg.guild.id}.json`, JSON.stringify(xp), (err) =>
      {
        if (err) console.log(err);
      });
      //Xp is set to a json file for the server for levels
      xp = JSON.parse(fs.readFileSync(`./data/levels/${msg.guild.id}.json`, "utf8"));
    }

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
    let levelupLimit = currentlevl * 200;

    //Adds user's xp, everytime they send a message
    xp[user].xp = currentxp + xpadd;
    if (levelupLimit <= xp[user].xp)
    {
        xp[user].level = currentlevl + 1;
        msg.channel.send(`• __**Level Up**__:\n> Current Level: ${currentlevl}`);
        xp[user].xp = 0;
    }
}