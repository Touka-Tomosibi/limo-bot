const { Events } = require('discord.js');
const { joinVoiceChannel }  = require('@discordjs/voice');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content == 'リモお疲れ様') { //反応するメッセージ(完全一致)     

          const channel = message.member.voice.channel; 
          const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
          });

          connection.destroy();
  
          await message.channel.send('またね！')
            
         }
	},
};