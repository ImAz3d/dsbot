const Discord = require("discord.js");
const client = new Discord.Client();
const datos = require("./datos.json")
let prefix = datos.prefix
client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setPresence( {
       status: "online",
       game: {
           name: `r.help | Estoy en ${client.guilds.size} servidores.`,
           type: "PLAYING"
       }
    });  
});
 
 client.on("message", (message) => {
if(message.content.startsWith(prefix+"ronin!")) {
     message.channel.send("Que pasa? si necesitas algo de mi, envia algun comando plox");
}
if(message.content.startsWith(prefix+"dimealgo"))
      message.channel.send("Algo :v, si GanzoAstral viera esto estaria muy indigna3") 

if(message.content.startsWith(prefix+"help"))
   message.channel.send("Aún no hay comandos fijos :P Lo siento")

  
if (message.content.startsWith(prefix+"sobreronin")){
    const embed = new Discord.RichEmbed()
     .setTitle("Click aquí para invitar el bot a tu servidor!")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("asda.", false);
    .setFooter("Bot by Az3d", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=492970132654784523&permissions=8&scope=bot")
    .addField("Como funciona?", "Si quieres ver los comandos del bot simplemente escribe r.help.")
    .addField("Si quieres entrar al servidor de soporte aquí la invitacion!", "https://discord.gg/Q5F5ZBu", false)
    .addBlankField(false)
    .addField("Bot", "Hecho en DM COMMUNITY Y CREADO POR AZ3D.", true);
    message.channel.send(embed)
}
});
 client.login(datos.token);
 client.login(process.env.BOT_TOKEN);

 client.on("error", (e) => console.error(e));
 client.on("warn", (e) => console.warn(e));
 client.on("debug", (e) => console.info(e));
