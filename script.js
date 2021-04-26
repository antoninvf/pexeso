let cards = ['😂', '🥰', '🤔', '🙂', '😍', '😎', '🤩', '😃'] // emojis
let cardsdoubled = cards.concat(cards) // doubles the cards
let board;
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

let htmlAdd = function () {
    for (let i = 0; i < cardsdoubled.length; i++) {
        let div = document.createElement('div')
        div.innerText = cardsdoubled[i]
        div.className = 'piece hidden'
        div.id = `piece${i+1}`
        div.onclick = revealCard
        board.appendChild(div)
    }
}

let revealCard = function () {
    let piece = document.getElementById('piece1')

    piece.className = 'piece revealed'
    board.appendChild(piece)
}


window.onload = init