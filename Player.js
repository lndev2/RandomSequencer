

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



function playSoundline(currentSoundPattern,currentSoundLine,isRandom) {

    
    if (!currentSoundLine.on) {
        return
    }

    if(isRandom){
    if (!selectToPlay(currentSoundPattern)) {
        return
    }
    }


    //select buffer
    let bufferToPlay = buffers[sounds.indexOf(currentSoundLine.sound)]

    playSound(bufferToPlay);  
          
    
      
}



function playCurrentPosition(beatIndex){

    for(let j=0; j<patternList.length; j++){

        if (patternList[j].random){
        if (beatIndex == 0 ){
            patternList[j].selectedIndexes = randomizeBeats(patternList[0],[2,3])
        }
        }

        
        let currentSoundLine = patternList[j].rythm[beatIndex]
        //console.log(currentSoundLine)
        
        
         
        playSoundline(patternList[j],currentSoundLine,patternList[j].random)    

        


    }

    
 
    
}


function toNext() {
    beatIndex = (beatIndex + 1) % nOfBeats  
    console.log('Next')
}



function playLoop() {
    
    loop = setInterval(function () { 
        
        
        playCurrentPosition(beatIndex)   
        colorColumnButtons(beatIndex,'button tick-current')     
        let previous = beatIndex       
        toNext()          
        
        setTimeout(function(){ restoreColumnClNames(previous)
        },interval)
        
        
    }, interval)
}

function start(){

    document.getElementById('newpattern').disabled = true

    loadPlayer()
    restoreFirst()
    

    if (validateSpeed() == false){
        return
    }

    calculateInterval()
    playLoop()

}

function stop() {

    document.getElementById('newpattern').disabled = false

    restoreFirst()
    clearInterval(loop);
}