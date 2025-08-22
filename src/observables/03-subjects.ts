import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.log('error [obs]: ', error),
    complete: () => console.warn('completo [obs]')
}

const intervalos$ = new Observable<number>(subs => {
    
    const intervalID = setInterval(() => {
        subs.next(Math.random());
        // console.log("---no se detiene")
    }, 1000);

    return () => {
        clearInterval(intervalID);
        console.log("Intervalo destruido");
    }
});


const subject$ = new Subject();
const intervalosSubjects$ = intervalos$.subscribe(subject$);

// let subs1 = intervalos$.subscribe(subs => console.log("subs1", subs));
// let subs2 = intervalos$.subscribe(subs => console.log("subs2", subs));

// let subs1 = subject$.subscribe(subs => console.log("subs1", subs));
// let subs2 = subject$.subscribe(subs => console.log("subs2", subs));

let subs1 = subject$.subscribe(observer);
let subs2 = subject$.subscribe(observer);



setTimeout(() => {
    subject$.next(19);
    subject$.complete();
    intervalosSubjects$.unsubscribe();
}, 3500);



