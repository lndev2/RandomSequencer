


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



function validateSplitted(splitted,lenLimit,valLimit,lenErrMsg,valLerrMsg,barlimit=false){



    if(splitted.length > lenLimit){
        displayError(lenErrMsg)
        return false
    }

    for (let i = 0; i<splitted.length; i++){

        //maximum bar length
        if(barlimit){ valLimit = bars((i)) }


        var valid = valPositiveN(splitted[i]) && valLimits(splitted[i],valLimit)
        if (!valid){
            displayError(valLerrMsg)
            return false
        }
    
    }
      

    return true


}




function displayError(msg){

    document.getElementById('error').innerHTML = msg
    setTimeout(function () { document.getElementById('error').innerHTML = '' }, 2000)
}