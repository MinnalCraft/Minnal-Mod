//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
const { Message } = require('discord.js')

module.exports=  {
    name : 'unmute', 
 
    run : async(client, message, args, Discord) => {

        const Embed1 = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('UNMUTED')
      .setDescription('**U വാഴ, നിങ്ങൾ UNMUTED ആ വാഴ SUCCESSFULLY**')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')

        const Embed2 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ, നിങ്ങൾക്ക് PERMISSION ILLA`')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')

        const Embed3 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ AGANE ORU വാഴ ILLA`')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')
      
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(Embed2)

        if(!Member) return message.channel.send(Embed3)

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(Embed1)
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
