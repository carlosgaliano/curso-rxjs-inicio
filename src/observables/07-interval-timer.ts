import { interval, Observer, timer  } from "rxjs";

const observer$:Observer<any> = {
    next: valor => console.log("Next: ", valor),
    error: e => console.log("Error: ", e),
    complete: ()=> console.log("Terminado")
}


// const interval$ = interval(1000);
const interval$ = interval(1000);
const timer$ = timer(3000, 2000);
const hoyEs6 = new Date();
hoyEs6.setSeconds(hoyEs6.getSeconds() + 5);
const hoyEs6$ = timer(hoyEs6);
// El interval y el time son asincronos
console.log("INICIO");
// interval$.subscribe(observer$);
// timer$.subscribe(observer$);
hoyEs6$.subscribe(observer$);

console.log("FIN");