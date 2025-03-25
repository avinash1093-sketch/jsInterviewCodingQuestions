// let ad = [1, 2, 1, 2, 3,2, 4, 3,3, 4,6];
let ad = ['a','b','a','b','c'];

// (function duplicatePairs(data) {
//   return data.filter((elem, index) => {
//     if (data.indexOf(elem) !== index) {
//       console.log(`${elem}:${data[index]}`);
//     }
//   });
// })(ad);

(function frequency(arr) {
    const freq = {};
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]] += 1;
        } else {
            freq[arr[i]] = 1;
        }
    }
    console.log(freq);
    return freq;
})(ad);
