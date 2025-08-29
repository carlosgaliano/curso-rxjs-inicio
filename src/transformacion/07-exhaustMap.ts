import { fromEvent, interval } from "rxjs";
import { concatMap, exhaustMap, switchMap, take } from "rxjs/operators";


const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent(document, "click");

click$.pipe(
    // switchMap(()=> interval$),
    exhaustMap(()=> interval$)
).subscribe(console.log)