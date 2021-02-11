let { WAConnection: _WAConnection, MessageType } = require('@adiwajshing/baileys')


handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^jadibot$/i
handler.owner = true 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

