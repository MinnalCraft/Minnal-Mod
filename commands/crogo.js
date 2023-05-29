//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'crogo',
    description: "about crogo",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@930411526026838057> FROM DUBAI')
      .setFooter('THARAVAD NETWORK')
      .addFields(
        {name: 'About', value: 'CROGO IS THE BEST BEDWARS PLAYER ON THARAVAD NETWORK FROM DUBAI'},
        {name: 'Hobby', value: 'CROGO LOVES TO PLAY BEDWARS MOST AND ALSO GET LESS PING ON DUBAI'},
        {name: 'Real Name', value: 'UNDEFINED'},
        {name: 'Relation', value: 'Single'},
        {name: 'FOLLOW ', value: '[Youtube](https://www.youtube.com/channel/UCRpy2AWobtpvSAxrfIAaQkw)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
