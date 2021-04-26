let cards = ['😂', '🥰', '🤔', '🙂', '😍', '😎', '🤩', '😃'] // emojis
let cardsdoubled = cards.concat(cards) // doubles the cards
let board;
let turned = 1;
console.log(cardsdoubled)

let init = function () { // init
    board = document.getElementById('board')
    shuffleFunc()
    htmlAdd()
}

let shuffleFunc = function () { // Shuffles the cards, duh
    for (let i = 0; i < cardsdoubled.length; i++) {
        let shuffle = Math.floor(Math.random() * i)
        let j = cardsdoubled[i]
        cardsdoubled[i] = cardsdoubled[shuffle]
        cardsdoubled[shuffle] = j
    }
}

let htmlAdd = function () { // Adds the funny XD emojis/cards
    for (let i = 0; i < cardsdoubled.length; i++) {
        let div = document.createElement('div')
        div.innerText = cardsdoubled[i].substring(0, 2)
        div.className = 'piece hidden'
        // div.id = `piece${i + 1}`
        div.addEventListener('click', function () { // The clicking and reveal func
            if (turned > 2) { // basic "dont turn if two cards are turned"
                const interval = setInterval(function () {
                    turned = 1
                    clearInterval(interval)
                }, 2000)
            } else {
                div.classList.toggle('hidden')
                div.classList.toggle('revealed')
                turned++;
            }
        })
        board.appendChild(div)
    }
}

window.onload = init