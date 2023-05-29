//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'syntax',
    description: "about syntax",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@772114787613802547> KILLADI 2.O')
      .setFooter('THARAVAD NETWORK')
      .addFields(
        {name: 'About', value: 'SYNTAX IS A DEVELOPER WHO KNOWS MOST OF THE LANGUAGES'},
        {name: 'Hobby', value: 'SYNTAX LOVES TO CODE , DEVELOP SERVRES AND PANELS AND ALSO LOVES TO PLAY MINECRAFT'},
        {name: 'Real Name', value: 'UNDEFINED'},
        {name: 'Relation', value: 'Single'},
        {name: 'FOLLOW ', value: '[Website](https://www.syntaxerror.ga)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
