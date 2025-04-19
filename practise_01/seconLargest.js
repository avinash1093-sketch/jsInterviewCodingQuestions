let arrNumber = [5, 99, 3, 100, 1];

function secondLargest(arr) {
  let largestNo = arr[0];
  let secondLargest = 0;
  arr.forEach((element) => {
    if (element > largestNo) {
      secondLargest = largestNo;
      largestNo = element;
    }
  });
  return `Second Largest: ${secondLargest} and Lagest: ${largestNo}`;
}
console.log(secondLargest(arrNumber));
