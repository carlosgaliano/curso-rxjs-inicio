import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerText = 'Detener timer';

document.querySelector("#body").append(boton);

const intervalo$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(()=> console.log("tap antes del skin")),
    skip(1),
    tap(()=> console.log("tap despues del skin")),
);

intervalo$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: valor => console.log('next ', valor),
    complete: ()=> console.log("--completado--")
})