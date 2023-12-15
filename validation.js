


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
        displayError('Speed between 1 and 300')
        return false
    }

    document.getElementById('speed').innerText = currentSpeed


    }



function validateBeats() {

    let barLen = document.getElementById('beatsbar').value
    let valid = valPositiveN(barLen) && valLimits(barLen,13)
    
    
    if (!valid){
        displayError('Beats/Bar between 1 and 13')
        return false
    }

    return barLen

}


function validatenBars() {

    let nbars = document.getElementById('nBars').value
    let valid = valPositiveN(nbars) && valLimits(nbars,5)
    
    
    if (!valid){
        displayError('Number of Bars between 1 and 5')
        return false
    }

    return nbars

}


function displayError(msg){

    document.getElementById('error').innerHTML = msg
    setTimeout(function () { document.getElementById('error').innerHTML = '' }, 2000)
}