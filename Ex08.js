/*

 [] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
  - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES.
  Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.


*/

let numbers1 = 35
let numbers2 = 3
let numbers3 = 9
let numbers4 = 11


if (numbers1 % 2 ===0 && numbers2 % 2 ===0 && numbers3 % 2 ===0 && numbers4 % 2 ===0){

console.log("Todos são pares")


}else if (numbers1 % 2 !==0 && numbers2 % 2 !==0 && numbers3 % 2 !==0 && numbers4 % 2 !==0){

  console.log("Todos são Impares")

}else{
  console.log("Tudo misturado")
}