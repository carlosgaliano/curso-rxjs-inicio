import { fromEvent, merge, combineLatest, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";



const keyup$ = fromEvent<HTMLElement>(document ,"keyup");
const click$ = fromEvent<HTMLElement>(document ,"click");

/* merge(
    keyup$.pipe(
        map(env => env.key)
    ), 
    click$.pipe(
        map(env=> env.target)
    ),
).subscribe(console.log) */

const input = document.createElement("input");
const pass =  document.createElement("input");
input.type = "email";
input.placeholder="xxx@xxx.com";
pass.type = "password";
pass.placeholder="***********";
const body = document.getElementById("body");

body.append(input, pass);

const escuchaEleentos = (elm:HTMLElement)=>{
   return fromEvent(elm, "keyup").pipe(
        map(evn => evn.target["value"])
    )
}

combineLatest([
    escuchaEleentos(input),
    escuchaEleentos(pass)
]
).subscribe(console.log)