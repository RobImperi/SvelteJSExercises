<script>
	export let name
	let val = "";

	function setValue(event){
		val = event.target.value;
	}

</script>

<main>
	<h1>{name}!</h1>
	<p>see here result : {val}</p>
	<div>
		Two way binding with a function
		<input type="text" value="{val}" on:keyup="{setValue}"> <!--è possibile usare anche on:input -->
	</div>
	<div>
		Two way binding with bind: directive
		<input type="text" bind:value={val}>
	</div>

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