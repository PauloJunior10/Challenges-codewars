// Leet Code 704 Busca binária
// https://www.youtube.com/watch?v=ig-ZjCO8Uk8&list=PL1F2RTnUh3hZmqrlafKclRQHzNr-U0o1f&index=1&t=7s&ab_channel=CassianoVellames

// Dado um array de inteiro chamado "nums" a qual ele é sorteado de forma ascendente, e um inteiro "target", escreva uma função para procurar o target dentro de nums. Se target existir então retorne seu index, do contrário, retorne -1.

// exemplo
// num = [1,2,3,4,5,6,7,8,9,0]
// target = 9
// index = 8

// ------------------------------- EXERCÍCIO SIMPLES


// const array = [1,2,3,4,5,6,7,8,9,10,11]

// let search = (nums, target) => { // function search
//     for (let i = 0; i< nums.length; i++){
//         if(nums[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(search(array,5))

// ----------------------EXERCÍCIO COMPLEXO
// E se eu precisar encontrar o número 435.973 em um vetor de 100000000 de posições?
//  O método seguinte só funciona se o array estiver ordenado de forma ordenada

const array = [1,2,3,4,5,6,7,8,9,10,11]