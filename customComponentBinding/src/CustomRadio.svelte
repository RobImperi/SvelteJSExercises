<script>
    export let customValue;


</script>


<label for="radio-type">
    <span class="color-palette red"></span>
    <input type="radio" name="colour-check" value="red" bind:group="{customValue}">
</label>
<label for="radio-type">
    <span class="color-palette blue"></span>
    <input type="radio" name="colour-check" value="blue" bind:group="{customValue}">
</label>
<label for="radio-type">
    <span class="color-palette green"></span>
    <input type="radio" name="colour-check" value="green" bind:group="{customValue}">
</label>
<label for="radio-type">
    <span class="color-palette yellow"></span>
    <input type="radio" name="colour-check" value="yellow" bind:group="{customValue}">
</label>


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

    .color-palette.yellow{
        background-color: yellow;
    }
</style>