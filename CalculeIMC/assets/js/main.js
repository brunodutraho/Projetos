const form = document.querySelector('#formimc')

// Capturar evendo de submit do form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
   
    if (!peso) {
        resultadoCalc('Peso inválido', false);
        return;
    }

    if (!altura) {
        resultadoCalc('Altura inválida', false);
        return;
    }

    const imc = calcImc(peso, altura);
    const nivel = nivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivel}).`;
    resultadoCalc(msg, true);
});

function nivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc > 18.5) return nivel[0];
    
}

function calcImc (peso, altura) {
    const imc = peso / altura ** 2;
        return imc.toFixed(2);
}

//Somente para criar o paragrafo
function criaP () {
    const p = document.createElement('p');
    return p;
}

//para adcionar a mensagem no resultado do HTML
function resultadoCalc (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
