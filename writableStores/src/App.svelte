<script>
	import Cart from "./Cart.svelte";
	import CustomStoreCart from "./CustomStoreCart.svelte";
	import CustomStoreProduct from "./CustomStoreProduct.svelte";
	import Product from "./Product.svelte";
	import {timer} from "./timer-store.js"

	export let name;
	let storeType	  = "writable";
	let timerValue	  = 0;
	let isCartVisible = true;

	let timerUnsubscribe;

	function stopIntervalHandler(){
		if(timerUnsubscribe){
			timerUnsubscribe();
		}
	}

	function startIntervalHandler(){
		timerUnsubscribe = timer.subscribe((i)=>{
			timerValue = i;
			console.log(i);
		})
	}

	function toggleCart(){
		isCartVisible = !isCartVisible;
	}

</script>

<main>
	<h1>{name}</h1>
	<div id="main-button">
		<button class="btn" on:click={()=>{storeType="writable"}}>writable</button>
		<button class="btn" on:click={()=>{storeType="readable"}}>readable</button>
		<button class="btn" on:click={()=>{storeType="custom"}}>custom</button>
	</div>

	{#if storeType === "writable"}
		<div id="button-toggle-container">
			<button class="btn" on:click={toggleCart}>toggle cart</button>
		</div>
		<Product/>
		{#if isCartVisible}
			<Cart/>
		{/if}
	{/if}
	{#if storeType === "readable"}
		<div id="readable-container">
			<button class="btn" on:click={startIntervalHandler} style="position:unset!important;">start interval</button>
			<span class="timer">{timerValue}</span>
			<button class="btn" on:click={stopIntervalHandler} style="position:unset!important;">stop interval</button>
		</div>
	{/if}
	{#if storeType === "custom"}
	    <CustomStoreCart/>
		<CustomStoreProduct/>
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

	#button-toggle-container{
		width: 100%;
		padding: 20px;
		margin: 5px;
		position: relative;
	}

	#main-button button.btn{
		position: unset!important;;
	}

	.btn {
		background-color: yellow;
		font-weight: bold;
		border: 1px solid grey;
		border-radius: 5px;
		position: absolute;
		top: 0;
		right: 60px;
	}

	.btn:hover{
		background-color: rgb(173, 180, 117);
	}

	.timer{
		width: 50px;
		height: 50px;
		padding: 15px;
		background-color: rgb(226, 149, 54);
		text-shadow: 1px gray;
		color: black;
		border-radius: 50px;
		border: 1px solid gray;
	}

	#readable-container{
		margin-top: 10px;
	}
</style>