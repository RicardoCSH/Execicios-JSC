/* 

[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
 Então ele também irá gerar um número aleatório entre 1 e 10,
 e verifica se a pessoa ganhou ou não. Em caso de ter ganhado,
  mostra o prêmio, se não ganhou, mostra outra mensagem.

*/


const number = Math.floor(Math.random() * 11);

const sorteio = Math.floor(Math.random() * 11);



if(number === (sorteio)){
    console.log("Voce é o ganhador")
    console.log(`${number} numero sorteado: ${sorteio}`)

}
else{
    console.log("Você não ganhou nada")
    console.log(sorteio)
    console.log(number)
}
