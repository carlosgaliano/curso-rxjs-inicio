import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";


const numeros$ = of(1, '1', 1, 5, 3, 3, 5, 6, 2, 7, 8, 2, 4, '1', 9);

numeros$.pipe(
    distinct()
)//.subscribe(console.log);

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willi' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
    { nombre: 'Superman' },
]

from(personajes).pipe(
    // distinct(({ nombre }) => nombre), // alternativa como objeto
    distinct( p => p.nombre)
).subscribe(console.log);
