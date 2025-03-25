let objnest = {
  level1: {
    level2: {
      level3: {
        level4: {
          level5: {
            level6: 'level7'
          },
        },
      },
    },
  },
};

function levelNest(obj) {

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      console.log(key);
      levelNest(obj[key]);
    } else if (typeof obj[key] === 'string'){
        console.log(key);
    }
  }
}
levelNest(objnest);
