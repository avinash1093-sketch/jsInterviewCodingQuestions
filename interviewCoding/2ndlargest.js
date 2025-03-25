let arrNumber = [99, 5, 3, 100, 1];

function secondLargest(data) {
    let largestNo = data[0];
    let secondLargestElement = 0;

for (let i = 0; i < data.length; i++) {

        if(data[i] > largestNo){
            secondLargestElement = largestNo;
            largestNo = data[i]
    
        } else if(data[i] < largestNo && data[i] > secondLargestElement ) {
            secondLargestElement = data[i]
        }
}
return secondLargestElement;
}
console.log(secondLargest(arrNumber));