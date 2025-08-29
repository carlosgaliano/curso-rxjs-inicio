import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";


const url = 'https://api.github.com/usersXXX?per_page=5'; // qutar XXX

// const fetchPromesa = fetch(url);

const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response;
}

/* fetchPromesa.then(
    manejaErrores
).then(
    resp => resp.json()
).then(
    data => console.log("data ", data)
).catch(
    err => console.warn("Error en usuario ", err)
); */

////

const atraparError = (err: AjaxError) => {
    console.error("error en: ", err.message);
    return of([])
}

ajax(url).pipe(
    // map(resp => resp.response),
    map(({ response }) => (response)),
    catchError(atraparError)
).subscribe(console.log)