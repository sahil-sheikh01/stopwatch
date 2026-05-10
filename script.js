let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let time = document.getElementById("time");
let timer = null;

function stopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours
    let m = minutes
    let s = seconds
    let ms = milliseconds

    if (hours < 10) {
        h = "0" + hours;
    }
    if (minutes < 10) {
        m = "0" + minutes;
    }
    if (seconds < 10) {
        s = "0" + seconds;
    }
    if (milliseconds < 10) {
        ms = "0" + milliseconds;
    }

    time.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function start() {
    if (timer === null) {
        timer = setInterval(stopwatch, 10);
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    time.innerHTML = "00:00:00:00";
}