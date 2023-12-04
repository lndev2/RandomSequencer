

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

    

    if (currentSoundLine.on == true) {

        //select buffer
        let bufferToPlay = buffers[sounds.indexOf(currentSoundLine.sound)]

        playSound(bufferToPlay);  
          
    }
      
}



function playCurrentPosition(beatIndex){

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
        let previousClass = saveButtonsClass(beatIndex)
        
        
        playCurrentPosition(beatIndex)
        
        
        colorColumnButtons(beatIndex,'button tick-current')
        
        //playRandom()
        
        let previous = beatIndex
        
        toNext()   
        //adjustColor(previousClass)
        console.log(previousClass)

        previousClass.push('button')
        setTimeout(function(){ 

        colorColumnButtons(previous, previousClass)},interval)
        
        
        
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