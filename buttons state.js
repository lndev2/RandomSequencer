


function colorColumnButtons(beatIndex, style){
    

    
    if (typeof style == 'object'){
        var x = 'style[i]'
    }else{
        var x = 'style'
    }


    for (let i=0; i<patternList.length; i++){
        let buttonId = patternList[i].id + beatIndex 
        document.getElementById(buttonId).className = eval(x)
    }


}


function switchState(button){
    
    
    let patternId = button.id.slice(0,1)
    let patternIndex = patternId.charCodeAt(0)-65
    let pattern = patternList[patternIndex]
    let soundlineIndex = button.id.slice(1)
    let soundline = pattern.rythm[soundlineIndex]
    

    if (soundline.on){
        button.className = 'button button-off'
        soundline.on = false
    }else{
        button.className = 'button'
        soundline.on = true
    }

    
}



function getColumn(beatIndex){

    let columnSoundLines = []

    for (let i=0; i<patternList.length; i++){
        
        columnSoundLines.push(patternList[i].rythm[beatIndex])
        
    }

    return columnSoundLines


}


function restoreColumnClNames(beatIndex){

    let column = getColumn(beatIndex)

    for (i=0; i<column.length; i++){
        
        if (column[i].on){
            column[i].button.className = 'button'
                
        }else{
            column[i].button.className = 'button button-off'
        }
        
    }
}








