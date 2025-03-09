import clear from './clear'

// Division by zero error function
export default function zeroDivision() {
    const answer = document.querySelector('.answer')
    const calculation = document.querySelector('.calculation')

    clear()
    answer.textContent = 'Error'
    calculation.textContent = 'Division by Zero'
}
