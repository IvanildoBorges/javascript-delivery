/* DESAFIO 

    Um restaurante está buscando otimizar a entrega dos pedidos, e para isso
    precisa de um programa que encontre o pedido mais próximo a partir de
    uma lista de pedidos. O programa deve exibir o nome e o tipo de comida
    do pedido mais próximo.

    Seu desafio é criar um código em JavaScript que manipule um array com
    três objetos JSON, contendo as informações de cada pedido (nome, tipo 
    e distância).
*/

/* ENTRADA 

    A entrada consiste em uma lista com 3 pedidos, os quais terão as 
    seguintes propriedades:

    nome: o nome do cliente, representado por uma string;
    tipo: o tipo de comida do restaurante, representado por uma string.
    distancia: a distância em quilometros do pedido até o restaurante, 
    representado por um valor de 0 a 15.
*/

/* SAÍDA

    O programa deve exibir no console um texto contendo o nome do cliente
    e o tipo do pedido mais próximo encontrado na lista de pedidos.
    Conforme o exemplo abaixo:

    O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}
*/


const pedidos = [
    {
        nome: "Rafael",
        tipo: "Pizza",
        distancia: 3.5,
    },
    {
        nome: "Julia",
        tipo: "Sorvete",
        distancia: 1.2,
    },
    {
        nome: "Carla",
        tipo: "Hamburguer",
        distancia: 0.9,
    },
];

//TODO: Usando o array acima identifique o pedio mais próximo (menor distância).
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570
function verificaMaisProximo(arrayPedidos) {
    const pedido = maisProximo = arrayPedidos.reduce(
        (valorInicial, valorAtual) => (
            valorInicial.distancia < valorAtual.distancia
        ) ? valorInicial : valorAtual
    );
    return `O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}`;
}

//TODO: Imprima a saída de acordo com o enunciado deste desafio.
console.log(verificaMaisProximo(pedidos));