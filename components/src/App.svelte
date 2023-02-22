<script>
	//per poter utilizzare un component è necessario importarlo
	import Nested from "./NestedComponent.svelte"

	let name = "";
	let description = ""; //self-extending variable
	//quando una variabile ha lo stesso nome nel componente padre e nel componente figlio
	//allora è possibile passarla al componente figlio senza usare l'assegnazione(vedi sotto)
	let descriptionhtml = "<h1>hello!</h1>";
</script>

<main>
	<h1> Main Component</h1>
	<div>
		<input type="text" bind:value={name}>
		<br>
		<textarea bind:value={description}></textarea>
		<textarea bind:value={descriptionhtml}></textarea>
		<Nested nestedName="{name}" {description} {descriptionhtml}/>
	</div>
</main>

<style>
	h1 {
		color: red;
		font-size: larger;
	}
</style>