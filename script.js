function calcular() {
    var inputData = document.getElementById("dataInput").value;
    var dataArray = inputData.split(',').map(Number).sort((a, b) => a - b);

    var soma = dataArray.reduce((acc, curr) => acc + curr, 0);
    var media = soma / dataArray.length;

    var mediana = calcularMediana(dataArray);
    var moda = calcularModa(dataArray);

    var resultadoHTML = `<p class='mb-2'>Média: ${media}</p>
                         <p class='mb-2'>Mediana: ${mediana}</p>
                         <p>Moda: ${moda}</p>`;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}

function calcularMediana(dataArray) {
    var meio = Math.floor(dataArray.length / 2);
    return dataArray.length % 2 === 0 ? (dataArray[meio - 1] + dataArray[meio]) / 2 : dataArray[meio];
}

function calcularModa(dataArray) {
    var frequencyMap = {};
    dataArray.forEach(element => {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });

    var maxFrequency = Math.max(...Object.values(frequencyMap));
    var moda = Object.keys(frequencyMap).filter(key => frequencyMap[key] === maxFrequency);
    return moda.join(', ');
}
