const panels = document.querySelectorAll(".panel");


function open() {
    this.classList.add('open');
    this.classList.add('panel-active');
}

function close() {
    this.classList.remove('open');
    this.classList.remove('panel-active');
}


panels.forEach(panel => panel.addEventListener('mouseenter',open));
panels.forEach(panel => panel.addEventListener('mouseleave',close));



