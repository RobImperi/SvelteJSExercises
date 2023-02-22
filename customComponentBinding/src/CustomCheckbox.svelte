<script>
    import { onMount } from "svelte";

    export let type;
    export let customValue;

    onMount(()=>{
        if(type){
            switch(type){
                case "single" : customValue = false;
                    break;
                case "group" : customValue = [];
                    break;
            }
        }
        else{
            throw "MISSING VALUE! Cannot initialize - 'type' is missing"
        }
    })

</script>

{#if type === "single"}
    <label for="checkbox-type">
        Check to see result
        <input type="checkbox" bind:checked="{customValue}">
    </label>
{/if}
{#if type && type === "group" && customValue}
    <label for="checkbox-type">
        <span class="color-palette red"></span>
        <input type="checkbox" name="colour-check" value="red" bind:group="{customValue}">
    </label>
    <label for="checkbox-type">
        <span class="color-palette blue"></span>
        <input type="checkbox" name="colour-check" value="blue" bind:group="{customValue}">
    </label>
    <label for="checkbox-type">
        <span class="color-palette green"></span>
        <input type="checkbox" name="colour-check" value="green" bind:group="{customValue}">
    </label>
{/if}


<style>
    .color-palette{
        width: 10px;
        height: 10px;
        display: inline-block;
        border: 1px solid black;
        border-radius: 2px;
    }

    .color-palette.red{
        background-color: red;
    }

    .color-palette.blue{
        background-color: blue;
    }

    .color-palette.green{
        background-color: green;
    }
</style>