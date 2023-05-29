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
        {name: 'INFO', value: '``` help - Help Menu Of Bot \n ping - Current Ping Of NEELAKANDAN \n users - About TVD Crew \n botinfo - Info About NEELAKANDAN```'},
        {name: 'MODRATION', value: '``` purge - To Clear The Messages Limit(1-100) \n kick - Kick A Member \n mute - Mute A Member \n unmute - UnMute A Member \n lock - Lock A Channel \n unlock - Unlock A Channel \n addrole - Add A Role TO Member \n removerole - Remove A Role From Member ```'},
        {name: 'Links', value: '[Website](https://tharavad.net) | [Discord](https://discord.gg/yzrfnMubNW)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
