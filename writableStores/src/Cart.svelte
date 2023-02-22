<script>
    import { onDestroy } from "svelte";
    import  { cartStore } from "./cart-store.js"
    import {fade, fly} from "svelte/transition"

    let isAutoSubscription = false;
    let cartProducts       = []
    let destroyer = cartStore.subscribe(
        (storeContent) => {cartProducts = storeContent}
    );    

    //consigliato per evitare memory leak, ad esempio quando un
    //componente può essere chiuso/aperto più volte nel dom
    onDestroy(() => { 
        //rimuove il listener dello store
        destroyer()
    })

    /*let cartProducts = [
        {
            id:'001',
            name: "product name 1",
            description: "this is a product 1"
        },
        {
            id:'002',
            name: "product name 2",
            description: "this is a product 1"
        },
    ]*/

    function resetCart(){
        cartStore.set([]);
    }

    function onRemoveHandler(productId){
        cartStore.update((storedItems)=>{
            if(!isAutoSubscription){
                //metodo macchinoso
                let indexToRemove = storedItems.findIndex((storedItem)=>{return storedItem.id == productId})
                storedItems.splice(indexToRemove,1);
                return storedItems;
            }
            else{
                //più semplice
                return $cartStore.filter((item)=>item.id != productId);
            }
        })
    }

</script>

<style>

    #cart-container {
        display: inline-block;
        max-width: 30%;
    }

    #cart-product{
        padding: 10px;
        border-bottom: 1px solid grey;
        max-width: 200px;
    }

    #cart-product .btn-remove{
        margin-left: 5px;
    }

    #cart-footer button.btn{
        background-color: yellow;
        color: black;
        border: 1px solid grey;
        border-radius: 5px;
        font-weight: bold;
        float: none;
    }

    #cart-footer {
        padding: 10px 5px;
        padding-top: 15px;
        
    }

    #cart-footer button.btn:hover{
        background-color: rgb(173, 180, 117);
    }

    .note{
        max-width: 200px;
        font-size: smaller;
        font-style: oblique;
    }
</style>

<div id="cart-container">
    
    {#if !isAutoSubscription}
        {#if cartProducts.length > 0}
            {#each cartProducts  as cartItem, i}
                <div id="cart-product" transition:fly>
                    <b>{cartItem.name}</b><a href class="btn-remove" on:click|preventDefault={() => {
                        onRemoveHandler(cartItem.id);
                    }}>remove</a>
                </div>
            {/each}
        {:else}
                <div style="padding: 10px">
                    <b style="color:red;"> empty cart!</b>    
                </div>
        {/if}
    {:else}
        <p class="note">in questo caso il carrello autoinclude lo store, ovvero il template utilizza lo store stesso come dato da ciclare.
            si usa la notazione $ per indicare lo store nel template.
        </p>
        {#if $cartStore.length > 0}
            {#each $cartStore as  cartItem, i}
                <div id="cart-product" transition:fade>
                    <b>{cartItem.name}</b><a href class="btn-remove" on:click|preventDefault={() => {
                        onRemoveHandler(cartItem.id);
                    }}>remove</a>
                </div>
            {/each}
        {:else}
            <div style="padding: 10px">
                <b style="color:red;"> empty cart!</b>    
            </div>
        {/if}
        
    {/if}

    <div id="cart-footer">
        <button class="btn" on:click={resetCart}>reset cart</button>
    </div>
    <hr>
    <label for="auto-sub-check">autosubscription cart</label>
    <input type="checkbox" bind:checked={isAutoSubscription}>
</div>
