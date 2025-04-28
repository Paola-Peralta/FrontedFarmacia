

function openModal() {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'flex'; // Mostrar el modal
    setTimeout(() => {
      modalContainer.classList.add('active');
    }, 10); // pequeño delay para que la transición se aplique
  }
  
function closeModal() {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.classList.remove('active');
    setTimeout(() => {
      modalContainer.style.display = 'none';
    }, 300); // espera que termine la animación de opacidad
  }

  // Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(e) {
    const modalContainer = document.querySelector('.modal-container');
    if (e.target === modalContainer) {
      closeModal();
    }
  });
  
  // También cerrar al presionar Escape 
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeModal();
        }
      });