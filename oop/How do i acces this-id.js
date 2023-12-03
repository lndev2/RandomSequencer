
let nPatternCounter = -1
let patternList = []



function setOriginalBar(){
            
    let startingLen = document.getElementById('beatsbar').value
    return startingLen
}

function setSubdivisions(){

    let subdivisions = document.getElementById('sdv').value 
    //interval = interval / (subdivisions/4)
    return subdivisions
}

function setSubdBar(startingLen,subdivisions) {

    let len = startingLen * (subdivisions/4)
    return len

}

function setTotalBeats(){

    let startingLen = setOriginalBar()
    let subdivisions = setSubdivisions()
    let len = setSubdBar(startingLen,subdivisions)
    return len

}






class SoundLine{
    constructor(sound){    
        this.time = 'duration'
        this.volume = 'volume'
        this.sound = sound
}
}



class SoundPattern{

    
     
    constructor(sound,len){  
        
        this.sound = sound  
        this.len = len
        this.rythm = this.generateRythm()
        this.tab = this.generateBar() 
        
        this.id = function (){
            nPatternCounter ++
           let id = String.fromCharCode(nPatternCounter+65)
           return  id
        }()
    }




    generateRythm(){

        let rythm = []
        for (let i=0; i<this.len; i++){
            rythm.push(new SoundLine(this.sound))
        }
        return rythm
    }

    
    generateBar(){


        let tab = document.createElement('table')
        tab.className = 'bars'
    
        let row = document.createElement('tr')
        tab.appendChild(row)
    
        for (let i=0;i<this.len;i++){
            
    
            let cell = document.createElement('td')
            let button = document.createElement('button')
            button.id =  i
            button.className = 'tick-off' 
            button.innerText = i+1
            //bt.onclick ....
    
            cell.appendChild(button)
            row.appendChild(cell)
    
        }    
        
        return tab
    }

    storePattern(add){

        if(add==false){
            patternList = []
            this.id= 'A'
            nPatternCounter = -1
        }

        patternList.push(this)

    }

    barDisplay(tab,add){

        if (add== false){
            document.getElementById('bardiv').replaceChildren(tab)
        }else{
            document.getElementById('bardiv').appendChild(tab)
        }
        
        document.getElementById('bardiv').appendChild(document.createElement('br'))
        
    }

}



function x(){

let len = setTotalBeats()


console.log('len',len)
p1 = new SoundPattern('x',len)





console.log('p1',p1)
console.log('p1.rythm',p1.rythm)
console.log('p1.tab',p1.tab)
//barDisplay(p1.tab,true)
p1.barDisplay(p1.tab,true)


p1.storePattern(true)

console.log('patternList', patternList)
}