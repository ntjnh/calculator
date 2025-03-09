// Check if a number has more than 12 digits
export default function digitLength(n) {
    return (n.length > 12 || n.toString().length > 12) ? true : false
}
