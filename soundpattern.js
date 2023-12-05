
let nPatternCounter = -1
let patternList = []
let nOfBeats = 0
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
            button.className = 'button' 
            button.innerText = i+1
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



function setTotalBeats(add,startingBar,subdivisions){

    if (add==false){
        //n of beats to play
        nOfBeats = startingBar * (subdivisions/4)
    }else{
        nOfBeats = patternList[0].len
    }
}



function generatePattern(add,first=false){

    if (first){
        var startingBar = 4 
    }else{ 

        if(!add){
            
            var startingBar = validateBeats()
            if(!startingBar){
                return
            }
        }
    } 

    subdivisions = document.getElementById('sdv').value 
    let sound = document.getElementById('soundtype').value
    
    setTotalBeats(add,startingBar,subdivisions)

    let pattern = storePattern(add,sound)
    pattern.barDisplay(pattern.tab, add)
    console.log(pattern)



    //while playing
    
}




generatePattern(add=false,first=true)