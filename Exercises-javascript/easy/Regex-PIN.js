// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// Os caixas eletrônicos permitem códigos PIN de 4 ou 6 dígitos e os códigos PIN não podem conter nada além de exatamente 4 dígitos ou exatamente 6 dígitos.

// Se a função receber uma string de PIN válida, retorne true, caso contrário, retorne false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
  
    let pinLen = pin.length;
    if(pinLen !=4 || pinLen !=6){
        return false
    }

        for (let i in pin)
        if (pin[i] > '9' || pin[i] < '0')
        return false;

  
  }

 console.log(validatePIN([1,2,3,4,5,6]))