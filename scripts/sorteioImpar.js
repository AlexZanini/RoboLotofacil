

// Adiciona um ouvinte de evento para o botão de sorteio
document.getElementById('btn-sortear-impar').addEventListener('click', function() {
    // Obtém a quantidade de números a sortear
    let qtdeSortear = Number(document.getElementById('qtde-sortear-impar').value);
  
    let numImpares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
  
    // Verifica se a quantidade de números a sortear é válida
    if (qtdeSortear <= 0 || isNaN(qtdeSortear)) {
        alert('Por favor, insira um número maior que zero');
        return;
      }
    
      if (qtdeSortear > numImpares.length) {
        alert('Você está tentando sortear mais números do que o disponível. Por favor, tente novamente com um número menor ou igual a ' + numImpares.length);
        return;
      }
  
    // Sorteia os números
    let numerosSorteados = [];
    while (numerosSorteados.length < qtdeSortear) {
      let indiceSorteado = Math.floor(Math.random() * numImpares.length);
      let numeroSorteado = numImpares[indiceSorteado];
      if (!numerosSorteados.includes(numeroSorteado)) {
        numerosSorteados.push(numeroSorteado);
      }
    }
  
    // Exibe os números sorteados na página
    let resultado = document.getElementById('resultado-impar');
    resultado.textContent = "Números Sorteados: " + numerosSorteados.join(', ');
  });
  
