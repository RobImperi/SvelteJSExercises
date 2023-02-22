<script>
    export let open             = false;
    export let staticBackdrop   = false;
    export let content          = "";

    /**
     * handler map da utilizzare come proprieta dello slot in modo
     * da espore la funzione interna di chiusura della modale
    */
    let handlersMap = {
        close:closeHandler
    }

    function closeHandler(){
        open = false;
    }


</script>

{#if open}
    {#if staticBackdrop}
        <div id="backdrop"></div>
    {:else}
        <div id="backdrop" on:click="{closeHandler}"></div>
    {/if}

    <div id="modal">
        <div class="close-modal">
            <button class="close-btn" on:click={closeHandler}>X</button>
        </div>
        <span class="header">
            <slot name="header" ></slot>
        </span>
        {#if $$slots.header}
            <hr>
        {/if}
        <slot name="content"></slot>
        {@html content}
        {#if $$slots.footer}
            <hr>
        {/if}
        <!-- 
            slot property: definisce sullo slot una propietà che può essere acceduta
            dall'esterno. Come le proprietà possono essere anche esportati dei valori
        -->
        <slot name="footer" prop={handlersMap}></slot>
    </div>
{/if}

<style>
    #backdrop{
        position: fixed;
        top:0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: rgba(23, 23, 138, 0.8);
        opacity: 80%;
    }

    #modal{
        width: 400px;
        min-height: 200px;
        position: absolute;
        top: 35%;
        left: 35%;
        background-color: rgb(233, 233, 255);
        border-style: solid;
        border-radius: 2rem;
        text-align: center;
        z-index: 999;
    }

    #modal hr{
        width: 80%;
    }

    #modal .close-modal{
        font-size: small;
        font-weight: bold;
    }

    #modal .close-modal .close-btn{
        position: relative;
        top:0;
        right: -45%;
        background-color: transparent;
        border: none;
        font-size: bolder;
        z-index: 999;
    }

    slot{
        padding: 5px;
    }

    .header{
        font-weight: bold;
        font-size: larger;
    }
</style>