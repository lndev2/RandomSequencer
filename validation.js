


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


function validateBars(splitted) {

    if(splitted.length > 8){
        displayError('N of bars between 1 and 8')
        return false
    }

    for (let element of splitted){
        var valid = valPositiveN(element) && valLimits(element,13)
        if (!valid){
            displayError('Bars length between 1 and 13')
            return false
        }
    
    }
      

    return true

}


function displayError(msg){

    document.getElementById('error').innerHTML = msg
    setTimeout(function () { document.getElementById('error').innerHTML = '' }, 2000)
}