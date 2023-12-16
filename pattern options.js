

let selected;


function retrievesPattern(patternId, remove=false){

    for( let i=0; i<patternList.length; i++){
        

        if (patternList[i].id == patternId){

            if(remove){
                patternList.splice(i,1)
            }else{
                return patternList[i]
            }

        } 
    }
}


function selectPattern(patternLabel, off = false) {

    if(off==true){
        selected = null
        return
    }

    let patternId = patternLabel.id.slice(1)
    selected = retrievesPattern(patternId)
    patternLabel.className = 'pattern-label-selected'
   

    console.log(selected) 
}



// on soundLabel.addEventListener 
function setLabelColor(off = false){

    let patternLabels = document.getElementsByClassName('pattern-label-selected')
    for (let label of patternLabels ){        
    label.className = 'sound-label'  
    
    if(off== true){
        return
    }
    
    
    if (selected.label.id == label.id){
        label.className = 'pattern-label-selected'
    }
    
    }
}


function displayOptions(off = false){

    if(off== true){
        let toRemove = document.getElementById('optionDiv') 

        if(toRemove){
        document.getElementById('pattern-options').removeChild(toRemove)
        }
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
    deleteButton.onclick = deletePattern
    if(patternList.length == 1){
        deleteButton.disabled = true
    }
    optionDiv.appendChild(deleteButton)

    //change sound div
    let changeSoundDiv = document.createElement('div')
    changeSoundDiv.id = 'changeSoundDiv'

    let selectSoundLabel = document.createElement('label')
    selectSoundLabel.for = 'selectsound'
    selectSoundLabel.innerHTML = 'Change Sound:'

    let selectSound = document.createElement('select')

    for (let i =0; i<sounds.length; i++){
        let option = document.createElement('option')
        option.value = sounds[i]
        option.innerHTML = sounds[i].slice(7,-4)
        selectSound.appendChild(option)
    }

    selectSound.onclick = function(){ changeSound(this) }

    changeSoundDiv.append(selectSoundLabel,selectSound)
    optionDiv.appendChild(changeSoundDiv)




    //display
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

    /* if(selected){
    console.log(selected)
    console.log('selected.label',selected.label)
    } */
}


// interface functionality


function deletePattern(){

    let tab = selected.tab
    document.getElementById('bardiv').removeChild(tab)

    retrievesPattern(tab.id,remove=true)

    let optionDiv = document.getElementById('optionDiv')
    document.getElementById('pattern-options').removeChild(optionDiv)

    selected = null
}

function changeSound(select){ 
    selected.sound = select.value
    selected.label.innerHTML = select.value.slice(7,-4)

}