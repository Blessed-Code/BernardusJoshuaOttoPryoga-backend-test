function Generator(input) {
    if (input <= 0) {
        return -1
    }

    let strInput = String(input)
    let arrInput = strInput.split("")
    let result = 0
    for (let i = 0; i < arrInput.length;i++) {
        result += Number(arrInput[i])
    }
    result += input
    return result
}



console.log(Generator(1));