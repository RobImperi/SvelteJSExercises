import { writable } from "svelte/store";

//dichiaro uno store writable e setto ciò che contiene(può essere anche vuoto)
//esporto lo store in modo che possa essere utilizzato nei componenti
const cart = writable(
 []
);

function addItem(cartItem){
    cart.update((cartStore)=>{
        return [...cartStore, cartItem]
    })
}

function removeItem(id){
    cart.update((cartStore)=>{
        return cartStore.filter((item)=>{return item.id != id})
    })
}

function setStore(cartItems){
    cart.set(cartItems);
}

function hasProduct(productId, callback){
    let hasProductResult = false;
    cart.update((storedItems) =>{
        hasProductResult = storedItems.filter(
            (storedItem)=>{return storedItem.id === productId}
        ).length > 0
        return storedItems;    
    });

    callback(hasProductResult)
}

export const customCartStore = {
    subscribe    : cart.subscribe,
    set         : setStore,
    addItem     : addItem,
    removeItem  : removeItem,
    hasProduct  : hasProduct
}

