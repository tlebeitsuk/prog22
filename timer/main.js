const minutesText = document.querySelector("#minutes");
const secondsText = document.querySelector("#seconds");
const millisecondsText = document.querySelector("#milliseconds");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let minutes = 0;
let seconds = 55;
let milliseconds = 0;
let intervalId;

function timer() {
  milliseconds++;

  // Seconds
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }

  // Minutes
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  millisecondsText.innerText = milliseconds;
  secondsText.innerText = seconds;
  minutesText.innerText = minutes;
}

startButton.addEventListener("click", function () {
  intervalId = setInterval(timer, 10); // start timer (1000ms = 1s)
});

stopButton.addEventListener("click", function () {
  clearInterval(intervalId); // stop timer
});

resetButton.addEventListener("click", function () {
  clearInterval(intervalId); // stop timer
  millisecondsText.innerText = 0;
  secondsText.innerText = 0;
  minutesText.innerText = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
});
