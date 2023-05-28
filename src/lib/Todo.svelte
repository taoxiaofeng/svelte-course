<script>
  import { each } from "svelte/internal";

  // 输入框内容
  let text = " ";
  // 待办事项列表
  let todoList = [
    { id: 1, text: "预习vue3知识点Cook Islands", check: false },
    { id: 2, text: "预习vue3知识点Sint Maarten", check: true },
    { id: 3, text: "预习vue3知识点Philippines", check: false },
    { id: 4, text: "预习vue3知识点Austria", check: false },
  ];

  const add = () => {
    if (text.trim() === "") {
      alert("请输入任务内容");
      return;
    }
    todoList.push({
      id: todoList.length + 1,
      text: text,
      check: false,
    });
    todoList = [...todoList];
  };
</script>

<div class="todo">
  <div class="todo-header">任务列表</div>
  <div class="todo-list-area">
    <ul class="todo-ul">
      {#each todoList as item, index (item.id)}
        <li class="todo-li">
          <input type="checkbox" checked={item.check} />
          <span>{item.text}</span>
        </li>
      {/each}
    </ul>
  </div>
  <div class="todo-total-text">
    任务总数4; 还有4未完成 [<span class="todo-finish">完成</span>]
  </div>
  <div class="todo-add-area">
    <input class="todo-add-input" type="text" bind:value={text} />
    <button class="todo-add-btn" on:click={add} on:keydown={add}>添加任务</button>
  </div>
</div>

<style lang="scss" type="text/scss">
  .todo {
    /* 待办事项头 */
    width: 350px;
    min-height: 300px;
    padding: 16px;
    background: #e6e5e5;
    border: 1px solid #ccc;
    /* 居中 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .todo-header {
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 10px;
    }
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
    }
    /* 待办事项统计信息 */
    .todo-total-text {
      padding: 10px 0px;
    }
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
  }
</style>
