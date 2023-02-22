<script>
	 let number = 0;
	 let text = "Click Button and generate random  number";
	 let isEven;

	 function onclickButton(){
		 number = Math.floor(Math.random()*100);
		 //computeIsEven(number);
	 }

	 function computeIsEven(number){
		 isEven = number %2 == 0;
		 text = isEven ? " is EVEN" : " is ODD";
		 return isEven;
	 	}

	 $: isOdd = !computeIsEven(number);
</script>

<main>
	<button on:click="{onclickButton}">Click here</button>
	<p><label for class:even="{computeIsEven(number)}" class:odd="{isOdd}">{number}</label>{text}</p>	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	label {
		font: bold;
		font-size: xx-large;
	}
	
	.even {
		color: black;
	}

	.odd {
		color: red;
	}

	button{
		border-radius: 5%;
		border: 1px solid black;
		background-color: red;
	}

</style>