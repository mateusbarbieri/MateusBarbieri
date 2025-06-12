const startButton = document.querySelector("[data-start]");
const pauseButton = document.querySelector("[data-pause]");
const stopButton = document.querySelector("[data-stop]");
const timeElement = document.querySelector("[data-time]");
let seconds = 0,
    minutes = 0,
    hours = 0;
let interval;

const renderTime = (seconds, minutes, hours) => {
    const hoursValue = hours < 10 ? "0" + hours : hours;
    const minutesValue = minutes < 10 ? "0" + minutes : minutes;
    const secondsValue = seconds < 10 ? "0" + seconds : seconds;




    timeElement.innerHTML = hoursValue + ":" + ":" + minutesValue + ":" + secondsValue;
}

const startTime = () => {
    interval = setInterval(() => {
        seconds++;
        while( seconds === 60) {
            seconds =0;
            minutes++;
        }
        while(minutes === 60) {
            minutes = 0;
            hours++;
        }

        rederTime(seconds, minutes, hours);
    },1000);
};

startTime();