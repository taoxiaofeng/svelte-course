<script>
  import TodoList from "./TodoList.svelte";
  import TodoTotal from "./TodoTotal.svelte";
  import TodoAdd from "./TodoAdd.svelte";

  // 待办事项列表
  let todoList = [
    { id: 1, text: "预习vue3知识点Cook Islands", check: false, finish: false },
    { id: 2, text: "预习vue3知识点Sint Maarten", check: false, finish: false },
    { id: 3, text: "预习vue3知识点Philippines", check: true, finish: true },
    { id: 4, text: "预习vue3知识点Austria", check: false, finish: false },
    { id: 5, text: "预习vue3知识点Woptedca", check: false, finish: false },
  ];

  // 更新待办事项列表, 使得重新渲染
  const updateTodoList = (val) => {
    console.log(`更新接收到的list -- `, val.detail);
    todoList = [...val.detail];
  };

  // $: console.log(`todoList被修改了 -- `, todoList);
</script>

<div class="todo">
  <!-- 标题区域 -->
  <div class="todo-header">任务列表</div>

  <!-- 列表区域 -->
  <TodoList list={todoList} on:updateTodoList={updateTodoList} />

  <!-- 统计区域 -->
  <TodoTotal list={todoList} on:updateTodoList={updateTodoList} />

  <!-- 添加区域 -->
  <TodoAdd list={todoList} on:updateTodoList={updateTodoList} />
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
  }
</style>
