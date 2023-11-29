

let interval = 1000
let loop;
let sound = document.getElementById("myAudio");
let lenBar;




function playAudio() {

    let sound =selectSound()

    if (current == 1) {
        playSound(sound);  
        document.getElementById(ind).className = 'tick-off tick-played'  
    }
      
}

function playRandom(){

    let n = Math.floor(Math.random() * 2)
    if (n ==1){
        new Audio('tick.mp3').play();  
    }
    
}

function toNext() {

    ind = (ind + 1) % lenBar  
    current = bar[ind]
    console.log('Next')
}

// equals intervals
function playLoop() {
    
    loop = setInterval(function () { 
        document.getElementById(ind).className = 'tick-off tick-current'
        
        //playRandom()
        playAudio()
        let previous = ind
        toNext()
        
        setTimeout(function(){document.getElementById(previous).className = 'tick-off'},interval)
        
        
    
    }, interval)
}



function calculateInterval() {
    interval = 1000 / (currentSpeed / 60)
}

function setSubd (){
    let subd = document.getElementById('sdv').value
    console.log('subdivisions',subd)
    interval = interval / (subd/4)

    

    return subd
}


function restoreFirst() {
    clearInterval(loop)
    restoreButtons()
    current = bar[0]
    ind = 0
}

function restoreButtons(){
    let colored = document.getElementsByClassName('tick-played tick-off')

    for( i=0; i<colored.length; i++){
        
        colored[i].className = 'tick-off'
    }

}

function start() {
    
    initContext()
    loadAllSounds()
    restoreFirst()
    
    if (CheckSpeed() == false){
        return
    }
    
    calculateInterval()
    original_bar = [1,1,1,1]
    
    let subd = setSubd()
    displaySubds(subd)
    lenBar = bar.length
    playLoop()

    }

   

function stop() {
    restoreFirst()
    clearInterval(loop);
}





