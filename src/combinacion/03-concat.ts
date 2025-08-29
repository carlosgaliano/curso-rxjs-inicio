import { concat, interval, take } from "rxjs";




const interval$ = interval(1000);


concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    ["a", "b", "c"]
).subscribe(console.log)