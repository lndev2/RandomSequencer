


function valSpeedRe(currentSpeed) {

    let regex = /[1-9]?[0-9]+/;
    let result = regex.test(currentSpeed);
    
    if (result){
        return true     
}
}

function valSpeedLimits(currentSpeed){

    if(currentSpeed > 0 && currentSpeed<=240){
        return true
    

}
}

function CheckSpeed() {

    currentSpeed = document.getElementById('quantity').value
    valid = valSpeedRe(currentSpeed) && valSpeedLimits(currentSpeed)
    
    if(currentSpeed === ""){
        currentSpeed = document.getElementById('speed').innerText
        return
    }
    
    if (!valid){
        displayError()
        return false
    }

    


    }

function displayError(){

    document.getElementById('error').innerHTML = 'Insert a number between 1 and 240'
    setTimeout(function () { document.getElementById('error').innerHTML = '' }, 2000)
}