import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";



const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    map(({x, y}) => ({x, y})),
    // takeWhile(({y}) => y <= 150),
    takeWhile(({y}) => y <= 150, true ) // el ultimo valor es el inclusive que lo cuenta
).subscribe({
    next: valor => console.log("next", valor),
    complete: ()=> console.log("--completado--")
    
});
