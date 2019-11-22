let array1 = Array.from(new Array(100000), (_, index) => index);

let array2 = Array.from(array1, (x, index) => x + index)

// console.log(array2);
let targetArray = array1.concat(array2);
let startTime = new Date().getTime();


// let res = deWeight(targetArray);
// let res = deWeight1(targetArray);
// let res = deWeight2(targetArray);
let res = deWeight3(targetArray);


console.log(`耗时:${new Date().getTime() - startTime}ms`);
console.log(res);
array2;

function deWeight(arr) {
    let deWeightArr = [];
    arr.forEach(item => {
        if (deWeightArr.indexOf(item) === -1) {
            deWeightArr.push(item);
        }
    })
    return deWeightArr;
}

function deWeight1(arr) {
    let tarA = arr.concat().sort();
    let deWeight = [tarA[0]];
    tarA.forEach(item => {
        if (deWeight[deWeight.length -1] !== item) {
            deWeight.push(item);
        } 
    })
    return deWeight;
}

function deWeight2(arr) {
    let deWeight = [];
    arr.forEach(item_s => {
        
        if (!deWeight.some(item_t => item_t === item_s)) {
            deWeight.push(item_s)
        }
        
    })
    return deWeight;
}

function deWeight3(arr) {
    return Array.from(new Set(arr));
}


