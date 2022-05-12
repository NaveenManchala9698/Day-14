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
    let rand = Math.floor(Math.random() * 76 ,1)
 console.log(rand)

 let highlight = document.getElementsByClassName("number")
 highlight[rand -1].style.backgroundColor = "blue"
 
}

//function highlight (event) {
//  clickRandom.classList.highlight('rand')
//}

function executeOnLoad() {
    displaynumbers()
} 
window.onload = executeOnLoad