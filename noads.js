
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("No Ads | 1/1 | " + " Made by Cube Development.", 'https://www.twitch.tv/turkishtr2', 1);
});

client.on('message', msg => {
    if (msg.content.toLowerCase().indexOf("discord.gg/") > -1) {
        if (!msg.author.bot) {
            msg.react("😡")
            msg.delete()
            msg.channel.send("<@" + msg.author.id + ">, **Bence reklam yapmayı bırak.Çünkü ben bu iş için görevlendirildim.**");
        }
    }
});

client.login('Mzk5MTgwNjQ0NzIwMDUwMTc2.DTKA0A.P3FoitXgLSzL0Z6YeYUboplVJ88');
  