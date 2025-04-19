// const array1 = ["a", "b", "c"];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]


// Third largest number
let arr = [1, 14, 2, 16, 10, 20];

function thirdLargest(params) {
    let sortArray = params.sort((a,b)=> a-b);
    return sortArray[sortArray.length - 3];
};
// console.log(thirdLargest(arr));
thirdLargest(arr)
