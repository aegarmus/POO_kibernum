
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

const REGEX_NAME = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/
const REGEX_BIRTHDATE = /^\d{4}-\d{2}-\d{2}$/

class Persona {
    //Crear las propiedades privadas
    #id
    #name;
    #lastName;
    #birthDate;
    #password

    constructor(name, lastName, birthDate) { // Función constructura
        this.#id = crypto.randomUUID()
        this.#name = name;
        this.#lastName = lastName;
        this.#birthDate = birthDate;
        this.#password = crypto.randomUUID()
    }

    // métodos privados -> Estos métodos no pueden ser accedidos por ninguna parte solo dentro del propio

    #normalizeNames(name) {
        /* const text = name.toLowerCase()
        const nameSplited = text.split(' ')
        const nameCapitalize = nameSplited.map(word => {
            return(word.charAt(0).toUpperCase() + word.slice(1))
        })
        console.log(nameCapitalize.join(' ')) */
        return name
            .toLowerCase()
            .split(' ') //Array con dos string
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    /** 
     * Valida un regex dinámico y lanza un error en caso de no pasar la expresión regular
     * @param {string} name - String a validar
     * @param {regex} regex - Expresión regular validadora
     * @param {string} message - campo opcional, mensaje personalizado para la excepción
     * @throws {Error} - Lanza un mensaje predefinido si no se peorsonaliza el mensaje
     * */ 
    #validateRegex(name, regex, message) {
        if (!regex.test(name)) {
            throw new Error(message || 'Expresion invalida para este campo')
        }
    }

    // Getters y Setters
    // Getters son para obtener datos, y los Setters para modificar datos

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name
    }

    setName(newName) {
        // Expresión Regular
        this.#validateRegex(newName, REGEX_NAME, 'Nombre inválido')
        this.#name = this.#normalizeNames(newName)
        console.log('Nombre modificado con éxito')
    }

    get lasName() {
        return this.#lastName
    }

    setLastName(newLastName) {
        this.#validateRegex(newLastName, REGEX_NAME, 'Apellido inválido')
        this.#lastName = this.#normalizeNames(newLastName)
    }

    get birthDate() {
        return this.#birthDate
    }

    setBirthDate(newBirthDate) {
        this.#validateRegex(newBirthDate, REGEX_BIRTHDATE, 'fecha de nacimiento invalida, usa el formato YYYY-MM-DD')
        this.#birthDate = newBirthDate
    }

    /**
     * Genera un string con el nombre completo usando los campos name y lastName del objeto
     * @returns {string} - retorna string con nombre completo
     */
    fullName() {
        return `${this.#name} ${this.#lastName}`
    }

    //JSdocs
    /**
     * Obtiene la edad a partir de la fecha de nacimiento en el campo birthDate del objeto
     * @returns {number} - Devuelve un número que representa la cantidad de años
     */
    getAge() {
        const today = new Date()
        const birth = new Date(this.#birthDate)
        let age = today.getFullYear() - birth.getFullYear()

        const month = today.getMonth() - birth.getMonth()
        if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
            age--
        }

        return age
    }

    presentarse() {
        return `Hola, soy ${this.fullName()} y tengo ${this.getAge()} años`
    }

    toObject() {
        const objetoNuevo = {
            id: this.#id,
            name: this.#name,
            lastName: this.#lastName,
            birthDate: this.#birthDate,
            password: this.#password
        };

        return objetoNuevo
    }

    toPublicObject() {
        return {
            id: this.#id,
            name: this.#name,
            lastName: this.#lastName,
            birthDate: this.#birthDate,
        };
    }
}

const persona1 = new Persona('Juanito', 'Adasme', '1993-09-24')
const persona2 = new Persona('Alan', 'García', '1993-09-25')


console.log(persona1)
console.log(persona1.toPublicObject())

const personaCopy = persona1.toObject()
/* 
personaCopy.setName('Carlos') */

persona1.setName('juan')
console.log(persona1.name)
console.log(persona2.getAge())

persona1.setBirthDate('1994-02-20')
console.log(persona1.presentarse())

// Herencia -> Nos permite pasar propiedades y métodos a otras clases hijas. para esto usaremos 
            // extends y super


class Estudiante extends Persona {
    #career
    #yearEnrollment
    
    constructor(name, lastName, birthDate, career, yearEnrollment) { // pasamos los paramatros en el mismo orden que la clase padre
        super( name, lastName, birthDate)
        this.#career = career
        this.#yearEnrollment = yearEnrollment
    }

    // getters

    get career() {
        return this.#career
    }

    get yearEnrollment() {
        return this.#yearEnrollment
    }

    presentarse() {
        return `Hola, soy ${this.fullName()}, tengo ${this.getAge()} años y estudio ${this.#career} desde ${this.yearEnrollment}`;
    }

    toObject() {
        return {
            ...super.toObject(),
            career: this.#career,
            yearEnrollment :this.#yearEnrollment

        }
    }

    toPublicObject() {
        return {
            ...super.toPublicObject(),
            career: this.#career,
            yearEnrollment: this.#yearEnrollment,
        };
    }
}

const estudiante = new Estudiante('José', 'Pérez', '2000-02-25', 'FullStack Web Javascript', '2025-11-27')

console.log(estudiante.presentarse())


class Profesor extends Persona {
    #subject

    constructor(name, lastName, birthDate, subject) {
        super(name, lastName, birthDate)
        this.#subject = subject
    }

    get subject() {
        return this.#subject
    }

    enseñar() {
        return `${this.fullName()} enseña ${this.#subject}`
    }

    presentarse() {
        return `Hola, soy ${this.fullName()}, tengo ${this.getAge()} años y enseño ${this.subject}`;
    }
}

const profesor = new Profesor('Alan', 'Eduardo', '1993-09-25', 'Desarrollo Web')

console.log(profesor.presentarse())

// Spread Operator -> Operador de esparcimiento

const objeto1 = {
    name: 'Sebastian',
    lastName: 'Vera',
    edad: 25
}

const objeto2 = {...objeto1}

console.log(objeto1)
console.log(objeto2)

objeto2.colorPelo = 'azul'

console.log(objeto2)
console.log(objeto1)

let numero1 = 5
let numero2 = numero1

console.log(numero1)
console.log(numero2)

numero2 = 10

console.log(numero1);
console.log(numero2);
