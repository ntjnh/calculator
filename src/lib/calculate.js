export default function calculate(arr) {
    result = arr[0]
    // Loop through every 2nd element (operator) in the calc array
    for (let i = 1; i < arr.length; i += 2) {
        switch (arr[i]) {
            case '+': result += arr[i + 1]
                break
            case '-': result -= arr[i + 1]
                break
            case '/': result /= arr[i + 1]
                break
            case '*': result *= arr[i + 1]
                break
        }
    }
    return result
}
