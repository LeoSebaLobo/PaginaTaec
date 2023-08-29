document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Aquí puedes agregar lógica para procesar el formulario, como enviar los datos a un servidor.
        // Por ejemplo: const formData = new FormData(form);
        // Y luego puedes hacer una petición fetch para enviar los datos.
    });
});