
const submit = document.getElementById("submit")
const messager = document.getElementById("message")

const checkName = function(nameInput) {
    
    if (nameInput.length < 2) {
        const nameMessage = document.createElement('div')
        if (nameInput.length === 0) {
            nameMessage.innerHTML = 'Name is missing'
        }else { 
            nameMessage.innerHTML = 'Name must be more than 2 letters'
        }
        nameMessage.style.color = 'red'
        messager.appendChild(nameMessage)
        return false
    } else {
        return true
    }
}
const checkSalary = function(salaryInput) {
    if (salaryInput >= 10000 && salaryInput <= 16000){
        return true
    } else {
        const salaryMessage = document.createElement('div')
        if (salaryInput === 0) {
            salaryMessage.innerHTML = 'Salary is missing'
        } else {
            salaryMessage.innerHTML = 'Salary must be between 10,000 to 16,000'
        }
        salaryMessage.style.color = 'red'
        messager.appendChild(salaryMessage)
        return false
    }
}
const checkBD = function(bdInput) {
    if (bdInput){
        return true
    } else {
        const bdMessage = document.createElement('div')
        bdMessage.innerHTML = "Birthday is missing"
        bdMessage.style.color = 'red'
        messager.appendChild(bdMessage)
        return false
    }
}
const checkPhone = function(phoneInput) {
    if (phoneInput.length === 10){
        return true
    } else {
        const phoneMessage = document.createElement('div')
        if (phoneInput == 0) {
            phoneMessage.innerHTML = 'Phone is missing'
        } else {
            phoneMessage.innerHTML = 'Phone must be 10 digits long'
        }
        phoneMessage.style.color = 'red'
        messager.appendChild(phoneMessage)
        return false
    }
}
submit.onclick = function() {
    messager.innerHTML = ''
    let nameInput = document.getElementById("name").value
    let nameIsValid = checkName(nameInput)
    let salaryInput = document.getElementById("salary").value
    let salaryValid = checkSalary(salaryInput)
    let bdInput = document.getElementById("birthday").value
    let bdValid = checkBD(bdInput)
    let phoneInput = document.getElementById("phone").value
    let phoneValid = checkPhone(phoneInput)
    if(nameIsValid && salaryValid && bdValid && phoneValid){
        const form = document.getElementById("form-div")
        form.style.display = 'none'
        messager.innerHTML = `Welcome ${nameInput}`
    }
    nameInput = ''
    salaryInput = ''
    bdInput = ''
    phoneInput = ''
}