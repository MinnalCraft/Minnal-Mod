//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name : 'purge',
    description: "Use To Clear Msg",
    aliases : ['purge'],
    run : async(client, message, args , Discord) => {
        const Embed1 = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('PURGED')
      .setDescription('**DELETED ' + args[0]  + ' MSG**')
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed2 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`PROVIDE A NUMBER BETWEEN 1 - 100`')
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed3 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`PLEASE USE NUMBERS`')
      .setFooter('CREDITS TO TEAM MINNAL')

        const Embed4 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U CAN ONLY CLEAR UP TO 100 MSG`')
      .setFooter('CREDITS TO TEAM MINNAL')
      
        const Embed5 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U MUST PROVIDE ALEAST 1 NUMBER`')
      .setFooter('CREDITS TO TEAM MINNAL')
      
      if(!args[0]) return message.reply(Embed2);
      if(isNaN(args[0])) return message.reply(Embed3);

      if(args[0] > 100) return message.reply(Embed4);
      if(args[0 < 1]) return message.reply(Embed5)

      await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
         message.channel.bulkDelete(messages);
        message.reply(Embed1)
      });
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
