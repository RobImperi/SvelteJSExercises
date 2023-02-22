<script>
	let text = "default";
	let text2 = "default 2";

	function onCambiaTesto(){
		text = "changed"
	}

	/*viene automaticamente passato l'oggetto event riferito all'elemento*/
	function onInsertText(event){
		text = event.target.value;
	}

	function onCambiaTesto2(){
		text2 = "changed 2";
	}
</script>

<main>
	<fieldset>
		<h1>{text}!</h1>
		<div>
			<!--
				ONE WAY BINDING, il valore dell'input è legato alla variabile testo, cliccando sul pulsante il testo nell'input cambia, 
				ma modificando il testo il valore della variabile non cambia
			-->
			<input type="text" value="{text}">
			<button on:click="{onCambiaTesto}">cambia testo</button> 

			<!--
				in questo caso il testo cambia modificando l'input perchè cambia attraverso la funzione triggerata dal change
			    si tratta sempre di un flusso di dati di tipo one way binding
			-->
			<input type="text" value="{text}" on:keyup="{onInsertText}">
		</div>
	</fieldset>
	<fieldset>
		<h1>{text2}!</h1>
		<div>
			<!--
				TWO WAY BINDING, ogni modifica fatta sull'input si riflette sul modello e viceversa
				utile, tuttavia non sempre consigliabile
			-->
			<input type="text" bind:value="{text2}">
			<button on:click="{onCambiaTesto2}">cambia testo</button>
		</div>
	</fieldset>
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