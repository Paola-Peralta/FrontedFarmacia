document.addEventListener('DOMContentLoaded', function() {
    cargarCompras();

    const modal = document.getElementById('modalCompra');
    const btnNuevaCompra = document.getElementById('btnNuevaCompra');
    const spanCerrar = document.getElementById('cerrarModal');
    const formNuevaCompra = document.getElementById('formNuevaCompra');

    btnNuevaCompra.onclick = function() {
        abrirModal();
    }

    spanCerrar.onclick = function() {
        cerrarModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            cerrarModal();
        }
    }

    formNuevaCompra.onsubmit = function(e) {
        e.preventDefault();

        const nuevaCompra = {
            codigo: document.getElementById('codigo').value,
            fecha: document.getElementById('fecha').value,
            proveedor: document.getElementById('proveedor').value,
            tipoCompra: document.getElementById('tipoCompra').value,
            sucursal: document.getElementById('sucursal').value
        };

        compras.push(nuevaCompra);
        mostrarCompras();
        cerrarModal();
        formNuevaCompra.reset();
    }
});

let compras = [];

function cargarCompras() {
    compras = []; // Vacío inicialmente
    mostrarCompras();
}

function mostrarCompras() {
    const tabla = document.getElementById('tablaCompras').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    compras.forEach(compra => {
        const fila = tabla.insertRow();
        fila.innerHTML = `
            <td>${compra.codigo}</td>
            <td>${compra.fecha}</td>
            <td>${compra.proveedor}</td>
            <td>${compra.tipoCompra}</td>
            <td>${compra.sucursal}</td>
        `;
    });
}

function abrirModal() {
    document.getElementById('modalCompra').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modalCompra').style.display = 'none';
}
