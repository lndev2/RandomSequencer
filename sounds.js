


let sounds = [
    'Sounds\\Tick.mp3',
    'Sounds\\Snare.mp3',
    'Sounds\\Acoustic snare.mp3',
    'Sounds\\Cmaj7.mp3',
    'Sounds\\Tick.mp3',
    'Sounds\\Open Hat.mp3'
]

let buffers = []


async function loadAllSounds(){


    for (let sound of sounds){
        buffers.push(await loadSound(sound))
    } 

    
}


