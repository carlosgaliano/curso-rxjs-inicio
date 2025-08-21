import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.log('error [obs]: ', error),
    complete: () => console.warn('completo [obs]')
}

const inervalos$ = new Observable<number>(subs => {
    const intevalID = setInterval( ()=> subs.next(Math.random()) ,1000)
}) 