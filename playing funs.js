

let currentSpeed = 60
let interval = 1000
let loop;


let sound = document.getElementById("myAudio");


function checkTick() {

    if (current == 1) {
        playTick()
    }
    else {
        console.log('mute')
    }
    ind = (ind + 1) % 4  // 4%4 = 0 
    current = bar[ind]
}

function playTick() {

    sound.load()
    sound.play();
    console.log('tick')
}

function playAudio() {
    checkTick()
    setTimeout(function () { sound.pause() }, interval - 30)
}

function setSpeed() {
    currentSpeed = document.getElementById('quantity').valueAsNumber
    valid = valSpeed(currentSpeed)
    console.log('currentSpeed', currentSpeed)
    if(valid){
        document.getElementById('speed').innerHTML = currentSpeed
    }
}

function calculateInterval() {
    interval = 1000 / (currentSpeed / 60)
}

function playLoop() {
    clearInterval(loop)
    loop = setInterval(function () { playAudio() }, interval)
}

function restoreFirst() {
    current = bar[0]
    ind = 0
}

function start() {
    restoreFirst()
    setSpeed()
    calculateInterval()
    playLoop()
}


function stop() {
    restoreFirst()
    clearInterval(loop);
}


















