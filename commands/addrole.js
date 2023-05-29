//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
const { Message } = require('discord.js')

module.exports = {
    name : 'addrole',
    run : async(client, message, args , Discord) => {
        const Embed1 = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('GIVEN')
      .setDescription(`**വാഴക്ക് ROLE നൽകി**`)
          .setFooter('THARAVAD NETWORK')

        const Embed2 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ, നിങ്ങൾക്ക് PERMISSION ILLA`')
      .setFooter('THARAVAD NETWORK')

        const Embed3 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`METION A വാഴ TO GIVE ROLE`')
      .setFooter('THARAVAD NETWORK')

        const Embed4 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ MENTION ONE ROLE`')
      .setFooter('THARAVAD NETWORK')
       
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(Embed2)
        
        const target = message.mentions.members.first() 
      
        if(!target) return message.channel.send(Embed3)
      
        const role = message.mentions.roles.first() 
        if(!role) return message.channel.send(Embed4) 
      
        await target.roles.add(role) 
        message.channel.send(Embed1)
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
