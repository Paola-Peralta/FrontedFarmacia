function loadContent(page) {
    // Usamos 'fetch' para cargar el contenido de la página indicada.
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el contenido');
            }
            return response.text();
        })
        .then(data => {
            // Aquí cargamos el contenido dentro del área con id="content-area"
            document.getElementById('content-area').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('content-area').innerHTML = "<p>Hubo un error al cargar el contenido. Por favor, inténtalo de nuevo.</p>";
        });
}
 