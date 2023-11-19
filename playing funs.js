

let currentSpeed = 60
let interval = 1000
let loop;
let subdint;
let sound = document.getElementById("myAudio");
let pauset;
let lenBar;
let tick1 = 'tick.mp3'



function playAudio() {
    if (current == 1) {
        new Audio('tick.mp3').play();
    }
    toNext()
}

function toNext() {

    ind = (ind + 1) % lenBar  // 4%4 = 0 
    current = bar[ind]

    console.log('Next')
}


function setSpeed() {
    currentSpeed = document.getElementById('quantity').valueAsNumber

    if (!currentSpeed){
        currentSpeed = document.getElementById('speed').textContent
    }else{

        valid = valSpeed(currentSpeed)
        if(valid){
            document.getElementById('speed').innerHTML = currentSpeed
        }
    }
    
    console.log('currentSpeed', currentSpeed)
    
}

function calculateInterval() {
    interval = 1000 / (currentSpeed / 60)
}

// equals intervals
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
    setSubd()
    lenBar = bar.length
    playLoop()
}

function stop() {
    restoreFirst()
    clearInterval(loop);
}

function setSubd (){
    let subd = document.getElementById('sdv').value
    console.log('subdivisions',subd)
    interval = interval / (subd/4)

}




