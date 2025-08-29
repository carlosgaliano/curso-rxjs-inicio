import { startWith, timeInterval, timeout } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { timer } from "rxjs";


const loadingDiv = document.createElement("div");
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = "Cargando...";
const body = document.getElementById("body");

ajax.getJSON("https://api.github.com/search/users?q=carlos?delay=6").pipe(
    
    startWith(true),
    
).pipe()
.subscribe(resp => {
    if(resp == true){
        body.append(loadingDiv);
    }else{
        document.querySelector(".loading").remove();
    }
    console.log(resp);
    
});