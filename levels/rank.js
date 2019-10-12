exports.run = (bot, msg, args, command, Discord, ms, moment, levels, fs) =>
{
    //https://www.youtube.com/watch?v=1A14eyfh8Fs  (At: 6:00mins)
    //Gets a random number for xp and sets author's level if none exist
    let xpadd = Math.floor(Math.random() * 10)+ 5;
    if (!levels[msg.author.id])
    {
        levels[msg.author.id] =
        {
        xp: 0,
        level: 1
        };
    }

    let currentxp = levels[msg.author.id].xp;
    let currentlevl = levels[msg.author.id].level;
    let levelup = currentlevl * 200;

    //Adds user's xp, everytime they send a message
    currentxp = currentxp + xpadd;
    if (currentxp >= levelup)
    {
        currentlevl++;
        msg.channel.send(`• __**Level Up**__: \n > Current Level: ${currentlevl}`);
    }
    fs.writeFile("./levels/levels.json", JSON.stringify(levels), (err) =>
    {
        if (err) console.log(err);
    });
}