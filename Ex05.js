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
    nota: 0

},
{

    nome: "Rita",
    idade: 24,
    sexo: "fem",
    profissao: "supo",
    nacionalidade: "Brasileira",
    nota: 0

},
{

    nome: "Rael",
    idade: 2,
    sexo: "masc",
    profissao: "escola",
    nacionalidade: "Holandesa-brasileira",
    nota: 0

},
{
    nome: "Ana",
    idade: 2,
    sexo: "feminino",
    profissao: "diarista",
    nacionalidade: "Brasileira",
    nota: 0
}]

for (let i = 0; i < pessoa.length; i++) {

    if (pessoa[i].idade >= 18) {
        pessoa[i].nota += 5


    }else{
        console.log("Não há idade suficiente")
    }

    if (pessoa[i].nacionalidade === "Brasileira") {
        pessoa[i].nota += 5
    }else{
        console.log("Não é brasileiro")
    }

        switch (pessoa[i].nota) {
            case 0:
                console.log("Reprovado")
                break

            case 1:
                console.log("Reprovado estudar muito")
                break
            case 2:
                console.log("Reprovado mais esforco")
                break
            case 3:
                console.log(`${pessoa[i].nome}:Reprovado tente novamente um pouco mais`)

            case 5:
                console.log(`${pessoa[i].nome}:${pessoa[i].nota} faltou pouco`)

                break

            case 10:
                console.log(`${pessoa[i].nome}:${pessoa[i].nota} Otimo aprovadão`)

                break

            default:
                console.log(`nota ${pessoa[i].nota}: Verifique seus dados novamente`)
                break

        }


    }

