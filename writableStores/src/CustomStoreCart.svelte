<script>
    import { onDestroy } from "svelte";
    import  { customCartStore } from "./custom-cart-store.js"

    let cartProducts       = []
    let destroyer = customCartStore.subscribe(
        (storeContent) => {cartProducts = storeContent}
    );    

    //consigliato per evitare memory leak, ad esempio quando un
    //componente può essere chiuso/aperto più volte nel dom
    onDestroy(() => { 
        //rimuove il listener dello store
        destroyer()
    })
   
    function resetCart(){
        customCartStore.set([]);
    }

    function onRemoveHandler(productId){
        customCartStore.removeItem(productId);
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

</style>

<div id="cart-container">   
    
    {#if cartProducts.length > 0}
        {#each cartProducts  as cartItem, i}
            <div id="cart-product">
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
    
    <div id="cart-footer">
        <button class="btn" on:click={resetCart}>reset cart</button>
    </div>
    <hr>
    
</div>
