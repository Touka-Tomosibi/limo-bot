const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
  
		.setName('help') //コマンド名
		.setDescription('helpを表示します'), //コマンド説明
    
	async execute(interaction) {
  
		await interaction.reply('HELPです'); //送信される内容
    
	},
};