let arr1 = [1, 2, 3, [4, 5, [8, 9]]];

// function flatArr(arr) {
//   let reduceArr = arr.reduce((acc,crr)=>acc.concat(crr),[]).reduce((ac,cl)=>ac.concat(cl),[]);
//   return reduceArr;
// }

function flatArr(arr) {
    let reduceArr = arr.flat();
    return reduceArr;
}
let data = flatArr(arr1);
console.log(data);
