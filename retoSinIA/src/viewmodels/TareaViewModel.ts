import { useState } from 'react';
import { RepositorioTareas } from '../model/data/repositoryTarea';
import { Tarea } from '../model/entities/tarea';

const repositorioTareas = new RepositorioTareas();

export function useTareasViewModel() {
    const [tareas, setTareas] = useState<Tarea[]>(() => repositorioTareas.getTareas());

    function cambiarEstadoTarea(id: number): void {
        setTareas((tareasActuales) =>
            tareasActuales.map((tarea) =>
                tarea.id === id
                    ? new Tarea(tarea.id, tarea.titulo, !tarea.estado)
                    : tarea,
            ),
        );
    }

    return { tareas, cambiarEstadoTarea };
}