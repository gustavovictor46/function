function maiorDeTres(a,b,c){
    let i = 0
    let valores = [a,b,c];
    let maior = valores[0];

    while (i < valores.length){
        if (valores[i] > maior){
            maior = valores[i];
        }
        i++;
    }
     console.log(maior);
}

maiorDeTres(5,9,2);
maiorDeTres(-3, -7, -1);
maiorDeTres(1231231321, 2, -12578);