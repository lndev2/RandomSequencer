



function randomize(origin, maxN) {


    let arrive = []
    let origincopy = origin.map(function (x) { return x })

    for (let i = 0; i < maxN; i++) {
        let n = 0
        let rN = Math.floor(Math.random() * (origincopy.length - n))
        arrive.push(origincopy[rN])
        origincopy.splice(rN, 1)
        n = n + 1
    }
    return arrive

}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



function randomizeBeats(soundPattern,totBeats){


    let indexes = []
    
    for ( let i= 0; i< soundPattern.len; i++){
        indexes.push(i)
    }
    //console.log(indexes)

    let finalIndexes = []

    let j = 0
    for (let i=0; i< soundPattern.nBars;i++){
        
        let barIndexes = indexes.slice(0+j,soundPattern.barLen+j)
        let randBarIndexes = randomize(barIndexes,totBeats[i])
        
        
        for (let e of randBarIndexes){
            finalIndexes.push(e)
        }
        
        j = j + soundPattern.barLen
    }
    
    return finalIndexes


}



function selectToPlay(soundPattern){

    
    if (soundPattern.selectedIndexes.includes(beatIndex)){
        return true
    } 


}

function switchRandom(soundPattern){
    
    if(soundPattern.random == false){
        soundPattern.random = true
        soundPattern.selectedIndexes = randomizeBeats(patternList[0],[2,3])
    }else{
        soundPattern.random = false
        soundPattern.selectedIndexes = null
    }
}


 

//randomizeBeats(patternList[0],[2,3])