const arr = [[12,45,75], [54,45,2],[23,54,75,2]];

(function minAndMax(arrayData){
    let flatArray = arrayData.flat(Infinity);
    console.log(flatArray);
    console.log('Min: ',Math.min(...flatArray));
    console.log('Max: ',Math.max(...flatArray));
})(arr);