

// Adiciona um ouvinte de evento de envio do formulário
document.getElementById('formAntigos').addEventListener('submit', function (event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Obtém o valor do campo de input
    let input = document.getElementById('numbers-anteriores').value;

    // Separa o valor do input em um array usando a vírgula como delimitador
    let numeros = input.split(',');

    // Converte cada item do array em um número
    numeros = numeros.map(Number);

    // Salva os números em uma variável global
    window.numeros = numeros;

    // Exibe os números na página
    let resultado = document.getElementById('sorteio-anterior-inceridos');
    resultado.textContent = numeros.join(', ');
});


document.getElementById('btn-sortear-anterior').addEventListener('click', function() {
    let qtdeSortear = Number(document.getElementById('qtde-sorteio-anterior').value);

    // Verifica se o campo foi preenchido
    if (isNaN(qtdeSortear) || qtdeSortear === 0) {
        alert('Por favor, insira um número maior que zero');
        return;
    }

    // Verifica se o número é maior que 15
    if (qtdeSortear > 15) {
        alert('Por favor, insira um número menor ou igual a 15');
        return;
    }

    // Sorteia os números
    let numerosSorteados = [];
    while (numerosSorteados.length < qtdeSortear) {
        let indiceSorteado = Math.floor(Math.random() * window.numeros.length);
        let numeroSorteado = window.numeros[indiceSorteado];
  
        // Se todos os números já tiverem sido sorteados, saia do loop
        if (numerosSorteados.length === window.numeros.length) {
            break;
        }

        if (!numerosSorteados.includes(numeroSorteado)) {
            numerosSorteados.push(numeroSorteado);
        }
    }

    // Exibe os números sorteados na página
    let resultado = document.getElementById('resultado-anterior');
    resultado.textContent = "Números Sorteados: " + numerosSorteados.join(', ');
});

