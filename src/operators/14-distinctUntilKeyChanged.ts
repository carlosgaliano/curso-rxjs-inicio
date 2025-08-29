import { from, of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";



interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willi' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
    { nombre: 'Superman' },
]



from(personajes).pipe(
   distinctUntilKeyChanged("nombre")
).subscribe(console.log);
