let arr = [99, 5, 3, 100, 150, 1, 1000, 4];

function secondLargest(arrayList) {
    let sortArray = arrayList.sort((a,b) => a-b);
  let largestNo = sortArray[0];
  let secondLargest = 0;
  for (let index = 0; index < sortArray.length; index++) {
    if (sortArray[index] > largestNo) {
      secondLargest = largestNo;
      largestNo = sortArray[index];
    } else if (
        sortArray[index] < largestNo &&
        sortArray[index] > secondLargest
    ) {
      secondLargestElement = sortArray[index];
    }
  }
  return `Largest:${largestNo} and secondLargest:${secondLargest}`;
}

console.log(secondLargest(arr));
