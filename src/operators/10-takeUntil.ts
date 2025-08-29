import { fromEvent, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerText = 'Detener timer';

document.querySelector("#body").append(boton);

const intervalo$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click');

intervalo$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: valor => console.log('next ', valor),
    complete: ()=> console.log("--completado--")
})