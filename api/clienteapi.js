
//Medo para obtener clientes desde el backend
async function fetchClientes() {
    try {
        const token = localStorage.getItem('token'); // Recupera el token que pegaste antes

        const response = await fetch('http://127.0.0.1:8000/catalogos/clientes/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Aquí envías el token
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        mostrarClientes(data.results);
    } catch (error) {
        console.error('Error al obtener clientes:', error);
    }
}

// Función para llenar la tabla con los clientes
function mostrarClientes(clientes) {
    const tbody = document.querySelector('.clientes-table tbody');
    tbody.innerHTML = ''; // Limpiamos el contenido anterior si hay

    clientes.forEach(cliente => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${cliente.codigo}</td>
            <td>${cliente.nombres}</td>
            <td>${cliente.primerApellido}</td>
            <td>${cliente.segundoApellido}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.telefono}</td>
        `;

        tbody.appendChild(fila);
    });
}

// Cuando la página cargue, obtenemos los clientes

document.addEventListener('DOMContentLoaded', () => {
    fetchClientes();
});
  
// Método para crear un nuevo cliente (POST)
async function crearCliente(clienteData) {
    const token = localStorage.getItem('token'); // Recupera el token

    try {
        const response = await fetch('http://127.0.0.1:8000/catalogos/clientes/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clienteData),
        });

        if (response.ok) {
            // Si la creación es exitosa, refrescamos la lista de clientes
            fetchClientes();
            closeModal(); // Cerramos el modal
        } else {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Error desconocido');
        }
    } catch (error) {
        console.error('Error al crear cliente:', error);
        alert('No se pudo registrar el cliente:\n' + error.message);
    }
}

