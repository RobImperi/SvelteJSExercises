<script>
	import ProductContainer from "./ProductContainer.svelte";
	import Cart from "./Cart.svelte"
	import Modal from "./Modal.svelte";

	export let name;
	let modalOpen;
	let modalContent;

	let products = [
		{
			id			 : "001",
			name		 : "a book title 1",
			category	 : "books",
			price   	 : 10.00,
			isMostWanted : false
		},
		{
			id			 : "002",
			name		 : "a book title 2",
			category	 : "books",
			price   	 : 9.99,
			isMostWanted : false
		},
		{
			id			 : "003",
			name		 : "t-shirt one",
			category	 : "dress",
			price   	 : 50.00,
			isMostWanted : false
		},
		{
			id			 : "004",
			name		 : "a book title 3",
			category	 : "book",
			price   	 : 12.99,
			isMostWanted : false
		},
		{
			id			 : "005",
			name		 : "most wanted jeans",
			category	 : "dress",
			price   	 : 25.50,
			isMostWanted : true
		}

	]

	let cartProducts = [];
	
	function handleAddProduct(event){
		let productId = event.detail;
		let productToAdd = products.find((item)=> {return item.id === productId});
		let existingCartElement = cartProducts.find((item)=> {return item.id === productId});
		if(!existingCartElement){
			cartProducts = [...cartProducts, productToAdd]
			console.log(cartProducts);
		}
		else{
			modalContent = "non è possibile aggiungere lo stesso prodotto"
			modalOpen = true;
		}
	}

	function handleDelete(event){
		var indexToRemove = cartProducts.findIndex((elem)=>{return elem.id == event.detail.itemId})
		console.log("remove element at position: " + indexToRemove);
		if(indexToRemove >= 0){
			cartProducts.splice(indexToRemove, 1);
			cartProducts = cartProducts;
		}
		console.log(cartProducts)
	}

</script>

<main>
	<h1>Welcome to {name} e-shop</h1>
	<div id="product-view">
		<ProductContainer {products} on:add-product="{handleAddProduct}"></ProductContainer>
	</div>
	<div id="cart-view">
		<Cart {cartProducts} on:delete="{handleDelete}"></Cart>
	</div>
	<Modal open="{modalOpen}" content="<b>this content is html binded content</b>">
		<div slot="header">Modal Header</div>
		<div slot=content>
			<p>{modalContent}</p>
			<img src="/images/ico-info.png" alt="immagine">
		</div>
		<div slot="footer" let:prop={handler} >
			<button type="button" on:click="{()=>{handler.close()}}">Chiudi</button>
		</div>
	</Modal>
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

	#product-view{
		display: inline-block;
		padding: 10px;
		width: 80%;
		height: 600px;
		overflow: hidden;
		background-color: rgba(240, 200, 200, 0.8);
	}

	#cart-view{
		display: inline-block;
		padding: 10px;
		height: 600px;
		overflow: hidden;
		background-color: beige;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>