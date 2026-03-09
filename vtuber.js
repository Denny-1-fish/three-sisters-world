function send(){

let msg=document.getElementById("msg").value

addChat("你",msg)

let reply=aiReply(msg)

setTimeout(()=>{

addChat(reply.name,reply.text)

talk(reply.name)

speak(reply.text)

},600)

}

function addChat(name,text){

let chat=document.getElementById("chat")

chat.innerHTML+="<br>"+name+"："+text

chat.scrollTop=chat.scrollHeight

}

function talk(name){

let chars=document.querySelectorAll(".char img")

chars.forEach(c=>c.classList.remove("talk"))

if(name=="凜夜")chars[0].classList.add("talk")
if(name=="小雪")chars[1].classList.add("talk")
if(name=="冰璃")chars[2].classList.add("talk")

}
