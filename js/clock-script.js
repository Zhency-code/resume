let hours = document.querySelector('.hour-hand');
let minutes = document.querySelector('.min-hand');
let seconds = document.querySelector('.sec-hand');

function displayTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRotation = 30 * h + m / 2;
    let mRotation = 6 * m;
    let sRotation = 6 * s;

    hours.style.transform = `rotate(${hRotation}deg)`;
    minutes.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRotation}deg)`;
}

displayTime();
setInterval(displayTime, 1000);