<script lang="ts">
  let flag = true;
</script>


<!-- svelte的语法更像模版 -->
{#if flag}
  <div>flag为true</div>
{:else}
  <div>flag为false</div>
{/if}


<style>
  div {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>                                                                           