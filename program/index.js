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

let genMap = new Set()
let currJuncNum = 0
let counter = 1
while (currJuncNum < 5000) {
    let junNum = Generator(counter)
    if (!genMap.has(junNum)) {
        genMap.add(junNum)
    }
    currJuncNum = junNum
    counter++
}

let selfMap = new Set()
counter = 1
let result = 0
while(counter < 5000) {
    if (!genMap.has(counter)) {
        selfMap.add(counter)
        result += counter
    }
    counter++
}

console.log(genMap, "genMap");
console.log(selfMap, "selfMap");
console.log(result);