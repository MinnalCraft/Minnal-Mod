//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'help',
    description: "To get bot commands",
    run(client, message, args , Discord){
    message.delete();
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('MINNAL BOT COMMANDS')
      .setDescription('_BY TEAM_ **MINNAL**')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')
      .addFields(
        {name: 'INFO', value: '``` help , ping , users , botinfo ```'},
        {name: 'MODRATION', value: '``` purge , kick , mute , unmute , addrole , removerole ```'},
        {name: 'Links', value: '[Website](https://minnalcraft.ml) | [Discord](https://dsc.gg/minnalcraft)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
