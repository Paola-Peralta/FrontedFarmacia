let proveedores = [];

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modalProveedor');
    const btnNuevoProveedor = document.getElementById('btnNuevoProveedor');
    const cerrarModal = document.getElementById('cerrarModal');
    const cancelar = document.getElementById('cancelar');
    const form = document.getElementById('formNuevoProveedor');
    const tabla = document.querySelector('#tablaProveedores tbody');

    // Mostrar modal
    btnNuevoProveedor.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Cerrar modal (X)
    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
        form.reset();
    });

    // Cerrar modal (botón cancelar)
    cancelar.addEventListener('click', () => {
        modal.style.display = 'none';
        form.reset();
    });

    // Cerrar modal si clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            form.reset();
        }
    });

    // Enviar formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nuevoProveedor = {
            codigo: document.getElementById('codigo').value,
            nombres: document.getElementById('nombres').value,
            primerApellido: document.getElementById('primerApellido').value,
            segundoApellido: document.getElementById('segundoApellido').value,
            email: document.getElementById('email').value,
            direccion: document.getElementById('direccion').value,
            telefono: document.getElementById('telefono').value
        };

        proveedores.push(nuevoProveedor);
        mostrarProveedores();
        modal.style.display = 'none';
        form.reset();
    });

    function mostrarProveedores() {
        tabla.innerHTML = '';
        proveedores.forEach(proveedor => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${proveedor.codigo}</td>
                <td>${proveedor.nombres}</td>
                <td>${proveedor.primerApellido}</td>
                <td>${proveedor.segundoApellido}</td>
                <td>${proveedor.email}</td>
                <td>${proveedor.direccion}</td>
                <td>${proveedor.telefono}</td>
            `;
            tabla.appendChild(fila);
        });
    }
});
