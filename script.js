console.log("Script loaded");

// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Função para animar os cards em sequência
function animateCards() {
  cards.forEach((card, index) => {
    // Define um atraso incremental para cada card
    setTimeout(() => {
      // Remove a classe "active" de todos os cards para resetar os anteriores
      cards.forEach((c) => c.classList.remove('active'));

      // Adiciona a classe "active" no card atual para iniciar a animação
      card.classList.add('active');
    }, index * 2000); // Atraso crescente (2 segundos entre cada card)
  });

  // Recomeça o ciclo após todos os cards serem animados
  const totalDuration = cards.length * 2000 + 2000; // Tempo total da animação
  setTimeout(animateCards, totalDuration);
}

// Inicia a animação ao carregar a página
window.onload = animateCards;

