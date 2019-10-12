exports.run = (bot, msg, args, command, Discord, ms, moment, levels, fs) =>
{
    let currentxp = levels[msg.author.id].xp;
    let currentlevl = levels[msg.author.id].level;
    let levelup = currentlevl * 200;

    const showBar = xp => 
    {
        //const currentLevel = Math.floor(xp / 1000);
        const progress = (xp % 1000) / 1000;
        const progressOutOf35 = Math.round(progress * 35);
        
        const x = "□";
        const barStr = `[${'='.repeat(progressOutOf35)}${'□'.repeat(35 - progressOutOf35)}]`;
        msg.channel.send(barStr + ', currntly at level ' + currentlevl);
    };

    //Rank
    if (command == 'rank')
    {
        showBar(currentxp);
    }
}