const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content == 'おはよう！リモ！') { //反応するメッセージ(完全一致)     

            await message.channel.send('おはようございます！');//送信するメッセージ
            
         }
	},
};