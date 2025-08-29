import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";


const letras$ = of("a", "b", "c");

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i=> letra + i),
        take(3),
    ))
)
/* .subscribe({
    next: val => console.log("next ", val),
    complete: () => console.log("--completado--")

}) */

    ////////
    
const mouseDown$ = fromEvent<HTMLElement>(document, "mousedown");
const mouseUp$ = fromEvent<HTMLElement>(document, "mouseup");
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(()=> interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log)