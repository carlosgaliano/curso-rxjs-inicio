import { asyncScheduler } from "rxjs";

interface iNombres {
    nombre: string,
    apellido: string
}

const saludar = () => console.log("Hola Mundo");
const saludar2 = (nombre: string) => console.log(`Hola ${nombre}`);
const saludar3 = (valores: iNombres) => console.log(`Hola ${valores.nombre} ${valores.apellido}`);

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, "Carlos");
asyncScheduler.schedule(saludar3, 2000, { nombre: "Carlos", apellido: "Galiano" });



const schedule$ = asyncScheduler.schedule(function (state) {
    console.log(state);
    this.schedule(state + 1, 1000);

}, 2000, 0);

// setTimeout(() => {
//     schedule$.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => schedule$.unsubscribe(), 6000)
