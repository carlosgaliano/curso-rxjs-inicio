import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";

const numeros$ = of(1,2,3).pipe(
    // startWith("--ini-"),
    startWith('a', 'b', 'c'),
    // endWith("--end--"),
    endWith('x','y','z')
);

numeros$.subscribe(console.log)