exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
    //DM
    let dm = require(`./dm.js`);
    dm.run(bot, msg, args, command, Discord, ms, moment, prefix);
}