const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const up = document.getElementById("up")
const left = document.getElementById("left")
const right = document.getElementById("right")
const ball = document.getElementById("block")


const moveRight = function(){
    let left = parseInt(ball.style.left) || 0
    if (left <= 380) {
        left += 15
        ball.style.left = left + "px"
    }
}
const moveLeft = function(){
    let left = parseInt(ball.style.left) || 0
    if (left >= 20) {
        left -= 15
        ball.style.left = left + "px"
    }
}
const moveDown = function(){
    let top = parseInt(ball.style.top) || 0
    if (top <= 380) {
        top += 15
        ball.style.top = top + "px"
    }
}
const moveUp = function(){
    let top = parseInt(ball.style.top) || 0
    if (top >= 20) {
        top -= 15
        ball.style.top = top + "px"
    }
}

document.onkeydown = function(event){
    const arrow = event.keyCode
    if (arrow === 37) {
        moveLeft()
    }
    if (arrow === 38) {
        moveUp()
    }
    if (arrow === 39) {
        moveRight()
    }
    if (arrow === 40) {
        moveDown()
    }
}
right.onclick = moveRight
left.onclick = moveLeft
up.onclick = moveUp
down.onclick = moveDown

playingField.onclick = function() {
    playingField.style.backgroundColor = "#14e39b"
}

playingField.onmouseenter = function() {
    playingField.style.backgroundColor = "blue"
}
playingField.onmouseleave = function() {
    playingField.style.backgroundColor = "red"
}