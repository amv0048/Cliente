const suma = ((arr) => {
    let sum = arr[0] + arr[1];
    for (let i = 1; i < arr.length-1; i++) {
        if (sum < arr[i] + arr[i+1]) sum = arr[i] + arr[i+1];
    }
    return sum;
});

let test = [1,2,3,4,5];
console.log(suma(test));
