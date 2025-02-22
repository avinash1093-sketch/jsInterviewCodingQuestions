let arr = [99, 5, 3, 100, 1];

// (function largestElement(elem) {
//   //  let sortedArray = elem.sort((a,b) => b-a);
//   //  console.log('largest number', sortedArray[0])

//   //--Without sort()
//   let largestNo = elem[0];
//   for (let i = 1; i < elem.length; i++) {
//     if (elem[i] > largestNo) {
//       largestNo = elem[i];
//     }
//   }
//   console.log("largest number", largestNo);
// })(arr);

//---Second Largest---//
(function secondLargestElement(elem) {
    //  let sortedArray = elem.sort((a,b) => b-a);
    //  console.log('largest number', sortedArray[1])
  
    //--Without sort()
    let largestNo = elem[0];
    let secondLargestElement = 0;
    for (let i = 1; i < elem.length; i++) {
      if (elem[i] > largestNo) {
        secondLargestElement = largestNo;
        largestNo = elem[i];
      } else
      if (elem[i] < largestNo && elem[i] > secondLargestElement) {
        secondLargestElement = elem[i];
      }
    }
    console.log("secondlargest number", secondLargestElement);
    console.log("largest number", largestNo);
    // console.log("Third largest number", secondLargestElement);
  })(arr);
