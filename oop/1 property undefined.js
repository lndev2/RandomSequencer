



class SoundPattern{

    constructor(len){
        
        this.len = len
        
        this.bar = function (){

            let bar = []
            for (let i=0; i<this.len; i++){
                bar.push(1)
            }

            return bar

        }()
    }


}


let p1 = new SoundPattern(4)

console.log(p1)