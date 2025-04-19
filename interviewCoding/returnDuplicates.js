// Array element numbers
var arr = [1, 2, 3, 2, 4, 5, 4, 5];

function repitativeData(arr) {
  return arr.filter((elem, index) => {
    return arr.indexOf(elem) !== index;
  });

  // Method 2
  // let newArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //         if (arr[i] === arr[j]) {
  //            console.log(`Elem at index ${i} is ${arr[i]} and ${j} is ${arr[j]} => duplicate`);
  //            newArr.push(arr[i]);
  //         }
  //     }
  // }
  // return newArr;
}
console.log(repitativeData(arr));

// String

let strWord = "google";

function repitativeDataString(str) {
  let strArr = str.split("");
  return strArr
    .filter((elem, index) => strArr.indexOf(elem) !== index)
    .join("");
}
console.log(repitativeDataString(strWord));

function repeatedElem(arrList) {
  let newArr1 = [];
  let newArr2 = [];
  for (let i = 0; i < arrList.length; i++) {
    if (!newArr1.includes(arrList[i])) {
      newArr1.push(arrList[i]);
    } else {
      newArr2.push(arrList[i]);
    }
  }
  return newArr2;
}

console.log(repeatedElem(arr));
