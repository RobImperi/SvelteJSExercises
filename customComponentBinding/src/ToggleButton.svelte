<script>

    export let customValue;

</script>

<button disabled="{customValue == 1}" on:click="{() => customValue = 1}" >Set 1</button>
<button disabled="{customValue == 2}" on:click="{() => customValue = 2}" >Set 2</button>
