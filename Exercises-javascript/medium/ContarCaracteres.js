//  https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// A ideia principal é contar todos os caracteres que ocorrem em uma string. Se você tem uma string como "aba", então o resultado deve ser {'a': 2, 'b': 1}. E se a string estiver vazia? Então o resultado deve ser um literal de objeto vazio, {}.


function count (obj) {  
    let count = {};
    obj.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }
  
  // function count (string) {
  //   var result = {};
    
  //   for(let i = 0; i < string.length; i++) {
  //     if(result.hasOwnProperty(string[i])){
  //       result[string[i]] += 1;
  //     } else {
  //       result[string[i]] = 1;
  //     }
  //   }
    
  //   return result;
  // }
  
  console.log(count("abelha"))