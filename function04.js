function inverteString(str){
  let nom = str.split('');
  let inversao = '';
  for (let i = nom.length - 1; i >= 0; i--){
    inversao += nom[i]
  }
  return inversao;

}

console.log(inverteString("Thiago"));