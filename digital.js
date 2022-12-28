function co() {
  const h1 = document.getElementById('box2');
  const h2 = document.getElementById('box3');
  const a = new Date();
  
  const y = a.getFullYear();
  const w = a.getMonth()+1;
  const d = a.getDate();
  const h = a.getHours();
  const m = a.getMinutes();
  const s = a.getSeconds();
  
  let tt = `${y}년${w}월${d}일`;
  let nt = `${h}:${m}:${s}`;
  
  h1.innerText = tt;
  h2.innerText = nt;

}
//window.onload = function () {
  
  co();
  setInterval(co, 1000);
//}
let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const appendHour = document.getElementById("hour");
const buttonStart = document.getElementById("bt__start");
const buttonStop = document.getElementById("bt__stop");
const buttonReset = document.getElementById("bt__reset");
let intervalId;
 
buttonStart.onclick = function(){
  clearInterval(intervalId)
  intervalId = setInterval(operateTimer, 10)
}
 
buttonStop.onclick = function(){
  clearInterval(intervalId)
}
 
buttonReset.onclick = function(){
  clearInterval(intervalId)
  tenMillis = 0; seconds = 0; minutes = 0; hour = 0;
  appendTens.textContent = "00"
  appendSeconds.textContent = "00"
  appendMinutes.textContent = "00"
  appendHour.textContent = "00"
}
 
// 10ms 마다 시간에 대한 숫자가 증가한다!
function operateTimer(){
  tenMillis++;
  appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis
  if(tenMillis > 99){
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
    tenMillis = 0
    appendTens.textContent = "00"
  }
  if(seconds > 59){
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
    seconds = 0
    appendSeconds.textContent = "00"    
  }
  if(minutes > 59){
    appendHour.textContent = hour > 9 ? hour : '0' + hour
    minutes = 0;
    appendMinutes.textContent = "00"
  }
}