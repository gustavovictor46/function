function fatorial(n){
    numero = n
    for (let i = 1; i <n; i++){
        numero *= i;
    }
    return numero
}

console.log(fatorial(4));