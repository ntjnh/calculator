import clearAll from './clearAll'

// For use when digitLength returns true
export default function digitLimit() {
    const calculation = document.querySelector('.calculation')

    clearAll()
    calculation.textContent = 'Digit Limit Met'
}
