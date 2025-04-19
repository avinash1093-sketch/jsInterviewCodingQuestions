

(function countVowels (str){
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (vowels.includes(str[index])){
            count++;
        }
        
    }
    console.log(count)
})(vowelString);