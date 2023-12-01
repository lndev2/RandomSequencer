class SoundLine{
    constructor(sound){    
        this.time = 'duration'
        this.volume = 'volume'
        this.sound = sound
}
}


class SoundPattern{

    constructor(sound){  
        
        this.sound = sound  
        this.original_bar_len = this.setOriginalBar()
        this.subdivisions = this.setSubdivisions()
        this.newlen = this.setSubdBar() 
        this.rythm = this.generateRythm()
        this.tab = this.generateBar() 

    }

    setOriginalBar(){
                
        let bar_len = document.getElementById('beatsbar').value
        return bar_len
    }

    setSubdivisions (){

        let subdivisions = document.getElementById('sdv').value 
        //interval = interval / (subdivisions/4)
        return subdivisions
    }

    setSubdBar() {

        let newLen = this.original_bar_len * (this.subdivisions/4)
        console.log(newlen)
        return newLen
    }

    generateRythm(){

        let rythm = []
        for (let i=0; i<this.newlen; i++){
            rythm.push(new SoundLine(sound))
        }
        return rythm
    }


    generateBar(){


        let tab = document.createElement('table')
        tab.className = 'bars'
    
        let row = document.createElement('tr')
        tab.appendChild(row)
    
        for (let i=0;i<this.newlen;i++){
            
    
            let cell = document.createElement('td')
            let button = document.createElement('button')
            button.id = i
            button.className = 'tick-off' 
            button.innerText = i+1
            //bt.onclick ....
    
            cell.appendChild(button)
            row.appendChild(cell)
    
        }    
        
        return tab
    }

    barReplacement(tab){

        let bars = document.getElementById('bardiv').childNodes
        document.getElementById('bardiv').replaceChildren(tab)
        document.getElementById('bardiv').appendChild(document.createElement('br'))
        
    }
    
    barAdder(tab){
    
        document.getElementById('bardiv').appendChild(tab)
        document.getElementById('bardiv').appendChild(document.createElement('br'))
    }
    

}



function x(){

p1 = new SoundPattern()
console.log('p1',p1)
console.log('p1.original_bar_len',p1.original_bar_len)
console.log('p1.subdivisions',p1.subdivisions)
console.log('p1.newLen',p1.newLen)
console.log('p1.rythm',p1.rythm)
console.log('p1.tab',p1.tab)
}