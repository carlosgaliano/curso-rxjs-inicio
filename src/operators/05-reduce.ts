import { interval, Observer } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const observer$:Observer<any> = {
    next: valor => console.log("Next: ", valor),
    error: e => console.log(e),
    complete: () => console.log("--Completado--")
}

const numeros = [1, 2, 3, 4, 5];

const totalReduce = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numeros.reduce(totalReduce, 0);
// console.log(total);

interval(1000).pipe(
    take(3), // detiene la emision o token de acuerdo al numero de señales
    // tap(x => console.log("tap", x)),
    reduce(totalReduce)
).subscribe(observer$);