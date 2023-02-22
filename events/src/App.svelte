<script>
import ButtonContainer from "./ButtonContainer.svelte";
import ButtonContainerTwo from "./ButtonContainerTwo.svelte";

	let resultText 			= "Default Text";
	let userText 			= "";
	let showToggle		   	= false;

	function changeText(){
		resultText = userText;
	}

	function changeTextByEvent(event){
		console.log(event);
		//detail è la proprietà dove vengono incapsulati i dati del custom event
		resultText = event.detail;
	}
 
</script>

<main>
	<h1>{resultText}</h1>
	<div>
		<input id="input-text" type="text" placeholder="Insert Text Here" bind:value="{userText}">
		<label>
			<input id="toggle-check" type="checkbox" on:change="{() => {showToggle = !showToggle;}}">
			Toggle Container
		</label>
	</div>

	{#if !showToggle}
		<ButtonContainer on:click="{changeText}"  on:custom-save="{() =>alert('You just saved it')}" on:custom-delete="{() => alert('You just deleted it')}"></ButtonContainer>
	{:else}
		<ButtonContainerTwo userText="{userText}" on:event-with-data="{changeTextByEvent}"></ButtonContainerTwo>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}


</style>