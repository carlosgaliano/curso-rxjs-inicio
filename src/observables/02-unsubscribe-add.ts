import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.log('error [obs]: ', error),
    complete: () => console.warn('completo [obs]')
}

const intervalos$ = new Observable<number>(sub => {
    let interval = setInterval(() => {
        sub.next(num++);
        console.log(num);
    }, 1000);

    setTimeout(() => {
           sub.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log("Intervalo Destruido");
        
    }
});

let num = 1;
// let subs = intervalos$.subscribe(num => console.log('Num:', num));
let subs1 = intervalos$.subscribe(observer);
let subs2 = intervalos$.subscribe(observer);
let subs3 = intervalos$.subscribe(observer);

subs1.add(subs2.add(subs3));

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log("Timeout Completado");


}, 5000);