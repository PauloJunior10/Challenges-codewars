//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

// Você pode encontrar a agulha no palheiro?

// Escreva uma função findNeedle() que receba um array cheio de lixo, mas contendo uma "agulha"

// Depois que sua função encontrar a agulha, ela deve retornar uma mensagem (como uma string) que diz:

// "encontrou a agulha na posição " mais o índice em que encontrou a agulha, então:

// exemplo: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }

  const arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
  
  console.log(findNeedle(arr))