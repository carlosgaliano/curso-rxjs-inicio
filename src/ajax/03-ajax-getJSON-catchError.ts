import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://httpbin.org/delayX/1'; // se le coloca una X para el error


const manejoError = (response:AjaxError)=>{
    console.warn("Error: ", response.message);
    return of({
        ok: false,
        usuarios: []
    })
};

/* const obs1$ = ajax.getJSON(url).pipe(
    catchError(manejoError),
);
const obs2$ = ajax(url).pipe(
    catchError(manejoError),
); */

const obs1$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs1$.subscribe(data => console.log("getJSON: ", data));
// obs2$.subscribe(data => console.log("ajax: ", data));

obs1$.pipe(
    catchError(manejoError),
).subscribe({
    next: valor => console.log("next:", valor),
    error: err => console.warn("Error", err),
    complete: ()=> console.log("--completado--")
});