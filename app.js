
// html nodes querySelector

const navbar = document.querySelector('#nav-bar');
const horizontalScrollSections = document.querySelectorAll('.section-format');
const scrollButtons= document.querySelectorAll('.btnscrollX');
const xScrollableSection = document.querySelectorAll('.xscroll');

// testing
let test;

// functions

function debounce(func, wait, immediate) {
    var timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
          
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
      
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };


const moveY = (element,target) =>{
    if(window.scrollY > target){
        element.style.transform = "translateY(-100%)";
    }else if(window.scrollY < target){
        element.style.transform = "translateY(0)"
    }
    return;
}


const checkSlide = (e) =>{
    // console.log(e);
    moveY(navbar,200);


    horizontalScrollSections.forEach(horizontalSection=>{

        // end point of viewer
        const slideInAt = (window.scrollY + window.innerHeight)
        // botton of the image
        const sectionPorcent = horizontalSection.offsetTop + (horizontalSection.offsetHeight * 0.2);
        const isTimeToMove = slideInAt > sectionPorcent;
        if(isTimeToMove){
            horizontalSection.classList.add("section-mover");
        }else{
            // horizontalSection.classList.remove("section-mover");
        }
    });



}


const horizontalScroll = ({target},distance) =>{

    const parentScroll = target.parentNode;
    const children = parentScroll.childNodes;
    let moveChild;

    children.forEach(child =>{
        if('classList' in child){
            if(child.classList.contains('xscroll')){
                moveChild = child;
                 
                test = moveChild;
            }

        }
    })
    if(target.classList.contains('btn-left') && moveChild.shift != 0){
        moveChild.shift += distance;
        
         
    }else if(target.classList.contains('btn-right') && (Math.abs(moveChild.shift) + window.innerWidth) < moveChild.clientWidth){
        moveChild.shift -= distance;
       
}
    moveChild.style.transform = `translateX(${moveChild.shift}px)`;
   
}

const checkClick = (e)=>{
  
    horizontalScroll(e,1000);
    // console.log(e);


}



// event listeners


window.addEventListener('scroll',debounce(checkSlide, 5, true));



// for each
scrollButtons.forEach(button => {
    button.addEventListener('click',checkClick);
    
});


const setXscrollSize = (xsection) =>{
    const widthOfChild = 540;
    const xsectionWidth = (xsection.childElementCount / 2) * widthOfChild;
    // console.log(xsectionWidth);
    if(xsectionWidth > window.innerWidth){
        xsection.style.width = `${xsectionWidth+400}px`;
    }else{

        xsection.style.width = `${((xsection.childElementCount) * widthOfChild) + 200}px`
    }
    

}


xScrollableSection.forEach(xsection =>{
    xsection.shift = 0;
    setXscrollSize(xsection);
})




