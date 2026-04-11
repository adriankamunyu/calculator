const numbers = [100, 10]

function calculationHistory() {
    return []
}

function updateCalculationHistory() {
    const history = calculationHistory()
    history.push(addNumbers(numbers))
    history.push(subtractNumbers(numbers))
    history.push(multiplyNumbers(numbers))
    history.push(divideNumbers(numbers))
    return history

}

function addNumbers(numbers) {
    return numbers[0]+numbers[1]
}
updateCalculationHistory()
function subtractNumbers(numbers) {
    return numbers[0]-numbers[1]
}
updateCalculationHistory()
function multiplyNumbers(numbers) {
    return numbers[0]*numbers[1]
}
updateCalculationHistory()
function divideNumbers(numbers) {
    return numbers[0]/numbers[1]
}
updateCalculationHistory()

function displayHistory () {
    if (history >= 0) {
        return history
    } else {
        return "You have no stored calculations"
    }
}
