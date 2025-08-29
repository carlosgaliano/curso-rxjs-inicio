import { fromEvent, map, sampleTime } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(
    sampleTime(2000), // mejor arriba
    map(({ x, y }) => ({x:x, y:y})),
).subscribe(console.log)