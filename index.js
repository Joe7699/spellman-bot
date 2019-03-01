const botprefix =  require("./botprefix.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
 console.log(`${bot.user.username} is online`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botprefix.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}b`){
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;

        if (!args[1]) {
          
            let embed3 = new Discord.RichEmbed()
               .setDescription(":x: | Message sent for no one.")
                .setColor("#FF2727")
                        message.channel.sendEmbed(embed3);
          
                      } else {
          
                         let embed4 = new Discord.RichEmbed()
            .setDescription(':white_check_mark: | Message sent to everyone')
            .setColor("#02FF05")
             
           message.channel.sendEmbed(embed4);
             message.delete();
          }
      }
if(cmd === `${prefix}b`)
    message.guild.members.forEach( member => {
    if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let messagegoesto = `${member}`
    let message2 = message.content.substr(3);
    let embed09 = new Discord.RichEmbed()
    .setDescription("♚ Spellman Broadcast")
    .addField("Sender:", `${message.author.username}`)
    .setColor("RANDOM")
    .addField("Message:", `${message2}`)
    .setFooter(`${messagegoesto}`);
      member.send(embed09);
     message.delete();    
});
});
bot.login(botprefix.token);