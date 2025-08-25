import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";

/* range(1,5).pipe(
    map<number, string>(valor => {
        return (valor * 10).toString();
    })
).subscribe(console.log); */

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

keyup$.pipe(map(e => e.key)).subscribe(key => console.log('map', key));

// pluck deprecated
keyup$.pipe(map( e => e.target["baseURI"] )).subscribe(baseURI => console.log('baseURI', baseURI));

// mapTo deprecated
keyup$.pipe(map(()=> "Tecla Presionada")).subscribe(elm => console.log(elm));

