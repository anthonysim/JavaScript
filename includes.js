const numbers = [1, 2, 3, 4]

function includes(array, searchElement) {
    for (let i = 0; i < numbers.length; i++)
        if (searchElement === numbers[i])
        return true
    return false
}

console.log(includes(numbers, 1));