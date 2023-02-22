<script>
	//variabili interne esterne
	export let name;
	let ciaoMondo 	= "Ciao Mondo"
	let age 		= 30;
	let offset 		= 0;

	function incrementebyOne(){
		age+=1;
	}

	function incrementebyOffset(){
		age+=offset;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>{ciaoMondo.toUpperCase()} - I'm internal</h2>

	<div>
		<fieldset>
			<h3>{age}</h3>
			<input type="text">
			<button on:click="{incrementebyOne}" >incrementa di uno</button>
			<button on:click="{incrementebyOffset}">incrementa dell'offset</button>
		</fieldset>
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