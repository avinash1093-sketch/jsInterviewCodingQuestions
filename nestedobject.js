let objnest = {
    level1: {
        level2: {
            level3: {
                level4:{
                    level5: 'level6'
                }
            }
            }
        }
    }

function level(params) {
        for (let key in params){
            if(typeof params[key] === 'object') {
                console.log(key);
                level(params[key]);
            } else {
                console.log(key);
            }
    }
}
console.log(level(objnest));