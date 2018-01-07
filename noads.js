
const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = 'na!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("No Ads | 1/1 | " + " na!yardım.", 'https://www.twitch.tv/turkishtr2', 1);
});

client.on('message', msg => {
    if (msg.content.toLowerCase().indexOf("discord.gg/") > -1) {
        if (!msg.author.bot) false
            msg.react("😡")
            msg.delete()
            msg.channel.send("<@" + msg.author.id + ">, **Bence reklam yapmayı bırak.Çünkü ben bu iş için görevlendirildim.**");
        }
    }

    if (msg.content.toLowerCase() === prefix + 'yardım') {
     msg.channel.send('Bu bot bir Cube projesidir tüm hakları saklıdır.Yapabildiklerim ise:Discord Sunucu Reklamlarından Sunucunuzu koruma altına alırım.')
    }
    if (msg.content.toLowerCase().indexOf("https:/") > -1) {
       if (!msg.author.bot) false
           msg.react("😡")
           msg.delete()
           msg.channel.send("<@" + msg.author.id + ">, **Bence reklam yapmayı bırak.Çünkü ben bu iş için görevlendirildim.**");
        }
    }

    
});
  
client.login('Mzk5MTgwNjQ0NzIwMDUwMTc2.DTOAOQ.8TciHY1C5d_y913F9rNeTq_axGc');
  
