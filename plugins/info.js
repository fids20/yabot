let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️

*BOT ANIME OTAKU OFFICIAL*

_*Mohon maaf tidak menerima donasi*_

╠═〘 Thanks To 〙 ═
╠➥ Narutomo 
╠➥ MfarelS
╠➥ ST4RZ 
║>Dan kawan yang lain :)
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

