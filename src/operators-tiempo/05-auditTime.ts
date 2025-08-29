import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";




const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(
    map(({ x }) => x),
    tap(valor => console.log('tab', valor)),
    auditTime(2000)
).subscribe(console.log);