<script>
    import ButtonComponent from "./ButtonComponent.svelte";
import CustomEventButtonComponent from "./CustomEventButtonComponent.svelte";
</script>

<div id="button-container">
    <h2>I'm the button container</h2>
    <div class="button-row">
        <ButtonComponent caption="Multi level Propagation" on:click></ButtonComponent>
        <ButtonComponent caption="One Level Propagation" on:click="{() => alert('I can only stay here')}"></ButtonComponent>
    </div>
    <div class="button-row">
        <CustomEventButtonComponent caption="Save" eventName="custom-save" on:custom-save></CustomEventButtonComponent>
        <CustomEventButtonComponent caption="Delete" eventName="custom-delete" on:custom-delete></CustomEventButtonComponent>
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