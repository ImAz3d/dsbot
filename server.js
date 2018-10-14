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
     
if(message.content.startsWith(prefix+"dimealgo"))
      message.channel.send("Algo :v, si GanzoAstral viera esto estaria muy indigna3")        

if(message.content.startsWith(prefix+"help")){
   message.channel.send("**"+message.author.username+"**, Se te ha enviado los comandos al privado.");
   message.author.send("**Comandos de Ronin (Pronto mas comandos)**\n`\n"+
                       "-> "+prefix+"ronin :Usalo si estas aburrido.\n"+
                       "-> "+prefix+"dimealgo :Te dira algo que te sorprendera.\n"+
                       "-> "+prefix+"addrole @user (rol) :Añade un rol a alguien.\n"+
                       "-> "+prefix+"removerole @user (rol) :Remueve el rol a quien se lo merezca.\n"+
                       "**Ronin Bot By Az3d - Unete al servidor de soporte! **\nhttps://discord.gg/Q5F5ZBu");
    
  }
      
if(command === "removerole"){

    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if(!perms) return message.channel.send("`Lo siento` `|` No tienes permisos para usar este comando.");
     
    if(message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);
    if(!nombrerol) return message.channel.send('te falta escribir el rol que desea remover, `-removerol @miembro rol`');
    if(!role) return message.channel.send('Este rol no existe aquí.');
    
    miembro.removeRole(role).catch(console.error);
    message.channel.send(`El rol **${role.name}** de **${miembro.user.username}** se ha revocado.`);

  }


if(command === "addrole"){

    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if(!perms) return message.channel.send("`Lo siento` `|` Solo admins pueden usar este comando.");
     
    if(message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien para darle el rol.').catch(console.error);
    if(!nombrerol) return message.channel.send('Te falta especificar el rol, no soy adivino, `-addrol @name rol`');
    if(!role) return message.channel.send('Rol no encontrado en el servidor.'); 
    miembro.addRole(role).catch(console.error);
    message.channel.send(`**${miembro.user.username}** ahora tiene el rol **${role.name}**.`);
    }
});
 client.on("error", (e) => console.error(e));
 client.on("warn", (e) => console.warn(e));
 client.on("debug", (e) => console.info(e));

 client.login(process.env.BOT_TOKEN);
