/*
[ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,
a pessoa deve ser maior de idade e brasileira para ser aprovada.Faça um programa onde os jurados vão dar a explicação
 para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

*/


let pessoa = [{

    nome: "Ricardo",
    idade: 35,
    sexo: "masc",
    profissao: "suporte",
    nacionalidade: "Brasileira",


},
{

    nome: "Rita",
    idade: 34,
    sexo: "fem",
    profissao: "supo",
    nacionalidade: "Brasileir",


},
{

    nome: "Rael",
    idade: 2,
    sexo: "masc",
    profissao: "escola",
    nacionalidade: "Brasileira",


},
{
    nome: "Ana",
    idade: 2,
    sexo: "feminino",
    profissao: "diarista",
    nacionalidade: "Brasilei",

}]

for(i=0;i < pessoa.length;i++){

if (pessoa[i].nacionalidade == "Brasileira" && pessoa[i].idade >= 18) {
    console.log(`Parabens ${pessoa[i].nome} voce é do brasil e tem idade acima de 18 e merece nota 10`)


} else if (pessoa[i].nacionalidade == "Brasileira" && pessoa[i].idade < 18) {

    console.log(`${pessoa[i].nome} voce é brasileiro mas não tem idade acima de 18`)

} else if (pessoa[i].nacionalidade !== "Brasileira" && pessoa[i].idade >= 18) {

        console.log(`${pessoa[i].nome} voce não é brasileiro mas, tem idade acima de 18`)
    

} else {

    console.log(`${pessoa[i].nome} não tem idade e não é do brasil`)
}

}