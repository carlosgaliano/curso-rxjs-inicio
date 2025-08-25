import { from, fromEvent, Observer, range } from "rxjs";
import { filter, map } from "rxjs/operators";

range(1, 10).pipe(
    filter(val => val % 2 == 1)
)//.subscribe(console.log);


range(1, 10).pipe(
    filter((val, index) => {
        console.log("index: ", index);

        return val % 2 == 1
    })
)//.subscribe(console.log);

interface iPersonaje {
    tipo: string,
    nombre: string,
}

const personajes: iPersonaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Koker'
    },
];

const obsever$: Observer<any> = {
    next: valor => console.log(valor),
    error: e => console.log(e),
    complete: () => console.log("--Terminado--")
}



from<iPersonaje[]>(personajes).pipe(
    filter<iPersonaje>((personaje, index) => {
        return personaje.tipo == "heroe";
    })).pipe(
        map(per => per.nombre)
    )//.subscribe(obsever$);

fromEvent<KeyboardEvent>(document, "keyup").pipe(
    map(e => {
        return e.code
    }),
    filter(key => key == "Enter")
).subscribe(obsever$)
    


////// Ejeplo de la documentacion

const div = document.createElement('div');
div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
document.body.appendChild(div);

const clicks = fromEvent(document, 'click');
const clicksOnDivs = clicks.pipe(filter(ev => (<HTMLElement>ev.target).tagName === 'DIV'));
clicksOnDivs.subscribe(x => console.log(x));

