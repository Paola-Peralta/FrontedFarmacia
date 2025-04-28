


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

// Cuando el formulario se envía
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.modal-container form');
  form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

      // Obtenemos los datos del formulario
      const nuevoCliente = {
          codigo: document.getElementById('cedula').value.trim(),
          nombres: document.getElementById('nombre').value.trim(),
          primerApellido: document.getElementById('p_apellido').value.trim(),
          segundoApellido: document.getElementById('s_apellido').value.trim(),
          direccion: document.getElementById('direccion').value.trim(),
          telefono: document.getElementById('telefono').value.trim(),
      };

      // Llamamos a la función para enviar los datos al backend (API)
      crearCliente(nuevoCliente);
  });

  // Llamar a la función para cargar los clientes al inicio
  fetchClientes();
});