document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        // Mostramos un mensaje de "Enviando..."
        statusDiv.innerHTML = "Enviando mensaje...";
        statusDiv.className = 'info';
        statusDiv.style.display = 'block';

        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                statusDiv.innerHTML = "¡Gracias por tu mensaje! Ha sido enviado con éxito.";
                statusDiv.className = 'success';
                form.reset(); // Limpiamos el formulario
            } else {
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    statusDiv.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    statusDiv.innerHTML = "Oops! Hubo un problema al enviar tu formulario.";
                }
                statusDiv.className = 'error';
            }
        } catch (error) {
            statusDiv.innerHTML = "Oops! Parece que hay un problema de red. Intenta de nuevo.";
            statusDiv.className = 'error';
        }

        // Ocultamos el mensaje después de 6 segundos
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 6000);
    }

    form.addEventListener("submit", handleSubmit);
});
