let charData = "avinashtiwari";

function uniqueCharacters(str) {
  const uniqueChars = [];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if(!uniqueChars.includes(str[i])){
        uniqueChars.push(str[i]);
    }
  }
  return uniqueChars.join("");
}
console.log(uniqueCharacters(charData));
