<script>
// @ts-nocheck

  let name = '张三';  // 响应式数据

  let yes = false;

  let books = [];

  let selected = 1;
</script>

<input type="text" bind:value={name}>
<h1>您好，{name}</h1>

<br/>

<input type="checkbox" bind:checked={yes}>{yes}

<br>

复选框
<input type="checkbox" bind:group={books} name="books" value="选项1">
<input type="checkbox" bind:group={books} name="books" value="选项2">
<input type="checkbox" bind:group={books} name="books" value="选项3">

<br>

单选框
<input type="radio" bind:group={books} name="books" value="选项1">
<input type="radio" bind:group={books} name="books" value="选项2">
<input type="radio" bind:group={books} name="books" value="选项3">

<br>
选择
<br>
<select bind:value={selected} on:click={(e) => {
  console.log(e.target.value);
  selected = e.target.value;
}}>
  <option value="1">选项1</option>
  <option value="2">选项2</option>
  <option value="3">选项3</option>
</select>
选择的选项是：{selected}