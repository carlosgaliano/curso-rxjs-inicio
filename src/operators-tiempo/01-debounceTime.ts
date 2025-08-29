import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(
    debounceTime(3000)
)//.subscribe(console.log);

const body = document.getElementById("body");

const input = document.createElement("input");
body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$.pipe(
    // target.value
    debounceTime(1000),
    map<KeyboardEvent, any>(e => e.target["value"]),
    distinctUntilChanged()
).subscribe(console.log);
