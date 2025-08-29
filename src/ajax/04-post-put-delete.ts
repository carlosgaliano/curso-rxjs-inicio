import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

/* ajax.put(url, {
    id: 1,
    nombre: 'Carlos'
}, {
    'mi-token': 'ABC123',
}).subscribe(console.log) */

ajax({
    url: url,
    method: 'DELETE',
    headers: {
        'mi-toke': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Carlos'
    }
}).subscribe(console.log)