const filtro = ((arr) => {
    for (let i = arr.length-1; i >= 0; i--) {
        if ((arr[i].length) > 4) arr.splice(i, 1);
    }
    console.log(arr);
});

filtro(["Manu","Alberto","Marcos","Javi","Ricardo","Gabi"]);