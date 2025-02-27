//- any cobination in element which sums up to give value 10
let x = [1,2,3,4,6,8,2,5,5];
(function test(arr){
 let number = arr[0];
 for(let i = 1;i<=arr.length;i++){
     let sumValue= number + arr[i];
     if(sumValue !== 10){
         number = arr[i]
     } else {
         console.log(`Addition of Number${number} and ${arr[i]} is ${sumValue}`)
     }
 }
})(x);