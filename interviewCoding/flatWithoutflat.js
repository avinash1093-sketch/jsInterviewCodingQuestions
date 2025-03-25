let arr1 = [1, 2, 3, [4, 5, 6,[8,[ 9, 10]]]];

function flatArr(arr) {
//   let reduceArr = arr.reduce((acc,crr)=>acc.concat(crr),[]).reduce((ac,cl)=>ac.concat(cl),[]).reduce((ac1,c2)=>ac1.concat(c2),[]).join(',');
  let reduceArr = arr.reduce((acc,crr)=> acc.concat(crr),[]).reduce((acc,crr)=> acc.concat(crr),[]).reduce((acc,crr)=> acc.concat(crr),[]).join(',');

  return reduceArr;
}

// function flatArr(arr) {
//     let reduceArr = arr.flat();
//     return reduceArr;
// }
let data = flatArr(arr1);
console.log(data);
