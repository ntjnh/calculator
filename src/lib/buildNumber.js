import digitLength from './digitLength'
import digitLimit from './digitLimit'

export default function buildNumber(digit) {
    const answer = document.querySelector('.answer')
    const calculation = document.querySelector('.calculation')

    // If decimal button is pressed
    if (digit === '.') {
        // if there's no number, put a 0 in front of the decimal
        if (!num) {
            num += '0' + digit
            calc += '0' + digit
        } else if (num[num.length - 1] !== '.') {
            num += digit
            calc += digit
        }
    } else if ((digit === '-' && num === '')) {
        num += digit
        calc += digit
    } else if (num === '-' && digit !== '-') {
        num += digit
        calc += digit
    } else if (num === '-' && digit === '-') {
        // don't do anything!!!
    } else {
        num += digit
        calc += digit
    }

    if (!digitLength(num)) {
        answer.textContent = num
        calculation.textContent = calc
    } else {
        digitLimit()
    }
}
