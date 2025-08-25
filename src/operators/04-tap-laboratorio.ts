import { fromEvent, map, range, reduce, tap, } from "rxjs";

var lipsum = require('simple-lipsum');

const div = document.createElement("div");
div.id = "bloqueParrafo";

const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");
document.body.prepend(progressBar);

function texto(parrafo: string) {
    // console.log(parrafo);
    document.body.appendChild(<HTMLDivElement>div);
    let div_ = document.getElementById("bloqueParrafo") as HTMLDivElement;
    div_.innerHTML = parrafo;
}

range(20).pipe(
    map(() => {

        let bloque = lipsum.getParagraph(2, 2);
        return `<p style="text-align: left">${bloque}</p><br>`
    }),
    reduce((acc, one) => acc + one)
).subscribe(x => texto(x));

const calcularPorcentajeBarra = (e: any) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = e.target.documentElement;
    // console.log({scrollTop, scrollHeight, clientHeight})
    // console.log(scrollTop / (scrollHeight - clientHeight) * 100)
    return (scrollTop / (scrollHeight - clientHeight) * 100)
}

const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progres$ = scroll$.pipe(
    map( calcularPorcentajeBarra),
    tap(console.log)
);

progres$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})

