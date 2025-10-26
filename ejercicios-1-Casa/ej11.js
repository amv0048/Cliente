
let test1 = [1,3,5,5,7];
let test2 = [2,0,4,6,8];

const noRepe = ((arr1, arr2) => {
    for (const element of arr1) {
        if (!arr2.includes(element)) arr2.push(element);
    }
    return arr2.sort();
    
});

console.log(noRepe(test1, test2));