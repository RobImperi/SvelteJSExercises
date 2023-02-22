<script>
import ProductItem from "./ProductItem.svelte";

    export let products;
</script>

<div class="product-list">
    <h2>your products</h2>
    {#each products as product, i}
    <!-- uso dello spread operator per assegnare automaticamente le proprietà all'interno del componente-->
        <ProductItem {...product} on:add-product></ProductItem>
    {/each}
</div>

<style>
    .product-list{
        margin-left: 10px;
        text-align: justify;
    }
</style>