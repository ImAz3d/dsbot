const Discord = require("discord.js");
const client = new Discord.Client();
const datos = require("./datos.json")
let prefix = datos.prefix
client.on("ready", () => {  
    console.log("Encendido!");   
});
 
 client.on("message", (message) => {
if(message.content.startsWith("Ronin!")) {
     message.channel.send("Que pasa? si necesitas algo de mi, envia algun comando plox");
}
if(message.content.startsWith(prefix+"dimealgo"))
      message.channel.send("Algo :v, si GanzoAstral viera esto estaria muy indigna3") 
  
if (message.content.startsWith(prefix +"sobreds")){
    const embed = new Discord.RichEmbed()
    .setTitle("Official DS TEAM Discord Server")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Discord Oficial de DS TEAM.")
    .setFooter("Enviado por Ronin!", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setURLThumbnail("https://cdn.discordapp.com/attachments/448872120710070287/490783433857957895/GIF.gif")
    .setTimestamp()
    .setURL("https://discord.gg/9k8eDWw")
    .addField("Sobre el soporte y el servidor oficial",
      "Entra a DS TEAM para soporte de Ronin! o ser parte de la comunidad, en caso de alguna duda o error sobre Ronin! consulta a los Guardianes de DS o Al Creador.", false)
    .addBlankField(true);

    message.channel.send(embed)
}
});
 client.login(datos.token);
