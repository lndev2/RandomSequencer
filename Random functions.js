




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




function randomizeBeats(totBeats) {


    let indexes = []

    for (let i = 0; i < nOfBeats; i++) {
        indexes.push(i)
    }
    //console.log(indexes)

    let finalIndexes = []

    let startindex = 0
    for (let i = 0; i < bars.length; i++) {

        //console.log(i)

        let endindex = startindex + bars[i]
        //console.log('startindex',startindex)
        //console.log('endindex',endindex)
        let barIndexes = indexes.slice(startindex, endindex)
        let randBarIndexes = randomize(barIndexes, totBeats[i])


        for (let e of randBarIndexes) {
            finalIndexes.push(e)
        }

        startindex = endindex
    }

    return finalIndexes


}



function selectToPlay(soundPattern) {


    if (soundPattern.selectedIndexes.includes(beatIndex)) {
        return true
    }


}


//random types selections
const randomTypes = ['off', 'randomBarPattern', 'randomLine']



function randomBarPattern(soundPattern){


    let beatLimits = document.getElementById('randomBarPattern').value

    beatLimits = beatLimits.split(' ')
    while (beatLimits[beatLimits.length-1] == ''){
        beatLimits.pop()
    }
    if(!validateSplitted(

        beatLimits, bars.length, null, 'total bars'+' '+bars.length, 'BeatsPerBar Exceded'

    )){return}

    

    soundPattern.beatLimits = beatLimits
    console.log('totbeats', beatLimits)


    soundPattern.selectedIndexes = randomizeBeats(beatLimits)
    console.log('selectedIndexes', soundPattern.selectedIndexes)

    //display 
    selected.endLabel.innerText = 'Rbars' + ' ' + beatLimits 
    
}



function switchRandom(soundPattern, type) {

    console.log('type',type)


    if (type =='off') {
        console.log('innnnn')
        soundPattern.random = false
        soundPattern.selectedIndexes = null

        console.log(selected.endLabel.innerText)
        selected.endLabel.innerText = null
    } else {

        soundPattern.random = type

        if (type == 'randomBarPattern') {

            randomBarPattern(soundPattern)
        }

    }

}










//switchRandom(patternList[0],randomTypePattern,[2,3])
//switchRandom(patternList[0],randomTypeSingle)