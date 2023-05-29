//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'crew',
    description: "Use To Know about TVD CREW",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('TVD CREW')
      .setDescription('`~` **+** `USERNAME`')
      .setFooter('THARAVAD NETWORK')
      .addFields(
        {name: 'CREWMATES', value: '``` mallukid , lexmwon , smooth , dinkan , koku , crogo , stormgirl , vicfic ```'},
        {name: 'Links', value: '[Website](https://tharavad.net) | [Discord](https://discord.gg/yzrfnMubNW)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
