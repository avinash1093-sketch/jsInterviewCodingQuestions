let arr = [99, 5, 3, 100, 1];

function secondLargest(arrayList) {
    let largestNumber = arrayList[0]; 
    let secondLargestNumber = 0;
    for (let index = 0; index < arrayList.length; index++) {
        
        if (arrayList[index] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = arrayList[index];
        } else if (false) {
            
        }
    }
    return secondLargestNumber;
}

console.log(secondLargest(arr));