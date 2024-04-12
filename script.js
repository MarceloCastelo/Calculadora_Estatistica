function calcular() {
    var entradaDados = document.getElementById("dadosEntrada").value;
    var arrayDados = entradaDados.split(',').map(Number).sort((a, b) => a - b);

    var soma = arrayDados.reduce((acc, curr) => acc + curr, 0);
    var media = soma / arrayDados.length;

    var mediana = calcularMediana(arrayDados);
    var moda = calcularModa(arrayDados);

    var resultadoHTML = `<p class='mb-2'>Média: ${media}</p>
                         <p class='mb-2'>Mediana: ${mediana}</p>
                         <p>Moda: ${moda}</p>`;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}

function calcularMediana(arrayDados) {
    var meio = Math.floor(arrayDados.length / 2);
    return arrayDados.length % 2 === 0 ? (arrayDados[meio - 1] + arrayDados[meio]) / 2 : arrayDados[meio];
}

function calcularModa(arrayDados) {
    var mapaFrequencia = {};
    arrayDados.forEach(elemento => {
        mapaFrequencia[elemento] = (mapaFrequencia[elemento] || 0) + 1;
    });

    var maxFrequencia = Math.max(...Object.values(mapaFrequencia));
    var moda = Object.keys(mapaFrequencia).filter(chave => mapaFrequencia[chave] === maxFrequencia);
    return moda.join(', ');
}
