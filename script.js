let cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
let cardsdoubled = cards.concat(cards)
let board;
console.log(cardsdoubled)

let init = function () {
    board = document.getElementById('board')
    shuffleFunc()
    htmlAdd()
}

let shuffleFunc = function () {
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
        div.className = 'piece'
        board.appendChild(div)
    }
}


window.onload = init