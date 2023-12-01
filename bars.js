

//let current = bar[0]
//let ind = 0




function setOriginalBar(){
    original_bar_len = document.getElementById('beatsbar').value
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
    tab.className = 'bars'

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
    

    return tab
}


function barReplacement(tab){

    let bars = document.getElementById('bardiv').childNodes
    document.getElementById('bardiv').replaceChildren(tab)
    document.getElementById('bardiv').appendChild(document.createElement('br'))
    
}


function barAdder(tab){

    document.getElementById('bardiv').appendChild(tab)
    document.getElementById('bardiv').appendChild(document.createElement('br'))
}


function addPattern(add){

    let original_bar_len = setOriginalBar()
    console.log('original_bar_len',original_bar_len)
    let subdivisions = setSubdivisions()
    console.log('subdivisions',subdivisions)
    let newlen = setSubdBar(original_bar_len,subdivisions)
    console.log('newlen',newlen)
    
    let tab = generateBar(newlen)
    
    if (add == false){
        barReplacement(tab)
    }else{
        barAdder(tab)
    }

    let sound = document.getElementById('soundtype').value
    //let pattern = new SoundPattern(newlen,sound)
  }
















