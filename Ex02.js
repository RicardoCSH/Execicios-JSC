/* 
[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
*/


let pessoa ={
    name: 'Ricardo',
    country: 'Brasileiro'

}

if(pessoa.country === 'Brasileiro'){
    console.log(`Ele e ${pessoa.country}`)
}
else{
    console.log(`Não é ${pessoa.country}`)
}