# iBot

The end goal of this bot is to have the combined abilities of all the other bots in discord.

## Invite iBot

To invite the bot click [here](https://discordapp.com/oauth2/authorize?client_id=512775035036106782&scope=bot&permissions=2146958591)

### Usage

Use the follwing commands to get the list of commands you desire.

* .help- lists general command that can be used by anyone
* .modhelp- lists commands that can only be accessed by moderators
* .adminhelp- lists commands exclusively for admins

## Run the bot as your own
To make this your own bot you'll have to follow to follwing instructions:

### Get the files on your computer
* Click on **Clone or Download**
* Then click on **Download Zip**
* Go to the download location and extract the files

### Run the bot as a test
* To run the bot on your computer as a test you do not need the Procdile
* On thing you'll have to change is in **ibot.js** change the last line from
```
bot.login(process.env.BOT_TOKEN);
```
to
```
bot.login("your bot token");
```
* Now you are all ready to run the bot on your computer

### Run the bot 24/7
* To run the bot 24/7 you can follow the instructions on [here](https://www.youtube.com/watch?v=NM8IMyqpvqU)
