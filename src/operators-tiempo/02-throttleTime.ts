import { throttleTime, distinctUntilChanged, fromEvent, map, asyncScheduler } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(
    throttleTime(3000)
)//.subscribe(console.log);

const body = document.getElementById("body");

const input = document.createElement("input");
body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$.pipe(
    // target.value
    throttleTime(1000, asyncScheduler, {
        leading: true, 
        trailing: true
    }),
    map<KeyboardEvent, any>(e => e.target["value"]),
    distinctUntilChanged()
).subscribe(console.log);
