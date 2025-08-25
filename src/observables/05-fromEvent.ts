import { fromEvent, Observer } from "rxjs";

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer$: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: e => console.log('Error', e),
    complete: ()=> console.log("Terinado")
}

// src1$.subscribe(observer$);
src1$.subscribe(({x,y}) => console.log(x,y));
src2$.subscribe(env => {
    console.log(env.key);
    
});