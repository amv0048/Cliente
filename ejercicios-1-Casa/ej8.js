const getArr = ((arr) => {
    let res = [];
    let suma = 0;
    for (const element of arr) {
        suma += element;
        res.push(suma);
    }
    return res;
});

let test = [1,2,3,4,5,6];

console.log(getArr(test));
 