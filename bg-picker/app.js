document.getElementById('pink').onclick = partyPink
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed

function partyPink() {
    document.querySelector('body').style.backgroundColor = 'rgba(252, 163, 255)'
    document.querySelector('body').style.color = 'white'
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(152, 255, 185)'
    document.querySelector('body').style.color = 'black'
}

function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(163, 255, 255)'
    document.querySelector('body').style.color = 'black'
}

function partyRed() {
    document.querySelector('body').style.backgroundColor = 'rgba(255, 129, 129)'
    document.querySelector('body').style.color = 'white'
}