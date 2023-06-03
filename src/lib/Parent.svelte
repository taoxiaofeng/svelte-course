<script>
  import { count } from "../store";
  import Child from "./Child.svelte";

  let msg = "";

  let countValue;

  // 读取全局状态的方法
  count.subscribe((value) => {
    countValue = value;
  });
</script>

<div class="box1">
  父组件，接收子组件传过来的数据：{msg}
  <Child
    msg={"父组件传过来的内容"}
    on:sendParent={(e) => {
      console.log(e);
      msg = e.detail.msg;
    }}
  >
    <!-- 这里是放插槽的内容   -->
    <!-- <div slot="slot1">这是插槽1的内容</div>
    <div slot="slot2">这是插槽2的内容</div> -->
  </Child>
  获取到的全局状态的值：{countValue}
  <button
    on:click={() => {
      // count有set和update是类似的，set是直接设置值，update是在原来的值上进行修改
      count.update((value) => {
        return value + 1;
      });
    }}>全局状态值增加</button
  >
  <button
    on:click={() => {
      count.update((value) => {
        return value - 1;
      });
    }}>全局状态值减少</button
  >

  <button
    on:click={() => {
      count.set(999);
    }}>全局状态设置固定值</button
  >
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
