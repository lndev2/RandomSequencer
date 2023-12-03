


function colorCurrentButtons(beatIndex, style){
    
    for (let i=0; i<patternList.length; i++){
        let buttonId = patternList[i].id + beatIndex 
        document.getElementById(buttonId).className = style
    }

}