document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os itens do menu de filtro e todos os cards de curso
    const filterItems = document.querySelectorAll('.filter-item');
    const courseCards = document.querySelectorAll('.course-card');

    // Adiciona um "ouvinte" de clique para cada item do menu
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Pega a categoria do filtro do atributo 'data-filter'
            const filterCategory = item.getAttribute('data-filter');

            // 1. Atualiza o estilo do menu para mostrar qual filtro está ativo
            filterItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            item.classList.add('active');

            // 2. Filtra os cards de curso
            courseCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                // Se o filtro for 'all' ou a categoria do card for a mesma do filtro
                if (filterCategory === 'all' || cardCategory === filterCategory) {
                    card.classList.remove('hidden'); // Mostra o card
                } else {
                    card.classList.add('hidden'); // Esconde o card
                }
            });
        });
    });
});