let x = 'welcome to this javascript Guide!';
(function reverseString(str){
 let reverseList = []
 let arrayList = str.split(' ');
 console.log(arrayList)
 for (let i = 0;i<arrayList.length;i++){
  reverseList.push(arrayList[i].split('').reverse().join(''));
 }
 console.log(reverseList);
})(x);