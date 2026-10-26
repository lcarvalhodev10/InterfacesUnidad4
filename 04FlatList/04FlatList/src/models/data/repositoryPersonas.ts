import { Persona } from '../entities/persona';

export class repositoryPersonas {
  /**
   * funcion que devuelve un array de personas
   * Pre: ninguna
   * Post: el array nunca va a estar vacio
   * @returns lista de personas
   */
  static obtenerPersonas(): Persona[] {
    return [
      new Persona('1', 'Ana', 'García López'),
      new Persona('2', 'Carlos', 'Martínez Ruiz'),
      new Persona('3', 'Lucía', 'Fernández Gómez'),
      new Persona('4', 'Pablo', 'Sánchez Díaz'),
      new Persona('5', 'Marta', 'Torres Navarro'),
    ];
  }
}

export const RepositoryPersonas = repositoryPersonas;
