let firstWord = 'Mary';
let secondWord = 'Army';

(function isAnagram(f,s){
let a = f.toLowerCase();
let b = s.toLowerCase();

a = a.split('').sort().join('');
b = b.split('').sort().join('')
console.log(a===b);
})(firstWord,secondWord);