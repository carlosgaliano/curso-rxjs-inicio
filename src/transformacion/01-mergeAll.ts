import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, tap } from "rxjs/operators";
import { GitUser } from "../interfaces/gitUser.interface";
import { GitUsersRespond } from "../interfaces/gitUsers.interface";


const body = document.getElementById("body");
const textInput = document.createElement("input");
const ordenList = document.createElement("ol");
ordenList.id ="ordenList";

// herlpers
const mostrarUsuario = (usuarios: GitUser[]) => {
    console.log(usuarios);
    ordenList.innerHTML = "";
    for (const user of usuarios) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = user.avatar_url;
        const href = document.createElement("a");
        href.href = user.html_url;
        href.text = "Ver Página";
        href.target = "_blanck"
        
        li.append(img);
        li.append(user.login + " ");
        li.append(href);
        
        console.log(li);
        ordenList.append(li)
        
        
    }
}


body.append(textInput, ordenList);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(e => e.target['value']),
    // tap(console.log),
    map<string, Observable<GitUsersRespond>>(texto => {
        // const texto = e.target["value"];
        // return texto;
        return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`);
    }),
    mergeAll<Observable<GitUsersRespond>>(),
    map<GitUsersRespond, GitUser[]>((e => e.items))
).subscribe(respuesta => {
    // console.log(respuesta[0].html_url)
    mostrarUsuario(respuesta)
});

// https://quicktype.io/