const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content.includes('リモ') && message.content.includes('ありがとう')) { //反応するメッセージ(完全一致)     

            await message.channel.send('どうしたしまして！！');//送信するメッセージ
            
         }
	},
};