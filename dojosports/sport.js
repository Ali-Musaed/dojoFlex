var upOne = document.querySelector('.other')
var plusOne = document.querySelector('.otherOne')
var out = document.querySelector('.cloudTwo')
var qty = 314
var amount = 159
function add(){
    qty++
    upOne.innerText = qty
}

function plus(){
    amount++
    plusOne.innerText = amount
}

function minus() {
    out.remove()
}

function display() {
    alert("The Game has Ended");    
}
    
setTimeout(display, 13000);
