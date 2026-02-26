/**
 * Renderiza tarjetas en un elemento del DOM
 * @param {string} htmlString - String con el código html a inyectar
 * @param {any} container - Contenedor del DOM donde se inyectara el string HTML 
 */
export const renderHTMLContainer = (htmlString, container) => {
    container.innerHTML = htmlString
}