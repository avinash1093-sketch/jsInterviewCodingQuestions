function removeDuplicates(arr) 
{
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) 
  {
      if (!uniqueArray.includes(arr[i]))
      {
          uniqueArray.push(arr[i]);
      }
  }
  return uniqueArray;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));

// method 2 for duplicates
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