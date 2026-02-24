
// POO -> Objetos

/* const persona = { // Funciona bien para objetos o instancias rápidas -> Pero no ofrece estructura
    nombre: 'Juanito',
    apellido: 'Adasme',
    fechaNacimiento: '24/09/1993',
    profesion: 'Desarrollador',
}
 */
// Clases -> Plantillas para la creación de objetos -> Por convención se escriben con la primera letra en mayuscula

/*
4 Pilares en la POO -> Pregunta básica en entrevistas de junior

- Abstracción -> Me preocupo más por el que hace que el como lo hace
- Encapsulamiento -> Debo proteger las propiedades de mis objetos
- Herencia -> Puedo pasar propiedades y métodos desde padres a hijos
- Polimorfismo -> Un mismo comportamiento puede tener diferentes resultados entre padres e hijos

*/


class Persona {
    constructor(name, lastName, birthDate) { // Función constructura
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    /**
     * Genera un string con el nombre completo usando los campos name y lastName del objeto
     * @returns {string} - retorna string con nombre completo
     */
    fullName() {
        return `${this.name} ${this.lastName}`
    }

    //JSdocs
    /**
     * Obtiene la edad a partir de la fecha de nacimiento en el campo birthDate del objeto
     * @returns {number} - Devuelve un número que representa la cantidad de años
     */
    getAge() {
        const today = new Date()
        const birth = new Date(this.birthDate)
        let age = today.getFullYear() - birth.getFullYear()

        const month = today.getMonth() - birth.getMonth()
        if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
            age--
        }

        return age
    }
}

const persona1 = new Persona('Juanito', 'Adasme', '1993-09-24')
const persona2 = new Persona('Alan', 'García', '1993-09-25')

console.log(persona1.fullName())
console.log(persona2.getAge())

