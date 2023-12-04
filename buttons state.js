


function colorColumnButtons(beatIndex, style){
    

    // if style is an array the for cycle unpack the array 
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

function saveButtonsClass(beatIndex){

    let columnButtonClass = []

    for (let i=0; i<patternList.length; i++){
        let buttonId = patternList[i].id + beatIndex 
        let clName = document.getElementById(buttonId).className

        
        //corrects a bug when adding a new pattern while playing
        /* if(clName == 'undefined'){
            clName = 'button'
        } */


        columnButtonClass.push(clName)
        
    }
    return columnButtonClass
}




function adjustColor(previousClass){

    for (let i=0; i< previousClass.length; i++){
            
        if (previousClass[i] == 'undefined'){
            previousClass[i] = 'button'
        }
    }




}