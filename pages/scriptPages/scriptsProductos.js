document.addEventListener('DOMContentLoaded', () => {

    const API_URL = 'http://127.0.0.1:8000/api/productos/'; // Ajusta si tu API cambia de URL

    const tbody = document.getElementById('productos-tbody');
    const modal = document.getElementById('modalProducto');
    const btnNuevoProducto = document.getElementById('btnNuevoProducto');
    const btnCerrarModal = document.getElementById('btnCerrarModal');
    const formProducto = document.getElementById('formProducto');

    // Función para abrir modal
    const openModal = () => {
        modal.classList.add('active');
    };

    // Función para cerrar modal
    const closeModal = () => {
        modal.classList.remove('active');
        formProducto.reset();
    };

    // Listar productos
    const listarProductos = async () => {
        try {
            const response = await fetch(API_URL, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // Si manejas tokens
                }
            });
            const data = await response.json();
            tbody.innerHTML = '';

            data.results.forEach(producto => {
                const tr = document.createElement('tr');

                tr.innerHTML = `
                    <td>${producto.codigoProducto}</td>
                    <td>${producto.nombreProducto}</td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.fechaVencimiento}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.medidas}</td>
                    <td>${producto.presentaciones}</td>
                    <td>
                        <button class="btnEditar">Editar</button>
                        <button class="btnEliminar">Eliminar</button>
                    </td>
                `;

                tbody.appendChild(tr);
            });
        } catch (error) {
            console.error('Error al listar productos:', error);
        }
    };

    // Eventos
    btnNuevoProducto.addEventListener('click', openModal);
    btnCerrarModal.addEventListener('click', closeModal);

    formProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí luego programamos guardar producto
    });

    // Inicializamos la tabla
    listarProductos();

});
