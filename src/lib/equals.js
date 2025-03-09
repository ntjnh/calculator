import calculate from './calculate'
import clear from './clear'
import decimalCheck from './decimalCheck'
import digitLength from './digitLength'
import digitLimit from './digitLimit'
import zeroDivision from './zeroDivision'

export default function equals() {
    const answer = document.querySelector('.answer')
    const calculation = document.querySelector('.calculation')

    if (num && num !== '-' && num[num.length - 1] !== '.') {
        calcArr.push(Number(num))

        // if calcArr ends with ["/", 0], then display "Error", "Division by Zero"
        if (calcArr[calcArr.length - 1] === 0 && calcArr[calcArr.length - 2] === '/') {
            zeroDivision()
            return
        }

        calculate(calcArr)

        // If result has more than 12 digits
        if (digitLength(result)) {

            // If it's a decimal
            if (decimalCheck(result)) {
                result = decimalRound(result)

                //console.log("result in decimalCheck: " + result) // remove this

                // Check digit count again
                if (digitLength(result)) {
                    digitLimit()
                } else {
                    calc += '=' + result
                    calculation.textContent = calc

                    if (calc.length > 25) calculation.style.overflow = 'auto'

                    answer.textContent = result

                    // If continuing calculation after getting an answer
                    holdAnswer = result

                    clear()
                }
            } else {
                digitLimit()
            }

        } else if (!digitLength(result)) { // If result has less than 12 digits
            // console.log('less than 12')

            calc += '=' + result
            calculation.textContent = calc

            if (calc.length > 25) calculation.style.overflow = 'auto'

            answer.textContent = result

            // If continuing calculation after getting an answer
            holdAnswer = result

            clear()
        }
    }
}
