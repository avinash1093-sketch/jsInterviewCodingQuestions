function factorial(n) 
{
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4)); 

//- second method
function factorial(num) {
    let answer = 1;
    for (let i = 2; i <= num; i++) {
        answer *= i;
    }
    return answer;
}

console.log(factorial(7));  

