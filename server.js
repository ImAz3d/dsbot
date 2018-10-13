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

if(command === "addrole") {
    if(!args[0]) return message.channel.send("Necesitas colocar al @usuario/ID y el @rol/nombre")
    var user = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!user) return message.channel.send(`el usuario ${args[0]} no existe`)
    if(!args[1]) return message.channel.send("Necesitas colocar el @rol/nombre")
    var role = message.mentions.roles.first() || message.guild.roles.find("name",args.slice(1).join(" "))
    if(!role) return message.channel.send(`el rol ${args.slice(1).join(" ")} no existe.`)
    user.addRole(role.id).then(m => {
        message.channel.send("El usuario "+user+" acaba de recibir el rol "+role.name")
        }).catch(error => {
            console.log(error)
        });
    }
});
client.login(process.env.BOT_TOKEN);

 client.on("error", (e) => console.error(e));
 client.on("warn", (e) => console.warn(e));
 client.on("debug", (e) => console.info(e));
