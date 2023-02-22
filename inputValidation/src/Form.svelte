<script>
    import { createEventDispatcher }    from "svelte"
    import { onMount }                  from "svelte";
    import customValidationInstance     from "./customValidation.js"
  
    const FORM_ID   = "001";
    export let form = {};
    let dispatch    = createEventDispatcher()

    onMount(() =>{
        //per ogni form viene creata una mappa nel singleton
        form = customValidationInstance.getValidationForm(FORM_ID);
    })

    function refresh(results){
        form.results = results;
    }

    function onSubmitHandler(){
        dispatch('validate-form', {formId:FORM_ID, validationCallback:refresh});
    }

</script>

<form on:submit|preventDefault novalidate>
    <label for="custome-message">your message
    <input type="text"  id="custom-message"
     class:valid={form.results && form.results.messageValid}
     class:invalid={form.results && !form.results.messageValid}
     bind:value="{form.message}">
    </label>
    <label for="email">your email
    <input type="email" id="email"
     class:valid={form.results && form.results.emailValid}
     class:invalid={form.results && !form.results.emailValid}
     bind:value="{form.email}">
    </label>
    <button type="submit" on:click={onSubmitHandler}>submit</button>
</form>


<style>
    .valid{
        border: 1px solid green;
    }

    .invalid{
        border: 1px solid red;
    }
</style>