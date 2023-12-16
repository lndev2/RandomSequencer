

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
    optionTitle.className = 'optionTitle'
    optionTitle.innerText = 'Manage Soundpattern '+ selected.id
    optionDiv.appendChild(optionTitle)

    

    //change sound div
    let changeSoundDiv = document.createElement('div')
    changeSoundDiv.id = 'changeSoundDiv'
    changeSoundDiv.className = 'changeSoundDiv optionsDiv'

    let selectSoundLabel = document.createElement('p')
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

    //random div
    let randomDiv = document.createElement('div')
    randomDiv.id = 'randomDiv'
    randomDiv.className = 'optionsDiv'

    let title = document.createElement('p')
    title.innerText = 'Play Random'
    randomDiv.append(title)

    let randomForm = document.createElement('form')
    randomForm.id = 'randomForm'

    let labelnames = ['Off','Random Pattern', 'Randomize only selected']

    for (let i=0; i<labelnames.length; i++){
        let label = document.createElement('label')
        label.className = 'randomLableSelect'

        let input = document.createElement('input')
        input.type = 'radio'
        input.name = 'random'
        input.value = randomTypes[i]
        input.onclick = function(){ 
            
            console.log(selected.random)
            switchRandom(selected,input.value)}

        label.append(input)

        let optionTitle = document.createElement('p')
        optionTitle.innerText = labelnames[i]

        label.append(optionTitle) 


        if(labelnames[i] == 'Random Pattern'){
            let input = document.createElement('input')
            input.id = 'randomPattern'
            input.className = 'randomPatternInput'
            label.append(input)
        }

        randomForm.append(label)
        //randomForm.append(document.createElement('br'))
    }

    

    randomDiv.append(randomForm)
    optionDiv.appendChild(randomDiv)


    //delete button
    let deleteButtonDiv = document.createElement('div')
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.className = 'deleteButtonDiv'
    deleteButton.onclick = deletePattern
    if(patternList.length == 1){
        deleteButton.disabled = true
    }
    deleteButtonDiv.appendChild(deleteButton)
    optionDiv.appendChild(deleteButtonDiv)



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

