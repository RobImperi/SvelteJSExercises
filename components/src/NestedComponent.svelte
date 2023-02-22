<script>
    export let nestedName;
    export let description;
    export let descriptionhtml;
</script>

<div class="container">
    <h2>Nested component</h2>
    <p>{nestedName}</p>
    <p>{description}</p> <!-- il testo html viene renderizzato come testo semplice-->
    <p>{@html descriptionhtml}</p> <!--il testo html viene renderizzato come html in pagina-->
</div>

<style>
    p {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;

    }

    .container {
        border-top: 1px solid black;
    }
</style>