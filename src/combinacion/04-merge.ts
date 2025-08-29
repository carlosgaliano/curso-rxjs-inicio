import { fromEvent, merge } from "rxjs";
import { map } from "rxjs/operators";



const keyup$ = fromEvent<KeyboardEvent>(document ,"keyup");
const click$ = fromEvent<PointerEvent>(document ,"click");

merge(
    keyup$.pipe(
        map(env => env.key)
    ), 
    click$.pipe(
        map(env=> env.target)
    ),
).subscribe(console.log)