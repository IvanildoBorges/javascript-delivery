/* DESAFIO 

    Você é um desenvolvedor de um aplicativo de delivery de comida muito popular na
    sua cidade. O aplicativo permite que os usuários encontrem e peçam comida de
    seus restaurantes favoritos diretamente do conforto de suas casas.

    Um dos seus colegas de trabalho, que é responsável pela integração de novos
    restaurantes ao aplicativo, pediu sua ajuda para criar um código que exiba o 
    restaurante com a melhor avaliação em uma página web. Para isso, ele forneceu
    um array de objetos JSON contendo informações sobre dois restaurantes.

    Você, como um excelente desenvolvedor, decide ajudar seu colega de trabalho
    com este desafio e começa a escrever o código necessário para exibir as 
    informações na tela. Seu desafio é criar um código em JavaScript que
    percorra uma array de dois objetos JSON contendo informações sobre os
    restaurantes, exibindo o nome e a avaliação do restaurante com a melhor
    avaliação.
*/

/* ENTRADA 

    A entrada do seu código será os valores (nome e avaliação) dos seus objetos
    JSON, contendo informações necessárias sobre cada restaurante. Cada objeto
    terá as seguintes propriedades:

    nome: o nome do restaurante, representado por uma string;
    avaliacao: a avaliação média do restaurante, representado por um número 
    de 0 a 5.
*/

/* SAÍDA

    A saída do seu código será o nome e a avaliação do restaurante melhor 
    avaliado. Lembre-se de formatar a avaliação com 1 casa decimal após a 
    virgula, conform o exemplo a seguir:
    Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao}

    Caso eles tenham a mesma avaliação, imprima o primeiro a ser lido na Entrada.
*/


const restaurantes = [
    {
        nome: "Bar do Zé", 
        avaliacao: 3.5
    },
    {
        nome: "Pizzaria Quero+", 
        avaliacao: 4.8
    },
    {
        nome: "Beco do quiejo", 
        avaliacao: 4.2
    },
    {
        nome: "Bar do Raimundo", 
        avaliacao: 4.8
    },
];
  
//TODO: Usando o array acima identifique o restaurante com a melhor avaliação.
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570
function verificaMelhorAvaliado(arrayDeAvaliacaoes) {
    let restaurante = {};
    let maiorNota = 0;

    //A função every() se comporta exatamente como forEach(), exceto que ela para de 
    // iterar pelo array sempre que a função callback retorna um valor falso .
    arrayDeAvaliacaoes.every((element) => {
        if (element.avaliacao > maiorNota) {
            maiorNota = element.avaliacao;
            restaurante = element;
            console.log("IF", restaurante);
            return true
        } else if (element.avaliacao === maiorNota) {
            return false;
        }
    })

    return `Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao.toFixed(1)}`;
}

//TODO: Imprima a saída de acordo com o enunciado deste desafio.
console.log(verificaMelhorAvaliado(restaurantes));