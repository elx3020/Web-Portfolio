// get our elements

const player = document.querySelector('.videoplayer');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const panel = player.querySelector('.player_options');
const toggle = player.querySelector('.play_button');
const ranges = player.querySelectorAll('.player_slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const volumen = document.querySelector('.volume');

// Built out functions

function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(){
    const icon = this.paused ? ' ►' : '❚❚';
    toggle.textContent = icon;


}

function skip(){
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
    
}

function handleRangeUpdate(){

    video[this.name] = this.value;
    
    
}

function handleKeyboad(e){
    console.log(e);
}


function handleProgress(){
    const porcentage = (video.currentTime/video.duration) * 100;
    progressBar.style.width = `${porcentage}%`;
    
}


function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function activateSlider(){   
    ranges[0].style.width = '150px';
    ranges[0].style.opacity = 100;
}

function deactivateSlider(){
    ranges[0].style.width = '0px';
    ranges[0].style.opacity = 0;
}


function mute(){
    video.muted = !video.muted;
    if(video.muted) {
        video[this.className] = 0;
        ranges[0].value = video[this.className];
    }else{
        video[this.className] = 1;
        ranges[0].value = video[this.className];
    }
}




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

volumen.addEventListener('mouseenter',activateSlider);
volumen.addEventListener('mouseleave',deactivateSlider);
volumen.getElementsByTagName('i')[0].addEventListener('click',mute);


window.addEventListener('keydown',handleKeyboad);
