import { writable } from "svelte/store";

//dichiaro uno store writable e setto ciò che contiene(può essere anche vuoto)
//esporto lo store in modo che possa essere utilizzato nei componenti
export const cartStore = writable(
    [
        {
            id:'001',
            name: "product name 1",
            description: "this is a product 1"
        }
        
    ]
);