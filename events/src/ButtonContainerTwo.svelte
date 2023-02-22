
<script>
import CustomEventButtonComponent from "./CustomEventButtonComponent.svelte";

export let userText;

</script>


<div id="button-container">
    <h2> I'm button container two</h2>
    <div class="button-row">
        
        <CustomEventButtonComponent caption="Event With Data" eventName="event-with-data" eventData="{userText}" on:event-with-data></CustomEventButtonComponent>
        
    </div>
</div>

<style>
	#button-container{
        border: 1px solid black;
    }

    #button-container .button-row{
        display: block;
    }
</style>