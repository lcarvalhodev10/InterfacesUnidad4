import { Persona } from '../models/entities/persona';
import { RepositoryPersonas } from '../models/data/repositoryPersonas';

export class PersonasViewModel {
  private _listaPersonas: Persona[];
  private _personaSeleccionada: Persona | null;

  constructor() {
    this._listaPersonas = RepositoryPersonas.obtenerPersonas();
    this._personaSeleccionada = null;
  }

  get listaPersonas(): Persona[] {
    return this._listaPersonas;
  }

  set listaPersonas(listaPersonas: Persona[]) {
    this._listaPersonas = listaPersonas;
  }

// El set no es conveniente porque la vista nunca debe modificar este listado
// public set listado(value:persona[]){
// this._listado = value; 
// }
 
  get personaSeleccionada(): Persona | null {
    return this._personaSeleccionada;
  }

  set personaSeleccionada(persona: Persona | null) {
    this._personaSeleccionada = persona;
  }
}
