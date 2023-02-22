<script>
	let password;
	let pswList = ["myPass1", "myPass2"];
	const MIN_BOUND = 5;
	const MAX_BOUND = 10;

	function onAddPassword(passwordToAdd) {
		var canAdd =
			typeof passwordToAdd != "undefined" &&
			pswList.indexOf(passwordToAdd) == -1 &&
			MIN_BOUND <= passwordToAdd.length <= MAX_BOUND;
		if (canAdd) {
			pswList = pswList.concat([passwordToAdd]);
			console.log(pswList);
		}
	}

	function onRemovePassword(i){
		pswList = pswList.splice(1, i);
	}

</script>

<main>
	<h1>Assignment</h1>

	<p>Solve these tasks.</p>

	<ol>
		<li>
			Add a password input field and save the user input in a variable.
		</li>
		<li>
			Output "Too short" if the password is shorter than 5 characters and
			"Too long" if it's longer than 10.
		</li>
		<li>
			Output the password in a paragraph tag if it's between these
			boundaries.
		</li>
		<li>Add a button and let the user add the passwords to an array.</li>
		<li>
			Output the array values (= passwords) in a unordered list (ul tag).
		</li>
		<li>Bonus: If a password is clicked, remove it from the list.</li>
	</ol>

	<div id="input-container" class="container">
		<input
			type="password"
			id="password"
			name="password"
			bind:value={password}
		/>
		<button
			class="btn btn-add"
			on:click={onAddPassword.bind(this, password)}>Add Password</button
		>
	</div>
	<div id="result-container" class="container">
		{#if password && password.length < 5}
			<p class="alert">Too Short!</p>
		{:else if password && password.length > 10}
			<p class="alert">Too Long!</p>
		{:else if password}
			<p class="valid">valid</p>
		{/if}
	</div>
	<div id="result-list-container" class="container">
		<h3>password list</h3>
		<ul>
			{#each pswList as passwordItem}
				<li>{passwordItem}</li>
			{/each}
		</ul>

		<h3>improved password list</h3>
		<ul>
			{#each pswList as passwordItem, i (passwordItem)}
				<li on:click={onRemovePassword.bind(this, i)}>{passwordItem}</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	.container {
		display: block;
		min-width: 300px;
	}

	.container .alert {
		color: red;
		font-weight: bold;
	}

	.container .valid {
		color: green;
		font-weight: bold;
	}

	button.btn.btn-add {
		background-color: yellow !important;
		font-weight: bold;
	}
</style>
