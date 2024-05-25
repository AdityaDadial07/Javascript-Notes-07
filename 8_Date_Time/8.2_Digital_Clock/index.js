//Digital clock

let hourHand=document.querySelector('.hour');
let minHand=document.querySelector('.minute');
let secHand=document.querySelector('.second');

let ticking = function(){
    let currentDate=new Date();

    let gethour=currentDate.getHours();
    let getmin=currentDate.getMinutes();
    let getsec=currentDate.getSeconds();
    hourHand.textContent=gethour;
    minHand.textContent=getmin;
    secHand.textContent=getsec;

}
setInterval(ticking,1000);