




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



function randomizeBeats(totBeats){


    let indexes = []
    
    for ( let i= 0; i< nOfBeats ; i++){
        indexes.push(i)
    }
    //console.log(indexes)

    let finalIndexes = []

    let startindex = 0
    for (let i=0; i< bars.length;i++){

        //console.log(i)
        
        let endindex = startindex+bars[i]
        //console.log('startindex',startindex)
        //console.log('endindex',endindex)
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



const randomTypes = [false,'randomPattern','randomLine']

function switchRandom(soundPattern,type){
    

    if(!type){
        soundPattern.random = false
        soundPattern.selectedIndexes = null
    }else{

        soundPattern.random = type

        if(type == 'randomPattern'){
            
            let beatLimits = document.getElementById('randomPattern').value

            beatLimits = beatLimits.split(' ')
            
            soundPattern.beatLimits = beatLimits
            console.log('totbeats',beatLimits)

            
            soundPattern.selectedIndexes = randomizeBeats(beatLimits)
            console.log('selectedIndexes',soundPattern.selectedIndexes)
        }

    }

}



    






//switchRandom(patternList[0],randomTypePattern,[2,3])
//switchRandom(patternList[0],randomTypeSingle)