<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let msg = "";

  const sendParent = () => {
    dispatch("sendParent", {
      msg: "子组件传给父组件的数据",
    });
  };
</script>

<div class="box2">
  <!-- 匿名插槽 -->
  <!-- <slot /> -->
  <!-- 具名插槽 -->
  <!-- <slot name="slot1">slot1</slot>
  <slot name="slot2">slot2</slot> -->

  子组件接收的数据：{msg}

  <button on:click={sendParent}>子传父</button>
</div>

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
