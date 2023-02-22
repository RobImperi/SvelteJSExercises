<script>
	let name  = "roby";
	let count = 0; 

	//let uppercaseName = "" /* la dichiarazione non è necessaria*/

	//label expression: ricalcola il valore di uppercase ogni volta che name cambia ( simile ad un watch/listener)
	$: uppercaseName = name.toUpperCase();
	//anche questa istruazione viene rieseguita ogni volta che cambia name
	$: console.log(console.log(name))
	 
	//la seguente espressione viene valutata se cambia name ma anche se ad esempio si cambia count,
	//infatti cliccando su incrementa contatore si vedrà che il contatore viene incrementato di 2 se il nome è roby
	//ma non verrà scritto nulla in console, infatti le label precedenti dipendono solo da name e non da count
	$: if(name === "roby"){
		count += 1; 
	}

	function onChangeName(){
		//il nome viene cambiato in lower case ma ritrasformato automatcamente in upper case dalla label
		name = name === "roberto" ? "roby" : "roberto";
	}

	function onIncrementCount(){
		count +=1; 
		console.log(count);
	}
</script>

<main>
	<div>Hello {uppercaseName}! - {count}</div>
	<button on:click="{onChangeName}">cambia nome</button>
	<button on:click="{onIncrementCount}">inctrementa contatore</button>
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