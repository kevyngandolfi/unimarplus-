document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('.modal-close-button');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('lesson-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');

    // Função para abrir o modal
    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    // Função para fechar o modal
    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Adiciona evento de clique para cada bolinha que pode abrir o modal
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Verifica se a aula não está bloqueada
            if (!button.closest('.path-step').classList.contains('locked')) {
                const title = button.getAttribute('data-title');
                const content = button.getAttribute('data-content');
                
                // Atualiza o conteúdo do modal
                modalTitle.textContent = title;
                modalBody.innerHTML = content;

                openModal(modal);
            }
        });
    });

    // Adiciona evento de clique no overlay para fechar o modal
    overlay.addEventListener('click', () => {
        closeModal(modal);
    });

    // Adiciona evento de clique no botão de fechar do modal
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal(modal);
        });
    });
});