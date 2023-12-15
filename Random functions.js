



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
    
    for ( let i= 0; i< nOfBeats ; i++){
        indexes.push(i)
    }
    console.log(indexes)

    let finalIndexes = []

    let startindex = 0
    for (let i=0; i< bars.length;i++){

        console.log(i)
        
        let endindex = startindex+bars[i]
        console.log('startindex',startindex)
        console.log('endindex',endindex)
        let barIndexes = indexes.slice(startindex,endindex)
        let randBarIndexes = randomize(barIndexes,totBeats[i])
        
        
        for (let e of randBarIndexes){
            finalIndexes.push(e)
        }
        
        startindex = endindex
    }
    
    return finalIndexes


}



function selectToPlay(soundPattern){

    
    if (soundPattern.selectedIndexes.includes(beatIndex)){
        return true
    } 


}

function switchRandom(soundPattern,totBeats){
    
    if(soundPattern.random == false){
        soundPattern.random = true
        soundPattern.selectedIndexes = randomizeBeats(soundPattern,totBeats)
    }else{
        soundPattern.random = false
        soundPattern.selectedIndexes = null
    }
}


 

//randomizeBeats(patternList[0],[2,3])