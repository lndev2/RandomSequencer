
class SoundPattern{

    constructor(len,sound){
        
        this.sound = sound
        this.len = len
        

        this.rythm = function (){

            let rythm = []
            for (let i=0; i<len; i++){
                rythm.push(new SoundLine(sound))
            }

            return rythm

        }()

    }

}



class SoundLine{

    constructor(sound){    
        this.time = 'duration'
        this.volume = 'volume'
        this.sound = sound

}

}


let p = new SoundPattern(5,'sound')
let p2 = new SoundPattern(5,'sound2')
console.log(p)
console.log(p2)



p.rythm[0] = null

console.log(p)