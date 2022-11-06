// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Verifique se uma string tem a mesma quantidade de 'x's e 'o's. O método deve retornar um booleano e não diferenciar maiúsculas de minúsculas. A string pode conter qualquer char.
// Exemplos de entrada/saída:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// 1 modo
// function XO(str) {
//     let sum = 0;
//     for(let i=0; i<str.length; i++){
//       if(str[i].toLowerCase() == 'x') sum++;
//       if(str[i].toLowerCase() == 'o') sum--;
//     }
//     return sum == 0 ;
//   }

// 2 modo
function XO (str){
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }


  console.log(XO("xxoo"))


