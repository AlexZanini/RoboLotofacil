

// Adiciona um ouvinte de evento de envio do formulário
document.getElementById('formNãoSorteadas').addEventListener('submit', function (event2) {
    // Previne o envio do formulário
    event2.preventDefault();

    // Obtém o valor do campo de input
    let input2 = document.getElementById('numbers-nao-sorteadas').value;

    // Separa o valor do input em um array usando a vírgula como delimitador
    let numeros2 = input2.split(',');

    // Converte cada item do array em um número
    numeros2 = numeros2.map(Number);

    // Salva os números em uma variável global
    window.numerosNaoSorteados = numeros2;

    // Exibe os números na página
    let resultado = document.getElementById('sorteio-nao-sorteados-inceridos');
    resultado.textContent = numeros2.join(', ');
});


document.getElementById('btn-nao-sorteadas').addEventListener('click', function() {
    let qtdeNaoSorteadas = Number(document.getElementById('qtde-nao-sorteadas').value);

    

    // Verifica se o campo foi preenchido
    if (isNaN(qtdeNaoSorteadas) || qtdeNaoSorteadas === 0) {
        alert('Por favor, insira um número maior que zero');
        return;
    }

    // Verifica se o número é maior que 15
    if (qtdeNaoSorteadas > 10) {
        alert('Por favor, insira um número menor ou igual a 10');
        return;
    }

    // Sorteia os números
    let numerosSorteados = [];
    while (numerosSorteados.length < qtdeNaoSorteadas) {
        let indiceSorteado = Math.floor(Math.random() * window.numerosNaoSorteados.length);
        let numeroSorteado = window.numerosNaoSorteados[indiceSorteado];
  
        // Se todos os números já tiverem sido sorteados, saia do loop
        if (numerosSorteados.length === window.numerosNaoSorteados.length) {
            break;
        }

        if (!numerosSorteados.includes(numeroSorteado)) {
            numerosSorteados.push(numeroSorteado);
        }
    }

    // Exibe os números sorteados na página
    let resultado = document.getElementById('resultado-nao-anterior');
    resultado.textContent = "Números Sorteados: " + numerosSorteados.join(', ');
});

