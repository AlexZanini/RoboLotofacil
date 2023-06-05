

// Adiciona um ouvinte de evento para o botão de sorteio
document.getElementById('btn-sortear-par').addEventListener('click', function() {
    // Obtém a quantidade de números a sortear
    let qtdeSortear = Number(document.getElementById('qtde-sortear-par').value);
  
    let numPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
  
    // Verifica se a quantidade de números a sortear é válida
    if (qtdeSortear <= 0 || isNaN(qtdeSortear)) {
        alert('Por favor, insira um número maior que zero');
        return;
      }
    
      if (qtdeSortear > numPares.length) {
        alert('Você está tentando sortear mais números do que o disponível. Por favor, tente novamente com um número menor ou igual a ' + numPares.length);
        return;
      }
  
    // Sorteia os números
    let numerosSorteados = [];
    while (numerosSorteados.length < qtdeSortear) {
      let indiceSorteado = Math.floor(Math.random() * numPares.length);
      let numeroSorteado = numPares[indiceSorteado];
      if (!numerosSorteados.includes(numeroSorteado)) {
        numerosSorteados.push(numeroSorteado);
      }
    }
  
    // Exibe os números sorteados na página
    let resultado = document.getElementById('resultado-par');
    resultado.textContent = "Números Sorteados: " + numerosSorteados.join(', ');
  });
  
