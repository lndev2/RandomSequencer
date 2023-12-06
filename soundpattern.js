
let nPatternCounter = -1
let patternList = []
let nOfBeats = 0
let nBars = 0
let subdivisions;


class SoundLine{
    
    constructor(sound,id){
        this.id = id  
        this.sound = sound  
        this.on = true
        this.time = 'duration'
        this.volume = 'volume'  
        this.button = null
}
}


class SoundPattern{

    constructor(sound,len,nBars){  

        this.id = function (){
            nPatternCounter ++
            let id = String.fromCharCode(nPatternCounter+65)
            return  id
        }()
        
        this.sound = sound  
        this.len = len
        this.rythm = this.generateRythm()
        
        this.nBars = nBars
        this.barLen = this.len/nBars

        this.tab = this.generateTab() 
    }




    generateRythm(){

        let rythm = []
        for (let i=0; i<this.len; i++){
            rythm.push(new SoundLine(this.sound,this.id+i))
        }
        return rythm
    }

    
    generateTab(){


        let tab = document.createElement('table')
        tab.className = 'bars'
        tab.id = this.id
    
        let row = document.createElement('tr')
        tab.appendChild(row)
    
        for (let i=0;i<this.len;i++){
            
    
            let cell = document.createElement('td')
            let button = document.createElement('button')
            button.id =  this.id + i
            button.className = 'button' 
            button.innerText = (i % this.barLen)  +1
            button.onclick= function (){switchState(button)}
    
            this.rythm[i].button = button

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


function storePattern(add,sound,nBars){

    if(add==false){
        patternList = []
        nPatternCounter = -1
        pattern = new SoundPattern(sound, nOfBeats,nBars)
        
    }else{
        nBars = patternList[0].nBars
        pattern = new SoundPattern(sound, nOfBeats,nBars)
        
    }

    patternList.push(pattern)

    return pattern
}



function setTotalBeats(add,startingBar,subdivisions,nBars){

    // if new pattern is pressed set new nOfBeats else set to the existent

    if (add==false){
        //n of beats to play
        nOfBeats = startingBar * (subdivisions/4) * nBars
    }else{
        console.log('else')
        nOfBeats = patternList[0].len
        
    }

    
}



function generatePattern(add,first=false){

    if (first){
        var startingBar = 4 
        var nBars = 1
    }else{ 

        if(!add){
            
            var nBars = validatenBars()
            if(!nBars){
                return
            }
            var startingBar = validateBeats()
            if(!startingBar){
                return
            }
        }
    } 

    subdivisions = document.getElementById('sdv').value 
    let sound = document.getElementById('soundtype').value
    
    setTotalBeats(add,startingBar,subdivisions,nBars)

    
    let pattern = storePattern(add,sound,nBars)
    pattern.barDisplay(pattern.tab, add)
    console.log(pattern)



    //while playing
    
}




generatePattern(add=false,first=true)