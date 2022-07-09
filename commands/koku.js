//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
module.exports = {
    name: 'koku',
    description: "about koku",
    run(client, message, args , Discord){
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('USER INFO')
      .setDescription('<@761418086954958848> THE മാക്കാച്ചി')
      .setFooter('MINNAL CRAFT OFFICIAL BOT')
      .addFields(
        {name: 'About', value: 'KOKACHI BEAST ALSO KNOWN AS മാക്കാച്ചി BEAST IN MINNAL CRAFT'},
        {name: 'Hobby', value: 'KOKU LOVES TO PLAY BGMI HE IS KNOW AS THE KAZTRO OF MINNAL CRAFT'},
        {name: 'Real Name', value: 'Abhinav Santhosh'},
        {name: 'Relation', value: 'Single'},
        {name: 'FOLLOW ', value: '[Instagtam](https://www.instagram.com/ig.kokachi_beast)'}
      )
      message.channel.send(Embed);
    }
}
//THIS BOT IS NOT A CLONE ITS 100% CODED BY TEAM MINNAL
