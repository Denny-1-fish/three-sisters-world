function aiReply(msg){

if(msg.includes("你好")){
return {name:"小雪",text:"你好！！"}
}

if(msg.includes("遊戲")){
return {name:"凜夜",text:"你喜歡玩什麼遊戲？"}
}

if(msg.includes("心情")){
return {name:"冰璃",text:"如果心情不好可以聊聊。"}
}

let r=Math.random()

if(r<0.33){
return {name:"小雪",text:"欸？真的嗎？"}
}

if(r<0.66){
return {name:"凜夜",text:"嗯，我在聽。"}
}

return {name:"冰璃",text:"慢慢說。"}

}
