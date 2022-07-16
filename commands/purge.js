//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name : 'purge',
    description: "Use To Clear Msg",
    aliases : ['purge'],
    run : async(client, message, args , Discord) => {
    message.delete();
        const Embed1 = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('PURGED')
      .setDescription('**U വാഴ ' + args[0]  + ' MSG ഇല്ലാതാക്കി**')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')

        const Embed2 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ ഒരു NUMBER GIVE 1 - 100`')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')

        const Embed3 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`BLEDI വാഴ നമ്പറുകൾ ഉപയോഗിക്`')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')

        const Embed4 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`BLEDI വാഴ 100 MSG മാത്രമേ CLAER ചെയ്യാൻ കഴിയൂ `')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')
      
        const Embed5 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('ERROR')
      .setDescription('`U വാഴ ഒരു NUMBER GIVE`')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')
      
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
