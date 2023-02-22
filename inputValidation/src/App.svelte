<script>
	import Form from "./Form.svelte";
	import customValidationInstance from "./customValidation";
	
	export let name;
	let customValidationForm;

	function validate(event){
		customValidationInstance.validate(event.detail.formId, event.detail.validationCallback);
	}
	
</script>

<main>
	<h1>{name}!</h1>
	<div id="custom-validation">
		<Form bind:form={customValidationForm} on:validate-form={validate}></Form>
	</div>
	<div id="external-validation"></div>
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