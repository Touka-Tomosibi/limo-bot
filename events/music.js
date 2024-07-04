const { Events } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource,  AudioPlayerStatus,  StreamType,  entersState, VoiceConnectionStatus }  = require('@discordjs/voice');
const ytdl = require('ytdl-core');
let url = ['https://youtu.be/J09DMvwx7LY?si=PJ_Z1ir39R6-4q-W', 'https://youtu.be/t4A59n8ZQf0?si=qNawVPWLrh85WPIP', 'https://youtu.be/fEmFUpLMxRI?si=6ti-rAbpzebFacO6', 'https://youtu.be/wlJtJ_-dYVs?si=rFQ60mE50HWcWXUo', 'https://youtu.be/NYvbzhOi-9s?si=Oj71AZWZvfbnOA-v', 'https://youtu.be/FaXkZxl2mLc?si=S8rcLpMUIxOeDtYr', 'https://youtu.be/l3iFMeVYA_U?si=zDtwv4ZWD_pElvka'];
let sn = ['夢の蕾-Piano Var', '夢の蕾-THREE · 花守ゆみり · 種田梨沙 · 佐倉綾音', 'もっとメモリー  リモ starring 花守ゆみり', 'オシエテ  デュアル · ドロシー · 種田梨沙 · 佐倉綾音', '夢の蕾 (instrumental)', 'もっとメモリー (instrumental)','オシエテ (instrumental)' ];

var stream;
var resource;
var connection;
var player;



module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content == 'リモ歌って') {    
          //&& message.content.incldes('歌って') 
          console.log('反応');
          
          const channel = message.member.voice.channel;
          if (!channel) return await message.channel.send('ボイスチャンネルに入ってね！');
        

          await message.channel.send(`それじゃあ歌うね`);
    
    
		    connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

    
        for (;;) { 
          
        stream = ytdl(ytdl.getURLVideoID(url[0]), {
           filter: format => format.audioCodec === 'opus' && format.container === 'webm',
           quality: 'highest', 
           highWaterMark: 32 * 1024 * 1024,
      　});
                 
       resource = createAudioResource(stream, {
            inputType: StreamType.WebmOpus,
            inlineVolume: true,
       });
       resource.volume.setVolume(0.1);
    
       message.client.channels.cache.get('1258394431980179476').send(`**${sn[0]}**を歌うよ！`);
      
    　　player = createAudioPlayer();
     
       player.play(resource);
       connection.subscribe(player);
    
    　　await entersState(player,AudioPlayerStatus.Playing, 10 * 1000);
       await entersState(player,AudioPlayerStatus.Idle, 24 * 60 * 60 * 1000);
       url.push(url[0]);
       url.shift();
       sn.push(sn[0]);
       sn.shift();
         }
          
          
   }
  },
};