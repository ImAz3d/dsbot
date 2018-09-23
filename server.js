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
if(message.content.startsWith("Ronin!")) {
     message.channel.send("Que pasa? si necesitas algo de mi, envia algun comando plox");
}
if(message.content.startsWith(prefix+"dimealgo"))
      message.channel.send("Algo :v, si GanzoAstral viera esto estaria muy indigna3") 
  
if (message.content.startsWith(prefix+"sobreds")){
    const embed = new Discord.RichEmbed()
     .setTitle("Este es su título, puede contener 256 caracteres")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("https://github.com/CraterMaik")
    .addField("Este es un título de campo", "Este es un valor de campo puede contener 2048 caracteres.")
    .addField("Campo en línea", "Debajo del campo en línea", true)
    .addBlankField(true)
    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
    message.channel.send(embed)
}
});
 client.login(datos.token);

 client.on("error", (e) => console.error(e));
 client.on("warn", (e) => console.warn(e));
 client.on("debug", (e) => console.info(e));

if (command === 'join') { 
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en un canal de voz.');
    } else {
     message.channel.send('Conectando...').then(m => {
          Canalvoz.join().then(() => {
               m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
     }).catch(error => message.channel.send(error));
    }
}
if (command === 'leave') { 
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz) {
        message.channel.send('No estoy en un canal de voz.');
    } else {
        message.channel.send('Dejando el canal de voz.').then(() => {
        Canalvoz.leave();
        }).catch(error => message.channel.send(error));
    }   
}
if (commmand === 'play') {
    if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `-join` para unirme a un canal.').catch(error => message.channel.send(error));
    const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/Desktop/musica/audio.mp3`);
}
dispatcher.on('end', () => {
   
});

dispatcher.on('error', e => {
   
  console.log(e);
});

dispatcher.setVolume(0.5);
dispatcher.setVolume(1);

dispatcher.time;

dispatcher.pause();
dispatcher.resume();

dispatcher.end();

}
 if (command === 'ytplay') {
    const ytdl = require('ytdl-core');

    let voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
    if(!args) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');
    voiceChannel.join()
      .then(connection => {
        const url = ytdl(args, { filter : 'audioonly' });
        const dispatcher = connection.playStream(url);
        message.channel.send('Reproduciendo ahora: '+ args);
        message.delete();
      })
      .catch(console.error);
}
 if (command === 'radio') {
    let voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
        voiceChannel.join().then(conexion =>{
        conexion.playStream('http://stream.electroradio.fm:80/192k/;');
        message.channel.send('Radio electro activado.')
        return;
      })
      .catch(console.error);
}
conexion.playArbitraryInput('http://miweb.com/sonido.mp3');
