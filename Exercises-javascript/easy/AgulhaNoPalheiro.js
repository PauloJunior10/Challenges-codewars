
// Escreva uma função findNeedle() que receba um array cheio de lixo, mas contendo uma "agulha"

// Depois que sua função encontrar a agulha, ela deve retornar uma mensagem (como uma string) que diz:

// "encontrou a agulha na posição " mais o índice em que encontrou a agulha, então:

// exemplo: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// DESAFIO, faça com que o resultado da função seja o mesmo independente de o array estar em maiúscula ou minúscula

const findNeedle = ( array )  => {
   

  let maiscula = array.map(obj => obj.toUpperCase())

  return "encontrou a agulha na posição " + maiscula.indexOf("NEEDLE")
}

const arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

console.log(findNeedle(arr))