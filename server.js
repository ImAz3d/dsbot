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
     .setTitle("Click aquí para entrar al servidor de soporte!")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Este bot sigue en fase de pruebas.", true);
    .setFooter("Bot by Az3d", client.user.avatarURL)
    .setTimestamp()
    .setURL("https://discord.gg/Q5F5ZBu")
    .addField("Como funciona?", "Si quieres ver los comandos del bot simplemente escribe r.help.")
    message.channel.send(embed)
}
});
 client.login(datos.token);
 client.login(process.env.BOT_TOKEN);

 client.on("error", (e) => console.error(e));
 client.on("warn", (e) => console.warn(e));
 client.on("debug", (e) => console.info(e));
