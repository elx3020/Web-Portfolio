// html nodes querySelector

const navbar = document.querySelector("#nav-bar");
const horizontalScrollSections = document.querySelectorAll(".section-format");
const xScrollableSection = document.querySelectorAll(".xscroll");
const xscrollcontainer = document.querySelectorAll(".xscroll-container");
// testing

// functions

function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const moveY = (element, target) => {
  if (window.scrollY > target) {
    element.style.transform = "translateY(-100%)";
  } else if (window.scrollY < target) {
    element.style.transform = "translateY(0)";
  }
  return;
};

const checkSlide = (e) => {
  // console.log(e);
  moveY(navbar, 200);

  horizontalScrollSections.forEach((horizontalSection) => {
    // end point of viewer
    const slideInAt = window.scrollY + window.innerHeight;
    // botton of the image
    const sectionPorcent =
      horizontalSection.offsetTop + horizontalSection.offsetHeight * 0.2;
    const isTimeToMove = slideInAt > sectionPorcent;
    if (isTimeToMove) {
      horizontalSection.classList.add("section-mover");
    } else {
      // horizontalSection.classList.remove("section-mover");
    }
  });
};

// const horizontalScroll = ({ target }) => {
//   const parentScroll = target.parentNode;
//   const children = parentScroll.childNodes;
//   let moveChild;

//   children.forEach((child) => {
//     if ("classList" in child) {
//       if (child.classList.contains("xscroll")) {
//         moveChild = child;

//         test = moveChild;
//       }
//     }
//   });
//   if (target.classList.contains("btn-left") && moveChild.shift != 0) {
//     moveChild.shift += moveChild.clientWidth / 7;
//   } else if (
//     target.classList.contains("btn-right") &&
//     Math.abs(moveChild.shift) + window.innerWidth <
//       moveChild.clientWidth - moveChild.clientWidth / 7
//   ) {
//     moveChild.shift -= moveChild.clientWidth / 7;
//   }
//   moveChild.style.transform = `translateX(${moveChild.shift}px)`;
// };

const setXscrollSize = (xsection) => {
  const widthOfChild = 485;
  const offset = 10;
  const xsectionWidth = xsection.childElementCount * (widthOfChild + offset);
  // console.log(xsectionWidth);
  xsection.style.width = `${xsectionWidth}px`;
  if (xsectionWidth > window.innerWidth) {
    xsection.parentElement.style.overflowX = "scroll";
  } else {
    xsection.parentElement.style.overflowX = "hidden";
  }
};

const resizediv = () => {
  xScrollableSection.forEach((xsection) => {
    xsection.shift = 0;
    setXscrollSize(xsection);
  });
};

resizediv();

// const checkClick = (e) => {
//   horizontalScroll(e);
//   // console.log(e);
// };

// event listeners

window.addEventListener("scroll", debounce(checkSlide, 2, true));

window.addEventListener("resize", resizediv);

// for each
// scrollButtons.forEach((button) => {
//   button.addEventListener("click", checkClick);
// });
