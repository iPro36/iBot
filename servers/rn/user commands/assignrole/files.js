exports.run = (bot, msg, args, command, Discord, ms, moment, prefix) =>
{
    //Call of Duty
    let cod = require(`./cod.js`);
    cod.run(bot, msg, args, command, Discord, ms, moment, prefix);

}