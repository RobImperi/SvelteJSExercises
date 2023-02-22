<script>
    export let caption;
</script>

<button id="event-button" on:click>{caption}</button>

<style>
    #event-button{
        color: rgb(8, 8, 8);
        background-color: rgb(159, 85, 85);
        border-radius: 10px;
    }
</style>