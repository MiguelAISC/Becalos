function startEraseAnimation() {
    const textElement = document.getElementById('textToErase');
    const programmerText = document.getElementById('programador');

    // Añadir clase para la animación de borrado
    textElement.classList.add('erase');

    // Después de la animación, mostrar el siguiente texto
    textElement.addEventListener('animationend', () => {
        textElement.style.display = 'none';
        programmerText.style.display = 'inline-block';
    });
}

// Iniciar la animación después de unos segundos
setTimeout(startEraseAnimation, 3500); // Inicia después de 2 segundos
