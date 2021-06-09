const secondHand = document.querySelector(".second");
const hand = document.querySelector(".hand");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    let secondsDegress = ((seconds/ 60) * 360) + 90;
    if(seconds == 0){
        secondsDegress += 360;
    }
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;
    
    


    const minutes = now.getMinutes();
    const minutesDegress = ((minutes/ 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegress}deg)`;


    const hours = now.getHours();
    const hoursDegress = ((hours/ 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegress}deg)`;


    console.log(seconds);
}

setInterval(setDate,1000);
