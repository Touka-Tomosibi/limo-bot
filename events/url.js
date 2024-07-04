const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content == 'ガラスの花と壊す世界が見たい') { //反応するメッセージ(完全一致)     

          　let user = message.author;
            user.send('https://watch.amazon.co.jp/detail?gti=amzn1.dv.gti.ab7f6e35-ab6d-40b3-b59b-d72f9f19f28d&territory=JP&ref_=share_ios_movie&r=web \n https://animestore.docomo.ne.jp/animestore/ci_pc?workId=21459 \n https://video-share.unext.jp/video/title/SID0022037?utm_source=copy&utm_medium=social&utm_campaign=nonad-sns \n https://tv.dmm.com/vod/detail/?season=4qyh9yptd71r6jpqjwz2byqvm')
            await message.channel.send('DMに送ったよ！');//送信するメッセージ
            
         }
	},
};