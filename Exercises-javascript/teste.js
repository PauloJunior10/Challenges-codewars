// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Verifique se uma string tem a mesma quantidade de 'x's e 'o's. O método deve retornar um booleano e não diferenciar maiúsculas de minúsculas. A string pode conter qualquer char.
// Exemplos de entrada/saída:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    str = str.toLowerCase()

   
}

const str = "xooxx"
const quantidadeX = str.filter(num => num === 'x')
   console.log(quantidadeX)


