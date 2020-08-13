const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const up = document.getElementById("up")
const left = document.getElementById("left")
const dowrightn = document.getElementById("right")
const ball = document.getElementById("block")


right.onclick = function(){
    let left = parseInt(ball.style.left) || 0
    if (left <= 380) {
        left += 15
        ball.style.left = left + "px"
    }
}
left.onclick = function(){
    let left = parseInt(ball.style.left) || 0
    if (left >= 20) {
        left -= 15
        ball.style.left = left + "px"
    }
}
down.onclick = function(){
    let top = parseInt(ball.style.top) || 0
    if (top <= 380) {
        top += 15
        ball.style.top = top + "px"
    }
}
up.onclick = function(){
    let top = parseInt(ball.style.top) || 0
    if (top >= 20) {
        top -= 15
        ball.style.top = top + "px"
    }
}


playingField.onclick = function() {
    playingField.style.backgroundColor = "#14e39b"
}

playingField.onmouseenter = function() {
    playingField.style.backgroundColor = "blue"
}
playingField.onmouseleave = function() {
    playingField.style.backgroundColor = "red"
}