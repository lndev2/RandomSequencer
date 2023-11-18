


function valSpeed(currentSpeed) {

    let regex = /^[0-9]+$/;
    let result = regex.test(currentSpeed);
    
    if (result){
        return true
    }else{
        document.getElementById('error').innerHTML = 'Insert a number'
        setTimeout(function () { document.getElementById('error').innerHTML = '' }, 2000)
    }
}


