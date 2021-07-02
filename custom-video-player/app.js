// get our elements

const player = document.querySelector('.videoplayer');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const panel = player.querySelector('.player_options');
const toggle = player.querySelector('.play_button');
const ranges = player.querySelectorAll('.player_slider');
const skipButtons = player.querySelectorAll('[data-skip]');

// Builf out functions

function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;


}

function skip(){
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
    
}

function handleRangeUpdate(){

    
    video[this.name] = this.value;
}

function handleKeyboad(){
    console.log(this);
}


function handleProgress(){
    const porcentage = (video.currentTime/video.duration) * 100;
    progressBar.style.width = `${porcentage}%`;
    
}


function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}



function playerAnimations(){
    
}



// animations



player.addEventListener('mouseenter',playerAnimations);




// control buttons



video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click',togglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip));

ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));

ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));


let mouseDown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown',() => mouseDown = true);
progress.addEventListener('mouseup',() => mouseDown = false);

// window.addEventListener('keydown',handleKeyboad);
