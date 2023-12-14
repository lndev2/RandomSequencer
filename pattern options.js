

let selected;



function selectPattern(patternLabel, off = false) {

    if(off==true){
        selected = null
        return
    }

    let patternId = patternLabel.parentElement.parentElement.id
    let patternIndex = patternId.charCodeAt(0)-65
    let pattern = patternList[patternIndex]
    selected = pattern
    patternLabel.className = 'pattern-label-selected'

    //console.log(selected)
}



// on soundLabel.addEventListener 
function setLabelColor(off = false){

    let patternLabels = document.getElementsByClassName('pattern-label-selected')
    for (let label of patternLabels ){        
    label.className = 'sound-label'  
    
    if(off== true){
        return
    }
    
    if (selected.label == label){
        label.className = 'pattern-label-selected'
    }
    }
}


function displayOptions(off = false){

    if(off== true){
        let toRemove = document.getElementById('optionDiv') 
        document.getElementById('pattern-options').removeChild(toRemove)
        return
    }
    generateInterface()
    


}


function generateInterface(){


    let optionDiv= document.createElement('div')
    optionDiv.id = 'optionDiv'
    optionDiv.className = 'pattern-option-interface'

    //title
    let optionTitle = document.createElement('p')
    optionTitle.innerText = 'Manage Soundpattern '+ selected.id
    optionDiv.appendChild(optionTitle)

    //delete button
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    if(patternList.length == 1){
        deleteButton.disabled = true
    }
    optionDiv.appendChild(deleteButton)






    document.getElementById('pattern-options').replaceChildren(optionDiv)


}


function clickSoundLabel(patternLabel){
   
    if(selected){
    if(selected.label == patternLabel){
    console.log('off')
    
    var off = true
    }
    }

    selectPattern(patternLabel,off)
    setLabelColor(off)
    displayOptions(off)

    
    console.log(selected)
    console.log('selected.label',selected.label)
    
}


