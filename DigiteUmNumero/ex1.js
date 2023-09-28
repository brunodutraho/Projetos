const numero = Number(prompt('Digite um número'));
const numdig = document.getElementById('numeroDigitado');
const raizQuadrada = document.getElementById('raizQuadrada');
const nInteiro = document.getElementById('nInteiro');
const nan = document.getElementById('nan');
const nArredondadoCima = document.getElementById('nArredondadoBaixo');
const nArredondadoBaixo = document.getElementById('nArredondadoCima');
const casaDecimal = document.getElementById('casaDecimal');

numdig.innerHTML = numero;
raizQuadrada.innerHTML = `<p>A raiz quadrada: ${numero ** 0.5}</p>`;
nInteiro.innerHTML = `<p>É um número inteiro: ${Number.isInteger(numero)}</p>`;
nan.innerHTML = `<p>É NaN: ${isNaN(numero)}</p>`;
nArredondadoCima.innerHTML = `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
nArredondadoBaixo.innerHTML = `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`
casaDecimal.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`

