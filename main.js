const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const menuzoom = document.querySelector('.navbar_menu');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});

const clock = document.getElementById("clock");

function getClock(){
  const date = new Date()	// 현재 날짜 및 시간
  const year = String(date.getFullYear()).padStart(2,"0");
  const month = String(date.getMonth()).padStart(2,"0");
  const day = String(date.getDate()).padStart(2,"0");
  const hour = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  clock.innerText = `${year}/${month}/${day} ${WEEKDAY[date.getDay()]} ${hour}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

document.querySelectorAll('.button').forEach(button => button.innerHTML = 
  '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');