import {readable} from "svelte/store"

let count = 0;

//set è una funzione fornita da svelte e setta il valore dello store.
// Lo store readable ha la caratteristica di non poter essere modificato
//dall'esterno, ma solo letto
export const timer = readable(0,(set)=>{
    let interval = setInterval(() =>{ count+=1; set(count)} ,1000)

    return () => {
        clearInterval(interval);
        console.log("cleared")
    }
})