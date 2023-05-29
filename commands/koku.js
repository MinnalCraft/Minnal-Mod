//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'koku',
    description: "about koku",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@761418086954958848> THE VALO BOY')
      .setFooter('THARAVAD NETWORK')
      .addFields(
        {name: 'About', value: 'KOKACHI BEAST ALSO KNOWN AS മാക്കാച്ചി BEAST IN THARAVAD NETWORK'},
        {name: 'Hobby', value: 'KOKU LOVES TO PLAY VALORANT HE IS KNOW AS THE KAZTRO OF THARAVAD NETWORK'},
        {name: 'Real Name', value: 'Abhinav Santhosh'},
        {name: 'Relation', value: 'Single'},
        {name: 'FOLLOW ', value: '[Instagram](https://www.instagram.com/ig.kokachi_beast)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
