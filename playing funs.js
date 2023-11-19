

let currentSpeed = 60
let interval = 1000
let loop;
let subdint;
let sound = document.getElementById("myAudio");
let pauset;

let tick1 = 'tick.mp3'



function playAudio() {
    if (current == 1) {
        new Audio('tick.mp3').play();
    }
    toNext()
}

function toNext() {

    ind = (ind + 1) % bar.length  // 4%4 = 0 
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





/* // Create a new Date object
var currentDate = new Date();

// Get the current time
var currentTime = currentDate.toLocaleTimeString();

// Display the current time
console.log("Current time: " + currentTime);
 */




/* let t1 = new Date();
toNext()
let t2 = new Date();

let diff = t2 -t1


console.log(diff) */