import { of, take, tap } from "rxjs";


const numeros$ = of(1, 2, 3, 4, 5).pipe(
    tap(console.log)
)

numeros$.pipe(
    tap(tab => console.log("Tab ", tab)),
    take(3)
).subscribe({
    next: valor => console.log("Next ", valor),
    complete: () => console.log("--Completado--")
    
    
})