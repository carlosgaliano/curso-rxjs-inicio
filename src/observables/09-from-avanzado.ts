import {  from, Observer } from "rxjs";

/* of toma argumentos y genera una secuencia de valores
from Array, obejo con estructua de array, promesa, iterable observable */

const obserer$: Observer<any> = {
    next: valor => console.log("Next: ", valor),
    error: e => console.log("Error: ", e),
    complete: () => console.log("Completado")
}

// const source$ = from([1, 2, 3, 4, 5, 6, 7]);
// const source$ = of(...[1, 2, 3, 4, 5, 6, 7]);
// const source$ = from("Carlos");

const source$ = from(fetch("https://api.github.com/users/klerith"));



// source$.subscribe(obserer$);
/* source$.subscribe( async (resp) => {
    const data = await resp.json();
    console.log(data);
}) */

function* generadora() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable = generadora();
from(iterable).subscribe(obserer$);
