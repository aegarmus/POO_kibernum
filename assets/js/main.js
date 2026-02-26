// Main solo hace de orquestador, no arma lógica, solo ejecuta acciones
import { createPersonaCard } from './src/components/card.js'
import { Persona } from './src/model/Persona.js'
import { renderHTMLContainer } from './src/render/renderCardContainer.js'

const personas = []

const persona = new Persona('Rigoberto', 'Cordero', '2000-05-16')
const persona2 = new Persona('Elsa', 'Malle', '1981-05-13')
const persona3 = new Persona('Vera', 'Stransky', '1992-07-08')
const persona4 = new Persona('Andres', 'Muñoz', '1979-08-22')

personas.push(persona, persona2, persona3, persona4)

const cardContainer = document.querySelector("#card-section");

                                                //Single Responsibility
const cardPersonaHTML = personas.map(persona => createPersonaCard(persona)).join('')

renderHTMLContainer(cardPersonaHTML, cardContainer)