const secondHand = document.querySelector(".second");
const hand = document.querySelector(".hand");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    let secondsDegress = ((seconds/ 60) * 360) + 90;
    if(seconds==0){
        secondHand.style.transitionDuration = '0s';
        minuteHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
       } else {
        secondHand.style.transitionDuration = '0.05s';
        minuteHand.style.transitionDuration = '0.05s';
        hourHand.style.transitionDuration = '0.05s';
        }
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;
    
    


    const minutes = now.getMinutes();
    const minutesDegress = ((minutes/ 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegress}deg)`;


    const hours = now.getHours();
    const hoursDegress = ((hours/ 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegress}deg)`;


    console.log(seconds);
}

setInterval(setDate,1000);
