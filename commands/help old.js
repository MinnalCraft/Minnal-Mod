//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'help',
    description: "To get bot commands",
    run(client, message, args , Discord){
    message.delete();
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('THARAVAD NETWORK')
      .setDescription('_BY TEAM_ **TVD/MINNAL**')
      .setFooter('THARAVAD NETWORK')
      .addFields(
        {name: 'INFO', value: '``` help , ping , users , botinfo ```'},
        {name: 'MODRATION', value: '``` purge , kick , mute , unmute , lock , unlock , addrole , removerole ```'},
        {name: 'Links', value: '[Website](https://tharavad.net) | [Discord](https://discord.gg/yzrfnMubNW)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
