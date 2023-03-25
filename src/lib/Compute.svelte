<script lang='ts'>
  let name = '张三';

  // 计算属性
  $: greeting = `你好，${name}`;

  // 普通变量
  let greeting2 = `你好，${name}`;
</script>


<div>
  <input bind:value={name} />
  <p>你好，{name}</p>
  <p>{greeting}</p>
  <p>{greeting2}</p>
</div>

<style>
  div {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style> 