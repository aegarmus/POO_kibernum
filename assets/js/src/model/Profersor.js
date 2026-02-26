import { Persona } from './Persona.js'

export class Profesor extends Persona {
  #subject;

  constructor(name, lastName, birthDate, subject) {
    super(name, lastName, birthDate);
    this.#subject = subject;
  }

  get subject() {
    return this.#subject;
  }

  enseñar() {
    return `${this.fullName()} enseña ${this.#subject}`;
  }

  presentarse() {
    return `Hola, soy ${this.fullName()}, tengo ${this.getAge()} años y enseño ${this.subject}`;
  }
}
