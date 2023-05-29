//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'lexcrafter',
    description: "about lexcrafter",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@896972697081348116> THE KILLADI')
      .setFooter('THARAVAD NETWORK')
      .addFields(
        {name: 'About', value: 'LEX CRAFTER IS THE GREATEST KILLADI IN THARAVAD NETWORK'},
        {name: 'Hobby', value: 'LEX CRAFTER LOVES TO PLAY BEDWARS & BGMI LOVES TO WATCH ANIME AND ALSO WILL BE THERE ON VC EVERYTIME'},
        {name: 'Real Name', value: 'UNDEFINED'},
        {name: 'Relation', value: 'Mingle'},
        {name: 'FOLLOW ', value: '[Instagram](https://www.instagram.com/lex_crafter)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
