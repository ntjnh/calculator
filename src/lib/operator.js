import buildNumber from './buildNumber'

export default function operator(op) {
    const answer = document.querySelector('.answer')
    const calculation = document.querySelector('.calculation')

    // if there is a number and it's not just a "-"
    if (num && num !== '-' && num[num.length - 1] !== '.') {

        // Add num to calc array 
        calcArr.push(Number(num))
        calcArr.push(op)

        // Add the first number to the result
        calc += op
        calculation.textContent = calc
        answer.textContent = op
        num = ''

    } else if (holdAnswer) {

        num += holdAnswer
        calc += holdAnswer
        calcArr.push(holdAnswer)
        calcArr.push(op)
        calc += op
        calculation.textContent = calc
        answer.textContent = op
        num = ''
        holdAnswer = 0

    } else {
        // If !num && operator is "-", build a negative number
        if (op === '-' && num[num.length - 1] !== '.') buildNumber(op)
    }
}
