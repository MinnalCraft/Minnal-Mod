//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'mute',
  
    run : async(client, message, args, Discord) => {
        const Embed1 = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('MUTED')
      .setDescription('**U വാഴ, നിങ്ങൾ MUTED ആ വാഴ SUCCESSFULLY**')
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed2 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ, നിങ്ങൾക്ക് PERMISSION ILLA`')
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed3 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`u വാഴ CREATE A MUTE ROLE`')
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed4 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ MUTE ROLE READY`')
      .setFooter('CREDITS TO TEAM MINNAL')
      
        const Embed5 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ AGANE ORU വാഴ ILLA`')
      .setFooter('CREDITS TO TEAM MINNAL')
      
        const Embed6 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ , ആ വാഴ IS ALREADY MUTED  `')
      .setFooter('CREDITS TO TEAM MINNAL')
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(Embed2)
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.send(Embed5)
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send(Embed3)

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send(Embed4)
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(Embed6)
        await Member.roles.add(role2)
        message.channel.send(Embed1)
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
