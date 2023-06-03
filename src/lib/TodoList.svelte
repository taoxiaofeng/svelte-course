<script>
  // @ts-nocheck
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let list = [];
  // 编辑的索引
  let editId = -1;

  $: console.log(`editId -- `, editId);
  $: console.log(`list -- `, list);
</script>

<div class="todo-list-area">
  <ul class="todo-ul">
    {#each list as item, index (item.id)}
      <li class={["todo-li", item.finish ? "todo-li-finish" : null].join(" ")}>
        <!-- {#if item.finish}
          <input type="checkbox" checked={item.check} disabled />
        {:else}
          <input type="checkbox" checked={item.check} />
        {/if} -->
        <!-- <label> -->
        <input
          type="checkbox"
          checked={item.check}
          disabled={item.finish}
          on:change={() => {
            item.check = !item.check;

            // 把更新以后的数据传第给父组件
            dispatch("updateTodoList", list);
            // 通过浅拷贝修改响应式数据的值
            // list = [...list];
          }}
        />
        <!-- 当当前的id等于“被编辑的ID”时，并且当前项未完成，则进入编辑状态 -->
        {#if item.id === editId && !item.finish}
          <!-- 显示输入框 -->
          <input
            type="text"
            bind:value={item.text}
            on:change={(e) => {
              // 文本修改
              item.text = e.target.value;

              dispatch("updateTodoList", list);
              // list = [...list];
            }}
            on:blur={() => {
              // 失去焦点(鼠标点击其他地方的空白处)
              // 失去焦点的时候判断是否为空，如果为空则删除当前项
              console.log(`item.text -- `, item.text);
              if (item.text.trim() === "") {
                list = list.filter((todo) => {
                  return todo.id !== item.id;
                });
              }

              // 退出编辑状态
              editId = -1;
            }}
            on:keydown={(e) => {
              if (e.key === "Enter") {
                editId = -1;
              }
            }}
          />
        {:else}
          <span on:dblclick={() => (editId = item.id)}>{item.text}</span>
        {/if}
        <!-- </label>  -->
      </li>
    {/each}
  </ul>
</div>

<style lang="scss" type="text/scss">
  /* 待办事项列表 */
  .todo-list-area {
    .todo-ul {
      padding: 0;
      margin: 0;
    }
    .todo-li {
      list-style: none;
      border-bottom: 1px solid #ccc;
    }

    .todo-li-finish {
      text-decoration: line-through;
    }
  }
</style>
