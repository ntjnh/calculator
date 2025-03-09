import clearAll from './clearAll'

// CE button function
export default function clearPrev() {
    const answer = document.querySelector('.answer')
    const calculation = document.querySelector('.calculation')

    if (num.length === 1 || (!num && !calc)) {
        clearAll()
    } else if (num.length >= 2) {
        num = num.substring(0, num.length - 1)
        calc = calc.substring(0, calc.length - 1)
        answer.textContent = num
        calculation.textContent = calc
    }
}
