<script>
  import TextComponent from "./TextComponent.svelte";
  let goal;
</script>

<div class="container">
  <label for="goal">Enter a goal</label>
  <input id="goal" name="goal" type="text" bind:value="{goal}">
</div>
<div>
  <TextComponent {goal}></TextComponent>
</div>

<style></style>