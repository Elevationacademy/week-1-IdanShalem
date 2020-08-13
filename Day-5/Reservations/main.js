const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const clicked = document.getElementById("submit-res")
  const messageBody = document.getElementById("message")

  clicked.onclick = function() {
    let name = document.getElementById("res-name")
    let resName = name.value
    resName = resName.charAt(0).toUpperCase() + resName.slice(1).toLowerCase()
    checkReservation(resName)
    name.value = ''
  }

const messager = function(msg, name) {
    if(msg === 1) {
        messageBody.innerHTML = `Hmm, ${name} someone already claimed this reservation`
    } else if (msg === 2) {
        messageBody.innerHTML = 'Welcome ' + name
    } else {
        messageBody.innerHTML = `${name}, you have no reservation, I will add it now`
    }
}

const checkReservation = function(name){ 
    if (reservations[name] != undefined) {
        if (reservations[name].claimed) {      
            messager(1, name)
        } else {
            reservations[name].claimed = true
            messager(2, name)
        }
    } else {
        messager(3, name)
        reservations[name] = {claimed : true}
    }
}
