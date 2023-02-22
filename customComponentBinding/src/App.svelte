<script>
	import { bind } from "svelte/internal";
	import CustomCheckbox from "./CustomCheckbox.svelte";
	import CustomInput from "./CustomInput.svelte";
	import CustomRadio from "./CustomRadio.svelte";
	import CustomSelect from "./CustomSelect.svelte";
	import ToggleButton from "./ToggleButton.svelte";

	export let name;

	let bindingType = "text"; 

	let customInputValue = "original"
	let toggleValue = 2;
	let singleChecked;
	let customCheckboxValue;
	let customRadioValue = "yellow";
	let selectColorArray = ["red", "green", "blue", "yellow"]
	let selectColorObjArray = [{id:'001', name:'red'}, {id:'002', name:'blue'}, {id:'003', name:'green'}]
	let customSelectValue;
	let selectType="valueType";
	let elementBind;
	let customComponentBind;

	function referAndLog(){
		console.log(elementBind)		
	}

	function clickReferLogAndReset(){
		console.log(customComponentBind)
		customComponentBind.reset(); //possibile ma sconsigliato, meglio gestire con gli eventi
	}
</script>

<main>
	<h1>{name}</h1>
	<h2>Press a button to try a binding example</h2>
	<div id="control-buttons">
		<button id="btn" on:click={() => bindingType = "text"}> text value binding</button>
		<button id="btn" on:click={() => bindingType = "toggle"}> toggle button value binding</button>
		<button id="btn" on:click={() => bindingType = "checkbox"}> checkbox binding</button>
		<button id="btn" on:click={() => bindingType = "radio"}> radio binding</button>
		<button id="btn" on:click={() => bindingType = "select"}> select binding</button>
		<button id="btn" on:click={() => bindingType = "dom"}> element and component binding</button>
	</div>

	{#if bindingType === "text"}
		<div class="example-container">
			<p>{customInputValue}</p>
			<label for="not-binded-input">
				Not binded	
				<input id="not-binded-input" type="text" value="{customInputValue}">
			</label>
			<label for="binded-external">
				Binded
				<input id="binded-external" type="text" bind:value="{customInputValue}">
			</label>
			<label for="custom-binded">
				Custom binded
				<CustomInput bind:customValue="{customInputValue}"></CustomInput>
			</label>
		</div>
	{/if}
	{#if bindingType === "toggle"}
		<div class="example-container">
			<p>Toggle button example</p>

			<ToggleButton bind:customValue="{toggleValue}"></ToggleButton>
			<p>toggle value is {toggleValue}</p>
		</div>
	{/if}
	{#if bindingType === "checkbox"}
		<div class="example-container">
			<h3>single check binding</h3>
			<p class:not={!singleChecked} class="checked">
				 {#if !singleChecked} not {/if} checked</p>
			<CustomCheckbox type="single" bind:customValue={singleChecked}></CustomCheckbox>
			
			<h3>group check binding</h3>
			<p> 
				Your favourite colours are : 
				{#if customCheckboxValue && Array.isArray(customCheckboxValue)}
					{#each customCheckboxValue as color,i}
						{color}{#if customCheckboxValue.length > 1 && i < customCheckboxValue.length-1},{/if}
					{/each}				
				{/if}
			</p>
			<CustomCheckbox type="group" bind:customValue={customCheckboxValue}></CustomCheckbox>
		</div>
	{/if}
	{#if bindingType === "radio"}
		<p>Your favourite color is : {customRadioValue}</p>
		<div class="example-container">
			<CustomRadio bind:customValue={customRadioValue}></CustomRadio>
		</div>
	{/if}
	{#if bindingType === "select"}
		<p>Selected value is : 
			{#if selectType === "valueType"}
				{customSelectValue}
			{:else} 
				name: {customSelectValue.name}, id: {customSelectValue.id}
			{/if}</p>
		valueType  <input type="radio" name="select-type" value="valueType"  bind:group="{selectType}">
		objectType <input type="radio" name="select-type" value="objectType" bind:group="{selectType}">
		<CustomSelect type="{selectType}"
		 list="{selectType === "valueType" ? selectColorArray : selectColorObjArray}"
		 bind:selected="{customSelectValue}"></CustomSelect>
	{/if}
	{#if bindingType === "dom"}
		
		Type and check console to access dom element and custom component element as objects	
		<label for="dom-input"> dom element </label>	
		<input id="dom-input" type="text" bind:value="{customInputValue}" on:input="{referAndLog}" bind:this="{elementBind}">	
		
		<label for="custom-component-input"> dom element </label>
		<CustomInput id="custom-component-input" bind:customValue="{customInputValue}" bind:this="{customComponentBind}"></CustomInput>	
		<button on:click="{clickReferLogAndReset}">click to refer custom component</button>	

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

	.example-container{
		border: 1px solid #5d5b5b;
	}

	.checked {
		color: green;
	}

	.not.checked{
		color: #ff3e00!important;
	}
</style>