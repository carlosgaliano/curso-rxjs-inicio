import { first, fromEvent, map, take, tap } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, "click");

/* click$.pipe(
    // take(1),
    tap(e => console.log(e.clientY)),
    first<MouseEvent>(e => {
        return e.clientY >= 150
    })
).subscribe({
    next: valor => console.log("next ", valor),
    complete: () => console.log("--Completado--")
})
 */

/* click$.pipe(
    // tap<MouseEvent>(console.log),
    // map(e => ({
    //     clientX: e.clientX,
    //     clientY: e.clientY
    // })),
    map(({ clientX, clientY }) => ({ clientX, clientY }))
).subscribe({
    next: valor => console.log("next ", valor),
    complete: () => console.log("--Completado--")
}) */

click$.pipe(
    tap(e => console.log(e.clientY)),
    map(({ clientX, clientY }) => ({ clientX, clientY })), // destructuracion
    first<any>(e => {
        return e.clientY >= 150
    })
).subscribe({
    next: valor => console.log("next ", valor),
    complete: () => console.log("--Completado--")
})