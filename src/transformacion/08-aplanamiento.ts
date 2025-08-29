import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, exhaustMap, map, mergeMap, switchMap, tap } from "rxjs/operators";

/// helper
const peticionHttpLogiin = (userPass) => {
    return ajax.post("https://reqres.in/api/login?delay=1", userPass, {
        "x-api-key": "reqres-free-v1",
    }).pipe(
        map(({ response }) => response["token"]),
        catchError(err => of('xxx'))
    )

}

const body = document.getElementById("body");

const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// configuraciones https://reqres.in/
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';
inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'cityslicka';
submitBtn.innerText = "Ingresar";

form.append(inputEmail, inputPass, submitBtn);
body.append(form);

const formSubmit$ = fromEvent<Event>(form, "submit").pipe(
    tap(e => e.preventDefault()),
    map(e => ({
        email: e.target[0].value,
        password: e.target[1].value,
    })),
    // mergeMap(peticionHttpLogiin),
    // switchMap(peticionHttpLogiin),
    exhaustMap(peticionHttpLogiin)
);

formSubmit$.subscribe(token => {
    console.log(token);

})