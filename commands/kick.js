//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'kick',
    description: "Use To Kick A Member",
    run(client, message, args , Discord){
      const Embed1 = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('KICKED')
      .setDescription('**USER HAS BEEN KICKED**')
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed2 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`CANT KICK/FIND USER`')
      .setFooter('CREDITS TO TEAM MINNAL')
      
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(Embed1);
        }else{
            message.channel.send(Embed2);
        }
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
