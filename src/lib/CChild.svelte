<script>
  import { createEventDispatcher, getContext } from "svelte";

  const context = getContext("myKey");

  console.log(`content -- `, context);
</script>

<div class="box2">子盒子 {context.msg}</div>

<style lang="scss" type="text/scss">
  .box2 {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
</style>
