const hxz = require("hxz-api")
let handler = async(m,{text, conn}) => {

let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.sendFile(m.chat, nowm, null, 'Lagi Dikasih Bilang Apa ??', m)
}
handler.command = ['tiktok']
module.exports = handler
