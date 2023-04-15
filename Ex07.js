/*

[ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, 
- é um número primo e impar, - é par e divisível por 5.

*/


let number = 27

if (number % 2 === 0) {

    if (number % 5 === 0)console.log("Esse numero é par e divisivel por 5")
    else console.log("O numero é par e Não é divisivel por 5")

}else {

    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log("Ele é impar, mas não é primo")
            break
        } else {
            if (i === number -1) 
                console.log("Ele é um numero primo")           
        }
}