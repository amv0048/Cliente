let lista = ["Peter"];


const likes = ((lista) => {
    let Peter = false;
    let Jacob = false;
    let Alex = false;
    let John = false;
    let Mark = false;
    let Max = false;
    for (let i = 0; i < lista.length; i++){
        if (lista[i] == ("Peter")) Peter = true;
        else if (lista[i] == ("Jacob")) Jacob = true;
        else if (lista[i] == ("Alex")) Alex = true;
        else if (lista[i] == ("Max")) Max = true;
        else if (lista[i] == ("Mark")) Mark = true;
        else if (lista[i] == ("John")) John = true;
    }
    if (Peter) return "Peter likes this";
    else if (Alex && Jacob && Mark && Max) return "Alex, Jacob and 2 others like this";
    else if (Max && John && Mark) return "Max, John and Mark like this";
    else if (Jacob && Alex) return "Jacob and Alex like this";
    else return "no one likes this";
});

console.log(likes(lista));
