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
   .set_footer(text="Ronin (DM Bot) by ! A̖̱̖̳̤͜z̭̣̯͕̻3̣̪͉͕̫͞d̲̪͝#6086")

    message.channel.send({embed});

if(command === "removerole"){

    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
     
    if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    if(!nombrerol) return message.channel.send('Escriba el nombre del rol a remover, `-removerol @miembro [rol]`');
    if(!role) return message.channel.send('Rol no encontrado en el servidor.');
    
    miembro.removeRole(role).catch(console.error);
    message.channel.send(`El rol **${role.name}** del miembro **${miembro.user.username}** fue removido  correctamente.`);

  }


if(command === "addrole"){

    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
     
    if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar, `-addrol @username [rol]`');
    if(!role) return message.channel.send('Rol no encontrado en el servidor.');
    
    miembro.addRole(role).catch(console.error);
    message.channel.send(`El rol **${role.name}** fue agregado correctamente a **${miembro.user.username}**.`);
   
  }
    
});
 client.on("error", (e) => console.error(e));
 client.on("warn", (e) => console.warn(e));
 client.on("debug", (e) => console.info(e));

 client.login(process.env.BOT_TOKEN);
