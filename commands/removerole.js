//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
const { Message } = require('discord.js')

module.exports = {
    name : 'removerole',
    run : async(client, message, args, Discord) => {
        const Embed1 = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('GIVEN')
      .setDescription(`**REMOVED ROLE FROM USER**`)
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed2 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U DONT HAVE PERMISSION TO USE THIS COMMAND`')
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed3 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`MENTION A USER TO REMOVE ROLE`')
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed4 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`MENTION THE ROLE U WANNA REMOVE`')
      .setFooter('CREDITS TO TEAM MINNAL')
        
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(Embed2)

        const target = message.mentions.members.first() 
      
        if(!target) return message.channel.send(Embed3) 
        const role = message.mentions.roles.first() 
        if(!role) return message.channel.send(Embed4)
        await target.roles.remove(role) 
      
        message.channel.send(Embed1)
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
