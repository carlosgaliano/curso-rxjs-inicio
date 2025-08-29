import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";




const gitUrl = 'https://api.github.com/users';
const gitUser ='carlosgaliano';

forkJoin({
    usuario: ajax.getJSON(`${gitUrl}/${gitUser}`),   
    repos: ajax.getJSON(`${gitUrl}/${gitUser}/reposXXXXX`).pipe(
        catchError(err => of([])) // se capta el error y deja pasar los otros
    ),   // sii hay errores
    gist: ajax.getJSON(`${gitUrl}/${gitUser}/gists`),   
}).pipe(
    catchError(err => of(err.message))
).subscribe(console.log)

