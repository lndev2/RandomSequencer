

let selected;




function selectPattern(patternLabel) {

    let patternId = patternLabel.parentElement.parentElement.id
    let patternIndex = patternId.charCodeAt(0)-65
    let pattern = patternList[patternIndex]
    selected = pattern
    patternLabel.className = 'pattern-label-selected'

    console.log(selected)
}



// on soundLabel.addEventListener 
function setLabelColor(){

    let patternLabels = document.getElementsByClassName('pattern-label-selected')
    for (let label of patternLabels ){        
    label.className = 'sound-label'  
    
        
    
    if (selected.label == label){
        label.className = 'pattern-label-selected'
    }
    }
}




