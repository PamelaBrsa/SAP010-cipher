const cipher = { encode, decode }
function encode(entrada3, entrada1) {

  let criptografado = "";

  if (typeof entrada1 !== "string" || typeof entrada3 !== "number") {
    throw new TypeError();
  }

  for (let i = 0; i < entrada1.length; i++) {
    const position = entrada1.charCodeAt(i)
    const letra = String.fromCharCode(((position - 65 + entrada3) % 26) + 65);


    criptografado += letra;
  }

  return criptografado;



}

function decode(entrada3, entrada1) {

  let descriptografado = "";

  if (typeof entrada1 !== "string" || typeof entrada3 !== "number") {
    throw new TypeError();
  }
  for (let c = 0; c < entrada1.lenght; c++) {
    const position = entrada1.charCodeAt(c)
    const letra = String.fromCharCode(((position - 90 - entrada3) % 26) + 65);


    descriptografado += letra;

  }

  return descriptografado;

}

export default cipher;
