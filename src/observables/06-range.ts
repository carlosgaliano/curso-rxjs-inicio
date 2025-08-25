import { asyncScheduler, observeOn, Observer, range } from "rxjs";

const observable$: Observer<any> = {
    next: valor => console.log('Next: ', valor),
    error: e => console.log('Error: ', e),
    complete: () => console.log('Se termino')
}

// toda funcion que reciba asyncScheduler lo convierte en asincrona
// const rango$ = range(1, 5);
const rango$ = range(1, 5).pipe(observeOn(asyncScheduler));
console.log("Inicio");
rango$.subscribe(observable$);
console.log("Fin");

