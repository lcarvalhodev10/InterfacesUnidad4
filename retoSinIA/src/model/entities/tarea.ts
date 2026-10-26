export class Tarea {
    id: number; 
    titulo: string;
    estado: boolean; 

    constructor(id: number, titulo: string, estado: boolean) {
        this.id = id;
        this.titulo = titulo;
        this.estado = estado;
    }

    getId(): number {
        return this.id;
    }

    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    getEstado(): boolean {
        return this.estado;
    }

    setEstado(estado: boolean): void {
        this.estado = estado;
    }
}