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
let levelup = levels[msg.author.id].level * 200;

//Adds user's xp, everytime they send a message
levels[msg.author.id].xp = currentxp + xpadd;
if (levels[msg.author.id].xp >= levelup)
{
    levels[msg.author.id].level = currentlevl+1;
}
fs.writeFile("./levels/levels.json", JSON.stringify(levels), (err) =>
{
    if (err) console.log(err);
});
if (msg.channel.id == '620079278515814420')
{
  return msg.channel.send(`**${msg.author.username}'s XP**: ${levels[msg.author.id].xp}\n **${msg.author.username}'s Level**: ${levels[msg.author.id].level}`);
}
}