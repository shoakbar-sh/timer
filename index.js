const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const mmsecElement = document.querySelector(".mmsec");

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');

start.addEventListener('click', () => {
   clearInterval(interval)
   interval = setInterval(startTimer, 10)
})

pause.addEventListener('click', () => {
   clearInterval(interval)
})

stop.addEventListener('click', () => {
   clearInterval(interval)
   clearAll() 
})

let hour = 00,
   minute = 00,
   second = 00,
   mmsec = 00,
   interval;

function startTimer() {
   mmsec++

   if (mmsec < 9) {
      mmsecElement.innerText = "0" + mmsec
   }
   if (mmsec > 9) {
      mmsecElement.innerText = mmsec
   }
   if (mmsec > 99) {
      second++
      secondElement.innerText = "0" + second
      mmsec = 0,
         mmsecElement.innerText = "0" + mmsec
   }


   if (second < 9) {
      secondElement.innerText = "0" + second
   }
   if (second > 9) {
      secondElement.innerText = second
   }
   if (second > 59) {
      minute++
      minuteElement.innerText = "0" + minute
      second = 0,
         secondElement.innerText = "0" + second
   }


   if (minute < 9) {
      minuteElement.innerText = "0" + minute
   }
   if (minute > 9) {
      minuteElement.innerText = minute
   }
   if (minute > 59) {
      hour++
      hourElement.innerText = "0" + hour
      minute = 0,
         minuteElement.innerText = "0" + minute
   }


   if (hour < 9) {
      hourElement.innerText = "0" + hour
   }
   if (hour > 9) {
      hourElement.innerText = hour
   }
   if (hour > 59) {
      hour++
      hourElement.innerText = "0" + hour
      hour = 0,
         hourElement.innerText = "0" + hour
   }
}

function clearAll() {
   hour = 00
   minute = 00
   second = 00
   mmsec = 00

   hourElement.textContent = "00"
   minuteElement.textContent = "00"
   secondElement.textContent = "00"
   mmsecElement.textContent = "00"
}