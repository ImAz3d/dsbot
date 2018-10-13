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
   message.channel.send("Los comandos disponibles ahora mismo son: r.dimealgo, r.ronin! Sentimos la escasez de comandos, pero dentro de poco abran mas!")
});
 client.login(datos.token);
 client.login(process.env.BOT_TOKEN);

 client.on("error", (e) => console.error(e));
 client.on("warn", (e) => console.warn(e));
 client.on("debug", (e) => console.info(e));
