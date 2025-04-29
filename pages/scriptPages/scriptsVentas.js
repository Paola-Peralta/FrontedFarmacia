document.addEventListener('DOMContentLoaded', function() {
    cargarVentas();

    const modal = document.getElementById('modalVenta');
    const btnNuevaVenta = document.getElementById('btnNuevaVenta');
    const spanCerrar = document.getElementById('cerrarModal');
    const formNuevaVenta = document.getElementById('formNuevaVenta');

    btnNuevaVenta.onclick = function() {
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

    formNuevaVenta.onsubmit = function(e) {
        e.preventDefault();

        const nuevaVenta = {
            codigo: document.getElementById('codigo').value,
            fecha: document.getElementById('fecha').value,
            iva: document.getElementById('iva').value,
            descuento: document.getElementById('descuento').value,
            cliente: document.getElementById('cliente').value,
            tipoFactura: document.getElementById('tipoFactura').value,
            sucursal: document.getElementById('sucursal').value
        };

        ventas.push(nuevaVenta);
        mostrarVentas();
        cerrarModal();
        formNuevaVenta.reset();
    }
});

let ventas = [];

function cargarVentas() {
    ventas = []; // Empieza vacío
    mostrarVentas();
}

function mostrarVentas() {
    const tabla = document.getElementById('tablaVentas').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    ventas.forEach(venta => {
        const fila = tabla.insertRow();
        fila.innerHTML = `
            <td>${venta.codigo}</td>
            <td>${venta.fecha}</td>
            <td>${venta.iva}%</td>
            <td>${venta.descuento}%</td>
            <td>${venta.cliente}</td>
            <td>${venta.tipoFactura}</td>
            <td>${venta.sucursal}</td>
        `;
    });
}

function abrirModal() {
    document.getElementById('modalVenta').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modalVenta').style.display = 'none';
}
