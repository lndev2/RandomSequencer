
let nPatternCounter = -1
let patternList = []
let nOfBeats = 0
let subdivisions;

function setOriginalBar(){
            
    let startingLen = document.getElementById('beatsbar').value
    return startingLen
}

function setSubdivisions(){

    subdivisions = document.getElementById('sdv').value 
    //interval = interval / (subdivisions/4)
    return subdivisions
}

function setSubdBar(startingLen,subdivisions) {

    let len = startingLen * (subdivisions/4)
    return len

}

function setTotalBeats(add){

    if (add==false){

        let startingLen = setOriginalBar()
        setSubdivisions()
        let len = setSubdBar(startingLen,subdivisions)
        nOfBeats = len
    }else{
        nOfBeats = patternList[0].len
    }
}






class SoundLine{
    constructor(sound,id){
        this.id = id  
        this.sound = sound  
        this.on = true
        this.time = 'duration'
        this.volume = 'volume'
        this.sound = sound
}
}



class SoundPattern{

    
     
    constructor(sound,len){  

        this.id = function (){
            nPatternCounter ++
            let id = String.fromCharCode(nPatternCounter+65)
            return  id
        }()
        
        this.sound = sound  
        this.len = len
        this.rythm = this.generateRythm()
        this.tab = this.generateBar() 
    }




    generateRythm(){

        let rythm = []
        for (let i=0; i<this.len; i++){
            rythm.push(new SoundLine(this.sound,this.id+i))
        }
        return rythm
    }

    
    generateBar(){


        let tab = document.createElement('table')
        tab.className = 'bars'
        tab.id = this.id
    
        let row = document.createElement('tr')
        tab.appendChild(row)
    
        for (let i=0;i<this.len;i++){
            
    
            let cell = document.createElement('td')
            let button = document.createElement('button')
            button.id =  this.id + i
            button.className = 'tick-off' 
            button.innerText = i+1
            //bt.onclick ....
    
            cell.appendChild(button)
            row.appendChild(cell)
    
        }    
        
        return tab
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


function storePattern(add,sound){

    if(add==false){
        patternList = []
        nPatternCounter = -1
        pattern = new SoundPattern(sound, nOfBeats)
        
    }else{
        pattern = new SoundPattern(sound, nOfBeats)
        
    }

    patternList.push(pattern)

    return pattern
}





function generatePattern(add,first=null){

    

    let sound = document.getElementById('soundtype').value
    setTotalBeats(add)

    if (first){
        nOfBeats = 4
    }
    
    let pattern = storePattern(add,sound)
    
    pattern.barDisplay(pattern.tab, add)
    

    console.log(pattern)
}




generatePattern(add=false,first=true)