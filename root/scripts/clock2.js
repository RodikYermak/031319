/*eslint-env browser*/

const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPos = (hr * 360/12) + ((min*6)/12);
    let minPos = (min * 6) + (sec*(6/60));
    let secPos = sec * 6; // 360/60

function clockGo(){
    secPos = secPos + 6;
    minPos = minPos;
    hrPos = hrPos;
    
    HOURHAND.style.transform = 'rotate(' + hrPos + 'deg)'; 
    MINUTEHAND.style.transform = 'rotate(' + minPos + 'deg)'; 
    SECONDHAND.style.transform = 'rotate(' + secPos + 'deg)'; 

}

var myInterval = setInterval(clockGo, 1000);
// this js works fine without the transition property on the hr, min, sec id's.
function curTime(){
    console.log(hr + ' ' + min + ' ' + sec);
}
var displayTime = setInterval(curTime, 1000);