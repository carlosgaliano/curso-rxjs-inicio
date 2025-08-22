import { Observable, Observer, of } from "rxjs";

const observer$: Observer<any> = {
    next: valor => console.log("Next ", valor),
    error: e => null,
    complete: ()=> console.log("Termino la secuencia")
}

// const obs$ = of(...[1,2,3,4,5,6],7,8);
const obs$ = of<any>([1,2], {a:1,b:2}, function(){}, true, Promise.resolve(true));

console.log("INICIO");
obs$.subscribe(observer$);
console.log("FIN");
