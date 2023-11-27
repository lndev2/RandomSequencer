
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


let response;
async function loadDogSound(url) {
    
    try{
    
    response = await fetch(url)
    let array = await response.arrayBuffer()
    let AudioBuffer = await context.decodeAudioData(array)
    dogBarkingBuffer = AudioBuffer

    }catch(e){console.log(e)}
    
}

function onError(){
    console.log('Failed decode')
}


//var context = new AudioContext();

function playSound(buffer) {
    console.log('dogBarkingBuffer2',dogBarkingBuffer)
    var source = context.createBufferSource(); // creates a sound source
    
    console.log(source)
    
    source.buffer = buffer;   
    console.log(source.buffer)                 // tell the source which sound to play
    source.connect(context.destination);       // connect the source to the context's destination (the speakers)
    console.log(source.noteOn)
    source.start(0);                          // play the source now
}






function main(){
    init()
    loadDogSound('tick.mp3')
    
   // playSound(dogBarkingBuffer)
    
}






function playbutton(){


    //console.log(response)
    playSound(dogBarkingBuffer)
}



/* setInterval(() => {playbutton()
    
}, 80); */