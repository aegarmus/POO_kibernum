import { Persona } from "./Persona.js";

export class Estudiante extends Persona {
  #career;
  #yearEnrollment;

  constructor(name, lastName, birthDate, career, yearEnrollment) {
    // pasamos los paramatros en el mismo orden que la clase padre
    super(name, lastName, birthDate);
    this.#career = career;
    this.#yearEnrollment = yearEnrollment;
  }

  // getters

  get career() {
    return this.#career;
  }

  get yearEnrollment() {
    return this.#yearEnrollment;
  }

  presentarse() {
    return `Hola, soy ${this.fullName()}, tengo ${this.getAge()} años y estudio ${this.#career} desde ${this.yearEnrollment}`;
  }

  toObject() {
    return {
      ...super.toObject(),
      career: this.#career,
      yearEnrollment: this.#yearEnrollment,
    };
  }

  toPublicObject() {
    return {
      ...super.toPublicObject(),
      career: this.#career,
      yearEnrollment: this.#yearEnrollment,
    };
  }
}
