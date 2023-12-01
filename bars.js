

//let current = bar[0]
//let ind = 0




function setOriginalBar(){
    original_bar_len = document.getElementById('beatsbar').
    console.log('ol',original_bar_len)
    return original_bar_len
}


function setSubdivisions (){

    let subdivisions = document.getElementById('sdv').value
    
    //interval = interval / (subdivisions/4)

    return subdivisions
}


function setSubdBar(original_bar_len,subdivisions) {
    
    let newLen = original_bar_len * (subdivisions/4)
    return newLen

}





// display bar given length input
function generateBar(len){

    
    let tab = document.createElement('table')
    tab.className = 'tab-class'

    let row = document.createElement('tr')
    tab.appendChild(row)

    for (i=0;i<len;i++){
        

        let cell = document.createElement('td')
        let button = document.createElement('button')
        button.id = i
        button.className = 'tick-off' 
        button.innerText = i+1
        //bt.onclick ....

        cell.appendChild(button)
        row.appendChild(cell)

    }    
    

    barReplacement(tab)
}


function barReplacement(tab){

    let toRep = document.getElementById('childbar')
    document.getElementById('bardiv').replaceChild(tab, toRep)
    tab.id = 'childbar'
    
}



function addPattern(){

    let original_bar_len = setOriginalBar()
    console.log('original_bar_len',original_bar_len)
    let subdivisions = setSubdivisions()
    console.log('subdivisions',subdivisions)
    let newlen = setSubdBar(original_bar_len,subdivisions)
    console.log('newlen',newlen)
    
    
    
    generateBar(newlen)

    let sound = document.getElementById('soundtype').value
    //let pattern = new SoundPattern(newlen,sound)
  }
















