let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*الموضوع:*\n${text ? `${text}\n` : ''}\n*أحد الأدمينز قام بالإشارة إليك لا أعلم ماذا يريد منك إذهب إليه في الخاص وناقش معه لماذا قام بالإشارة اليك فالبوت وصاحبه لا دخل لهم بهذا ههههه*\n\ninstagram.com/saad_w0 \n\n\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\n⛾「 *تمت الإشارة للكل* 」⛾', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
