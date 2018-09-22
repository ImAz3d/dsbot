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
  
if (message.content.startsWith(prefix +"richembed")){
    const embed = new Discord.RichEmbed()
    .setTitle("Official DS TEAM Discord Server")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Discord Oficial de DS TEAM.")
    .setFooter("Enviado por Ronin!", client.user.avatarURL)
    .setImage(message.url.avatarURL)
    .setThumbnail(message.url.avatarURL)
    .setTimestamp()
    .setURL("https://discord.gg/9k8eDWw")
    .addField("Este es un título de campo, puede contener 256 caracteres",
      "Este es un valor de campo, puede contener 2048 caracteres.", false)
    .addField("Campo en línea", "Debajo del campo en línea", false)
    .addBlankField(true)
    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", false);

    message.channel.send(embed)
}
});
 client.login(datos.token);
