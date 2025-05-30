//function nomeDaFuncao(params) {
//    corpo(bloco do código)
//  return resultado;
// }

// Exemplo real

function cumprimentar(nome) {
    let resultado = (`Olá ${nome}! Sua encomenda chegou!`);
    console.log(resultado);
    return resultado;
}

cumprimentar(`Pedro`);

let valores = [2,3,10,1,7,1];
let i = 0;
let maior = valores[0];

while (i < valores.length){
    if (valores[i] > maior){
        maior = valores[i];
    }
    i++;
}
