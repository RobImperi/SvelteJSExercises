<script>
import  { customCartStore } from "./custom-cart-store.js"


    let products = [
        {
            id:'001',
            name: "product name 1",
            description: "this is a product 1"
        },
        {
            id:'002',
            name: "product name 2",
            description: "this is a product 1"
        },
        {
            id:'003',
            name: "product name 3",
            description: "this is a product 1"
        },
        {
            id:'004',
            name: "product name 4",
            description: "this is a product 1"
        }
    ]
    
    function onAddHandler(productId){
        let filteredItems = products.filter((product) => { return product.id == productId})
        if(filteredItems.length > 0){
            customCartStore.hasProduct(productId, function(hasProduct){
                if(hasProduct){
                    alert("cannot insert")
                }
                else{
                    customCartStore.addItem(filteredItems[0])
                } 
            })
        }
    }
    

</script>

<style>
    #product-container{
        padding: 10px;
        /*display: inline-block;*/
        max-width: 80%;
        float: left;
    }

    #product-item{
        /*display: inline-block;*/
        float   :left;
        width   : 300px;
        padding : 5px;
        border  : 1px solid grey;
        border-radius: 5px;
        margin  : 10px;
        text-align: left;
    }

    #product-item .product-description{
        margin: 2px;
        font-size: smaller;
        font-style: oblique;
    }

    .btn-container{
        width: 100%;
        margin-top: 15px;
    }

    .btn-container button.product-add{
        background-color: yellow;
        color: black;
        border: 1px solid grey;
        border-radius: 5px;
        font-weight: bold;
        float: right;
    }

    .btn-container button.product-add:hover{
        background-color: rgb(173, 180, 117);
    }

</style>

<div id="product-container">
    {#each products as productItem, i}
        <div id="product-item">
            <label for="">id:<span id="item-id{i}">{productItem.id}</span></label>
            <label for="">name:<span id="item-name{i}">{productItem.name}</span></label>
            <span class="product-description">
                {productItem.description}
            </span>
            <div class="btn-container">
                <button class="product-add" on:click={() => onAddHandler(productItem.id)}>add to cart</button>
            </div>
        </div>        
    {/each}
</div>