


let sounds = ['Sounds\\tick.mp3', 
    'Sounds\\snare.mp3',
    'Sounds\\low-acoustic-snare-sound-a-key-07-X09.mp3']

let buffers = []


async function loadAllSounds(){


    for (let sound of sounds){
        buffers.push(await loadSound(sound))
    } 

    
}



function selectSound(){

    let sound
    if (ind%4 == 0){
        sound = buffers[1]
    }
    else{sound = buffers[2]}
    return sound
}
