<script>
    export let type;
    export let list;
    export let selected; 

</script>

<div>
    {#if type && type==="valueType"}
        <select bind:value="{selected}">
            <option value="">Select item</option>
            {#each list as item}
                <option value="{item}">{item}</option>    
            {/each}
        </select>
    {/if}
    {#if type && type==="objectType"}
        <select bind:value="{selected}">
            <option value="">Select item</option>
            {#each list as item}
                <option value="{item}">{item.name}</option>    
            {/each}
        </select>
    {/if}

</div>