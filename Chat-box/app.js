
// get html elements

const list = document.getElementById('messageList');
const button = document.getElementById('submitButton');
const inputText = document.getElementById('textInput');



function getTime(){
    let currentTime = new Date();
    let text = currentTime.getHours() + ':' + currentTime.getMinutes();
    return text;

}



function sendMessage(){

    if(inputText.value != ''){
    var node = document.createElement("LI");
    // var textnode = document.createTextNode(inputText.value);         
    // node.appendChild(textnode);
    const timeText = getTime();
    node.innerHTML = `<div class="message-content"><p>${inputText.value}</p> <div class="time"><i class="fas fa-clock"></i><p> 
    ${timeText}</p></div></div>`;  
    list.appendChild(node);
    inputText.value = '';
    alternateUser();


    }else{
        alert("No message to send");
    }

    

}


function alternateUser(){
    
    for(let i = 0;i < list.childElementCount; i++){
        if(i % 2 == 0){
            list.children[i].style.background = 'var(--second-color)';
        }else{
            list.children[i].style.background = 'var(--four-color)';
            list.children[i].style.left= "100%"
            list.children[i].style.transform = 'translateX(-100%)';
        }
    }
     
}




button.addEventListener('click',sendMessage);
window.addEventListener('keydown',(e)=>{if(e.key == "Enter"){sendMessage();};});
