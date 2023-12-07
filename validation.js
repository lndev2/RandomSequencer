


function valPositiveN(input) {

    let regex = /[1-9]?[0-9]+/;
    let result = regex.test(input);
    
    if (result){
        return true     
}
}

function valLimits(input, limit){

    if(input > 0 && input<=limit){
        return true
    

}
}


function validateSpeed() {

    currentSpeed = document.getElementById('quantity').value
    let valid = valPositiveN(currentSpeed) && valLimits(currentSpeed,300)
    
    if(currentSpeed === ""){
        currentSpeed = document.getElementById('speed').innerText
        return
    }
    
    if (!valid){
        displaySpeedError()
        return false
    }

    document.getElementById('speed').innerText = currentSpeed


    }

function displaySpeedError(){

    document.getElementById('error').innerHTML = 'Insert a number between 1 and 300'
    setTimeout(function () { document.getElementById('error').innerHTML = '' }, 2000)
}


function validateBeats() {

    let startingLen = document.getElementById('beatsbar').value
    let valid = valPositiveN(startingLen) && valLimits(startingLen,13)
    
    
    if (!valid){
        displayBeatsError()
        return false
    }

    return startingLen

}

function displayBeatsError(){

    document.getElementById('error').innerHTML = 'Insert a number between 1 and 13'
    setTimeout(function () { document.getElementById('error').innerHTML = '' }, 2000)
}


function validatenBars() {

    let nbars = document.getElementById('nBars').value
    let valid = valPositiveN(nbars) && valLimits(nbars,4)
    
    
    if (!valid){
        displaynBarsError()
        return false
    }

    return nbars

}

function displaynBarsError(){

    document.getElementById('error').innerHTML = 'Insert a number between 1 and 4'
    setTimeout(function () { document.getElementById('error').innerHTML = '' }, 2000)
}