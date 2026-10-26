import { Tarea } from '../entities/tarea';

export class RepositorioTareas {
    private listaTareas: Tarea[] = [
        new Tarea(1, 'Estudar React Native', false),
        new Tarea(2, 'Organizar a semana', true),
        new Tarea(3, 'Fazer exercícios', false),
        new Tarea(4, 'Ler um capítulo', false),
    ];

    getTareas(): Tarea[] {
        return [...this.listaTareas];
    }
}