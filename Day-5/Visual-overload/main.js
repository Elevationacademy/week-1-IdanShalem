const cont = document.getElementById("container")

const randomColor = function() {
    let red = Math.floor(Math.random() * 255) + 1
    let green = Math.floor(Math.random() * 255) + 1
    let blue = Math.floor(Math.random() * 255) + 1 
    return `rgb(${red},${green},${blue})`
}
for (let i = 0; i < 6; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add("boxes")
        newDiv.style.backgroundColor = randomColor()
        newDiv.onmouseenter = function() {
            newDiv.style.backgroundColor = randomColor()
        }
        cont.appendChild(newDiv)
}


