import { Persona } from "../model/Persona";

/**
 * Genera un string con formato HTML con los datos de un objeto Persona
 * @param {Array<Persona>} persona - Array de objetos con los datos de Persona
 * @returns {string} - Devuelve un string con el formato HTML de la tarjeta 
 */
export const createPersonaCard = (persona) => {
    return `
        <div class="card col-12 col-md-4 col-lg-3" style="width: 18rem;">
            <div class="card-header">
                ${persona.fullName()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${persona.id}</li>
                <li class="list-group-item">${persona.birtdate}</li>
                <li class="list-group-item">${persona.getAge()}</li>
            </ul>
        </div>
    `;
}