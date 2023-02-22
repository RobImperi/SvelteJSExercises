<script>
import CartItem from "./CartItem.svelte";



export let cartProducts;

</script>

<div class="cart-item-list">
    <h2>your cart</h2>
    <hr>
    {#each cartProducts as item, i (item.id)}
        <CartItem {...item} on:delete></CartItem>
        <!--{#if cartProducts.length > 0}
            <hr>
        {/if}-->
    {/each}
</div>

<style>
    .cart-item-list{
       padding: 5px;
    }

    .cart-item-list hr{
        width: 80%;
    }

</style>