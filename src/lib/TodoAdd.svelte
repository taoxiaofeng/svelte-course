<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let list = [];

  // 输入框内容
  let text = " ";

  const add = () => {
    if (text.trim() === "") {
      alert("请输入任务内容");
      return;
    }
    list.push({
      id: list.length + 1,
      text: text.trim(),
      check: false,
      finish: false,
    });
    // 把更新以后的数据传第给父组件
    dispatch("updateTodoList", list);
    // list = [...list];
    text = "";
  };
</script>

<div class="todo-add-area">
  <input class="todo-add-input" type="text" bind:value={text} />
  <button class="todo-add-btn" on:click={add}>添加任务</button>
</div>

<style lang="scss" text="text/scss">
  /* 待办事项统计添加 */
  .todo-add-area {
    display: flex;
    padding: 5px 0;
    .todo-add-input {
      flex: 0;
      min-width: 200px;
    }
    .todo-add-btn {
      flex: 0;
      min-width: 80px;
    }
  }
</style>
