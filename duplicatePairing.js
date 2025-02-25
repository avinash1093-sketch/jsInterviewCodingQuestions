let ad = [1, 2, 1, 2, 3, 4, 3, 4];
(function duplicatePairs(data) {
  return data.filter((elem, index) => {
    if (data.indexOf(elem) !== index) {
      console.log(`${elem}:${data[index]}`);
    }
  });
})(ad);
