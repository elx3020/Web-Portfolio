

const keys = document.querySelectorAll('.key');

window.addEventListener('keydown',playWithKeys);
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
keys.forEach(key => key.addEventListener('click',playWithMouse));



function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName)
    this.classList.remove('keypressed');
    
}

function playWithMouse(){
    const data = this.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${data}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    this.classList.add("keypressed");
}

function playWithKeys(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("keypressed");

}



