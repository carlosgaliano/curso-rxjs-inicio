import { map, range, tap } from "rxjs";


const numeros$ = range(1, 5);
numeros$.pipe(
    tap(x => {
        console.log("antes ", x);
        return 100; // a diferencia de map, este no utiliza un return para el siguiente operador
    }),
    map(val => {
        return (val * 10).toString()
    }),
    tap(x => {
        console.log("despues",x);
    }),
    tap({
        next: valor => console.log("otro despues", valor),
        complete: () => console.log("--Se termino--") // solo se completa al final
    })
).subscribe(x => console.log("--final", x));
