function digitalClock(){
var clock = document.getElementById('clock');
const time = new Date();
const hr= time.getHours();
const min = time.getMinutes();
const sec = time.getSeconds();
clock.innerText = `${hr}:${min}:${sec}`;
console.dir(clock);
}
setInterval(digitalClock, 1000); //call digitalClock fn every 1 sec
digitalClock();