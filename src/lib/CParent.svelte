<script>
  import CChild from "./CChild.svelte";
  import { setContext } from "svelte";

  setContext("myKey", {
    msg: "这是上下文信息123",
  });

</script>

<div class="box1">
  父盒子
  <CChild></CChild>
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
