<script>
    import { createEventDispatcher } from "svelte";

    export let caption;
    export let eventName;
    export let eventData;

    let dispatchEvent = createEventDispatcher();

    function dispatchHandle(){
        console.log("eventName : "+eventName)
        console.log("eventData : "+eventData)
        if(typeof eventData != 'undefined'){
            dispatchEvent(eventName, eventData);
        }
        else{
            dispatchEvent(eventName);
        }
        
    }
</script>

<button id="custom-event-button" on:click="{dispatchHandle}">{caption}</button>

