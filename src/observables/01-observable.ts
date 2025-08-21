
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.log('error [obs]: ', error),
    complete: () => console.warn('completo [obs]')
}

const obs$ = new Observable(susb => {
    susb.next("Hola");
    susb.next("Mundo");

    const a = undefined;
    a.nombre = "Carlos"

    susb.complete();
});
/* suscripcion.subscribe({
    next: (data)=>{
        console.log(data)
    }
}) */

/* suscripcion.subscribe(resp => {
    console.log(resp)
}) */

/* obs$.subscribe({
    next: valor => console.log('next', valor),
    error: error => console.log('error', error),
    complete: () => console.info('Completado')
}); */

obs$.subscribe(observer)