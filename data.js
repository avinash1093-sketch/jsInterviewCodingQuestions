// Remove repitatitative/duplicate element

var arr = [2, 3, 4, 5, 2, 6, 3, 5];
function repitativeData(arr) {
  //Type 1
  return arr.filter((value, index) => {
    console.log(
      `Index of element ${value} is ${arr.indexOf(value)} and Index: ${index}`
    );
    return arr.indexOf(value) === index;
  });
  //Type 2
  return [...new Set(arr)]; // In Set each value occur once.
}
console.log(repitativeData(arr));

// Get second largest element
function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
// Example usage:
let array = [34, 22, 67, 88, 76, 99];
const secondLargest = findSecondLargest(array);
console.log("Second largest element:", secondLargest);

// Largest element
let arrays = [34, 22, 67, 88, 76, 99];
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
// Example usage:
const largest = findLargest(array);
console.log("Largest element:", largest);

// second largest using sort
let data = [34, 22, 67, 88, 76, 99];
function secondLargest(arr) {
  arr.sort();
  let largestData = arr.reverse();
  return largestData[largestData.length - (largestData.length - 1)];
}
// Example usage:
const largestelem = findLargest(array);
console.log("Largest element:", largestelem);
