<script>
    import { createEventDispatcher } from "svelte";
    import EventDispatcher from "./EventDispatcher.js";

    export let id;
    export let name;
    export let category;
    export let price;
    export let isMostWanted = false; // caso default per evitare warning, nel caso la proprietà non sia definita

    let dispatch = createEventDispatcher();    
    

    function handleAdd(){
        //EventDispatcher.instance(createEventDispatcher).dispatchEvent('add-product', id);
        dispatch("add-product", id);
    }

</script>

<div id="produc_{id}" class="product-item" class:most-wanted = {isMostWanted}>
    <div class="prop product-name">{name}</div>
    <div class="prop product-category">{category}</div>
    <div class="prop product-price">$ {price}</div>
    <div class="btn-container">
        <button class="btn" on:click="{handleAdd}">Add To Cart</button>
    </div>
</div>

<style>
  .product-item{
    display: inline-block;
    width: 300px;
    margin: 5px;
    padding: 5px;
    border: 0.5px solid grey;
  }

  .product-item .prop{
    display: block;
    padding: 1px;
  }

  .product-item .product-name {
    font-size: larger;
    font-weight: bold;
  }

  .product-item.most-wanted {
    border: 2px solid orange;
  }

  .product-item .btn-container{
    padding: 2px;
    float: right;
  }

  .product-item .btn-container .btn{
    font-weight: bold;
  }

</style>