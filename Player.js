

let interval = 1000
let loop
let beatIndex = 0
let speed

function loadPlayer(){

    initContext()
    loadAllSounds()
    restoreFirst()
    
}


function restoreFirst() {
    clearInterval(loop)
    beatIndex = 0
    
}


function calculateInterval() {
    interval = 1000 / (currentSpeed / 60)
    interval = interval / (subdivisions/4)
}



function playSoundline(currentSoundLine) {

    

    if (currentSoundLine) {

        //select buffer
        let bufferToPlay = buffers[sounds.indexOf(currentSoundLine.sound)]

        playSound(bufferToPlay);  
        //document.getElementById(bufferToPlay.id).className = 'tick-off tick-played'  
    }
      
}



function playSelected(beatIndex){

    for(let j=0; j<patternList.length; j++){
        let currentSoundLine = patternList[j].rythm[beatIndex]
        //console.log(currentSoundLine)
        currentButtonId = currentSoundLine.id
         
        playSoundline(currentSoundLine)
    }
 
    
}


function toNext() {
    beatIndex = (beatIndex + 1) % nOfBeats  
    console.log('Next')
}



function playLoop() {
    
    loop = setInterval(function () { 
        
        playSelected(beatIndex)
        colorCurrentButtons(beatIndex,'tick-off tick-played')
        
        //playRandom()
        
        let previous = beatIndex
        toNext()
        
        setTimeout(function(){colorCurrentButtons(previous, 'tick-off')},interval)
        
        
    
    }, interval)
}


function start(){

    loadPlayer()
    restoreFirst()
    

    if (validateSpeed() == false){
        return
    }

    calculateInterval()
    playLoop()

}

function stop() {
    restoreFirst()
    clearInterval(loop);
}