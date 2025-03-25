let str = "hello world" 
// -> h1e1l3o2w1r1d1
function stringCount(arrayData) {
    const data = arrayData.split(' ')[0] + arrayData.split(' ')[1]
    let arrJoin = []
    let stringObj = {};
    for (let i = 0; i< data.length; i++){
        if (stringObj[data[i]]){
            stringObj[data[i]] += 1
        } else {
            stringObj[data[i]] = 1
        }
    }
    for (let count in stringObj) {
        arrJoin.push(`${count}${stringObj[count]}`)
    }
    return arrJoin.join('')
}
console.log(stringCount(str))