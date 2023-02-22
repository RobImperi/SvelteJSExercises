<script>
    export let goal="?";
    let isQuestionMark = false;

    $: isQuestionMark = goal ? /[?]+/.test(goal) : false;
       
</script>

<div class:red-coloured="{isQuestionMark}">{goal}</div>

<style>
    .red-coloured{
        color: red !important;
        font-size: xx-large;
    }
</style>