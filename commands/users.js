//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'ping',
    description: "Use To Know Bot Ping",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USERS')
      .setDescription('`~` **+** `USERNAME`')
      .setFooter('THARAVAD NETWORK')
      .addFields(
        {name: 'USERS', value: '``` mallukid , lexmwon , smooth , dinkan , koku , crogo , stormgirl , vicfic ```'},
        {name: 'Links', value: '[Website](https://tharavad.net) | [Discord](https://discord.gg/yzrfnMubNW)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
