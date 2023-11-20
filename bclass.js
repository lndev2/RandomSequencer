

class Bar {

    constructor (_len){

        
        this.len = _len
        this.original = function (){

            let bar = []
            
            for(i=0;i<this.len;i++){
                bar.push(1)
            }
            return bar
        }


    }

}


b1 = new Bar()

console.log(b1)