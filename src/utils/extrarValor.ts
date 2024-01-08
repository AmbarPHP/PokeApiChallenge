export function extraerOffset(url) {
    // Encuentra la posición del texto 'offset=' en la URL
    const index = url.indexOf('offset=');

    if (index !== -1) {
        // Encuentra el índice donde termina el número del offset
        const endIndex = url.indexOf('&', index);

        // Si hay un carácter '&' después de 'offset=', extrae el número del offset
        if (endIndex !== -1) {
            const offset = url.substring(index + 7, endIndex);
            return parseInt(offset, 10); // Convierte el valor extraído a un número entero
        } else {
            // Si no hay un carácter '&' después de 'offset=', extrae el número del offset hasta el final de la cadena
            const offset = url.substring(index + 7);
            return parseInt(offset, 10); // Convierte el valor extraído a un número entero
        }
    }

    // Si no se encuentra 'offset=' en la URL, devuelve null o algún valor que indique que el offset no está presente
    return null;
}

