//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'help',
    description: "To get bot commands",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('MINNAL BOT COMMANDS')
      .setFooter('CREDITS TO TEAM MINNAL')
      .addFields(
        {name: 'INFO', value: '``` help , ping , users , botinfo ```'},
        {name: 'MODRATION', value: '``` purge , kick , mute , unmute , addrole , removerole ```'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
