
let context
let buffer = null;

function initContext() {
    try {
        context = new AudioContext();
        console.log('ok')
    }
    catch (e) {
        alert('Web Audio API is not supported in this browser');
    }
}


async function loadSound(url) {

    try {

        let response = await fetch(url)
        let array = await response.arrayBuffer()
        let AudioBuffer = await context.decodeAudioData(array)
        buffer = AudioBuffer

    } catch (e) { console.log(e) }

}




function playSound(buffer) {
    console.log('buffer', buffer)

    var source = context.createBufferSource();
    console.log(source)
    source.buffer = buffer;
    console.log(source.buffer)
    source.connect(context.destination);
    console.log(source.noteOn)
    source.start(0);
}






function main() {
    initContext()
    loadSound('tick.mp3')
    


}






function playbutton() {



    playSound(buffer)
}

