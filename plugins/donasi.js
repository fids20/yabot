let handler = async m => m.reply(`
╭─「 NOTHING 」
│ • Tidak 
│ • Ada 
│ • Donasi 
╰────
╭─「 AOOBOT 」
│ > BOT ANIME OTAKU OFFICIAL 
╰────

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
