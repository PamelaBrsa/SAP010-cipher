import cipher from './cipher.js';

function encrypt() {
  const entrada1 = document.querySelector(".input-1").value.toUpperCase();
  const entrada3 = parseInt(document.querySelector('.shiftInput').value)
  const textoCod = cipher.encode(entrada3, entrada1);
  document.querySelector('.input-2').innerText = textoCod;
 
}
const encryptBtn = document.querySelector('.encrypt');
encryptBtn.addEventListener('click', encrypt);

function decrypt() {
  const entrada1 = document.querySelector(".input-1").value.toUpperCase();
  const entrada3 = parseInt(document.querySelector('.shiftInput').value)
  const textoDecod = cipher.decode(entrada3, entrada1);
  document.querySelector('.input-2').innerText = textoDecod;

}

const decryptBtn = document.querySelector('.decrypt');
decryptBtn.addEventListener('click', decrypt);









