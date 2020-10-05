module.exports = {
name: 'admin',
description: "checks for admin permissions",
execute(message, args){

if(message.member.permissions.has("ADMINISTRATOR")){

message.channel.send('you have the administrator permission.')
}else message.channel.send('you do not have the administrator permission')
}
}