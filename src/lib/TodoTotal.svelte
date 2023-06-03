<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let list = [];

  const onHandleFinish = (e) => {
    list.forEach((item) => {
      if (item.check) {
        item.finish = true;
      }
    });
    // 把更新以后的数据传第给父组件
    dispatch("updateTodoList", list);
    // list = [...list];
  };

  $: console.log(`list -- `, list);
  // 未完成的任务数量
  $: noFinish = list.filter((item) => {
    return !item.finish;
  }).length;
</script>

<div class="todo-total-text">
  任务总数{list.length}; 还有{noFinish}} 项未完成 [<span
    class="todo-finish"
    on:click={onHandleFinish}
    on:keydown={() => {}}>完成</span
  >]
</div>

<style lang="scss" type="text/css">
  /* 待办事项统计信息 */
  .todo-total-text {
    padding: 10px 0px;

    .todo-finish {
      color: #1890ff;
      cursor: pointer;
    }
  }
</style>
