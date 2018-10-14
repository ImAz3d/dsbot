const Discord = require("discord.js");
const client = new Discord.Client();
const datos = require("./datos.json")
let prefix = datos.prefix
client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setPresence( {
       status: "online",
       game: {
           name: `r.help | En mantenimiento hasta el martes 16/10`,
           type: "PLAYING"
       }
    });  
});
 client.on("message", (message) => {
 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();
 
  if(message.content.startsWith(prefix+"ronin!")) {
     message.channel.send("Que pasa? si necesitas algo de mi, envia algun comando plox");
}
if(message.content.startsWith(prefix+"dimealgo"))
      message.channel.send("Algo :v, si GanzoAstral viera esto estaria muy indigna3") 

if(message.content.startsWith(prefix+"help"))
   message.channel.send("Los comandos disponibles ahora mismo son: r.dimealgo, r.ronin!, r.addrole (Este comando todavia esta en pruebas). Sentimos la escasez de comandos, pero dentro de poco abran mas!")

if(message.content.startsWith(prefix+"invitebot"))
   embed=discord.Embed(title="Click aqui para agregar al bot a tu servidor", url="https://discordapp.com/api/oauth2/authorize?client_id=492970132654784523&permissions=8&scope=bot", color=0x80ff80)
   .set_thumbnail(url="https://cdn.discordapp.com/attachments/448872120710070287/490783433857957895/GIF.gif")
   .add_field(name= Te gusto el bot?, value= Apoya al creador en el server de soporte!, inline=True)
   .set_footer(text="Ronin (DM Bot) by ! A̖̱̖̳̤͜z̭̣̯͕̻3̣̪͉͕̫͞d̲̪͝#6086")
   await self.bot.say(embed=embed)

if(command === "addrole") {
    if(!message.member.roles.some(r=>["♛Creador de DM♛"].includes(r.name)))
    if(!message.member.roles.some(r=>["✪Guardian de DM✪"].includes(r.name)))
    return message.channel.send("No tienes los permisos necesarios")
    if(!args[0]) return message.channel.send("Necesitas colocar al @usuario/ID y el @rol/nombre")
    var user = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!user) return message.channel.send(`el usuario ${args[0]} no existe`)
    if(!args[1]) return message.channel.send("Necesitas colocar el @rol/nombre")
    var role = message.mentions.roles.first() || message.guild.roles.find("name",args.slice(1).join(" "))
    if(!role) return message.channel.send(`el rol ${args.slice(1).join(" ")} no existe.`)
    user.addRole(role.id).then(m => {
        message.channel.send("El usuario "+user+" acaba de recibir el rol "+role.name)
          }).catch(error => {
            console.log(error)
        });
    }
});
 client.on("error", (e) => console.error(e));
 client.on("warn", (e) => console.warn(e));
 client.on("debug", (e) => console.info(e));

 client.login(process.env.BOT_TOKEN);
