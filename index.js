const numbers = 76
function displaynumbers() {
    let numbersContainer = document.getElementById('numbers-area')

    for(let number=1; number<=numbers; number++) {
        let num = document.createElement('div')

        num.innerText = number
        num.classList.add('number')
        

        numbersContainer.appendChild(num)
    }
}


function randomNumber() {
    let rand = Math.floor(Math.random() * 76)
 console.log(rand)

}

function highlightRandom (event) {
    let clickRandom = event.target;
    clickRandom.classList.add("selected")
    clickRandom.classList.highlight('rand')
}

function executeOnLoad() {
    displaynumbers()
} 
window.onload = executeOnLoad