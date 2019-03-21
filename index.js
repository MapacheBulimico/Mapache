const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
client.on("ready", () => {
	console.log('El bot esta listo para la musica');
	client.user.setPresence( {
       status: "online",
       game: {
           name: "--help",
           type: "PLAYING"
       }
   } );
	});

var prefix = config.prefix;

client.on("message", (message) => {
	if (message.content.startsWith(prefix + "hola")) {
		message.channel.send('Tu nariz contra mis bolas :D');
	}
	if (message.content.startsWith(prefix + "Hola")) {
		message.channel.send('Tu nariz contra mis bolas :D');
	}
	if (message.content.startsWith(prefix + "En tiempos de guerra")) {
		message.channel.send('todo hueco es trinchera. 7u7');
	}	
	if(message.content.startsWith(prefix + 'help')){

    message.channel.send('**'+message.author.username+'**, Revisa tu bimbox.');
    message.author.send('**COMANDOS DE MAPACHE**\n```\n'+
                        '-> '+prefix+'ping							:: Comprueba el lag del bot y de tus mensajes.\n'+
                        '-> '+prefix+'kick <@user>					:: Patear a un usuario del servidor por puto.\n'+
                        '-> '+prefix+'hola							:: Un troleito sano :v.\n'+
						'-> '+prefix+'En tiempos de guerra			:: Refrán del sabio peruano!!.\n```\n\n'+
                        '**Mapache - Únete a la Legión Mapache :**\nhttps://discord.gg/VKyHF6h');
	}
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === "kick" ){

    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    
    if (message.mentions.users.size < 1) return message.reply('Debesmencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escriba una razón, `-kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
     
    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);
	}
	if (command === 'ping') {

    let ping = Math.floor(message.client.ping);
    
    message.channel.send(":ping_pong: Pong!")
      .then(m => {

          m.edit(`:incoming_envelope: Ping de Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:boxing_glove:  Ping de Discord: \`${ping} ms\``);
      
      });
	}
});

client.login(config.token); 
