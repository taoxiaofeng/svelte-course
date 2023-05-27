<script>
  import Child from "./Child.svelte";
</script>

<div class="box1">
  <Child>
    <!-- 这里是放插槽的内容   -->
    <div slot="slot1">这是插槽1的内容</div>
    <div slot="slot2">这是插槽2的内容</div>
  </Child>
</div>

<style lang="scss" type="text/scss">
  .box1 {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;
  }
</style>
