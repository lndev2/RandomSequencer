



class SoundPattern{

    constructor(len){
        
        this.len = len
        
        this.bar = function (){

            let bar = []
            for (let i=0; i<len; i++){
                bar.push(1)
            }

            return bar

        }()
        
        this.sound = null
    }


}


let p1 = new SoundPattern(4)

console.log(p1)