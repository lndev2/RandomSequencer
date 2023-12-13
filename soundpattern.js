
let nPatternCounter = -1
let patternList = []
let nOfBeats = 0
let nBars = 0
let subdivisions;


class SoundLine{
    
    constructor(sound,id){
        this.id = id  
        this.sound = sound  

        /* this on = false | true | random */

        this.on = false
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
        
        this.random = false
        this.selectedIndexes = null
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
        row.className = 'row-pattern'

        let soundLabel = document.createElement('p')
        soundLabel.innerHTML= this.sound.slice(7,-4)
        soundLabel.className = 'sound-label'
        soundLabel.onclick= function(){selectPattern(this)}
        soundLabel.addEventListener('click',setLabelColor)
        soundLabel.style.cursor = 'pointer'

        this.label = soundLabel
        row.appendChild(soundLabel)

        tab.appendChild(row)
    
        for (let i=0;i<this.len;i++){
            
    
            let cell = document.createElement('td')
            let button = document.createElement('button')
            button.id =  this.id + i
            button.className = 'button button-off' 
            button.innerText = (i % this.barLen)  +1
            button.onclick= function (){switchState(button)}
    
            this.rythm[i].button = button

            cell.appendChild(button)
            row.appendChild(cell)
    
        }    
        
        let endLabel = document.createElement('p')
        endLabel.className = 'end-label'
        row.appendChild(endLabel)
        

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
        
        pattern = new SoundPattern(sound, nOfBeats,nBars)
        
    }

    patternList.push(pattern)

    return pattern
}



function setTotalBeats(startingBar,subdivisions,nBars){

   
    nOfBeats = startingBar * (subdivisions/4) * nBars
    

    
}



function generatePattern(add,first=false){

    subdivisions = document.getElementById('sdv').value 
   
    if (first){
        var startingBar = 4
        var nBars = 1
        nOfBeats = 8
        nBars = 2
        subdivisions = 4

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
            
            
            setTotalBeats(startingBar,subdivisions,nBars)

        }else{
            nOfBeats = patternList[0].len
            nBars = patternList[0].nBars
        }
    } 

    
    let sound = document.getElementById('soundtype').value
    
    

    
    let pattern = storePattern(add,sound,nBars)
    pattern.barDisplay(pattern.tab, add)
    console.log(pattern)


    
}




generatePattern(add=false,first=true)