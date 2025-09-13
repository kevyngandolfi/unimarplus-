document.addEventListener('DOMContentLoaded', function() {
    // Efeito de digitação para a introdução da plataforma
    const introTextElement = document.getElementById('platform-intro');
    const originalText = "Bem-vindo à sua jornada de desenvolvimento contínuo. Explore novas habilidades e cresça com a gente.";
    let i = 0;
    introTextElement.innerHTML = ''; // Limpa o texto inicial

    function typeWriter() {
        if (i < originalText.length) {
            introTextElement.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 40); // Velocidade da digitação em milissegundos
        }
    }

    typeWriter();

    // Adiciona um feedback ao clicar nos cards
    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('locked')) {
                alert('Você precisa completar o curso de Integração para desbloquear este conteúdo!');
            } else {
                // Futuramente, isso levaria para a página do curso
                alert('Você iniciou a trilha: ' + card.querySelector('h3').textContent);
            }
        });
    });
});