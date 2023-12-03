


let sounds = [
    'Sounds\\tick.mp3',
    'Sounds\\snare.mp3',
    'Sounds\\acoustic snare.mp3',
    'Sounds\\cmaj7.mp3',
    'Sounds\\Open Hat.mp3'
]

let buffers = []


async function loadAllSounds(){


    for (let sound of sounds){
        buffers.push(await loadSound(sound))
    } 

    
}


