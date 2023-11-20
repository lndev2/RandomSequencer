


let bar = [ 1, 1, 1, 1 ]
let current = bar[0]
let ind = 0


function generateBar(len){
    bar = []
    
    let tab = document.createElement('table')
    tab.className = 'tab-class'

    let row = document.createElement('tr')
    tab.appendChild(row)

    for (i=0;i<len;i++){
        bar.push(1)

        let cell = document.createElement('td')
        let button = document.createElement('button')
        button.id = i
        button.className = 'tick-button' 
        button.innerText = i+1
        //bt.onclick ....

        cell.appendChild(button)
        row.appendChild(cell)

    }    
    console.log(bar)

    displaybar(tab)
}


function displaybar(tab){

    let toRep = document.getElementById('childbar')
    document.getElementById('bardiv').replaceChild(tab, toRep)
    tab.id = 'childbar'
    
}






