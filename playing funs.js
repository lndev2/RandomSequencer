

let currentSpeed = 60
let interval = 1000
let loop;
let subdint;
let sound = document.getElementById("myAudio");
let pauset;

function checkTick() {

    if (current == 1) {
        playTick()
    }
    else {
        console.log('mute')
    }
    ind = (ind + 1) % bar.length  // 4%4 = 0 
    current = bar[ind]
}

function playTick() {

    sound.load()
    sound.play();
    //console.log('tick')
}

function playAudio() {
    checkTick()
    /* sound.play() */
    setTimeout(function () { sound.pause() }, pauset)
}

function pauseTiming(){

    pauset = interval - 30
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
    pauseTiming()
    setSubd()
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




/* function playprova(){

    
    sound.play()
    setTimeout(function () { sound.pause() }, 120)
    

}


setInterval(function () { playprova() }, 125)

 */





