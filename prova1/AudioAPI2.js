
let context



function init() {
    try {
    context = new AudioContext();
    console.log('ok')
    }
    catch(e) {
    alert('Web Audio API is not supported in this browser');
    }
}
    





let dogBarkingBuffer = null;
//var context = new AudioContext();

function loadDogSound(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
        console.log(request.response)
        context.decodeAudioData(request.response, function(buffer) {
            dogBarkingBuffer = buffer;
            console.log(dogBarkingBuffer)
        }, onError);
        }
        request.send();
    

    
}






//var context = new AudioContext();

function playSound(buffer) {
    var source = context.createBufferSource(); // creates a sound source
    source.buffer = buffer;                    // tell the source which sound to play
    source.connect(context.destination);       // connect the source to the context's destination (the speakers)
    source.noteOn(0);                          // play the source now
}



function main(){
    init()
    loadDogSound('tick.mp3')
    playSound(dogBarkingBuffer)


}