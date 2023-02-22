<script>
    import { createEventDispatcher } from "svelte";
    import EventDispatcher from "./EventDispatcher.js";
    
    export let name;
    export let id;

    let dispatch = createEventDispatcher(); //EventDispatcher.instance(createEventDispatcher);
</script>

<div class="cart-item">
    <p>{name}</p>
    <input type="checkbox" on:change="{() => dispatch('delete', {itemId:id})}">
</div>