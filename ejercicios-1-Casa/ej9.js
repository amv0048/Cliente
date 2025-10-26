const countBy = ((x, y) => {
    let lista = [];
    if (x < 0 || y < 0) return [];
    for (let i = 1; i <= y; i++) {
        if (x % i == 0) lista.push(i);
    }
    return lista;
});

console.log(countBy(40, 10));
