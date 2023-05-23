/* DESAFIO

  A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir
  na tela as seguintes informações: o nome do cliente, o endereço de entrega
  e o total do pedido, incluindo a taxa de entrega, fixa de R$ 5.00.
*/

/* ENTRADA

  Entrada deverá receber os valores que preencherão o objeto JSON , ele deverá
  conter as seguintes propriedades:

  cliente: uma string com o nome do cliente.
  endereco: uma string com o endereço de entrega.
  quantidade de itens: indica a quantidade de itens que devem ser lidos no 
  array a seguir.
  itens: um array de objetos que representam um item do pedido, com as 
  seguintes propriedades:
  nome (string)
  preço (number)

  Importante: a entrada deverá ocorrer de acordo com a ordem de informações
  fornecidas acima.
*/

/* SAÍDA

  Deverá retornar uma mensagem (string) que informa o nome do cliente, o 
  endereço de entrega e o total do pedido, da seguinte maneira: 
  
  Pedido: ${pedido.cliente}
  Endereço de entrega: ${pedido.endereco}
  Total: R$ ${totalCalculado}
*/

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
  cliente: "João",
  endereco: "Rua B, 456",
  itens: [],
  taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const pedidoEntrada = [
  {
    "nome": "Hamburguer",
    "preco": "15.0"
  },
  {
    "nome": "Batata frita",
    "preco": "8.0"
  },
];

const quantidadeItens = parseInt("2");
let i = 0;
while (pedido.itens.length < quantidadeItens) {
  const nomeItem = pedidoEntrada[i].nome;
  const precoItem = parseFloat(pedidoEntrada[i].preco);
  pedido.itens.push({ nome: nomeItem, preco: precoItem });
  i+=1;
};

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.
let totalCalculado = 0;
pedido.itens.forEach((item) => totalCalculado += item.preco);
totalCalculado += 5 //Taxa de entrega

//TODO: Imprima a saída no padrão descrito neste desafio.
console.log(`Pedido: ${pedido.cliente}`);
console.log(`Endereço de entrega: ${pedido.endereco}`);
console.log(`Total: R$ ${totalCalculado.toFixed(2)}`);