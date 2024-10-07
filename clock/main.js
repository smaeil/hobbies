function digitalClock () {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').innerHTML = hours ;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

function analogClock () {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const miliSeconds = now.getMilliseconds();
    const exactSecond = (miliSeconds * 0.001) + seconds;

    document.getElementById('second-hand').style.transform = 'rotate(' + (exactSecond * 6) + 'deg)';
    document.getElementById('minute-hand').style.transform = 'rotate(' + (minutes * 6) + 'deg)';
    document.getElementById('hour-hand').style.transform = 'rotate(' + (hours * 30) + 'deg)';
}

setInterval(analogClock, 50);

setInterval(digitalClock, 1000);




