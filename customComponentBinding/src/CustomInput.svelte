<script>
    //il componente esport il binding customValue
    export let customValue;

    export function reset(){
        customValue = '';
    }
</script>

<div>
    <!-- importante utilizzare la direttiva bind per creare un binding tra input e variabile che
    verrà esportato dal componente-->
    <input type="text" bind:value="{customValue}">
</div>